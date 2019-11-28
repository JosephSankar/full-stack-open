import React from 'react'

const Weather = ({weatherData}) => {
    if (typeof weatherData.current !== 'undefined') {
        return (
            <div>
                <h2>Weather in {weatherData.location.name}</h2>
                <p><b>temperature: </b>{weatherData.current.temperature} Celsius
                <br />
                <img alt="{weatherData.location.name}'s temperature icon" src={weatherData.current.weather_icons[0]} />
                <br />
                <b><b>wind: </b> {weatherData.current.wind_speed} kph direction {weatherData.current.wind_dir}</b>
                </p>
            </div>
        )
    } else {
        return (
            <></>
        )
    }
}

export default Weather