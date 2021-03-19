import React from 'react'

const anchorStyle = {
    textDecoration:"none",

}

const MenuBar = ()=>{
    return (
        <div style={{height:"30px", margin:"0px", marginTop:"0px", color:"blue", fontSize:"18px",backgroundColor:"grey", display:"flex", justifyContent:"space-around", alignItems:"center"}}>
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