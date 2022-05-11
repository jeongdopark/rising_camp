
const EMAIL_MODAL_DISPLAY = 'emailModal/EMAIL_MODAL_DISPLAY'; // 액션 타입

export const emailModalDisplay = () => ({ type : EMAIL_MODAL_DISPLAY})  // 액션 생성 함수

const initialState_email_modal = {
    boolean : false
};

function emailModal(state = initialState_email_modal, action){  // 리듀서 함수
    switch(action.type){
        case EMAIL_MODAL_DISPLAY:
            return{
                boolean : !state.boolean
            }
        default:
            return state
    }
}

export default emailModal

