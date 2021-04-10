import React from 'react'
import ReactDOM from 'react-dom'
import './../app.css'
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
                    <input placeholder="Enter playlist title..." 
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
        page.innerHTML = "Please wait while we create the playlist...";

        
        const ID = this.state.url.replace("https://www.youtube.com/watch?v=","");
            //send request to api with this url as query string
        let res = await fetch('/api/add-playlist/'+ID+"/"+this.state.title, {method: 'GET'});
            //the backend will deal with fetching the playlist, adding it to DB then respond about whether Ok or not
            //Then we either reroute or inform client to retry
            //we reroute to /playlists
        if(res.ok){
            page.innerHTML="Playlist added successfully! Please wait to be redirected ....";
            window.location = "/playlists";
        }
        else{
            page.innerHTML="An error occurred while saving the playlist, please try again";
            window.location = "/create"
        }
            // playlists will obtain items from DB and will prepare list of playlists
            // each playlist will route to /playlist/id
      }
}

export default createPlaylist