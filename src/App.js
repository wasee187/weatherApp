import './App.css';
import Dashboard from './component/dashboard/Dashboard';
import Search from './component/search/Search';
import { useState } from 'react';

function App() {
  const [city, setCity] = useState('Dhaka');

  const getCityName = (value) => {
    setCity(value);
  };

  return (
    <div className='App'>
      <Search getCityName={getCityName} />
      <Dashboard city={city} />
    </div>
  );
}

export default App;
