//fetch will handle getting THE PLAYLIST from DB
//Then Display the default video, list of videos and add the functionalities later
//for reordering etc
import React from 'react'

//use jss at some point
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
    // componentDidMount(){
    //     this.setState({
    //         playlist:[{
    //             name:'Safraul Wahy',
    //             items:[
    //                 {name:'Video 1', address:'https://www.youtube.com/embed/-RkERdJRpWQ'},
    //                 {name:'Video 2', address:'https://www.youtube.com/embed/x2_x5mzR_ME'},
    //                 {name:'Video 3', address:'https://www.youtube.com/embed/3keG-Slw1_w'},
    //                 {name:'Video 4', address:'https://www.youtube.com/embed/qNKWs1dFBUQ'},
    //                 {name:'Video 5', address:'https://www.youtube.com/embed/ckIJUDLwRO8'}
    //             ]
    //         }]
    //     })
    // }
    async componentDidMount(){
        //Temporarily using the window url
        var ID = (window.location.href).split("/")
        ID = ID[ID.length-1];
        await fetch('/api/playlist/'+ID,{method:'GET'})
        .then(res => res.json())
        .then(json => this.setState({ playlist:json[0] }))
        console.log(this.state.playlist)
    }
    handleChange(e){
        e.preventDefault();
        this.setState({ currentIndex: e.currentTarget.id });
    }
    
    render(){
        var content = this.state.playlist.items[this.state.currentIndex] 
        return (
            <div style={{display:"flex",
             flexDirection:"column", margin:"0",
              padding:"0"}}>
                <iframe src={"https://www.youtube.com/embed/"+content.contentDetails.videoId} title={content.snippet.title} style={{width:"80%", height:"300px", margin:"auto auto"}}>
                </iframe>
                <div style={{backgroundColor:"honeydew",
                 height:"200px", overflowX:"auto",
                 borderRadius:"8px", margin:"12px", ":hover":{backgroundColor:"green"}}}
                  >
                    {
                        this.state.playlist.items.map((item,index) => (
                            <div id={index} style={{borderTop:"1px solid grey", display:"flex", justifyContent:"space-between", margin:"0", alignItems:"center", background:this.state.currentIndex==index?"turquoise":"lightgrey", padding:"0 15px"}} onClick={this.handleChange}>
                                <h4>{item.snippet.title}</h4>
                                <a href={"https://www.youtube.com/watch?v="+item.contentDetails.videoId}>view on YT</a>
                            </div>
                        ))
                    }
                </div>
                
            </div>
        )
    }

    
}

export default Playlist