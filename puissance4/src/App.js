//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//                           APP.JS                               //
//                  WELCOME TO CONNECT4 GAME                      //
//                       MAIN REACT PAGE                          //
//                                                                //
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

// REACT
import React from "react";
// STYLES
import "./App.css";
// COMPONENT
import Row from "./components/Row";
import Rules from "./components/Rules";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      player1: 1,
      player2: 2,
      currentPlayer: null,
      board: [],
      gameOver: false,
      message: "",
    };

    // BINDS
    this.play = this.play.bind(this);
  }

  // INITIATE NEW GAME
  initBoard() {
    // CREATE A BLANK 6x7 BOARD
    const board = [];
    for (let r = 0; r < 6; r++) {
      const row = [];
      for (let c = 0; c < 7; c++) {
        row.push(null);
      }
      board.push(row);
    }

    // STATE MODIFICATION
    this.setState({
      board,
      currentPlayer: this.state.player1,
      gameOver: false,
      message: "",
    });

    // CONSOLE EMPTY BOARD FILLED WITH NULL - NO PLAYER MOVES
    console.log(board);
  }

  // CURRENT PLAYER -> NEXT PLAYER
  changePlayer() {
    return this.state.currentPlayer === this.state.player1
      ? this.state.player2
      : this.state.player1;
  }

  // EVERY TIME YOU CLICK ON A CELL, FUNCTION PLAY IS CALLED
  play(c) {
    // C = COLUMNINDEX - R = ROWINDEX
    // CHECK IF GAME IS OVER OR NOT
    if (!this.state.gameOver) {
      let board = this.state.board;

      for (let r = 5; r >= 0; r--) {
        if (!board[r][c]) {
          board[r][c] = this.state.currentPlayer;
          break;
        }
      }

      // CHECK BOARD STATUS
      let result = this.checkAllMoves(board);
      if (result === this.state.player1) {
        this.setState({
          board,
          gameOver: true,
          message: "Player 1 (red) wins !!!",
        });
      } else if (result === this.state.player2) {
        this.setState({
          board,
          gameOver: true,
          message: "Player 2 (yellow) wins !!!",
        });
      } else if (result === "draw") {
        this.setState({ board, gameOver: true, message: "Draw game." });
      } else {
        this.setState({ board, currentPlayer: this.changePlayer() });
      }
    } else {
      this.setState({
        message: "Game over. Click on the reset button to start a new game.",
      });
    }
    // CONSOLE WITH PLAYER MOVES
    console.log(this.state.board);
  }

  checkVerticalMoves(board) {
    // CHECK ONLY IF ROW IS 3 OR GREATER
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c]) {
          // CHECK IF OUR TOKENS ARE ALL IN THE SAME COLUMN
          if (
            board[r][c] === board[r - 1][c] &&
            board[r][c] === board[r - 2][c] &&
            board[r][c] === board[r - 3][c]
          ) {
            return board[r][c];
          }
        }
      }
    }
  }

  checkHorizontalMoves(board) {
    // CHECK ONLY IF COLUMN IS 3 OR LESS
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c]) {
          if (
            board[r][c] === board[r][c + 1] &&
            board[r][c] === board[r][c + 2] &&
            board[r][c] === board[r][c + 3]
          ) {
            return board[r][c];
          }
        }
      }
    }
  }

  checkRightDiagonalMoves(board) {
    // CHECK ONLY IF ROW IS 3 OR GREATER && COLUMN IS 3 OR LESS
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c]) {
          if (
            board[r][c] === board[r - 1][c + 1] &&
            board[r][c] === board[r - 2][c + 2] &&
            board[r][c] === board[r - 3][c + 3]
          ) {
            return board[r][c];
          }
        }
      }
    }
  }

  checkLeftDiagonalMoves(board) {
    // CHECK ONLY IF ROW IS 3 OR GREATER && COLUMN IS 3 OR GREATER
    for (let r = 3; r < 6; r++) {
      for (let c = 3; c < 7; c++) {
        if (board[r][c]) {
          if (
            board[r][c] === board[r - 1][c - 1] &&
            board[r][c] === board[r - 2][c - 2] &&
            board[r][c] === board[r - 3][c - 3]
          ) {
            return board[r][c];
          }
        }
      }
    }
  }

  checkDraw(board) {
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c] === null) {
          return null;
        }
      }
    }
    return "draw";
  }

  checkAllMoves(board) {
    return (
      this.checkVerticalMoves(board) ||
      this.checkRightDiagonalMoves(board) ||
      this.checkLeftDiagonalMoves(board) ||
      this.checkHorizontalMoves(board) ||
      this.checkDraw(board)
    );
  }

  // INITIATE BOARD WHEN FIRST APPEARS ON SCREEN
  componentDidMount() {
    this.initBoard();
  }

  render() {
    return (
      <main>
        <section>
          <Rules />
          <div className="board">
            <h1>Puissance 4</h1>
            <p className="message">{this.state.message}</p>

            {/* BOARD */}
            <table>
              <tbody>
                {/* ALL ROWS MAPPING TO GET THE ROW COMPONENT */}
                {this.state.board.map((row, i) => (
                  <Row key={i} row={row} play={this.play} />
                ))}
              </tbody>
            </table>

            {/* RESET BUTTON */}
            <div
              className="button"
              onClick={() => {
                this.initBoard();
              }}
            >
              RESET
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default App;
