import React from "react";
import { connect } from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Fab from "@material-ui/core/Fab";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";

//color of board and cells, size of board and mode
const setCellsColor = color => ({ type: "SET_CELLS_COLOR", color });
const setBoardColor = color => ({ type: "SET_BOARD_COLOR", color });
const setBoardSide = sideLength => ({ type: "SET_BOARD_SIZE", sideLength });
const setBoardMode = mode => ({ type: "SET_BOARD_MODE", mode });

const styles = {
  root: {
    "&$selected": {
      backgroundColor: "#3f51b5",
      color: "white"
    }
  },
  selected: {}
};

class CellsColor extends React.Component {
  constructor(props) {
    super(props);
    this.changeCellsColor = this.changeCellsColor.bind(this);
  }
  changeCellsColor(e) {
    this.props.setCellsColor(e.target.value);
  }

  render() {
    return (
      <fieldset>
        <legend>Choose cells' color</legend>
        <Select
          value={this.props.cellsColor}
          onChange={this.changeCellsColor}
          input={<Input name="cell-color" id="cell-color" />}
        >
          <MenuItem
            classes={{
              root: this.props.classes.root,
              selected: this.props.classes.selected
            }}
            value="purple"
          >
            Purple
          </MenuItem>
          <MenuItem
            classes={{
              root: this.props.classes.root,
              selected: this.props.classes.selected
            }}
            value="cyan"
          >
            Cyan
          </MenuItem>
          <MenuItem
            classes={{
              root: this.props.classes.root,
              selected: this.props.classes.selected
            }}
            value="green"
          >
            Green
          </MenuItem>
          <MenuItem
            classes={{
              root: this.props.classes.root,
              selected: this.props.classes.selected
            }}
            value="lime"
          >
            Lime
          </MenuItem>
          <MenuItem
            classes={{
              root: this.props.classes.root,
              selected: this.props.classes.selected
            }}
            value="orange"
          >
            Orange
          </MenuItem>
          <MenuItem
            classes={{
              root: this.props.classes.root,
              selected: this.props.classes.selected
            }}
            value="orchid"
          >
            Orchid
          </MenuItem>
          <MenuItem
            classes={{
              root: this.props.classes.root,
              selected: this.props.classes.selected
            }}
            value="crimson"
          >
            Crimson
          </MenuItem>
        </Select>
      </fieldset>
    );
  }
}

class BoardColor extends React.Component {
  constructor(props) {
    super(props);
    this.changeBoardColor = this.changeBoardColor.bind(this);
  }
  changeBoardColor(e) {
    this.props.setBoardColor(e.target.value);
  }

  render() {
    return (
      <fieldset>
        <legend>Choose board's color</legend>
        <RadioGroup
          name="boardColor"
          value={this.props.boardColor}
          onChange={this.changeBoardColor}
        >
          <FormControlLabel
            value="white"
            control={<Radio color="primary" />}
            label="White"
            labelPlacement="start"
          />
          <FormControlLabel
            value="grey"
            control={<Radio color="primary" />}
            label="Grey"
            labelPlacement="start"
          />
          <FormControlLabel
            value="black"
            control={<Radio color="primary" />}
            label="Black"
            labelPlacement="start"
          />
        </RadioGroup>
      </fieldset>
    );
  }
}

class BoardSize extends React.Component {
  constructor(props) {
    super(props);
    this.changeBoardSide = this.changeBoardSide.bind(this);
  }
  changeBoardSide(e) {
    const val = e.target.value;
    val > 4 && val < 101 && this.props.setBoardSide(val);
  }

  render() {
    return (
      <fieldset>
        <legend>Choose board's size</legend>
        <label>
          <Input
            type="number"
            value={this.props.sideLength}
            min="5"
            max="100"
            step="1"
            onChange={this.changeBoardSide}
          />
        </label>
      </fieldset>
    );
  }
}

class BoardMode extends React.Component {
  constructor(props) {
    super(props);
    this.changeBoardMode = this.changeBoardMode.bind(this);
  }
  changeBoardMode(e) {
    e.target.value != this.props.mode &&
      this.props.setBoardMode(e.target.value);
  }

  render() {
    return (
      <fieldset>
        <legend>Choose board's mode</legend>

        <div>
          <h4>Open (without boundaries)</h4>
          <p>
            Cells from one edge will jump to the contrary edge around the board.
          </p>
          <FormControlLabel
            value="open"
            control={
              <Radio
                name="mode"
                onChange={this.changeBoardMode}
                checked={this.props.mode == "open"}
                color="primary"
              />
            }
            label="Open"
            labelPlacement="start"
          />
        </div>

        <div>
          <h4>Close (with boundaries)</h4>
          <p>
            Cells can't jump through the boundary from one edge to another edge.
          </p>
          <FormControlLabel
            value="close"
            control={
              <Radio
                name="mode"
                onChange={this.changeBoardMode}
                checked={this.props.mode == "close"}
                color="primary"
              />
            }
            label="Close"
            labelPlacement="start"
          />
        </div>
      </fieldset>
    );
  }
}

const CellsColorCon = connect(state => ({ cellsColor: state.cells.color }), {
  setCellsColor
})(withStyles(styles)(CellsColor));

const BoardColorCon = connect(state => ({ boardColor: state.board.color }), {
  setBoardColor
})(BoardColor);

const BoardSizeCon = connect(state => ({ sideLength: state.board.sideLength }), { 
  setBoardSide
})(BoardSize);

const BoardModeCon = connect(state => ({ mode: state.board.mode }), {
  setBoardMode
})(BoardMode);

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.changeView = this.changeView.bind(this);
  }
  changeView(e) {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    return (
      <div>
        <Fab
          variant="extended"
          size="small"
          onClick={this.changeView}
          color="primary"
        >
          Settings
        </Fab>
        {this.state.visible && (
          <div className="settingsBlock">
            <CellsColorCon />
            <BoardColorCon />
            <BoardSizeCon />
            <BoardModeCon />
          </div>
        )}
      </div>
    );
  }
}

export default Settings;