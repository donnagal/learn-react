import React from 'react';
import {render} from 'react-dom';

let songList = [
  { "title": "Fight for you", "artist": "Morgan Page", "time": 3.37,},
  { "title": "You can have it All", "artist": "Zoo Brazil", "time": 5.36,},
  { "title": "Call my name - Spencer Hill Remix", "artist": "Sultan + Shepard", "time": 6.30,},
]

const Song = ({title, artist, time, onTour}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>By: {artist}</p>
      <small>time: {time} </small>
      <p>On tour: {onTour ? 'yes' : 'no'}</p>
      <hr />
    </section>
  )
}

const Hiring = () => 
  <div>
    <p>Is hiring</p>
  </div>

const NotHiring = () => 
    <div>
      <p>Is NOT hiring.. check later for more info.</p>
    </div>

class Playlist extends React.Component {

  state = { 
    onTour: true,
    open: true,
    hiring: false
  }

  toggleOpenClosed = () => {
    this.setState(prevState =>({
      open: !prevState.open
    }))
  }

  render(){
    const { songs } = this.props
    return(
      <div>
        {this.state.hiring ? <Hiring /> : <NotHiring />}
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
                onTour={this.state.onTour}
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