import React from 'react'

const Filter = ({nameFilter, handleNameFilterChange}) => (
    <p>filter shown with <input value={nameFilter} onChange={handleNameFilterChange} /></p>
)

export default Filter