import React, { Component} from 'react';
import {render} from 'react-dom';

let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
}

class SkiDayCounter extends Component{
  render(){
    const {total, powder, backcountry, goal} = this.props
    return(
      <section>
        <p>Total Days: {total}</p>
        <p>Powder Days: {powder}</p>
        <p>Backcountry Days: {backcountry}</p>
        <p>Goal: {goal}</p>
      </section>
    )
  }
}

render(
   <SkiDayCounter 
      total={skiData.total}
      powder={skiData.powder}
      backcountry={skiData.backcountry}
      goal={skiData.goal}
   />, 
    document.getElementById("root")
)