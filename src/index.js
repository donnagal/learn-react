import React from 'react';
import ReactDOM from 'react-dom';


class Message extends React.Component {
  render() {
    return(
      <div>
        <h1 style={{color: this.props.color}}>
          {this.props.msg}
        </h1>
        <p>I'll check back in {this.props.min} mintunes</p>
      </div>
    )
  }
}


ReactDOM.render(
   <Message color="blue" msg="How old are you?" min={5} />, 
    document.getElementById("root")
)