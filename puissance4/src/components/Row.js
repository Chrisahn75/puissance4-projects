// REACT
import React from "react";
// COMPONENT
import Cell from "./Cell";

class Row extends React.Component {
  render() {
    const { row, play } = this.props;
    return (
      <tr>
        {row.map((cell, i) => (
          <Cell key={i} value={cell} columnIndex={i} play={play} />
        ))}
      </tr>
    );
  }
}

export default Row;
