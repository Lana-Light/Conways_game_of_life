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

//color of board and cells, size of board
const setCellsColor = color => ({ type: "SET_CELLS_COLOR", color });
const setBoardColor = color => ({ type: "SET_BOARD_COLOR", color });
const setBoardSide = sideLength => ({ type: "SET_BOARD_SIZE", sideLength });

const styles = {
  root: {
    "&$selected": {
      backgroundColor: "#3f51b5",
      color: "white"
    }
  },
  selected: {}
};

class Theme extends React.Component {
  constructor(props) {
    super(props);
    this.changeCellsColor = this.changeCellsColor.bind(this);
    this.changeBoardColor = this.changeBoardColor.bind(this);
    this.changeBoardSide = this.changeBoardSide.bind(this);
  }

  changeCellsColor(e) {
    this.props.setCellsColor(e.target.value);
  }
  changeBoardColor(e) {
    this.props.setBoardColor(e.target.value);
  }
  changeBoardSide(e) {
    const val = e.target.value;
    val > 4 && val < 101 && this.props.setBoardSide(val);
  }

  render() {
    return (
      <div className="settingsBlock">
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
      </div>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    cellsColor: state.cells.color,
    boardColor: state.board.color,
    sideLength: state.board.sideLength
  };
};

const mapDispatchToProps = { setCellsColor, setBoardColor, setBoardSide };

const ThemeCon = connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(Theme)
);

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
        {this.state.visible && <ThemeCon />}
      </div>
    );
  }
}

export default Settings;