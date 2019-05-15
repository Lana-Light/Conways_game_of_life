const cells = (state = { color: "lime", cells: {} }, action) => {
  if (action.type == "ADD_CELL") {
    const cells2 = { ...state.cells, [action.id]: true };
    return { ...state, cells: cells2 };
  } else if (action.type == "REMOVE_CELL") {
    let cells2 = { ...state.cells };
    delete cells2[action.id];
    return { ...state, cells: cells2 };
  } else if (action.type == "UPDATE_CELLS") {
    return { ...state, cells: action.cells };
  } else if (action.type == "SET_CELLS_COLOR") {
    return { ...state, color: action.color };
  } else if (action.type == "CLEAR_BOARD") {
    return { ...state, cells: {} };
  } else {
    return state;
  }
};

export default cells;