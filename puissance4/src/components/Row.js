//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//                            ROW.JS                              //
//                        LINKED TO APP.JS                        //
//                  DEFINES CELLS FOR EVERY ROWS                  //
//                                                                //
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

// REACT
import React from "react";
// COMPONENT
import Cell from "./Cell";

class Row extends React.Component {
  render() {
    const { row, play, resetTimer } = this.props;
    return (
      <tr>
        {/* ALL CELLS MAPPING TO GET THE CELL COMPONENT */}
        {row.map((cell, i) => (
          <Cell
            key={i}
            value={cell}
            columnIndex={i}
            play={play}
            resetTimer={resetTimer}
          />
        ))}
      </tr>
    );
  }
}

export default Row;
