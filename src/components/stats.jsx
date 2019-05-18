import React from "react";
import { connect } from "react-redux";

//amount of generations and mode of board cls='counter' cls='mode'
function Stat(props) {
  return (
    <div className="stat">
      {props.text}: {props.value}
    </div>
  );
}

function createStat(value) {
  return connect(state => ({ value: state.board[value] }))(Stat);
}

const Counter = createStat("genCount");
const Mode = createStat("mode");

function Stats(props) {
  return (
    <>
      <Counter text="Count" />
      <Mode text="Mode" />
    </>
  );
}

export default Stats;