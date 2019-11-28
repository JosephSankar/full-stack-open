import React, {useState} from 'react'
import Country from './Country'

const Countries = ({countries, countryFilter}) => {
    const [ countryVisibilities, setCountryVisibilities] = useState([])

    const handleCountryVisibilityChange = (index) => {
        let countryVisibilitiesClone = countryVisibilities.slice(0)
        countryVisibilitiesClone[index] = !countryVisibilitiesClone[index]
        setCountryVisibilities(countryVisibilitiesClone)
      }

    let filteredCountries = countries.filter(country => country.name.toLowerCase().includes(countryFilter.toLowerCase()));

    if (filteredCountries.length > 10) {
        return (
            <div>Too many matches, specify another filter</div>
        )
    } else if (filteredCountries.length > 1) {
        return (
             filteredCountries.map((country, index) => (<div key={country.name}>
                {country.name}
              <button type="button" onClick={() => handleCountryVisibilityChange(index)}>{!countryVisibilities[index] ? "show": "hide"}</button>
              <Country country={country} hidden={!countryVisibilities[index]} /></div>))
        )
    } else if (filteredCountries.length > 0) {
        let country = filteredCountries[0];
        return <Country country={country} hidden={false} />
    } else {
        return (
            <div>No matches, specify another filter</div>
        ) 
    }
    
}



export default Countries