import mongoose from 'mongoose'
import express from 'express'
import path from 'path'
import config from './../config/config'
import template from './../template'
/** dev mode only*/
import devBundle from './devBundle'
import updatePlaylistDB from './api/updatePlaylistsDB'

const app = express() //Express App -- to be used to build the rest of the Node server application
/** dev mode only*/
devBundle.compile(app) //use middleware and hot-reloader

const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR,'dist')))
app.get('/', (req, res)=>{res.status(200).send(template()); console.log("connected to route /")})
app.get('/upload', (req, res)=>{res.status(200).send(template())})

//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

app.get('/api/add-playlist/:url', async (req, res)=>{
    let url = req.params.url;
    var success = await updatePlaylistDB(url);
    if(success){
        res.status(200).json({ok:true});
    }
    else{
        res.status(404).json({ok:false});
    }
})
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/yt-playlists-organiser'
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
const dbConnection = mongoose.connection;
dbConnection.on('error', console.error.bind(console, 'connection error:'));
dbConnection.once('open',()=>{console.log("Connected to DB!")});
const playlist = require('./models/playlist.model');

app.get('/api/playlists', async (req,res) => {
    await playlist.find().then(playlists => res.json(playlists))
    .catch(err => res.status(400).json('Error: '+err))
    //const pls = await getPlaylists();
    //console.log(pls)

    //connect to database and fetch all playlists
    //send back all playlists
    //res.send(pls)
})
app.get('/playlist/:ID', (req,res)=>{res.send(template())})
app.get('/api/playlist/:ID', async (req,res)=>{
    //connect to database and grab playlist with given id
    //return it
    playlist.find({_id:req.params.ID}).then(playlists => res.json(playlists))
    .catch(err => res.status(400).json('Error: '+err))
})
app.get('/playlists',(req,res)=>{
    res.status(200).send(template());
})
let port = process.env.PORT || 3000
app.listen(port, (err)=>{
    if(err){
        console.log(err)
    }
    console.info('Server started on port %s.', port)
})


// //-------------------Connect to MongoDB
// mongoose.Promise = global.Promise
// mongoose.connect(config.mongoUri, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// })
// mongoose.connection.on('error', () => {
//     throw new Error(`unable to connect to database: ${mongoUri}`)
// })
