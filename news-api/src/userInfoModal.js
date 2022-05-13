import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux'
const UserInfoModal = () => {
    const userInfo_selector = useSelector((state) => state.loginInfo)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    // <UserOutlined className="userIcon" stlye={{color:"white"}}/>  
    return (
      <div className="userInfoModal">
        <Button type="primary" onClick={showModal}>
            User Info
        </Button>
        <Modal title="User Information" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <div className="info-container">
                <div className="userImg-wrapper">
                    <img className="userImg" src={userInfo_selector.user_img} alt="profile" style={{width:"50px", height:"50px"}}></img>
                </div>
                <div className="userInfo-wrapper">
                    <div>Unique number : {userInfo_selector.user_unique_number}</div>
                    <div>Name : {userInfo_selector.user_name}</div>
                </div>
            </div>
        </Modal>
      </div>
    );
  };
  
  export default UserInfoModal;