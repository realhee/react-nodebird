import React from 'react';
import { List, Button, /*Card*/ } from 'antd';
//import { StopOutlined } from '@ant-design';
import PropTypes from 'prop-types';

const FollowList = ({ header, data }) => {
    return (
        <List
            style={{ marginBottom: 20 }}
            grid={{ gutter: 4, xs: 2, md:3 }}
            size="small"
            header={<div>{header}</div>}
            loadMore={(<div style={{ textAlign: 'center', margin: '10px 0' }}><Button>더 보기</Button></div>)}
            bordered
            dataSource={data}
            renderItem={(item) => (
                <List.Item style={{ marginTop: 20 }}>
                    {/*<Card actions={[<StopOutlined key="stop" />]}></Card>    */}             
                </List.Item>
            )}
            />
    );
};

FollowList.propTypes = {
    header: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
};

export default FollowList;