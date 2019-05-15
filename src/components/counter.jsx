import React from "react";
import { connect } from "react-redux";

//amount of generations
class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="counter">Count: {this.props.genCount}</div>;
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    genCount: state.board.genCount
  };
};

export default connect(mapStateToProps)(Counter);