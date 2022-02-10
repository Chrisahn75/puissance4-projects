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
    // BINDS
   
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

    this.setState({
      board,
      currentPlayer: this.state.player1,
      gameOver: false,
      message: "",
    });
  }

  // CURRENT PLAYER
  togglePlayer() {
    return this.state.currentPlayer === this.state.player1
      ? this.state.player2
      : this.state.player1;
  }

  play(c) {
    // PLACE TOKEN AT BOTTOM OF THE BOARD
    if (!this.state.gameOver) {
      let board = this.state.board;

      for (let r = 5; r >= 0; r--) {
        // A checker
        if (!board[r][c]) {
          board[r][c] = this.state.currentPlayer;
          break;
        }
      }

      // Check status of board
      let result = this.checkAll(board);

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
        this.setState({ board, currentPlayer: this.togglePlayer() });
      }
    } else {
      this.setState({
        message: "Game over. Click on the reset button to start a new game.",
      });
    }
  }

  checkVertical(board) {
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

  checkHorizontal(board) {
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

  checkDiagonalRight(board) {
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

  checkDiagonalLeft(board) {
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

  checkAll(board) {
    return (
      this.checkVertical(board) ||
      this.checkDiagonalRight(board) ||
      this.checkDiagonalLeft(board) ||
      this.checkHorizontal(board) ||
      this.checkDraw(board)
    );
  }

  // A checker - message d'erreur dans la console
  componentWillMount() {
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

export default Board;
