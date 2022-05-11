import Reac, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginModalDisplay } from '../reducer/loginModal';
const MenuBarElement = ({element}) => {
    const loginModal = useSelector((state) => state.loginModal)
    const login_dispatch = useDispatch()

    const onClickModal = () => {
        if(loginModal === false){
            login_dispatch(loginModalDisplay())
            // setEmailModal(true)
        }else{
            login_dispatch(loginModalDisplay())
        }
    }

    return(
        <>
            {element.valid === 1 || element.valid === 2 ?
            <div className={element.class} onClick={()=> onClickModal()}>
                {element.title}
            </div> 
            :
            <div className={element.class}>
                {element.title}
            </div> 
            }
        </>
        // <div className={element.class}>
        //     {element.title}
        // </div>
    )
}

export default MenuBarElement;