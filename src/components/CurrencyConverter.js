// src/components/CurrencyConverter.js

import React, { useState } from 'react';

const CurrencyConverter = ({ price }) => {
  const [currency, setCurrency] = useState('USD');

  const convertPrice = (amount, currency) => {
    // Add logic to convert the price based on the currency
    return amount; // Replace this with actual conversion logic
  };

  return (
    <div>
      <h2>Convert Price</h2>
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        {/* Add more currency options as needed */}
      </select>
      <p>Converted Price: {convertPrice(price, currency)} {currency}</p>
    </div>
  );
};

export default CurrencyConverter;
