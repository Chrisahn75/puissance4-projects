// REACT
import React from "react";

class Cell extends React.Component {
  render() {
    const { value, columnIndex, play } = this.props;
    let color = "white";
    if (value === 1) {
      color = "red";
    } else if (value === 2) {
      color = "yellow";
    }

    return (
      <td>
        <div
          className="cell"
          onClick={() => {
            play(columnIndex);
          }}
        >
          <div className={color}></div>
        </div>
      </td>
    );
  }
}

export default Cell;
