import React, { Fragment, useState } from 'react'
import Form from '../layouts/Form';
import Button from '../layouts/Button';
import styles from '../modal/modal.module.css'


const AddUser = ({addNewUser}) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [type, setType] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        addNewUser({
            id:Math.round(Math.random()*10),
            name,
            age,
            address,
            phone,
            type,
          })
          setName('')
          setAge('')
          setAddress('')
          setPhone('')
          setType('')
    }

    const handleName = (e) => {
        return setName(e.target.value)
    }
    const handleAge = (e) => {
        return setAge(e.target.value)
    }
    const handleAddress = (e) => {
        return setAddress(e.target.value)
    }
    const handlePhone = (e) => {
    return setPhone(e.target.value)
    }
    const handleType = (e) => {
        return setType(e.target.value)
    }


    const videButton = () => {
      setName('')
      setAge('')
      setAddress('')
      setPhone('')
      setType('')
    }


  return (
    <Fragment>
        <form onSubmit={handleSubmit}>
            <div className={styles.titleForm}>NEW STUDENT</div>
            <div className={styles.containerDiv}>
                <Form.Controller>  
                    <label htmlFor='name' style={{color:'rgb(0, 0, 90)'}}>Name :</label>
                    <input 
                     type='text'
                     id='name' 
                     placeholder='Enter Your Name ...' 
                     className={styles.inputName} 
                     style={{marginLeft:'28px'}} 
                     onChange={handleName} 
                     value={name}/>
                </Form.Controller>
                <Form.Controller>
                    <label htmlFor='age' style={{color:'rgb(0, 0, 90)'}}>Age :</label>
                    <input 
                    type='text' 
                    id='age' 
                    placeholder='Enter Your Age ...'  
                    style={{marginLeft:'41px'}} 
                    onChange={handleAge} 
                    value={age}/>
                </Form.Controller>   
                <Form.Controller>
                    <label htmlFor='phone' style={{color:'rgb(0, 0, 90)'}}>Phone :</label>
                    <input 
                    type='text' 
                    id='phone' 
                    placeholder='Enter Your Phone ...'  
                    onChange={handlePhone} 
                    value={phone}/>
                </Form.Controller> 
                <Form.Controller>
                    <label htmlFor='address' style={{color:'rgb(0, 0, 90)'}}>Address :</label>
                    <input 
                    type='text' 
                    id='address' 
                    placeholder='Enter Your Address ...' 
                    style={{marginLeft:'12px'}} 
                    onChange={handleAddress} 
                    value={address}/>
                </Form.Controller> 
                <Form.Controller>
                    <label htmlFor='type' style={{color:'rgb(0, 0, 90)'}}>Type :</label>
                    <select 
                    style={{marginLeft:'34px', color:`${ type==="Boy" | type==="Girl" ? 'black' : 'grey'}`}} 
                    id="type" 
                    value={type} 
                    onChange={handleType}
                    >
                            <option style={{display: 'none'}}>--choose Your Genre ...--</option>
                            <option value="Boy" style={{color: 'black'}}>Boy</option>
                            <option value="Girl" style={{color: 'black'}}>Girl</option>
                    </select>
                </Form.Controller>                       
                    <div className={styles.divButton}>
                        <Button type="submit" > Submit </Button>
                        <Button type="reset" 
                        onClick={videButton}
                        style={{marginLeft:'20px'}}> Reset </Button>
                    </div>
            </div>
        </form>
    </Fragment>
  )
}

export default AddUser