
const SIGNUP_MODAL_DISPLAY = 'signup/SIGNUP_MODAL_DISPLAY'; // 액션 정의

export const signup = () => ({ type : SIGNUP_MODAL_DISPLAY })

const initialState_signup = { boolean : false }

function signup_display(state=initialState_signup, action){
    switch(action.type){
        case SIGNUP_MODAL_DISPLAY:
            return{
                boolean : !state.boolean
            }
        default:
            return state
    }
}

export default signup_display;
