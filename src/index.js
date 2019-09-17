import React, { Component} from 'react';
import {render} from 'react-dom';

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
const Playlist = () => {
  return(
    <div>
     <Song title="Fight for you" artist="Morgan Page" time="3.37"/>
     <Song title="You can have it All" artist="Zoo Brazil" time="5.36"/>
     <Song title="Call my name - Spencer Hill Remix" artist="Sultan + Shepard" time="6.30"/>
    </div>
  )
}


render(
   <Playlist/>, 
    document.getElementById("root")
)