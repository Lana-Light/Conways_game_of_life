import React from "react";
import { connect } from "react-redux";

const addCell = id => ({ type: "ADD_CELL", id });
const removeCell = id => ({ type: "REMOVE_CELL", id });

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.handleExist = this.handleExist.bind(this);
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.exist != nextProps.exist) {
      return true;
    } else {
      return false;
    }
  }

  handleExist() {
    if (this.props.generate == null) {
      if (this.props.exist) {
        this.props.removeCell(this.props.id);
      } else {
        this.props.addCell(this.props.id);
      }
    }
  }

  render() {
    const exist = this.props.exist ? " exist" : "";
    return <span className={`cell${exist}`} onClick={this.handleExist} />;
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    generate: state.board.generate
  };
};

const mapDispatchToProps = { addCell, removeCell };

export default connect(mapStateToProps, mapDispatchToProps)(Cell);