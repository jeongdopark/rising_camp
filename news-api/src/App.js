import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'; 
import NewsList from './components/NewsList';
import SpinPage from './spin';
import Test from './test';
import KakaoLogin from './login/KakaoLogin';
import KakaoAuth from './login/KakaoAuth';
import KakaoProfile from './login/KaKaoProfile';


const App = () => {
    return(

        <BrowserRouter>
            <Routes>
                <Route path="/kakaoLogin" element={<KakaoLogin/>}/>
                <Route path="/auth/kakao/callback" element={<KakaoAuth/>}/>
                <Route path="/profile" element={<KakaoProfile/>}/>
                <Route path="/" element={<Test/>}/>
            </Routes>
        </BrowserRouter>
        
    )
}

export default App;
