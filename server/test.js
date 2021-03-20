// //add MongoDb to Node

// const playlistModel = require('./models/playlist.model');

// //import { MongoClient } from 'mongodb'
// //var MongoClient = require('mongodb').MongoClient;
// const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/yt-playlists-organiser'

// // MongoClient.connect(url, { useUnifiedTopology: true }, (err, db)=>{
// //     if(err) throw err;
// //     console.log("------Database created!------");
    
// //     db.close();
// // });

// //initialising DB yt:po
// // MongoClient.connect(url, (err,db)=>{
// //     var dbo = db.db("yt-playlists-organiser");
// //     if (err) throw err;
// //     if(dbo.collection.count==0){
// //         dbo.createCollection("Playlists", function(err, res) {
// //             if (err) throw err;
// //             console.log("Collection created!");
// //           });
// //     }
// //     else{
// //         var myPlaylist = {name:"Al-safraul Wahy", address:"https://www.youtube.com/playlist?list=PLo4PWr1VvhkkJZtK1kMWjV5sPee68fRF2"};
// //         dbo.collection('Playlists').insertOne(myPlaylist, function (err, collection) {
// //             if (err) throw err;
// //             console.log('Total Rows: ' + count);
// //      });
// //     }
// //     db.close();             
// //  });
// const mongoose = require('mongoose');
// //mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
// //still NOT WOKRING!
// var getPlaylists = async () =>{
//     var allPlaylists;
//     // MongoClient.connect(url,{ useUnifiedTopology: true }, async function(err, db) {
//     //     if (err) throw err;
//     //     var dbo = await db.db("yt-playlists-organiser");
//     //     allPlaylists = await dbo.collection("Playlists").find({});
//     // });
    
//     return await allPlaylists
// }

// mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log("We are connected...");
// });
// async function add(){
//     for(var i=0;i<4;i++){
//         let playlist = await new playlistModel({
//             name:'Safraul Wahy',
//             items:[
//                 {name:'Video '+i, address:'https://www.youtube.com/embed/d1TS7f0xYqg'}
//             ]
//        })
//        await playlist.save((err, p)=>{
//            if(err) console.log( err );
//            console.log(p);
//        });
//     }
// }

// const fetch = require('node-fetch')
// //add();
// const util = require('util')
// require('dotenv').config();
// const get = async ()=>{
//     let playlistID = 'PLo4PWr1VvhkkJZtK1kMWjV5sPee68fRF2'
//     let playlistValues;
//     let playlistData;
//     await fetch(
//         'https://youtube.googleapis.com/youtube/v3/playlistItems?'+
//         'part=snippet%2CcontentDetails&maxResults=2'+
//         '&playlistId='+playlistID+
//         '&fields=nextPageToken'+
//         '%2Citems(snippet(publishedAt%2Ctitle%2Cdescription%2Cthumbnails(default(url)))'+
//         '%2CcontentDetails)'+
//         '&key='+process.env.MY_KEY,{method:'GET'})
//         .then(res=>res.json()).then(data=>playlistValues=data);
    
//     await fetch(
//         'https://www.googleapis.com/'+
//         'youtube/v3/playlists?'+
//         'part=snippet%2CcontentDetails'+
//         '&maxResults=2&id='+
//         playlistID+
//         '&fields=items(snippet(publishedAt,channelId,title,description, channelTitle, thumbnails(medium)))'+
//         '&key='+process.env.MY_KEY,{method:'GET'})
//         .then(res=>res.json()).then(data=>playlistData=data);
//     const newPlaylist = {
//         snippet:playlistData.items[0].snippet,
//         channelTitle:playlistData.items[0].snippet.channelTitle,
//         items: playlistValues.items
//     }
//     //console.log(util.inspect(newPlaylist, false, null, true))
//     console.log(JSON.stringify(newPlaylist,null, 4));

// }
// get()

// //First step complete
// // NEXT, merge this into model and save!




// /******REMOVE playlistID and replace it */
// /*********EXPERIMENT TILL WE FIND CORRECT WAY TO FETCH API DATA */
// /**The below is simplied API result for playlist items */
// // {
// //     "items": [
// //       {
// //         "snippet": {
// //           "publishedAt": "2016-07-22T12:22:28Z",
// //           "title": "برنامج سفراء الوحي   الحلقة 20",
// //           "description": "",
// //           "thumbnails": {
// //             "default": {
// //               "url": "https://i.ytimg.com/vi/Gb7E2NUq1nk/default.jpg"
// //             }
// //           }
// //         },
// //         "contentDetails": {
// //           "videoId": "Gb7E2NUq1nk",
// //           "videoPublishedAt": "2016-07-22T12:21:14Z"
// //         }
// //       }
// //     ]
// //   }
  
// /** The below is when you search for playlist details*/
// // {
// //     "items": [
// //       {
// //         "snippet": {
// //           "publishedAt": "2016-07-22T12:21:58Z",
// //           "channelId": "UCzHThNXawJPlt_CtgFeG1-A",
// //           "title": "برنامج  سفراء الوحي 2016",
// //           "description": "",
// //           "thumbnails": {
// //             "medium": {
// //               "url": "https://i.ytimg.com/vi/Gb7E2NUq1nk/mqdefault.jpg",
// //               "width": 320,
// //               "height": 180
// //             }
// //           },
// //           "channelTitle": "ahmed nawar"
// //         }
// //       }
// //     ]
// //   }
  