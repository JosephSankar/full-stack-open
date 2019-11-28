import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import axios from 'axios'

const App = () => {
  const [ countries, setCountries] = useState([]) 
  const [ countryFilter, setCountryFilter ] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleCountryFilterChange = (event) => {
    setCountryFilter(event.target.value)
  }

  return (
    <div>
      <Filter countryFilter={countryFilter} handleCountryFilterChange={handleCountryFilterChange} />
      <Countries countries={countries} countryFilter={countryFilter} />     
    </div>
  )
}

export default App