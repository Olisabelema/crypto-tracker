// src/components/CryptoChart.js

import React from 'react';
import { Line } from 'react-chartjs-2';

const CryptoChart = ({ chartData }) => {
  const data = {
    labels: chartData.dates,
    datasets: [
      {
        label: 'Price',
        data: chartData.prices,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return <Line data={data} />;
};

export default CryptoChart;
