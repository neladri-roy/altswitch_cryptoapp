import React, {useState} from 'react';
import { Select, Typography, Card, Row, Col, Avatar } from 'antd';
import moment from 'moment';

import { useGetCryptosNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';

const { Text, Title } = Typography;
const { Option } = Select;


const News = ({ simplified }) => {
     const [newsCatergory, setNewsCatergory] = useState('Cryptocurrency');
    const { data: cryptoNews } = useGetCryptosNewsQuery({ newsCatergory, count: simplified ? 6: 12})
    const { data } = useGetCryptosQuery(100);
    
    if(!cryptoNews?.value) return 'Loading...';


    return (
        <Row gutter={[ 24, 24]}>
            {!simplified && (
                <Col span={24}>
                    <Select
                        showSearch
                        className="select-news"
                        placeholder="Select a Crypto"
                        optionFilterProp="children"
                        onChange={(value) => setNewsCatergory(value)}
                        filterOption={(input, option) => option.children.toLowerCase().indexof(input.toLowerCase())}
                    >
                        <Option value="Cryptocurrency">Cryptocurrency</Option>
                        {data?.data?.coins.map((coin) => <Option value={coin.name}> {coin.name}</Option>)}
                    </Select>
                </Col>
            )

            }
            {
                cryptoNews.value.map((news, i) =>(
                    <Col xs={24} sm={12} lg={8} key={i}>
                        <Card hoverable className="news-card">
                        <a href={news.url} target="_blank" >
                            <div className="news-image-container">
                                <Title className="news-title" level={4}>{news.name}</Title>
                                <img src={news?.image?.thumbnail?.contentUrl} alt="news"></img>
                            </div>
                            <p>
                                {news.description > 100
                                ? `${news.description.substring(0,100)}....`
                            : news.description}
                            </p>
                            <div className="provider-container">
                                <div>
                                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl} alt=""></Avatar>
                                    <Text className="provider-name">{news.provider[0]?.name}</Text>
                                </div>
                                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                            </div>
                        </a>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    )
}

export default News
