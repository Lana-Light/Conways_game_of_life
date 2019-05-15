import { createStore, combineReducers } from "redux";

import boardReducer from "./reducers/board.js";
import cellsReducer from "./reducers/cells.js";

const reducer = combineReducers({ board: boardReducer, cells: cellsReducer });
const store = createStore(reducer);

export default store;