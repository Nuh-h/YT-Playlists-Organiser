const fetch = require('node-fetch');
const util = require('util');
const mongoose = require('mongoose');

if(process.env.NODE_ENV !== 'production'){
    const dotenvRes = require('dotenv').config();
    if (dotenvRes.error) {
        throw dotenvRes.error
    }
}

const uri = process.env.MONGODB_URI// || 'mongodb://localhost:27017/yt-playlists-organiser'
const playlistModel = require('../models/playlist.model');
function createConn(){
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open',()=>{console.log('Connected to DB, ready to update...')});
    return db
}



//SAMPLE PLAYLIST: 'SAFRAUL WAHY' playlistID = PLo4PWr1VvhkkJZtK1kMWjV5sPee68fRF2
//SAMPLE VIDEO for creating PLAYLIST anew. ID = INSlXPlG7Cg 
const fetchPlaylist = async (playlistID) => {
    let playlistVideos;
    let playlistMetadata;

    await fetch(
            'https://youtube.googleapis.com/youtube/v3/playlistItems?'+
            'part=snippet%2CcontentDetails&maxResults=50'+
            '&playlistId='+playlistID+
            '&fields=nextPageToken'+
            '%2Citems(snippet(publishedAt%2Ctitle%2Cdescription%2Cthumbnails))'+
            '%2CcontentDetails)'+
            '&key='+process.env.MY_KEY,
            { method:'GET' })
        .then(res => res.json())
        .then(data => playlistVideos = data)
        .catch(err=>console.log("fetchPlaylistError: "+util.inspect(err,false,null,true)))
    
    await fetch(
        'https://www.googleapis.com/'+
        'youtube/v3/playlists?'+
        'part=snippet,contentDetails'+
        '&maxResults=5&id='+
        playlistID+
        '&fields=items(snippet(publishedAt,channelId,title,description,channelTitle,thumbnails))'+
        '&key='+process.env.MY_KEY,
        { method:'GET' })
        .then(res => res.json())
        .then(data => playlistMetadata = data)
        .catch(err=>console.log("playlistMetadataError: "+util.inspect(err,false,null,true)))
    const newPlaylist = {
        snippet: playlistMetadata.items[0].snippet,
        channelTitle: playlistMetadata.items[0].snippet.channelTitle,
        items: playlistVideos.items
    }
    return newPlaylist
}

const createNewPlaylist = async (videoID, title) => {
    let videoRes;
    //AFTER SORTING THIS, play with the IFRAME API
    await fetch(
        'https://www.googleapis.com/youtube/v3/videos?'+
        '&id='+videoID+
        '&part=snippet,contentDetails'+
        '&fields=items(id,snippet(publishedAt,title,channelId,description,thumbnails),contentDetails)'+
        '&key='+process.env.MY_KEY,
        { method:'GET' })
        .then(res=>res.json())
        .then(data => videoRes = data)
        .catch(err=> console.log("createNewPlaylistError: "+util.inspect(err,false,null,true)))

    const date = new Date();
    const createdPlaylist = {
        snippet: {
            publishedAt: ''+date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate(),
            channelId: videoRes.items[0].id,
            title: title,
            description: '',
            thumbnails: {
              medium: {url: videoRes.items[0].snippet.thumbnails.medium.url ||
                videoRes.items[0].snippet.thumbnails.default.url ||
                videoRes.items[0].snippet.thumbnails.standard.url ||
                 videoRes.items[0].snippet.thumbnails.high.url ||
                 videoRes.items[0].snippet.thumbnails.maxres.url }
            },
        },
        channelTitle: 'You (current user)',
        items: [
            {
              snippet: {
                publishedAt: videoRes.items[0].snippet.publishedAt,
                title: videoRes.items[0].snippet.title,
                description: videoRes.items[0].snippet.description,
                thumbnails: {default:{url: videoRes.items[0].snippet.thumbnails.medium.url ||
                                 videoRes.items[0].snippet.thumbnails.default.url ||
                                 videoRes.items[0].snippet.thumbnails.standard.url ||
                                  videoRes.items[0].snippet.thumbnails.high.url ||
                                  videoRes.items[0].snippet.thumbnails.maxres.url }}
              },
              contentDetails: {
                videoId: videoRes.items[0].id,
                videoPublishedAt: videoRes.items[0].snippet.publishedAt
              }
            }
        ]
    }

    return createdPlaylist
}
async function updatePlaylistDB(playlistID, title){
    var db = await createConn()
    try{
        const newPlaylist =  title ? await createNewPlaylist(playlistID, title) : await fetchPlaylist(playlistID) ;

        let playlist = await new playlistModel(newPlaylist);
        
        await playlist.save();
        db.close();
    }
    catch(err){
        console.log( err );
        db.close();
        return false;
    }
    return true;
}
export default updatePlaylistDB

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


