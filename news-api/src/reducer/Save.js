
const SAVE = 'Save/SAVE';  // 액션 타입

export const saveNews = (article) => ({ 
    type : SAVE,
    article : article
}) // 액션 생성 함수

const initial_save = {
    save_news : []
}

function save(state=initial_save, action){
    switch(action.type){
        case SAVE:
            return{
                ...state,
                save_news : state.concat(action.article)
            }
        default:
            return state;
    }
}

export default save;