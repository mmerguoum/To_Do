import React, { Fragment } from 'react'
import ReactDOM from 'react-dom';
import styles from './modal.module.css'


const Backdrop = () => <div className={styles.backdrop}></div>
const Overlay = () => <div className={styles.overlay}></div>

const Modal = () => {
  return (
    <Fragment>
        {ReactDOM.createPortal(
            <Fragment>
                <Backdrop/>
                <Overlay/>
            </Fragment>,
            document.getElementById('modal')
        )}
    </Fragment>
  )
}

export default Modal