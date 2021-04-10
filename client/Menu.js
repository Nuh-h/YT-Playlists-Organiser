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
                <BiHome/> Home
            </a>
            <a href="/upload" style={anchorStyle}>
                <BiUpload/> Upload
            </a>
            <a href="/create" style={anchorStyle}>
                <BiBookAdd/> Create
            </a>
            <a href="/playlists" style={anchorStyle}>
                <BiCollection/> Playlists
            </a>
        </div>
    )
}
export default MenuBar