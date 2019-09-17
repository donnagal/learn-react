import React from 'react';
import {render} from 'react-dom';

let songList = [
  { "title": "Fight for you", "artist": "Morgan Page", "time": 3.37,},
  { "title": "You can have it All", "artist": "Zoo Brazil", "time": 5.36,},
  { "title": "Call my name - Spencer Hill Remix", "artist": "Sultan + Shepard", "time": 6.30,},
]

const Song = ({title, artist, time}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>By: {artist}</p>
      <small>time: {time} </small>
      <hr />
    </section>
  )
}

class Playlist extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      open: true
    }
    this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
  }

  toggleOpenClosed(){
    // this.setState({
    //     open: !this.state.open
    //   })

    this.setState(prevState =>({
      open: !prevState.open
    }))
  }

  render(){

    // const songs = this.props.songs
    const { songs } = this.props
    return(
      <div>
        <h1>
          The Playlist is {
          this.state.open ? 'opened' : 'closed'
        }
      </h1>
      <button onClick={this.toggleOpenClosed}>Button</button>
          {songs.map(
            (song, i)=> 
              <Song 
                key={i}
                title={song.title} 
                artist={song.artist} 
                time={song.time}
                />
          )}
      </div>
    )
  }
}



render(
   <Playlist songs={songList}/>, 
    document.getElementById("root")
)