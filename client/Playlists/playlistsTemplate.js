//api helper will handle getting playlists from youtube
//this file will prepare the frontend for the resources retrieved

//THIS PAGE SHOULD ONLY SHOW LIST OF PLAYLISTS SAVED BY THE USER
//Create a new page to show only a single playlist!
import React from 'react'

//use jss at some point
class Playlists extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            playlists:[{
                name:'',
                items:[
                    {name:'', address:''}
                ]
           }],
           currentIndex:0
        };
        this.handleChange = this.handleChange.bind(this)
    }
    // componentDidMount(){
    //     this.setState({
    //         playlist:[{
    //             name:'Safraul Wahy',
    //             items:[
    //                 {name:'Video 1', address:'https://www.youtube.com/embed/d1TS7f0xYqg'},
    //                 {name:'Video 2', address:'https://www.youtube.com/embed/d1TS7f0xYqg'},
    //                 {name:'Video 3', address:'https://www.youtube.com/embed/d1TS7f0xYqg'},
    //                 {name:'Video 4', address:'https://www.youtube.com/embed/d1TS7f0xYqg'},
    //                 {name:'Video 5', address:'https://www.youtube.com/embed/d1TS7f0xYqg'}
    //             ]
    //         }]
    //     })
    // }
    async componentDidMount(){
        await fetch('/api/playlists',{method:'GET'})
        .then(res => res.json())
        .then(json => this.setState({playlists:json}))
        console.log(this.state.playlists)
    }
    handleChange(e){
        e.preventDefault();
        this.setState({ currentIndex: e.currentTarget.id });
    }
    render(){
        return (
            <div style={{display:"flex",
             flexDirection:"column", margin:"0",
              padding:"0"}}>
                {
                    this.state.playlists.map((playlist)=>(
                        <div id={this.state.playlists.indexOf(playlist)}
                        style={{borderTop:"1px solid grey", width:"80%", height:"auto", margin:"auto auto"}} 
                        onClick={this.handleChange}>
                            <h4>{playlist.name}</h4>

                        </div>
                    ))
                }
            </div>
        )
    }

    
}

export default Playlists