

const LOGIN_INFO = 'LoginInfo/LOGIN_INFO';  // 액션 타입

export const loginInfo = (info) => ({ 
    type : LOGIN_INFO,
    info : info
}) // 액션 생성 함수

const initial_login_info = {
    user_unique_number : '',
    user_name : '',
    user_img : ''
}

function user(state=initial_login_info, action){
    switch(action.type){
        case LOGIN_INFO:
            return{
                ...state,
                user_unique_number : action.info.number,
                user_name : action.info.name,
                user_img : action.info.img
            }
        default:
            return state;
    }
}

export default user;