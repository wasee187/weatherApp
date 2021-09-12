import { useEffect, useState } from 'react';
import { baseURL, apiKey } from '../dataConfig/config';
import axios from 'axios';
import './dashboard.css';

function Dashboard({ city }) {
  const [weatherData, setWeatherData] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    const getWeatherData = async () => {
      let getData;
      setIsFetching(true);
      getData = await axios.get(
        `https://${baseURL}?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(getData.data);
    };
    getWeatherData();
  }, [city]);
  console.log(weatherData);
  const iconGenerate = (weatherData) => {
    switch (weatherData) {
      case 'Haze':
        return <i className='fas fa-smog icon'></i>;
      case 'Rain':
        return <i className='fas fa-cloud-rain icon'></i>;

      case 'Snow':
        return <i className='fas fa-snowflake icon'></i>;
      case 'Smoke':
        return <i className='fas fa-smog icon'></i>;
      case 'Clouds':
        return <i className='fas fa-cloud'></i>;
      default:
        break;
    }
  };
  const generateDate = (d) => {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let date = d.getDate();
    let year = d.getFullYear();

    return `${day}, ${date}th ${month}, ${year}`;
  };
  return (
    <div className='dashboard container'>
      {weatherData ? (
        <div className='card'>
          <h2 className='city-name'>
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p className='date'>{generateDate(new Date())}</p>
          <p className='description'>
            {iconGenerate(weatherData.weather[0].main)}
            {weatherData.weather[0].main}
          </p>
          <p className='temp'>{Math.round(weatherData.main.temp)}℃</p>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default Dashboard;
