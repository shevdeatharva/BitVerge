import React from "react";

import {Line} from 'react-chartjs-2'
import { Col, Row, Typography } from 'antd';
import Chart  from "chart.js/auto";

const { Title } = Typography;
const LineChart = ({ cryptoSt, coinName, currentPrice, coinChange }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < cryptoSt?.data?.coins?.length; i++){
    coinPrice.push(cryptoSt.data.coins.price);
    coinTimestamp.push(new Date(cryptoSt.data.coins[i].sparkline).toLocaleDateString());
  }
  console.log(coinTimestamp);
  console.log(coinPrice);
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price in USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd'
      },
    ],
  }

  const options = {
    scales: {
      yAxes: 
        {
          ticks: {
            beginAtZero: true
          },
        },
        xAxes: 
        {
          ticks: {
            beginAtZero: true
          },
        },
    },
  }
  return <>
    <Row className="chart-header"  >
      <Title level={2} className="chart-title">{coinName }Price chart</Title>
      <Col className="price-container">
        <Title level={5} className="price-change">{coinChange}%</Title>
        <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
</Col>
    </Row>
    <Line data={data} options={options}/>
  </>;
};

export default LineChart;
