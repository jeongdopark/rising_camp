import { combineReducers } from "redux";
import loginModal from './loginModal';
import menuModal from './menuModal';
import valid from './validAccount';
import email from './email';
import password from './password';
import signup from './signup';
import passwordValid from './passwordvalid';
import userEmail from './userEmail';
const rootReducer = combineReducers({
    loginModal,
    menuModal,
    valid,
    email,
    password,
    signup,
    passwordValid,
    userEmail
})

export default rootReducer;