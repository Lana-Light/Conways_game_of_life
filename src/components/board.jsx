import React from "react";
import { connect } from "react-redux";

import Cell from "./cell.jsx";

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let cells = [];
    let sideLength = this.props.sideLength;
    for (let y = 0; y < sideLength; y++) {
      for (let x = 0; x < sideLength; x++) {
        const id = `${x}:${y}`;
        const exist = this.props.cells[id];
        let color = exist ? this.props.cellsColor : "";
        cells.push(<Cell key={`${x}:${y}`} exist={exist} id={id} />);
      }
    }
    const style = {
      gridTemplateColumns: `repeat(${sideLength}, 10px)`,
      gridTemplateRows: `repeat(${sideLength}, 10px)`,
      backgroundColor: this.props.boardColor
    };
    const color = " " + this.props.cellsColor;

    return (
      <div className={`board${color}`} style={style}>
        {cells}
      </div>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    sideLength: state.board.sideLength,
    cells: state.cells.cells,
    cellsColor: state.cells.color,
    boardColor: state.board.color
  };
};

export default connect(mapStateToProps)(Board);