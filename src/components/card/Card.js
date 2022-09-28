import React from 'react'
import styles from './card.module.css'

const Card = ({ id, name, age, address, phone, type ,deleteHandler}) => {
  return (
    <div className={styles.cardWrapper} style = {{ backgroundColor : (type === "Girl") ? "pink" : "#ababab" }}>
             <div>id   : {id}</div>
             <div>Name   : {name}</div>
             <div>Age    : {age}</div>
             <div>Address : {address}</div>
             <div>Phone  : {phone}</div>
             <div>Type  : {type}</div>
             <div className={styles.deleteBtn}
             onClick={(e) => deleteHandler(e,id)}>x</div>
        </div>
  )
}

export default Card