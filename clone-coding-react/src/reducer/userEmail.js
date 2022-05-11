
const USER_EMAIL = 'userEmail/USER_EMAIL';

export const user_email = (input) => ({ 
    type : USER_EMAIL,
    input : input
})

const initialState_email = {
    email : ''
}

function email(state=initialState_email, action){
    switch(action.type){
        case USER_EMAIL:
            return{
                ...state,
                email : action.input
            }
        default:
            return state;
    }
}

export default email;