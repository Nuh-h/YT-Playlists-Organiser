//This page will list all the playlists of the user
import { Int32 } from 'bson';
import React from 'react'

//ToDO: Add link that will route to /playlist/ID to each playlist

//use jss at some point
class Playlists extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            playlists:[{
                name:'',
                items:[
                    {name:'', address:'', _id:''}
                ]
           }],
           currentIndex:0
        };
        this.handleChange = this.handleChange.bind(this)
    }
    
    async componentDidMount(){
        await fetch('/api/playlists',{method:'GET'})
        .then(res => res.json())
        .then(json => this.setState({playlists:json}))
        //console.log(this.state.playlists)
    }
    handleChange(e){
        e.preventDefault();
        this.setState({ currentIndex: e.currentTarget.id });
    }
    render(){
        return (
            <div style={{display:"flex",
             flexDirection:"column", margin:"12px",
              padding:"0"}}>
                {
                    this.state.playlists.map((playlist,index)=>(
                        <div id={index}
                        style={{backgroundColor:"lavender", width:"80%", height:"auto", borderRadius:"10px", margin:"1% auto", paddingLeft:"1%"}} 
                        >
                            <h4>{playlist.name}</h4>
                            <a href={"/playlist/"+playlist._id}> {playlist._id}</a>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Playlists