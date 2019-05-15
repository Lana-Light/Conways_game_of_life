import React from "react";
import { connect } from "react-redux";

import { patternsArr, patterns } from "../utils/patterns";

const resetGame = () => ({ type: "RESET_GAME" });
const updateCells = cells => ({ type: "UPDATE_CELLS", cells });
const setBoardSide = sideLength => ({ type: "SET_BOARD_SIZE", sideLength });

class Patterns extends React.Component {
  constructor(props) {
    super(props);
    this.setPattern = this.setPattern.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return false;
  }

  setPattern(e) {
    const id = e.currentTarget.id;
    if (this.props.generate != null) {
      clearInterval(this.props.generate);
    }
    this.props.resetGame();
    const newCells = patterns[id];
    const { size, minSize } = patternsArr[id];
    if (size) {
      this.props.setBoardSide(size);
    } else if (
      minSize > this.props.sideLength ||
      minSize < this.props.sideLength
    ) {
      this.props.setBoardSide(minSize);
    }
    this.props.updateCells(newCells);
  }

  render() {
    const pats = Object.keys(patternsArr);
    const buttons = pats.map((name, i) => {
      return (
        <button key={name} id={name} onClick={this.setPattern}>
          {patternsArr[name].text}
        </button>
      );
    });

    return <div className="generate">{buttons}</div>;
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    generate: state.board.generate,
    sideLength: state.board.sideLength
  };
};

const mapDispatchToProps = { updateCells, resetGame, setBoardSide };

export default connect(mapStateToProps, mapDispatchToProps)(Patterns);