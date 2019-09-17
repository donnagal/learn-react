import React, { Component} from 'react';
import {render} from 'react-dom';

let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
}

class SkiDayCounter extends Component{

  //Metohds 
  getPercent = decimal => {
    return decimal * 100 + '%'
  }

  calcGoalProgress = (total, goal) => {
    return this.getPercent(total/goal)
  }

  render(){
    const {total, powder, backcountry, goal} = this.props
    return(
      <section>
        <p>Total Days: {total}</p>
        <p>Powder Days: {powder}</p>
        <p>Backcountry Days: {backcountry}</p>
        <p>Goal Progress: {this.calcGoalProgress(total, goal)}</p>
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