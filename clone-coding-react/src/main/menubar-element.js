import Reac, { useEffect } from 'react';


const MenuBarElement = ({element, loginModal, setLoginModal}) => {

    const onClickModal = () => {
        if(loginModal === false){
            setLoginModal(true)
        }else{
            setLoginModal(false)

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