import MenuBar from './Menu'
import React from 'react'
import {hot} from 'react-hot-loader'
import {Route, Switch, Router} from 'react-router-dom'
import Home from './Home'
import Upload from './Playlists/upload'
import Playlist from './Playlists/viewPlaylist'
import Playlists from './Playlists/playlistsTemplate'
import Create from './Playlists/createPlaylist'
import './app.css'

const App = () => {
    return (
        <div className="App" >  
            <h1> YT: Playlists Organiser</h1>
            <div className="menu-plus-component">
                < MenuBar />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/upload" component={Upload}/>
                    <Route exact path="/create" component={Create}/>
                    <Route exact path="/playlist/:ID" component={Playlist} />
                    <Route exact path="/playlists" component={Playlists}/>
                </Switch> 
            </div>
        </div>
    )
}

export default hot(module)(App)