// Password 일치 여부 

const PASSWORD_VALID = 'passwordvalid/PASSWORD_VALID' // 액션 타입

export const password_valid_action = (input) => ({ 
    type : PASSWORD_VALID,
    input : input
}) // 액션 함수

const initialState_password_valid = { boolean : true }

function password_valid(state=initialState_password_valid, action){
    switch(action.type){
        case PASSWORD_VALID:
            return{
                boolean : action.input
            }
        default:
            return state
    }
}

export default password_valid