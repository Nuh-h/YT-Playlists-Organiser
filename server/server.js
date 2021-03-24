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

//frontend routes
app.get('/', function callback(req, res){
     res.status(200).send(template())
})
app.get('/upload',
 function callback(req, res){
    res.status(200).send(template())
})
app.get('/create',
 function callback(req, res){
    res.status(200).send(template())
})
app.get('/playlists', function callback(req,res){
    res.send(template())
})
app.get('/playlist/:ID', function callback(req,res){
    res.send(template())
})

//backend routes
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

//preparation for connecting to the database
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/yt-playlists-organiser'
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',function callback(){
    console.log("Connected to DB!")
});
const playlist = require('./models/playlist.model');

app.get('/api/playlists', async function callback(req,res){
    //get all playlists using builtin find method of mongoose/mongoDB
    await playlist.find()
    .then(playlists => res.json(playlists))
    .catch(err => res.status(400).json('Error: '+err))
})

app.get('/api/playlist/:ID', async function callback(req,res){
    //connect to database and grab playlist with given id
    playlist.find({_id:req.params.ID})
    .then(thePlaylist => res.json(thePlaylist)) //IDs are unique so there will only be one playlist
    .catch(err => res.status(400).json('Error: '+err))
})


//START SERVER

let port = process.env.PORT || 3000
app.listen(port, (err)=>{
    if(err){
        console.log(err)
    }
    console.info('Server started on port %s.', port)
})