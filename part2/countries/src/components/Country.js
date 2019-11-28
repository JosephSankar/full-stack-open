import React, { useState, useEffect } from 'react'
import Weather from './Weather'
import axios from 'axios'

const Country = ({country, hidden}) => {
    const [ countryWeather, setCountryWeather] = useState({}) 

    useEffect(() => {
        axios
          .get("http://api.weatherstack.com/current?access_key=8643e512a1b73962ec0557d7c93a73cb&query=" + country.name)
          .then(response => {
            setCountryWeather(response.data)
          })
      }, [country.name])

    return (
        <div id={country.name} hidden={hidden}>
            <h1>{country.name}</h1>
            <p>capital {country.capital}<br />
            population {country.population}</p>
            <h2>languages</h2>
            {country.languages.map((language) => {
                return <li key={language.name}>{language.name}</li>
            })}
            <br />
            <img alt="{country.name}'s flag" src={country.flag} style={{width: "20%"}} />
            <Weather weatherData={countryWeather} />
        </div>
    )
}

export default Country