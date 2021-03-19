const { json } = require('express');
const fetch = require('node-fetch');
const util = require('util');

const dotenvres = require('dotenv').config();
if (dotenvres.error) {
    throw dotenvres.error
}
//SAFRAUL WAHY PLAYLIST ID: PLo4PWr1VvhkkJZtK1kMWjV5sPee68fRF2
async function fetchPlaylist(playlistID){
    const youtubeRes = await fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2Clocalisations%2Cplayer%2CcontentDetails&maxResults=50&playlistId='+playlistID+'&key='+process.env.MY_KEY);
    if(youtubeRes.status!=200) return false;
    const res = await youtubeRes.json();
    //console.log(JSON.stringify(res,null, 4));
    console.log(util.inspect(res,false,null,true));
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
    //yt returned object
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

    //       },
    //       {

    //       }
    //   ]
    // }
    return true;
}

export default fetchPlaylist