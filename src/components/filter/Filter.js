import React, {useState} from 'react'
import './filter.css'

const Filter = ({ filtreHandle }) => {
    const [ filter, setFilter ] = useState("")

    const handleFilter = (e) => {
        const name = e.target.value
        setFilter(name)
        filtreHandle(name)
    }

  return (
    <div className='inputFilter'>
        <input
        type='text' 
        placeholder='Filter By Name...'
        value={filter}
        onChange={handleFilter}
        />
    </div>
  )
}

export default Filter