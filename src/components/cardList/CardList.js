import React from 'react'
import Card from '../card/Card'



const CardList = ({students, handleDeleteStudent}) => {

  const cards = students.map(({id,...otherProps}) => <Card key={id} id={id} handleDeleteStudent= {handleDeleteStudent} {...otherProps} />)

      return ( 
      <div>{cards}</div>
      )
        
}

export default CardList