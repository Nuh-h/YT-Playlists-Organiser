//This page will list all the playlists of the user
import React from 'react';
import './../app.css';

import { RiDeleteBin2Line, RiShareBoxFill, RiWallet2Fill } from 'react-icons/ri';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5'

//This component renders to view the list of playlists saved in the DB
// It sends a fetch request to my api endpoint /api/playlists after the
//  the component is loaded (componentDidMount), then stores the response
// in the state 'playlists'. And from there we have the data to inject into the HTML

//There is a delete button that triggers deletion of a playlist at endpoint /playlists/delete/id
//Looking to add an option to edit title (through popup perhaps) but definitely going to enable reordering somehow.

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
                        title: "PLACEHOLDER PLAYLIST",
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
        this.handleSettings = this.handleSettings.bind(this);
    }
    async componentDidMount(){
        //fetch playlists from db
        await fetch('/api/playlists',{method:'GET'})
        .then(res => res.json())
        .then(data => this.setState({ playlists: data }))
        .catch(err => console.log(err))
    }
    handleSettings(e){
        //this will be useful, with modification, when reordering
        e.preventDefault();        
        document.querySelector(`.settings${e.target.id}`).classList.toggle('settings-on');
    }

    render(){
        return (
            <div className="playlists-component">
                  <h4> My Playlists </h4>
                  <div className="playlists-container">
                    {
                        this.state.playlists.map((playlist,index)=>(
                            <div id={index} className="playlists-item" tabIndex="0">
                                <img src={playlist.snippet.thumbnails.medium.url}></img>
                                <div className="playlists-item-snippet">
                                    <div>
                                        <a href={"/playlist/"+playlist._id}>
                                            {playlist.snippet.title}
                                        </a>
                                        <span style={{float:"right"}}>
                                            <IoEllipsisHorizontalSharp  id={index} onClick={this.handleSettings}/>
                                            <div className={`settings${index} settings`}>
                                                <a href={"/playlists/delete/"+playlist._id} style={{float:"right"}}> <RiDeleteBin2Line/> </a>
                                                <RiShareBoxFill />
                                                <RiWallet2Fill />
                                            </div>
                                        </span>
                                    </div>
                                    <div className="playlists-item-meta" id={playlist._id}>
                                        <p><i>{playlist.channelTitle}</i></p>
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