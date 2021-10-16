
import './App.css';
import { Switch, Route, Link} from 'react-router-dom';
import { Layout, Typography, Space} from 'antd';
import {  Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails} from './components';
import NavBar from './components/NavBar';
import Events from './components/Events';
import { HomeOutlined, DollarOutlined, BulbOutlined, FundOutlined, MenuOutlined, CalendarOutlined} from '@ant-design/icons';



function App() {
  return (
    <div className="App" style={{backgroundColor:'rgb(0, 21, 41)'}}>
     <div className="navbar">
      <NavBar/>
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
            <Route exact path="/events">
                <Events/>
            </Route>
          </Switch>
        </div>
      </Layout>
     </div>
     <div className="footer">
      
      <Space style={{color:'white', textAlign:'center'}}>
                <Link to="/"><HomeOutlined/> Home </Link> 
                <Link to="/cryptocurrencies"><DollarOutlined /> Coins </Link> 
                <Link to="/exchanges"><FundOutlined/> Exchanges </Link>
                <Link to="/news"><BulbOutlined/> News </Link> 
                <Link to="/events"><CalendarOutlined/> Events</Link>
            </Space>
            <Typography.Title level={5} style={{color:'white', textAlign:'center', fontWeight:'lighter'}}>
      © AltSwitch. Developed by <b>@n.r.</b>
       
      </Typography.Title>
     </div>
    </div>
  );
}

export default App;
