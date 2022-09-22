import React, { Fragment } from 'react'
import ReactDOM from 'react-dom';
import styles from './modal.module.css'
import stylesLayout from '../layouts/layout.module.css'
import Button from '../layouts/Button'
import Form from '../layouts/Form';


const Backdrop = ({close}) => <div className={styles.backdrop} onClick={close}></div>
const Overlay = () => 
<div className={styles.overlay}>
  <form>
    <div className={styles.titleForm}>NEW STUDENT</div>
    <div className={styles.containerDiv}>
        <Form>
            <label htmlFor='name' style={{marginRight:'15px'}}>Name : </label>
            <input type='text' id='name' placeholder='Enter Your Name' className={styles.inputForm}/>
        </Form>
        <Form>
            <label htmlFor='age' style={{marginRight:'27px'}}>Age : </label>
            <input type='text' id='age' placeholder='Enter Your Age' className={styles.inputForm}/>
        </Form>
        <Form>
            <label htmlFor='address' style={{marginRight:'1px'}}>Address : </label>
            <input type='text' id='address' placeholder='Enter Your Address' className={styles.inputForm}/>
        </Form>
        <Form>
            <label htmlFor='phone' style={{marginRight:'14px'}}>Phone : </label>
            <input type='text' id='phone' placeholder='Enter Your Phone' className={styles.inputForm}/>
        </Form>
        <Form className={stylesLayout.divButton}>
            <Button type="submit">Submit</Button>
            <Button type="reset">Reset</Button>
        </Form>
    </div>
  </form>
</div>

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