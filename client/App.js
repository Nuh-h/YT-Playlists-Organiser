import MenuBar from './Menu'
import React from 'react'
import {hot} from 'react-hot-loader'
import {Route, Switch, Router} from 'react-router-dom'
import Home from './Home'
import upload from './Playlists/upload'
import playlist from './Playlists/viewPlaylist'
import playlists from './Playlists/playlistsTemplate'

const App = () => {
    return (
        <div style={{border:"1px pink solid"}}>  
            <h1 style = {{background:"pink", padding:"10px", marginBottom:"0px", textAlign:"center"}}> YT: Playlists Organiser</h1>
            < MenuBar />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/upload" component={upload}/>
                <Route exact path="/playlist1" component={playlist}/>
                <Route exact path="/playlists" component={playlists}/>
            </Switch>
        </div>
    )
}

export default hot(module)(App)