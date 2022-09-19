import React, { Fragment } from 'react'
import ReactDOM from 'react-dom';
import styles from './modal.module.css'


const Backdrop = ({close}) => <div className={styles.backdrop} onClick={close}></div>
const Overlay = () => <div className={styles.overlay}></div>

const Modal = ({show, closeModal}) => {
  return (
    show && (<Fragment>
        {ReactDOM.createPortal(
            <Fragment>
                <Backdrop close={closeModal}/>
                <Overlay/>
            </Fragment>,
            document.getElementById('modal')
        )}
    </Fragment>
    )
  )
}

export default Modal