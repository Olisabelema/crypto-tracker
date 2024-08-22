// src/utils/api.js

import axios from 'axios';

const COINGECKO_API_BASE_URL = 'https://api.coingecko.com/api/v3';

// Function to fetch cryptocurrency data
export const fetchCryptoData = async (id) => {
  try {
    const response = await axios.get(`${COINGECKO_API_BASE_URL}/coins/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cryptocurrency data:', error);
    throw error;
  }
};

// Function to fetch market data (optional)
export const fetchMarketData = async () => {
  try {
    const response = await axios.get(`${COINGECKO_API_BASE_URL}/coins/markets`, {
      params: {
        vs_currency: 'usd', // Specify the fiat currency
        order: 'market_cap_desc',
        per_page: 10,
        page: 1,
        sparkline: false,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching market data:', error);
    throw error;
  }
};
