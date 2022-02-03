// REACT
import React from "react";

class Board extends React.Component {
  constructor() {
    super();

    this.state = {
      rows: 6,
      columns: 7,
    };
  }

  // INITIALIZE NEW GRID 6/7
  renderGrid() {
    let newGrid = [];
    for (let x = 0; x < this.state.rows; x++) {
      let newColumn = [];
      for (let y = 0; y < this.state.columns; y++) {
        newColumn.push(
          <div
            className="p-2"
            style={{
              width: "8vw",
              height: "8vw",
              backgroundColor: "blue",
              border: "1px solid black",
              display: "flex",
            }}
          >
            <div
              style={{
                borderRadius: "50%",
                border: "1px solid black",
                backgroundColor: "white",
                flex: 1,
              }}
            ></div>
          </div>
        );
      }
      newGrid.push(
        <div className="" style={{ display: "flex" }}>
          {newColumn}
        </div>
      );
    }
    return newGrid;
  }

  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="p-3">{this.renderGrid()}</div>
      </div>
    );
  }
}

export default Board;
