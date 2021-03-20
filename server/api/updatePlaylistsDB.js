const { json } = require('express');
const fetch = require('node-fetch');
const util = require('util');
const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/yt-playlists-organiser'
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
const dbConnection = mongoose.connection;
dbConnection.on('error', console.error.bind(console, 'connection error:'));
dbConnection.once('open',()=>{console.log("Connected to DB, ready to update...")});
const playlistModel = require('./../models/playlist.model');

const dotenvres = require('dotenv').config();
if (dotenvres.error) {
    throw dotenvres.error
}
//SAFRAUL WAHY PLAYLIST ID: PLo4PWr1VvhkkJZtK1kMWjV5sPee68fRF2
const fetchPlaylist = async (playlistID)=>{
    //let playlistID = 'PLo4PWr1VvhkkJZtK1kMWjV5sPee68fRF2'
    let playlistValues;
    let playlistData;
    await fetch(
        'https://youtube.googleapis.com/youtube/v3/playlistItems?'+
        'part=snippet%2CcontentDetails&maxResults=50'+
        '&playlistId='+playlistID+
        '&fields=nextPageToken'+
        '%2Citems(snippet(publishedAt%2Ctitle%2Cdescription%2Cthumbnails(default(url)))'+
        '%2CcontentDetails)'+
        '&key='+process.env.MY_KEY,{method:'GET'})
        .then(res=>res.json()).then(data=>playlistValues=data);
    
    await fetch(
        'https://www.googleapis.com/'+
        'youtube/v3/playlists?'+
        'part=snippet%2CcontentDetails'+
        '&maxResults=5&id='+
        playlistID+
        '&fields=items(snippet(publishedAt,channelId,title,description, channelTitle, thumbnails(medium)))'+
        '&key='+process.env.MY_KEY,{method:'GET'})
        .then(res=>res.json()).then(data=>playlistData=data);
    const newPlaylist = {
        snippet:playlistData.items[0].snippet,
        channelTitle:playlistData.items[0].snippet.channelTitle,
        items: playlistValues.items
    }
    return newPlaylist
}
async function updatePlaylistDB(playlistID){
    try{
        const newPl = await fetchPlaylist(playlistID)
        let playlist = await new playlistModel(newPl);
        await playlist.save();
    }
    catch(err){
        console.log( err );
        return false;
    }

    //console.log(JSON.stringify(res,null, 4));
    //console.log(util.inspect(res,false,null,true));
    //necessary details to extract:
      //Playlists{ 
         //Playlist{ 
            //thumbnail
            //title
            //videoId
            //videoOwnerChannelTitle
            //videoOwnerChannelId
            //date uploaded
            //duration --later
        //}
    //}


    //yt v3 returned object
    // {
    //   kind, etag, nextpagetoken,
    //   items:[
    //       {
    //           kind, etag, id,
    //           snippet:{
    //               publishedAt, channelId, title, description,
    //               thumbnails:{
    //                   default,medium,high,standard,maxres:{
    //                       url, width, height
    //                   }
    //               },
    //               channelTitle, playlistId, position, 
    //               resourceId:{kind, videoId},
    //               videoOwnerChannelTitle, videoOwnerChannelId
    //           },
    //           contentDetails:{ videoId, videoPublishedAt}
    //       },
    //       {

    //       }
    //   ]
    // }
    return true;
}

export default updatePlaylistDB