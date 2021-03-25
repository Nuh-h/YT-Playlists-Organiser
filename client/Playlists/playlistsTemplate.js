//This page will list all the playlists of the user
import React from 'react'
import './../app.css'

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
    async componentDidMount(){
        await fetch('/api/playlists',{method:'GET'})
        .then(res => res.json())
        .then(data => this.setState({ playlists: data }))
        .catch(err => console.log(err))
    }
    handleChange(e){
        e.preventDefault();
        this.setState({ currentIndex: e.currentTarget.id });
    }
    render(){
        return (
            <div className="playlists-component">
                  <h4> My Playlists</h4>
                  <div className="playlists-container">
                    {
                        this.state.playlists.map((playlist,index)=>(
                            <div id={index} className="playlists-item" tabIndex="0">
                                <img src={playlist.snippet.thumbnails.medium.url}></img>
                                <div className="playlists-item-snippet">
                                    <a href={"/playlist/"+playlist._id}>
                                        {playlist.snippet.title ? playlist.snippet.title.substring(0,43)+"..." : "[loading...] "}
                                    </a>
                                    <div className="playlists-item-meta" >
                                        <p><i>{playlist.channelTitle.substring(0,43)}</i></p>
                                        <p>{playlist.snippet.publishedAt.split('T')[0].split('-').reverse().join(' / ')}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Playlists