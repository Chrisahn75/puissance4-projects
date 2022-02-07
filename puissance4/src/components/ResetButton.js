import React from "react";

class ResetButton extends React.Component {
  render() {
    return (
      <div className="btn btn-primary btn-lg">
        {this.renderBoard()}
        <button onClick={this.resetBoard}>Reset Game</button>
      </div>
    );
  }
}
export default ResetButton;
