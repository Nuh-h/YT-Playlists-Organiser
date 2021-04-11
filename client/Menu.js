import React from 'react'
import './app.css'

import { BiHome, BiUpload, BiBookAdd, BiCollection } from 'react-icons/bi'

const anchorStyle = {
    textDecoration:"none",
}

const MenuBar = ()=>{
    return (
        <div className="MenuBar" >
            <a href="/" style={anchorStyle}>
                <BiHome/> <p>Home</p>
            </a>
            <a href="/upload" style={anchorStyle}>
                <BiUpload/> <p>Upload</p>
            </a>
            <a href="/create" style={anchorStyle}>
                <BiBookAdd/> <p>Create</p>
            </a>
            <a href="/playlists" style={anchorStyle}>
                <BiCollection/> <p>Playlists</p>
            </a>
        </div>
    )
}
export default MenuBar