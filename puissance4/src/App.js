// REACT
import React from "react";
// CSS
import "./App.css";
// COMPONENTS
import Board from "./components/Board";
import ResetButton from "./components/ResetButton";
// BOOTSTRAPS
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return <Board />;
  }
}

export default App;
