//add MongoDb to Node

const playlistModel = require('./models/playlist.model');

//import { MongoClient } from 'mongodb'
//var MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/yt-playlists-organiser'

// MongoClient.connect(url, { useUnifiedTopology: true }, (err, db)=>{
//     if(err) throw err;
//     console.log("------Database created!------");
    
//     db.close();
// });

//initialising DB yt:po
// MongoClient.connect(url, (err,db)=>{
//     var dbo = db.db("yt-playlists-organiser");
//     if (err) throw err;
//     if(dbo.collection.count==0){
//         dbo.createCollection("Playlists", function(err, res) {
//             if (err) throw err;
//             console.log("Collection created!");
//           });
//     }
//     else{
//         var myPlaylist = {name:"Al-safraul Wahy", address:"https://www.youtube.com/playlist?list=PLo4PWr1VvhkkJZtK1kMWjV5sPee68fRF2"};
//         dbo.collection('Playlists').insertOne(myPlaylist, function (err, collection) {
//             if (err) throw err;
//             console.log('Total Rows: ' + count);
//      });
//     }
//     db.close();             
//  });
const mongoose = require('mongoose');
//mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
//still NOT WOKRING!
var getPlaylists = async () =>{
    var allPlaylists;
    // MongoClient.connect(url,{ useUnifiedTopology: true }, async function(err, db) {
    //     if (err) throw err;
    //     var dbo = await db.db("yt-playlists-organiser");
    //     allPlaylists = await dbo.collection("Playlists").find({});
    // });
    
    return await allPlaylists
}

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("We are connected...");
});
async function add(){
    for(var i=0;i<4;i++){
        let playlist = await new playlistModel({
            name:'Safraul Wahy',
            items:[
                {name:'Video '+i, address:'https://www.youtube.com/embed/d1TS7f0xYqg'}
            ]
       })
       await playlist.save((err, p)=>{
           if(err) console.log( err );
           console.log(p);
       });
    }
}

add();

