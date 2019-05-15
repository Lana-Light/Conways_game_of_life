import React from "react";
import { connect } from "react-redux";
import Fab from "@material-ui/core/Fab";

import randomPosition from "../utils/randomize";
import createNextGeneration from "../utils/next-gen";

const toggleGenerate = generate => ({ type: "TOGGLE_GENERATE", generate });
const updateCells = cells => ({ type: "UPDATE_CELLS", cells });
const updateGenCount = () => ({ type: "NEXT_GEN" });
const clearBoard = () => ({ type: "CLEAR_BOARD" });

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.generateOne = this.generateOne.bind(this);
    this.generateMany = this.generateMany.bind(this);
    this.clearBoard = this.clearBoard.bind(this);
    this.randomize = this.randomize.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.generate != nextProps.generate) {
      return true;
    } else {
      return false;
    }
  }

  generateOne() {
    console.log(Object.keys(this.props.cells));
    if (this.props.generate == null) {
      const newCells = createNextGeneration(
        this.props.sideLength,
        this.props.cells
      );
      this.props.updateCells(newCells);
      this.props.updateGenCount();
    }
  }
  generateMany() {
    if (this.props.generate != null) {
      clearInterval(this.props.generate);
      this.props.toggleGenerate(null);
    } else {
      const timerId = setInterval(() => {
        const newCells = createNextGeneration(
          this.props.sideLength,
          this.props.cells
        );
        this.props.updateCells(newCells);
        this.props.updateGenCount();
      }, 500);
      this.props.toggleGenerate(timerId);
    }
  }
  clearBoard() {
    if (this.props.generate != null) {
      clearInterval(this.props.generate);
    }
    this.props.clearBoard();
  }
  randomize() {
    this.clearBoard();
    const newCells = randomPosition(this.props.sideLength);
    this.props.updateCells(newCells);
  }

  componentDidMount() {
    this.randomize();
    this.generateMany();
  }

  render() {
    return (
      <div className="generate">
        <button onClick={this.generateMany}>
          {this.props.generate != null ? "Stop" : "Start to generate"}
        </button>
        <button onClick={this.generateOne}>Next generation</button>
        <button onClick={this.randomize}>Randomize</button>
        <button className="clear-btn" onClick={this.clearBoard}>
          Clear board
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    generate: state.board.generate,
    sideLength: state.board.sideLength,
    cells: state.cells.cells
  };
};

const mapDispatchToProps = {
  toggleGenerate,
  updateCells,
  updateGenCount,
  clearBoard
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);