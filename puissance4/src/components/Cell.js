//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//                            CELL.JS                             //
//                        LINKED TO ROW.JS                        //
//          DEFINES PLAYER'S CELL COLOR & MAKE IT CLICKABLE       //
//                                                                //
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

// REACT
import React from "react";

class Cell extends React.Component {
  render() {
    const { value, columnIndex, play, resetTimer } = this.props;

    // CHANGE CELL COLOR DEPENDING ON THE CURRENT PLAYER
    let color = "white"; // DEFAULT
    if (value === 1) {
      color = "red"; // PLAYER 1
    } else if (value === 2) {
      color = "yellow"; // PLAYER 2
    }

    return (
      <td>
        {/* CLICKABLE CELL */}
        <div
          className="cell"
          onClick={() => {
            play(columnIndex);
            resetTimer();
          }}
        >
          <div className={color}></div>
        </div>
      </td>
    );
  }
}

export default Cell;
