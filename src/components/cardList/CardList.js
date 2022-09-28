import React from 'react'
import Card from '../card/Card'

const CardList = ({studentsList, deleteHandler}) => {

    const cards = studentsList.map(({id, ...otherProps}) => <Card key = {id} id={id} deleteHandler= {deleteHandler} {...otherProps}/>)
    
  return (
    <div>{cards}</div>
  )
}

export default CardList