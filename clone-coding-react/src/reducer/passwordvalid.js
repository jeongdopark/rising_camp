// Password 일치 여부 

const PASSWORD_VALID = 'passwordvalid/PASSWORD_VALID' // 액션 타입

export const password_valid_action = () => ({ type : PASSWORD_VALID }) // 액션 함수

const initialState_password_valid = { boolean : false }

function password_valid(state=initialState_password_valid, action){
    switch(action.type){
        case PASSWORD_VALID:
            return{
                boolean : !state.boolean
            }
        default:
            return state
    }
}

export default password_valid