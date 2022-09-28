import React, { useState } from 'react'
import styles from './filter.module.css'

const Filter = ({ filterNames }) => {
    const [filter, setFilter] = useState("")

    const handleFilter = (e) => {
        const name = e.target.value;
        setFilter(name)
        filterNames(name)
    }

    
  return (
    <div className={styles.inputFilter}>
        <input type="text" 
        placeholder='Filter By Name...' 
        value={filter} 
        onChange={handleFilter}
        />
    </div>
  )
}

export default Filter