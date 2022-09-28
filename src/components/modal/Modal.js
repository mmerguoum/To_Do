import React, { Fragment } from 'react'
import ReactDOM from 'react-dom';
import styles from './modal.module.css'




const Backdrop = ({close}) => <div className={styles.backDrop} onClick={close}></div>
const Overlay  = ({children}) => 

<div className={styles.overlay}>
   {children}
</div> 

const Modal = ({children, show, closeModel}) => {
    
return (
    show && (<Fragment>
                {ReactDOM.createPortal(
                <Fragment>
                    <Backdrop close={closeModel}/>
                    <Overlay>{children}</Overlay>
                </Fragment>,
                    document.getElementById('modal'))}
            </Fragment>
     )
  )
}

export default Modal