

import React, { useEffect, useState } from "react";
const KakaoProfile = () => {
  const [user_id, setUserId] = useState();
  const [nickName, setNickName] = useState();
  const [profileImage, setProfileImage] = useState();
  const getProfile = async () => {
    try {
      // Kakao SDK API를 이용해 사용자 정보 획득
      let data = await window.Kakao.API.request({
        url: "/v2/user/me",  
      }
      );
      console.log(data.id, data.properties.nickname);
      localStorage.setItem('login_status', 'on');
      localStorage.setItem('login_info', JSON.stringify({
          number : data.id,
          name : data.properties.nickname,
          img : data.kakao_account.profile.profile_image_url,
          favorite : []
      }))
      
      // 사용자 정보 변수에 저장
      setUserId(data.id);
      setNickName(data.properties.nickname);
      setProfileImage(data.kakao_account.profile.profile_image_url);
      localStorage.setItem(data.properties.nickname, JSON.stringify([]))
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div>
      <h2>user_id : {user_id}</h2>
      <h2>user_nickName : {nickName}</h2>
      <img src={profileImage} alt="profile" style={{width:"50px", height:"50px"}}></img>
    </div>
  );
};
export default KakaoProfile;