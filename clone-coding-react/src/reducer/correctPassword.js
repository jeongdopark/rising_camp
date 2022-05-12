
const CORRECT_PASSWORD = 'correctPassword/CORRECT_PASSWORD' // 액션 타입

export const correct_password = (input) => (
    { 
        type : CORRECT_PASSWORD,
        input : input
    
    }) // 액션 함수

const initialState_correct_password = {
    correct_password : ''
}

function correct_password_reducer(state=initialState_correct_password, action){ // 리듀서 
    switch(action.type){
        case CORRECT_PASSWORD:
            return{
                ...state,
                correct_password : action.input
            }
            default:
                return state
    }
}

export default correct_password_reducer;