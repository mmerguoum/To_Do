import React from 'react'
import './cards.css'

const Cards = ({students, handleDeleteStudent}) => {
  return (students.map((student, idx) =>
    <div className='cardContainer' key={idx}>
        <div>Name  : {student.name} </div>
        <div>Age   : {student.age} </div>
        <div>Adress: {student.adress} </div>
        <div>Phone : {student.phone} </div>
        <div className='deleteBtn'
        onClick={(e) => handleDeleteStudent(e,idx)}
        >x</div>
      </div>
      )
        ) 
       
      
}

export default Cards