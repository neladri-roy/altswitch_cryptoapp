import React, {useState, useEffect} from 'react';
import { Button, Menu, Typography, Avatar} from 'antd';
import { Link } from 'react-router-dom';
import icon from '../images/currency_img.png';
import { TickerTape } from "react-tradingview-embed";

const NavBar = () => {
const [activeMenu, setActiveMenu] = useState(true);
const [screenSize, setScreenSize] = useState(null);


useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize',handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
}, []);

useEffect(() => {
    if(screenSize < 770){
        setActiveMenu(false);
    } else {
        setActiveMenu(true);
    }
}, [screenSize]
)

    return (
        <div className="nav-container">
            <div className="logo-container">
            <Avatar src={icon} size="large"/>
            <Typography.Title level={2} className="logo">
                <Link to="/">AltSwitch</Link>
            </Typography.Title>
            
            </div>
            <TickerTape className="ticker-tape" widgetProps={{"theme": "light"}} />
            
            
        </div>
    )
}

export default NavBar;
