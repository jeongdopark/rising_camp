import Reac, { useEffect } from 'react';


const MenuBarElement = ({element, loginModal, setLoginModal, setEmailModal, emailModal}) => {

    const onClickModal = () => {
        if(loginModal === false){
            setLoginModal(true)
            // setEmailModal(true)
        }else{
            setLoginModal(false)
            // setEmailModal(false)

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