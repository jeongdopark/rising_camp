

const MENU_MODAL_DISPLAY = 'menuModal/MENU_DISPLAY'; // 액션 타입

export const menuModalDisplay = () => ({ type : MENU_MODAL_DISPLAY }) // 액션 생성 함수

const initialState_menu_modal = {
    boolean : false
};

function menuModal(state=initialState_menu_modal, action){
    switch(action.type){
        case MENU_MODAL_DISPLAY:
            return{
                boolean : !state.boolean
            }
        default:
            return state;
    }
}

export default menuModal;