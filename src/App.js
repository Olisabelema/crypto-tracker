// src/App.js

import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import CryptoDisplay from './components/CryptoDisplay';
import CryptoChart from './components/CryptoChart';
import CurrencyConverter from './components/CurrencyConverter';
import { fetchCryptoData } from './utils/api';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cryptoData, setCryptoData] = useState(null);
  const [chartData, setChartData] = useState({ dates: [], prices: [] });

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCryptoData('bitcoin');
        setCryptoData(data);
        // Set chart data here if available
        setChartData({
          dates: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          prices: [38000, 39000, 40000, 41000, 42000, 40000, 39000], // Dummy data for illustration
        });
      } catch (error) {
        console.error('Failed to fetch cryptocurrency data:', error);
      }
    };

    getData();
  }, []);

  const handleSearch = async (searchTerm) => {
    try {
      const data = await fetchCryptoData(searchTerm);
      setCryptoData(data);
      // Fetch and update chart data as well if needed
    } catch (error) {
      console.error('Failed to fetch cryptocurrency data:', error);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Header onSearch={handleSearch} onToggleDarkMode={toggleDarkMode} />
      {cryptoData && <CryptoDisplay cryptoData={cryptoData} />}
      <CryptoChart chartData={chartData} />
      <CurrencyConverter price={cryptoData?.market_data?.current_price?.usd} />
    </div>
  );
}

export default App;
