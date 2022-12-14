import React from "react";
import { Route, Link , Switch} from 'react-router-dom'

import { Layout, Typography, Space } from 'antd'
import './App.css'

import {Navbar, Exchanges, Homepage, CryptoDetails,Cryptocurrencies, News} from "./component";
const App = () => {
  return(
    <div className="app">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
            <Route exact path="/">
              <Homepage/>
              </Route>

              <Route exact path="/exchanges">
              <Exchanges/>
              </Route>

              <Route exact path="/cryptocurrencies">
              <Cryptocurrencies/>
              </Route>

              <Route exact path="/crypto/:coinId">
              <CryptoDetails/>
              </Route>

              <Route exact path="/news">
              <News/>
              </Route>
              </Switch>
          </div>
          </Layout>
      <div className="footer">
        <Typography.Title level={5} style={ { color:'white', textAlign:'center' }}>
          CryptoVerge <br />
          All Rights Resevered
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          <Link to="/news">News</Link>

        </Space>

      </div>

      </div>
  </div>
  )
}

export default App;
