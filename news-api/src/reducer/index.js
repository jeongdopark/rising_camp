import { combineReducers } from "redux";
import loginInfo from './LoginInfo';
import  save  from "./Save";

const rootReducer = combineReducers({
    loginInfo,
    save
})

export default rootReducer; 