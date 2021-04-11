import React from 'react'
import ReactDOM from 'react-dom'
import './../app.css'

//This component renders a simple page that takes in two inputs from the user
////it takes a Title and a YT video url. The title will be the name of the new playlist to be created, 
// and video url will be such that it will be the first video contained in the playlist

//

class createPlaylist extends React.Component {
    constructor(props){
        super(props);
        this.state = {url:"", title:""};

        this.updateTitle = this.updateTitle.bind(this);
        this.updateUrl = this.updateUrl.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render(){
        return (
            <div className="create-div">
                <form onSubmit={this.handleSubmit} >
                    Enter playlist title and then first video url
                    <input placeholder="Enter your new playlist title..." 
                            onChange={this.updateTitle}
                            value={this.state.title} required></input>
                    <input type="url" 
                            pattern="https://www.youtube.com/watch[?]v=?.*"
                            placeholder="e.g. https://www.youtube.com/watch?v={id}" 
                            onChange={this.updateUrl}
                            value={this.state.url} required></input>
                    <button type="submit" >CREATE</button>

                </form>
            </div>
        );
    }

    updateTitle(e) {
        this.setState({ title: e.target.value });
    }
    updateUrl(e) {
        this.setState({ url: e.target.value });
    }
      
    async handleSubmit(e) {
        e.preventDefault();
        if (this.state.url.length === 0) {
          return;
        }
        const page = document.querySelector(".create-div");
        page.innerHTML = "Creating playlist...";

        
        const ID = this.state.url.replace("https://www.youtube.com/watch?v=","");
            //send request to api with this url and title
        let res = await fetch('/api/add-playlist/'+ID+"/"+this.state.title, {method: 'GET'});
            //the backend will deal with fetching the playlist, adding it to DB then respond about whether Ok or not
            //Then we either reroute /playlists or inform client to retry by rerouting to /create
        if(res.ok){
            page.innerHTML="Playlist added successfully! Please wait to be redirected...";
            window.location = "/playlists";
        }
        else{
            page.innerHTML="An error occurred while saving the playlist, please try again...";
            setTimeout(()=>{window.location = "/create"},3000);
        }
            // playlistsTemplate component (/playlists) will obtain items from DB and will prepare list of playlists
            // each playlist will direct to /playlist/id (viewPlaylists component) on click 
      }
}

export default createPlaylist