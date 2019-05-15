import React from "react";
import { connect } from "react-redux";

import Controls from "./controls.jsx";
import Patterns from "./patterns.jsx";

//controls and patterns menu
class Generate extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: "cont"
    };
    this.changeView = this.changeView.bind(this);
  }

  changeView(e) {
    const id = e.currentTarget.id;
    if (id !== this.state.visible) {
      this.setState({ visible: id });
    }
  }

  render() {
    const vis = this.state.visible;
    return (
      <>
        <div className="tabs">
          <span
            className={`tab${vis == "cont" ? " active" : ""}`}
            id="cont"
            onClick={this.changeView}
          >
            Controls
          </span>
          <span
            className={`tab${vis == "pat" ? " active" : ""}`}
            id="pat"
            onClick={this.changeView}
          >
            Patterns
          </span>
        </div>
        <div style={{ display: vis == "cont" ? "block" : "none" }}>
          <Controls />
        </div>
        <div style={{ display: vis == "pat" ? "block" : "none" }}>
          <Patterns />
        </div>
      </>
    );
  }
}

export default Generate;