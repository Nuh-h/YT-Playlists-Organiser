import React from 'react'
import ReactDOM from 'react-dom'
const fetch = require('node-fetch');
class Upload extends React.Component {
    constructor(props){
        super(props);
        this.state = {url:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render(){
        return (
            <div className="uploadDiv" style={{height:"300px", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <form onSubmit={this.handleSubmit} style={{border:"2px solid blue"}}>
                <input style={{width:"300px"}} 
                    type="url" 
                    pattern="https://www.youtube.com/playlis[tT][?]list[=]?.*"
                    placeholder="eg. https://www.youtube.com/playlist?list={id}" 
                    onChange={this.handleChange}
                    value={this.state.url} required></input>
                <button type="submit" style={{backgroundColor:"turquoise",border:"2px solid black"}}>LOAD</button>
            </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({ url: e.target.value });
      }
      
    async handleSubmit(e) {
        e.preventDefault();
        if (this.state.url.length === 0) {
          return;
        }
        const page = document.querySelector(".uploadDiv");
        page.innerHTML = "Please wait while we load the playlist...";
        const url = this.state.url.replace("https://www.youtube.com/playlist?list=","");
        //send request to /api-helper with this url as query string
        let res = await fetch('/api/add-playlist/'+url);
        //the api-helper will load the playlist, add it to DB then respond about whether Ok or not
        //Then we either reroute or inform client to retry
        //we reroute to /playlists
        if(res.ok){
            console.log("ALL GOOD")
            window.location = "/playlists"
        }
        else{
            console.log("NOT GOOD")
            window.location = "/upload"
        }
        //playlists will obtain items from DB and will prepare list of playlists
        //each playlist will route to /playlist/id
      }
}

const uploadOld = () => {
    return (
        <div style={{height:"300px", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <form method="post" style={{border:"2px solid blue"}}>
                <input style={{width:"300px"}} type={{Text}} placeholder="Enter the url to the playlist eg. youtu.be/playlist/1"></input>
                <button type="submit" formAction="/loadPlaylists" style={{backgroundColor:"turquoise",border:"2px solid black"}}>LOAD</button>
            </form>
        </div>
    )
}

export default Upload