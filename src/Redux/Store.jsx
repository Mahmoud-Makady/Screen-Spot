import {createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import favReducer from "./Reducers";


const store = createStore(favReducer, composeWithDevTools());

export default store;
