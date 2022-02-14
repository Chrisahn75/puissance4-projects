import React from "react";

class Timer extends React.Component {
  renderEndGame() {
    return <h2 className="timer">Time out !</h2>;
  }
  renderPlaying() {
    return <h2 className="timer">Temps restant :{this.props.remainingTime}</h2>;
  }
  render() {
    if (this.props.remainingTime >= 0) {
      return this.renderPlaying();
    } else {
      return this.renderEndGame();
    }
  }
}
export default Timer;
