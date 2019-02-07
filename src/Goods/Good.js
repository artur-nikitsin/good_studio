import React from 'react';

import {Card, Icon, Avatar} from 'antd';
import {Row, Col} from 'antd';
import './Good.css'

const {Meta} = Card;

class Good extends React.Component {
    render() {

        return (
            <Col lg={6} md={12} sm={24} order={4}>
                <Card
                    className={"goodCard"}
                    title={this.props.name}
                    id={this.props.id}
                    style={{width: 300}}
                    bordered={true}
                    hoverable={true}
                    size={"default"}
                    cover={<img alt={this.props.title} style={{"minWidth": 300, "minHeight":400, margin:"auto" }} src={this.props.picture }/>}
                    actions={[<Icon type="setting"/>, <Icon type="edit"/>, <Icon type="ellipsis"/>]}
                >

                    <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                        title="Card title"
                        description="This is the description"
                    />

                </Card>
            </Col>
        )


    }
}

export default Good;