import React from 'react'

const Filter = ({countryFilter, handleCountryFilterChange}) => (
    <p>find countries <input value={countryFilter} onChange={handleCountryFilterChange} /></p>
)

export default Filter