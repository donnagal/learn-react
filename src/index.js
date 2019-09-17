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

//Parent Comp
const Playlist = ({songs}) => {
  return(
    <div>
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


render(
   <Playlist songs={songList}/>, 
    document.getElementById("root")
)