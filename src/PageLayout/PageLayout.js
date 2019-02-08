import React, {Component} from 'react';
import {Layout, Menu, Breadcrumb, Icon, Form, Button} from 'antd';
import {Row, Col} from 'antd';
import './PageLayout.css'
import NormalLoginForm from '../LoginForm/NormalLoginForm'
import Good from "../Goods/Good";
import HttpData from "../Data/httpData"

const WrappedNormalLoginForm = Form.create({name: 'normal_login'})(NormalLoginForm);
const {
    Header, Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

class SiderDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allProductsData: null,
            allCategories: null,
            collapsed: false,
            logIn: false
        };
    };


    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    componentDidMount() {
        new HttpData().postData(`http://job.goodstudio.by/api/products/`).then(
            allProductsData => {
                this.setState({allProductsData});

            },

            status => {
                console.log(status);
            }
        );
        new HttpData().getData(`http://job.goodstudio.by/api/categories/`).then(
            allCategories => {
                this.setState({allCategories});
                console.log(allCategories);
            },
            status => {
                console.log(status);
            }
        );
    }

    changeLogInStatus = (a) => {
        this.setState({logIn: a});
    };

    addNewCategory = () => {
        console.log("new");
    };


    render() {
        let goodsToPage;
        if (this.state.allProductsData) {
            goodsToPage = (this.state.allProductsData.products).map((item, i) => (
                <Good
                    id={item._id}
                    key={item._id}
                    uid={item.uid}
                    name={item.name}
                    picture={item.picture}
                />
            ));
        }

        let categoriesToPage;
        if (this.state.allCategories) {
            categoriesToPage = (this.state.allCategories.categories).map((item, i) => (
                <Menu.Item key={i}>{item.name}</Menu.Item>
            ));
        }

        const buttonToAddCategory = this.state.logIn &&
            <Menu.Item key="3"> <Button onClick={this.addNewCategory}>Add category</Button></Menu.Item>;

        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider width="300px"
                       theme="light"
                       collapsible
                       collapsed={this.state.collapsed}
                       onCollapse={this.onCollapse}
                >
                    <div className="logo"/>
                    <div className="menuContainer">

                        <WrappedNormalLoginForm changeLogInStatus={this.changeLogInStatus}
                                                logInStatus={this.state.logIn}/>
                    </div>

                    <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">

                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="menu-unfold"/><span>Categories</span></span>}
                        >
                            {categoriesToPage}
                            {buttonToAddCategory}
                        </SubMenu>

                    </Menu>
                </Sider>


                <Layout>
                    <Header style={{background: '#fff', padding: 0}}/>
                    <Content style={{margin: '0 16px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>

                        <div id="goodsArea" style={{padding: 24, background: '#fff', minHeight: 360}}>

                            <Row justify={"space-around"}>{goodsToPage}</Row>

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

