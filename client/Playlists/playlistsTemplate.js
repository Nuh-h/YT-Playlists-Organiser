//This page will list all the playlists of the user
import React from 'react'

//use jss at some point
class Playlists extends React.Component {
    constructor(props){
        super(props);
        //initialise state to this for trial purposes
        this.state = {
            playlists: [
                {
                    channelTitle:'',
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
                    items:[]
                }
            ],
            currentIndex:0
        };
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount(){
        fetch('/api/playlists',{method:'GET'})
        .then(res => res.json())
        .then(data => this.setState({ playlists: data }))
    }
    handleChange(e){
        e.preventDefault();
        this.setState({ currentIndex: e.currentTarget.id });
    }
    render(){
        return (
            <div style={{display:"flex",
             flexDirection:"column", margin:"12px",
              padding:"0"}}>
                  <h4 style={{textAlign:"center"}}>My Playlists</h4>
                {
                    this.state.playlists.map((playlist,index)=>(
                        <div id={index}
                            style={{backgroundColor:"lavender", width:"80%",
                            height:"auto", borderRadius:"10px", 
                            margin:"1% auto", paddingLeft:"1%",
                            display:"flex"}} tabIndex="0" 
                        >
                            <img src={playlist.snippet.thumbnails.medium.url} width="150px"></img>
                            <div style={{paddingLeft:"3%", width:"60%"}}>
                                <a href={"/playlist/"+playlist._id}
                                    style={{fontSize:"19px"}}>
                                    {playlist.snippet.title?playlist.snippet.title:"[loading...] "+index}
                                </a>
                                <div style={{display:"flex", justifyContent:"space-between"}}>
                                    <p><i>{playlist.channelTitle}</i></p>
                                    <p>{playlist.snippet.publishedAt.split('T')[0]}</p>
                                </div>
                            </div>
                            {/* <a href={"/playlist/"+playlist._id} 
                                style={{margin:"auto", backgroundColor:"peachpuff"}}> VISIT</a> */}
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Playlists