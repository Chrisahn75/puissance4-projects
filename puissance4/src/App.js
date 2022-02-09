// REACT
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Board extends React.Component {
  constructor() {
    super();

    this.state = {
      rows: 6,
      columns: 7,
      player: 'red',
      moves: []
    };
  }

  resetGrid = () => {
    this.setState({moves: [], winner: null})
  }

  // const nextPlayer = player ===  'red' ? 'yellow' : 'red'

  // INITIALIZE NEW GRID 6/7
  renderGrid() {
    const newGrid = [];

    for (let x = 0; x < this.state.rows; x++) {
      const newColumn = [];
      for (let y = 0; y < this.state.columns; y++) {
        newColumn.push(
          <div
            onClick={}
            style={{
              width: "8vw",
              height: "8vw",
              backgroundColor: "blue",
              border: "1px solid black",
              display: "flex",
              padding: 5,
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
    console.log("Grid created");
    return newGrid;
  }

  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="p-3">{this.renderGrid()}</div>
        {/* <div className="p-3">{this.state.board}</div> */}
      </div>
    );
  }
  renderReset(){
    return(
      <div className="btn btn-primary btn-lg" >
        {this.renderBoard()}
        <button onClick={this.resetBoard}>Reset Game</button>
      </div>

    )
  }
}

export default Board;
