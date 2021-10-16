import React from 'react'
import { useGetEventsQuery } from '../services/eventsApi';
import { Select, Typography, Card, Row, Col, Avatar,Collapse } from 'antd';
import millify from 'millify';
import HTMLReactParser from 'html-react-parser';
import moment from 'moment';
const { Text, Title } = Typography;
const { Panel } = Collapse;

const Events = () => {
    const { data: eventItems } = useGetEventsQuery();
    const eventList = eventItems?.data;
 
  // console.log(eventList[0])
    return (
        <div>
            <Title level={3} className="heading" style={{paddingTop:'20px'}}>Upcoming Events</Title>
             <Row gutter={[32,32]} className="crypto-class-container">
                 
         { eventList && 
             eventList.map((cevents, i) =>(
                <Col xs={24} sm={12} lg={8} key={i} className="events-col">
                <Card hoverable className="crypto-card">
                <a href={cevents.website} target="_blank" >
                    <div className="crypto-image-container">
                        <Title className="crypto-title" level={4}>{cevents.title}</Title>
                        <img className="events-card" src={cevents.screenshot} alt="cevents"></img>
                    </div>
                    <p>
                        {cevents.description > 100
                        ? `${cevents.description.substring(0,100)}....`
                    : cevents.description}
                    </p>
                    <div className="provider-container">
                        <div>
                           
                            <Text className="provider-name">{cevents.organizer}</Text>
                        </div>
                        <Text>{moment(cevents.start_date).startOf('ss').fromNow()}</Text>
                    </div>
                </a>
                </Card>
            </Col>
             ))
         }
          
          </Row>
        </div>
    )
}

export default Events;
