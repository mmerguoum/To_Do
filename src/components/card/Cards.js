import React from 'react'
import './cards.css'

const Cards = ({students, handleDeleteStudent}) => {
  return (students.map((student) =>
    <div className='cardContainer' key={student.id} style={{backgroundColor:(student.type === "Girl") ? "pink" : "green"}}>
        <div>Name  : {student.name} </div>
        <div>Age   : {student.age} </div>
        <div>Adress: {student.adress} </div>
        <div>Phone : {student.phone} </div>
        <div className='deleteBtn'
        onClick={(e) => handleDeleteStudent(e,student.id)}
        >x</div>
      </div>
      )
        ) 
       
      
}

export default Cards