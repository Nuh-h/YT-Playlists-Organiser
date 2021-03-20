import React from 'react'
import ReactDOM from 'react-dom'
//const fetch = require('node-fetch');
class Upload extends React.Component {
    constructor(props){
        super(props);
        this.state = {url:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render(){
        return (
            <div className="uploadDiv" 
                style={{height:"300px", display:"flex",
                     justifyContent:"center", alignItems:"center",
                     backgroundColor:this.state.url==""?"powderblue":"midnightblue",
                     transition:"background 2s ease 0.1s"}}>
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
        //send request to api with this url as query string
        let res = await fetch('/api/add-playlist/'+url, {method: 'GET'});
        //the backend will deal with fetching the playlist, adding it to DB then respond about whether Ok or not
        //Then we either reroute or inform client to retry
        //we reroute to /playlists
        if(res.ok){
            page.innerHTML="Playlist added successfully! Please wait to be redirected ....";
            window.location = "/playlists";
        }
        else{
            page.innerHTML="An error occurred while saving the playlist, please try again";
            window.location = "/upload"
        }
        //playlists will obtain items from DB and will prepare list of playlists
        //each playlist will route to /playlist/id
      }
}

export default Upload