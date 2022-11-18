import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from "../Sevices/Cryptoapi"; 
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
const Homepage = () => {

  const { data, isFetching } = useGetCryptosQuery(1);
  const globalStats = data?.data?.stats;
  if (isFetching) return 'Loading ...';
console.log(data)
  return (
    <React.Fragment>
      <Typography.Title level={2} className="heading ">    
        Global Crypto Statistic
        </Typography.Title>
        <Row>
        <Col span={12} >    <Statistic title="Total Cryptocurrencies" value={ globalStats.total} /></Col>
        <Col span={12} > <Statistic title="Total Exchanges" value={ millify(globalStats.totalExchanges)} /></Col>
          <Col span={12} ><Statistic title="Total Market Cap" value={ millify(globalStats.totalMarketCap)} /></Col>
          <Col span={12} ><Statistic title="Total 24h Volume" value={ millify(globalStats.total24hVolume)}  /></Col>
          <Col span={12} ><Statistic title="Total Markets" value={ millify(globalStats.totalMarkets)} />
          </Col>
        </Row>
      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">Top Cryptocurrencis in the world</Typography.Title>
        <Typography.Title level={4} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Typography.Title> 
    
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">Latest News</Typography.Title>
        <Typography.Title level={4} className="show-more"><Link to="/news">Show more</Link></Typography.Title> 
    
      </div>
      <News simplified/>
    </React.Fragment>
  )
};

export default Homepage;
