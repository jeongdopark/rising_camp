import React from 'react';


const KakaoLogin = () => {
    const REST_API_KEY = "969dcf4c33872c7c7d40cb57937eafa4";
    const REDIRECT_URI = "http://localhost:3000/auth/kakao/callback";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    
  return (
    <>
        <div>
        <h1><a href={KAKAO_AUTH_URL}>Kakao Login</a></h1>
        </div>
    </>
  );
};

export default KakaoLogin;