const sideLength = 40;
const startingConfig = {
  sideLength,
  generate: null,
  genCount: 0,
  color: "black"
};
const board = (state = startingConfig, action) => {
  if (action.type == "TOGGLE_GENERATE") {
    return { ...state, generate: action.generate };
  } else if (action.type == "NEXT_GEN") {
    return { ...state, genCount: state.genCount + 1 };
  } else if (action.type == "SET_BOARD_COLOR") {
    return { ...state, color: action.color };
  } else if (action.type == "SET_BOARD_SIZE") {
    return { ...state, sideLength: action.sideLength };
  } else if (action.type == "CLEAR_BOARD") {
    return { ...state, genCount: 0, generate: null };
  } else if (action.type == "RESET_GAME") {
    return { ...state, genCount: 0, generate: null };
  } else {
    return state;
  }
};

export default board;