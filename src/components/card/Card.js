import React from 'react'
import './card.css'

const Card = ({id, name, age, adress, phone, type, handleDeleteStudent}) => {
  return (
    <div className='cardContainer'  style={{backgroundColor:(type === "Girl") ? "pink" : "#aeaeae"}}>
        <div>Name  : {name} </div>
        <div>Age   : {age} </div>
        <div>Adress: {adress} </div>
        <div>Phone : {phone} </div>
        <div className='deleteBtn'
        onClick={(e) => handleDeleteStudent(e,id)}
        >x</div>
      </div>
  )
}

export default Card