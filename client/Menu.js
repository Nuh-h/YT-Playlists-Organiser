import React from 'react'
import './app.css'


const anchorStyle = {
    textDecoration:"none",
}

const MenuBar = ()=>{
    return (
        <div className="MenuBar" >
            <a href="/" style={anchorStyle}>
                Home
            </a>
            <a href="/upload" style={anchorStyle}>
                Upload
            </a>
            <a href="/create" style={anchorStyle}>
                Create
            </a>
        </div>
    )
}
export default MenuBar