import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic} from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Events from './Events';
import { CryptocurrencyMarket, Timeline, MiniChart } from "react-tradingview-embed";
import BgAnimation from '../components/BackgroundAnimation';
const { Title } = Typography;



const Homepage = () => {

    const { data, isFetching } = useGetCryptosQuery(10);
    const globatStats = data?.data?.stats;
    console.log(data);
    if(isFetching) return 'Loading...'


    console.log(data);
    return (
       <>
        <BgAnimation />
       <Title level={3} className="heading"> Global Crypto Market Status</Title>
       <Row >
      
           <Col ><Statistic title="Total Cryptocurrencies" value={globatStats.total} /></Col>
           <Col ><Statistic title="Total Exchanges" value={millify(globatStats.totalExchanges)} /></Col>
           <Col><Statistic title="Market Cap" value={millify(globatStats.totalMarketCap)} /></Col>
           <Col><Statistic title="24h Volume" value= {millify(globatStats.total24hVolume)} /></Col>
           <Col ><Statistic title="Total Market" value={millify(globatStats.totalMarkets)} /></Col>
           
           </Row>
       
       <MiniChart />
      
      

        <div className="home-tradingview-container">
        
    
            
        </div>
        <Title level={3} className="home-title">Top 10 Cryptocurrencies in the world</Title>
            <p level={5} className="show-more"><Link to='./cryptocurrencies'>Show More</Link></p>
           
        <Cryptocurrencies simplified/>

        <div className="home-heading-container">
            <Title level={3} className="home-title">Latest Crypto News</Title>
            <p level={4} className="show-more"><Link to='./news'>Show More</Link></p>
           
        </div>
        <News simplified/>

       </>
    )
}

export default Homepage
