//fetch will handle getting THE PLAYLIST from DB
//Then Display the default video, list of videos and add the functionalities later
//for reordering etc
import React from 'react'
import './../app.css'

import { AiFillEdit } from 'react-icons/ai';
import { BiRightArrowAlt, BiLeftArrowAlt, BiPause, BiPlay, BiPlus, BiShuffle, BiShareAlt  } from 'react-icons/bi';

//This component essentially has to parts to it which has to do with the basic properties of a playlist
// First part is a video-player through use of iframe. At the moment, there's a cupboard style toolbox 
// that can be used to navigate between videos. The features will be enabled gradually, but for now YouTube is doing all the work.
// Second part is maintaining a queue of videos to be watched. This is very simple and has some click handlers
//  that update the first part on what video to be  watched.

// The data is fetched through api endpoint playlist/id and the playlist state stores the data.
// The currentIndex state keeps check of which video is being shown on the iframe video-player.

//TODO: Play with Iframe to improve video-play features. Enable editing video title  and re-ordering, deleting, sharing (icons: pen, x, share)
//  To be separated into smaller components

class Playlist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            playlist:{
                //sample
                snippet: {
                    publishedAt: "2016-07-22T12:21:58Z",
                    channelId: "UCzHThNXawJPlt_CtgFeG1-A",
                    title: "برنامج  سفراء الوحي 2016",
                    description: "",
                    thumbnails: {
                        medium: {
                            url: "https://i.ytimg.com/vi/Gb7E2NUq1nk/mqdefault.jpg",
                            width: 320,
                            height: 180
                        }
                    },
                    channelTitle: "ahmed nawar"
                },
                channelTitle: "ahmed nawar",
                items: [
                    {
                        snippet: {
                            publishedAt: "2016-07-22T12:22:28Z",
                            title: "برنامج سفراء الوحي   الحلقة 20",
                            description: "",
                            thumbnails: {
                                default: {
                                    url: "https://i.ytimg.com/vi/Gb7E2NUq1nk/default.jpg"
                                }
                            }
                        },
                        contentDetails: {
                            videoId: "Gb7E2NUq1nk",
                            videoPublishedAt: "2016-07-22T12:21:14Z"
                        }
                    }
                ]
           },
           currentIndex:0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleVideoControls = this.handleVideoControls.bind(this);
        this.handleNextVideo = this.handleNextVideo.bind(this);
        this.handlePreviousVideo = this.handlePreviousVideo.bind(this);
    }
    async componentDidMount(){
        //Temporarily using the window url
        var ID = (window.location.href).split("/")
        ID = ID[ID.length-1];

        await fetch('/api/playlist/'+ID, {method:'GET'})
        .then(res => res.json())
        .then(json => this.setState({ playlist:json[0] }))
    }
    handleChange(e){
        e.preventDefault();
        this.setState({ currentIndex: e.currentTarget.id });

        if(e.target.href){
            window.open(e.target.href)
        }
    }
    handleNextVideo(e){
        e.preventDefault();
        var val = Math.round((this.state.currentIndex+1)%(this.state.playlist.items.length));
        this.setState({ currentIndex: val });
        console.log(this.state.currentIndex)
    }
    handlePreviousVideo(e){
        e.preventDefault();

        //if the index is first video, then exit
        if(this.state.currentIndex==0) return;

        //otherwise, go to previous video (with respect to order) 
        var val = Math.round((this.state.currentIndex-1)%(this.state.playlist.items.length));
        this.setState({ currentIndex: val });
    }
    handleVideoControls(e){
        e.preventDefault();
        var videoControlBarHandle = document.querySelector('.video-control-bar-handle').classList;
        var videoControlBar = document.querySelector('.video-control-bar').classList;
        var videoControlButtons = document.querySelector('.video-control-buttons').classList;

        if(videoControlBarHandle.length!=2){
            videoControlBarHandle.add('clicked');
            videoControlBar.add('clicked');
            videoControlButtons.add('clicked');
        } 
        else{
            videoControlBarHandle.remove('clicked');
            videoControlBar.remove('clicked');
            videoControlButtons.remove('clicked');

        }
    }
    render(){
        var content = this.state.playlist.items[this.state.currentIndex] 
        return (
            <div className="view-playlist-div" >
                <div className="video-frame-container">
                    <iframe src={"https://www.youtube.com/embed/"+content.contentDetails.videoId} 
                        title={content.snippet.title} 
                        allowFullScreen loading="lazy"
                        >
                            <p>Your browser does not support iframes.</p>
                    </iframe>

                    {/*Original idea: Add custom span here that will on click reveal a transparent column div with metallic buttons for repeat, auto, next, shuffle etc. */}
                    <div className="video-control-bar">
                        <div className="video-control-buttons">
                            < BiRightArrowAlt onClick={this.handleNextVideo} />
                            < BiLeftArrowAlt onClick={this.handlePreviousVideo} />
                            < BiPause />
                            < BiPlay />
                            {/* < BiPlus /> */}
                            < BiShuffle />
                            < BiShareAlt /> 
                        </div>
                        <div className="video-control-bar-handle" onClick = {this.handleVideoControls}></div>
                    </div>
                </div>
                
                <div className="playlist-items-container">
                    { 
                        this.state.playlist.items.map((item,index) => (
                            <div id={index} tabIndex="0" className = "playlist-item"
                                style={{ background:this.state.currentIndex==index?"rgba(0,0,10,.7)":""}} 
                                onClick={this.handleChange}>
                                <img src={item.snippet.thumbnails.default.url}></img>
                                <h4 >{item.snippet.title}</h4>
                            </div>
                        ))
                    }
                </div>
                
            </div>
        )
    }

    
}

export default Playlist