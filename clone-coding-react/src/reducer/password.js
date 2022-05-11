
const PASSWORD_MODAL_DISPLAY = 'password/PASSWORD_MODAL_DISPLAY'; // 액션 타입

export const password = () => ({ type : PASSWORD_MODAL_DISPLAY });

const initialState_password = { boolean : false };

function password_display(state = initialState_password, action){
    switch(action.type){
        case PASSWORD_MODAL_DISPLAY:
            return{
                boolean : !state.boolean
            }
        default:
            return state;
    }
}

export default password_display

