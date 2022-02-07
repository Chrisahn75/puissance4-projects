import React from "react";

class Board extends React.Component {
  // States
  constructor() {
    super();
    this.state = {
      rows: 6,
      columns: 7,
      moves: [],
      playerTurn: "red",
      // winner: "",
      // moves: [
      //   {
      //     x: 0,
      //     y: 0,
      //     player: "red",
      //   },
      // ],
    };
  }
  // Reset function
  resetBoard = () => {
    this.setState({
      moves: [],
    });
  };

  getToken = (x, y) => {
    const list = this.state.moves.filter((item) => {
      return item.x === x && item.y === y;
    });
    return list[0];
  };

  checkForWin = (x, y, player) => {
    // Check the horizontals
    let winningMoves = [{ x, y }];
    for (let column = x + 1; column < x + 4; column += 1) {
      const checkToken = this.getToken(column, y);
      if (checkToken && checkToken.player === player) {
        winningMoves.push({ x: column, y: y });
      } else {
        break;
      }
    }

    for (let column = x - 1; column > x - 4; column -= 1) {
      const checkToken = this.getToken(column, y);
      if (checkToken && checkToken.player === player) {
        winningMoves.push({ x: column, y: y });
      } else {
        break;
      }
    }

    if (winningMoves.length > 3) {
      this.setState({ winner: player, winningMoves });
      return true;
    }

    // Check the verticals
    winningMoves = [{ x, y, player }];
    for (let row = y + 1; row < y + 4; row += 1) {
      const checkToken = this.getToken(x, row);
      if (checkToken && checkToken.player === player) {
        winningMoves.push({ x: x, y: row });
      } else {
        break;
      }
    }

    for (let row = y - 1; row > y - 4; row -= 1) {
      const checkToken = this.getToken(x, row);
      if (checkToken && checkToken.player === player) {
        winningMoves.push({ x: x, y: row });
      } else {
        break;
      }
    }

    if (winningMoves.length > 3) {
      this.setState({ winner: player, winningMoves });
      return true;
    }
  };
  addMove = (x, y) => {
    const nextPlayerTurn = this.state.playerTurn === "red" ? "yellow" : "red";
    // Below, we added a new move into our state, wherever we click on our board, and it will change the player's turn into the next player
    //Check on a win based on this next move : we need to look at that position and all the adjacent positions in each direction, and determine if they are 4 in a row
    // heckForWin () checks the position that we last added
    this.setState(
      {
        moves: this.state.moves.concat({ x, y, player: this.state.playerTurn }),
        playerTurn: nextPlayerTurn,
      },
      () => this.checkForWin({ x, y, player: this.state.playerTurn })
    );
  };

  // To create dynamically our grid which is an array of arrays
  renderBoard() {
    const { winner } = this.state;
    const rowViews = [];
    for (let row = 0; row < this.state.rows; row += 1) {
      const columnViews = [];
      for (let column = 0; column < this.state.columns; column += 1) {
        const token = this.getToken(column, row);
        columnViews.push(
          <div
            onClick={() => {
              this.addMove(column, row);
            }}
            style={{
              width: "8vw",
              height: "8vw",
              backgroundColor: "blue",
              display: "flex",
              padding: "5px",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                borderRadius: "50%",
                backgroundColor: "white",
                flex: 1,
                display: "flex",
              }}
            >
              {token ? (
                <div
                  style={{
                    backgroundColor: token.player,
                    flex: 1,
                    borderRadius: "50%",
                  }}
                ></div>
              ) : undefined}
            </div>
          </div>
        );
      }
      rowViews.push(<div style={{ display: "flex" }}>{columnViews}</div>);
    }
    return (
      <div
        style={{
          backgroundColor: "red",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {winner && (
          <div
            onClick={this.resetBoard}
            style={{
              position: "absolute",
              backgroundColor: "rgba(0, 100, 0, .2)",
            }}
          >
            {`${winner} WINS !!!`}
          </div>
        )}
        {rowViews}
      </div>
    );
  }

  render() {
    return (
      <div style={styles.container}>
        <div>{this.renderBoard()}</div>
      </div>
    );
  }
}

const styles = {
  container: {
    height: "100%",
    padding: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default Board;
