import { combineReducers } from "redux";
import changeThemeReducer from "./ChangeThemeReducer";
import favReducer from "./Reducers";
import authReducer from "./AuthReducer";




export default combineReducers({
   MyTheme: changeThemeReducer,
   favorites: favReducer, 
   auth: authReducer,
})