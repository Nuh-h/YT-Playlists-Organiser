const mongoose = require('mongoose');
//necessary details to extract:
        //thumbnail
        //title
        //videoId
        //videoOwnerChannelTitle
        //videoOwnerChannelId
        //date uploaded
        //duration --later
const PlaylistSchema = new mongoose.Schema({
    name: String,
    items:[{
        name: String,
        address: String
    }]

 })
   

module.exports = mongoose.model('Playlist', PlaylistSchema)
