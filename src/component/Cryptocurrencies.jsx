import React, { useEffect } from 'react'
import { useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'
import { useGetCryptosQuery } from '../Sevices/Cryptoapi'

const Cryptocurrencies = ({ simplified }) => {
  const { data: cryptoList, isFetching } = useGetCryptosQuery({ count: simplified ? 1 : 100 })
  const [cryptos, setCryptos] = useState([])
  const [searchItem, setsearchItem] = useState('')
  useEffect(() => {
    const filteredData = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchItem.toLowerCase()),
    )
    setCryptos(filteredData)
  }, [cryptoList, searchItem])

  
  if (isFetching) return 'Loading...'
  return (
    <>
    
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setsearchItem(e.target.value)}
          />
      </div>
        {/* // remove the searchbar from home page and avail at crypto page */}
    
      <Row gutter={[32, 32]} className="crypto-card-container" >
        {cryptos &&
          cryptos.map((currency) => (
            <Col
              xs={24}
              sm={12}
              lg={12}
              className="crypto-card"
              key={currency.rank}
            >
              <Link to={`/crypto/${currency.rank}`}>
                <Card
                  title={`${currency.rank}. ${currency.name}`}
                  extra={
                    <img className="crypto-image" src={currency.iconUrl} alt="news" />
                  }
                  hoverable
                >
                  <p> Price:{millify(currency.price)}$ </p>
                  <p>Market Cap: {millify(currency.marketCap)} </p>

                  <p>Daily Change: {millify(currency.change)} </p>
                </Card>
              </Link>
            </Col>
          ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies
