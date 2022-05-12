import logo from "./logo.svg";
import "./App.css";
import Auth from "./Auth";
import Main from "./main";
import Profile from './profile';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const REST_API_KEY = "969dcf4c33872c7c7d40cb57937eafa4";
  const REDIRECT_URI = "http://localhost:3000/auth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/auth/kakao/callback" element={<Auth/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
    </BrowserRouter>
    
  );
}
export default App;