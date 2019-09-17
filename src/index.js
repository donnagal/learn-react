import React from 'react';
import ReactDOM from 'react-dom';

let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
}

class SkiDayCounter extends React.Component{
  render(){
    return(
      <section>
        <p>Total Days: {this.props.total}</p>
        <p>Powder Days: {this.props.powder}</p>
        <p>Backcountry Days: {this.props.backcountry}</p>
        <p>Goal: {this.props.goal}</p>
      </section>
    )
  }
}

ReactDOM.render(
   <SkiDayCounter 
      total={skiData.total}
      powder={skiData.powder}
      backcountry={skiData.backcountry}
      goal={skiData.goal}
   />, 
    document.getElementById("root")
)