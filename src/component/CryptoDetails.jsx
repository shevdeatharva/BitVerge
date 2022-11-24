import React, {useState} from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Typography, Select } from 'antd'
import {CheckOutlined,NumberOutlined, ThunderboltOutlined, MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, ControlOutlined } from "@ant-design/icons";
import { useGetCryptoDetailsQuery,useGetCryptoHistoryQuery } from "../Sevices/Cryptoapi";
import LineChart from "./lineChart";

const { Text, Title } = Typography;
const {Option}= Select


const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timeperiod, setTimePeriod] = useState('7d')
  const { data: cryptosinfo, isLoading } = useGetCryptoDetailsQuery(coinId)
  const {data: cryptoSt, isFetching}= useGetCryptoHistoryQuery(coinId, timeperiod)
  const cryptoDetails = cryptosinfo?.data?.coins[coinId-1]
  const cryptostats = cryptosinfo?.data?.stats
  const cryptost =cryptoSt?.data?.coins[coinId-1];
  console.log(cryptoDetails);
  console.log(cryptost);
  if(isLoading) return "Loading..."
  if(isFetching) return 'Loading...'
  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    { title: '24h Volume', value: `$ ${cryptoDetails?.listedAt  && millify(cryptoDetails?.listedAt)}`, icon: <ControlOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'Change', value: ` ${cryptoDetails?.change && millify(cryptoDetails?.change)}`, icon: <ThunderboltOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptostats?.totalMarketCap && millify(cryptostats.totalMarketCap), icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptostats?.totalExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Total 24h Volume', value: `$ ${cryptostats?.total24hVolume && millify(cryptostats?.total24hVolume)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Aproved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${cryptostats?.total && millify(cryptostats?.total)}`, icon: <ExclamationCircleOutlined /> },
  ];


  return (
    <>
    <Col className="coin-detail-container">
      <Col className="coin-heading-container">
        <Title level={2} className="coin-name">
           {cryptoDetails.name} ({cryptoDetails.symbol})price
          </Title>
          <p>
            live price in US dollar.
            Veiw value Statistics, market cap and supply
          </p>
        </Col>
        <Select defaultValue="7d" className="select-timeperiod"
          placeholder="select time period"
          onChange={(value) => setTimePeriod(value)}>
          
          {time.map((date) => <Option key={date}>{date}</Option>)}
        </Select>
        {/* -------line chart----- */}
        <LineChart cryptoSt={cryptost} currentPrice={millify(cryptoDetails.price)} coinName={cryptoDetails.name} coinChange={ cryptoDetails.change} />
         <Col className="stats-container">
          <Col className="coin-value-statistics">
            <Col className="coin-value-statistics-heading">
              <Title level={3} className="coin-detailes-heading">
                {cryptoDetails.name} Value Statistics
              </Title>
              <p>
An overveiw showing the stats of {cryptoDetails.name}
              </p>
            </Col> 
             {stats.map(({ icon, title, value }) => (
              <Col className="coin-stats">
                <Col className="coin-stats-name">
                  <Text>{icon}</Text>
                  <Text>{title}</Text>
                </Col>
                <Text className="stats">{ value}</Text>
              </Col>
            ))} 
          </Col>
           <Col className="other-stats-info">
            <Col className="coin-value-statistics-heading">
              <Title level={3} className="coin-detailes-heading">
                Other Statistics
              </Title>
              <p>
An overveiw showing the stats of all cryptocurrencies
              </p>
            </Col>
            {genericStats.map(({ icon, title, value }) => (
              <Col className="coin-stats">
                <Col className="coin-stats-name">
                  <Text>{icon}</Text>
                  <Text>{title}</Text>
                </Col>
                <Text className="stats">{ value}</Text>
              </Col>
            ))}
          </Col>
       </Col>
        <Col className="coin-desc-link">
    <Row className="coin-desc">
            <Title level={3} className="coin-details-heading">
              What is {cryptoDetails.name} 
             {HTMLReactParser}
             </Title>
            
          </Row>
        </Col> 
        <Col className="coin-links">
          <Title level={3} className="coin-details-heading">
            {cryptoDetails.name}
          </Title>
           {  !cryptoDetails && cryptoDetails.coins.map((link) => (
            <Row className="coin-link" key={link.name}>
              <Title level={5} className="link-name">
                {link.iconUrl}
              </Title>
              <a href={link.iconUrl} target="_blank" ref="referer">
              {link.name}
              </a>
            </Row>
          ))} 
         
       </Col> 
          
        
    </Col>
  
    </>  
    )
};

export default CryptoDetails;
