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
    channelTitle: String,
    snippet: {
        publishedAt: Date,
        channelId: String,
        title: String,
        description: String,
        thumbnails: {
          medium: {
            url: String,
            width: Number,
            height: Number
          }
        },
        channelTitle: String
    },
    items: [
        {
          snippet: {
            publishedAt: Date,
            title: String,
            description: String,
            thumbnails: {
              default: { url: String }
            }
          },
          contentDetails: {
            videoId: String,
            videoPublishedAt: Date
          }
        }
    ]
 })
   

module.exports = mongoose.model('Playlist', PlaylistSchema)
