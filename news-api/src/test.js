import React, { useEffect, useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import './news.css';
import NewsList from './components/NewsList';
import UserInfoModal from './userInfoModal';
import { useSelector, useDispatch } from 'react-redux'
import { loginInfo } from './reducer/LoginInfo';
const { Header, Content, Footer } = Layout;

const NavName = [
    {
        name : 'all',
        text : '전체보기'
    },
    {
        name : 'business',
        text : '비즈니스'
    },
    {
        name : 'entertainment',
        text : '엔터테인먼트'
    },
    {
        name : 'health',
        text : '건강'
    },
    {
        name : 'science',
        text : '과학'
    },
    {
        name : 'sports',
        text : '스포츠'
    },
    {
        name : 'technology',
        text : '기술'
    },
    {
        name : 'save',
        text : '저장한 뉴스'
    }
]
const Test = () => {
    const dispatch = useDispatch();
    const userInfo_selector = useSelector((state) => state.loginInfo)
    
    const onClickNav = (e) => {setSelectNav(e.key)}
    const [ selectNav, setSelectNav ] = useState('전체보기')
    const [ selectNavName, setSelectNavName ] = useState('all')
    useEffect(() => {
        NavName.map((e) => {
            if(e.text === selectNav){
                setSelectNavName(e.name)
            }
        })
    }, [selectNav])

    useEffect(() => {
        if(localStorage.getItem('login_status') === 'on'){
            const user_Info_localStorage = JSON.parse(localStorage.getItem('login_info'))
            dispatch(loginInfo(user_Info_localStorage))
        }
    },[])
    return(
        <Layout className="layout">
            <Header className="header-container">
            <div className="logo" />
            <Menu 
                onClick={onClickNav}
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={new Array(8).fill(null).map((_, index) => {
                const key = NavName[index].text;
                return {
                    key,
                    label: key,
                };
                })}
            >
             
            </Menu>
            
            <UserInfoModal/> 
            </Header>
            <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>뉴스</Breadcrumb.Item>
                <Breadcrumb.Item>{selectNav}</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
                <NewsList selectNavName={selectNavName}/>
            </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}


export default Test;