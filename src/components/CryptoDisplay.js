// src/components/CryptoDisplay.js

import React from 'react';

const CryptoDisplay = ({ cryptoData }) => {
  return (
    <div>
      <h2>{cryptoData.name} ({cryptoData.symbol.toUpperCase()})</h2>
      <p>Current Price: ${cryptoData.market_data.current_price.usd}</p>
      <p>24-Hour Change: {cryptoData.market_data.price_change_percentage_24h}%</p>
      <p>Market Cap: ${cryptoData.market_data.market_cap.usd}</p>
      <p>Total Volume: ${cryptoData.market_data.total_volume.usd}</p>
    </div>
  );
};

export default CryptoDisplay;
