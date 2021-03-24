//fetch will handle getting THE PLAYLIST from DB
//Then Display the default video, list of videos and add the functionalities later
//for reordering etc
import React from 'react'
import './../app.css'

class Playlist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            playlist:{
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
    
    render(){
        var content = this.state.playlist.items[this.state.currentIndex] 
        return (
            <div className="view-playlist-div" >
                <iframe src={"https://www.youtube.com/embed/"+content.contentDetails.videoId} 
                    title={content.snippet.title} >
                </iframe>
                <div className="playlist-items-container">
                    {
                        this.state.playlist.items.map((item,index) => (
                            <div id={index} tabIndex="0" className = "playlist-item"
                                style={{ background:this.state.currentIndex==index?"chocolate":""}} 
                                onClick={this.handleChange}>
                                <img src={item.snippet.thumbnails.default.url} ></img>
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