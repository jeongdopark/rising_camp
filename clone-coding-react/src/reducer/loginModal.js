
const LOGIN_MODAL_DISPLAY = 'loginModal/LOGIN_DISPLAY'; // 액션 타입

export const loginModalDisplay = () => ({ type : LOGIN_MODAL_DISPLAY }) // 액션 생성 함수

const initialState_login_modal = {                  // 초기 상태
    boolean : false
};

function loginModal(state=initialState_login_modal, action){        // 리듀서 함수
    switch(action.type){
        case LOGIN_MODAL_DISPLAY:
            return{
                boolean : !state.boolean
            }
        default:
            return state;
    }
}

export default loginModal;