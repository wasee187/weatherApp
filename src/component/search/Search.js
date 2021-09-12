import './search.css';
import { useState } from 'react';

function Search({ getCityName }) {
  const [cityName, setCityName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    getCityName(cityName);
    setCityName('');
  };
  return (
    <div className='search-box container-fluid'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            type='text'
            id='search'
            placeholder='Search City..'
            className='search-input'
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default Search;
