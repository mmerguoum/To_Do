import React from 'react'

const Form = (props) => {
  return (
    <div 
    className={props.className}
    style={props.style}
    >
         {props.children}
    </div>
  )
}

export default Form