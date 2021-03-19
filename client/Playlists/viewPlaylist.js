//fetch will handle getting THE PLAYLIST from DB
//Then Display the default video, list of videos and add the functionalities later
//for reordering etc
import React from 'react'

//use jss at some point
class Playlist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            playlist:[{
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
    //                 {name:'Video 1', address:'https://www.youtube.com/embed/-RkERdJRpWQ'},
    //                 {name:'Video 2', address:'https://www.youtube.com/embed/x2_x5mzR_ME'},
    //                 {name:'Video 3', address:'https://www.youtube.com/embed/3keG-Slw1_w'},
    //                 {name:'Video 4', address:'https://www.youtube.com/embed/qNKWs1dFBUQ'},
    //                 {name:'Video 5', address:'https://www.youtube.com/embed/ckIJUDLwRO8'}
    //             ]
    //         }]
    //     })
    // }
    async componentDidMount(){
        //Temporarily using the window url
        var ID = (window.location.href).split("/")
        ID = ID[ID.length-1];
        await fetch('/api/playlist/'+ID,{method:'GET'})
        .then(res => res.json())
        .then(json => this.setState({playlist:json}))
        console.log(this.state.playlist)
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
                <iframe src={this.state.playlist[0].items[this.state.currentIndex].address} title={this.state.playlist[0].items[this.state.currentIndex].name} style={{width:"80%", height:"300px", margin:"auto auto"}}>
                </iframe>
                <div style={{backgroundColor:"honeydew",
                 height:"200px", overflowX:"auto",
                 borderRadius:"8px", margin:"12px", ":hover":{backgroundColor:"green"}}}
                  >
                    {
                        this.state.playlist[0].items.map((item,index) => (
                            <div id={index} style={{borderTop:"1px solid grey", display:"flex", justifyContent:"space-between", margin:"0", alignItems:"center", background:this.state.currentIndex==index?"turquoise":"lightgrey", padding:"0 15px"}} onClick={this.handleChange}>
                                <h4>{item.name}</h4>
                                <a href={item.address}>view on YT</a>
                            </div>
                        ))
                    }
                </div>
                
            </div>
        )
    }

    
}

export default Playlist