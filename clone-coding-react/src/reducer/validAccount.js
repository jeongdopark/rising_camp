
const VALID_ACCOUNT = 'account/VALID_ACCOUNT'; // 액션 타입 

export const account = () => ({ type : VALID_ACCOUNT });

const initialState_account = {                  // 초기 상태
    boolean : true
};

function valid(state=initialState_account, action){        // 리듀서 함수
    switch(action.type){
        case VALID_ACCOUNT:
            return{
                boolean : !state.boolean
            }
        default:
            return state;
    }
}

export default valid;