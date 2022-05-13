import React from 'react';
import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";

const KakaoAuth = () => {
    const REST_API_KEY = "969dcf4c33872c7c7d40cb57937eafa4";
    const REDIRECT_URI = "http://localhost:3000/auth/kakao/callback";
    const CLIENT_SECRET = "Ib0iITDoYnI6NYcBpL4M3YqovFsZi1wy";
    const code = new URL(window.location.href).searchParams.get("code");
    let navigate = useNavigate();

    const getToken = async () => {
    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });
    try {
      // access token 가져오기
      const res = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        payload
      );
      
      // Kakao Javascript SDK 초기화
      window.Kakao.init(REST_API_KEY);
      // access token 설정
      window.Kakao.Auth.setAccessToken(res.data.access_token);
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getToken();
    
  }, []);
  return null;
};


export default KakaoAuth;



  