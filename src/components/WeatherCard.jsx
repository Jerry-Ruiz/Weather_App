import React from 'react'
import './styles/WeatherCard.css'

// comentario

const WeatherCard = ({weather, temps, isCelsius, changeUnitTemp, handleSubmit}) => {
  return (
    <section className='WeatherCard'>
      <h1 className='WeatherCard__title'>Weather App</h1>
      <h2 className='WeatherCard__place'>{weather?.name}, {weather?.sys.country}</h2>
      <div className='WeatherCard__img'>
        <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`}  alt="icon weather" />
      </div>
      <h3 className='WeatherCard__temp'>{isCelsius ? temps?.celsius + "°C": temps?.fahrenheit + "°F"}</h3>
      <ul className='WeatherCard__list'>
        <li className='WeatherCard__description'>{weather?.weather[0].main}, {weather?.weather[0].description}</li>
        <li><span>Wind Speed: </span>{weather?.wind.speed} m/sec</li>
        <li><span>Clouds: </span>{weather?.clouds.all} %</li>
        <li><span>Pressure: </span>{weather?.main.pressure} hPa</li>
      </ul>
      <button className='WeatherCard__btn' onClick={changeUnitTemp}>&deg;C / &deg;F</button>

    </section>
  )
}

export default WeatherCard