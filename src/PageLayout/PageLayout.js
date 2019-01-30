import React, {Component} from 'react';
import {Layout, Menu, Breadcrumb, Icon, Form,} from 'antd';
import './PageLayout.css'
import NormalLoginForm from '../LoginForm/NormalLoginForm'





const WrappedNormalLoginForm = Form.create({name: 'normal_login'})(NormalLoginForm);
const {
    Header, Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

class SiderDemo extends React.Component {

    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    render() {

        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider width="300px"
                       theme="light"
                       collapsible
                       collapsed={this.state.collapsed}
                       onCollapse={this.onCollapse}
                >
                    <div className="logo"/>

                    <div className="sup">
                        <WrappedNormalLoginForm/>
                    </div>

                    <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="pie-chart"/>
                            <span>Option 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop"/>
                            <span>Option 2</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="user"/><span>User</span></span>}
                        >
                            {/* <div className="sup">
                                <WrappedNormalLoginForm/>
                            </div>*/}

                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="team"/><span>Team</span></span>}
                        >
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9">
                            <Icon type="file"/>
                            <span>File</span>
                        </Menu.Item>
                    </Menu>
                </Sider>


                <Layout>
                    <Header style={{background: '#fff', padding: 0}}/>
                    <Content style={{margin: '0 16px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                            Bill is a cat.
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        Art ©2019 Created by Artur Nikitsin
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default SiderDemo;

/*
ReactDOM.render(<SiderDemo/>, mountNode);*/
