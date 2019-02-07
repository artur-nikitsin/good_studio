import React from 'react';
import {
    Form, Icon, Input, Button, Checkbox,
} from 'antd';
import './NormalLoginForm.css';
import User from '../HttpModules/User'
import HttpData from "../Data/httpData";

class NormalLoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            registration: false,
            logIn: false,
            user: null
        };
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err && !this.state.registration) {
                let User = {
                    "username": values.login,
                    "password": values.password,
                };
                new HttpData().postData(`http://job.goodstudio.by/api/users/`, User).then(
                    userData => {
                        if (userData.status === "ok") {
                            this.setState({logIn: true});
                            this.setState({user: userData.user.name});
                            console.log(this.state);
                        }
                    },
                    status => {
                        console.log(status);
                    }
                );

            } else if (this.state.registration) {
                let newUser = {
                    "username": values.login,
                    "password": values.password,
                    "name": values.userName
                };
                new HttpData().putData(`http://job.goodstudio.by/api/users/`, newUser).then(
                    userData => {
                        console.log(userData);
                    },

                    status => {
                        console.log(status);
                    }
                );


            }
        });
    };

    logout = () => {

        new HttpData().getData(`http://job.goodstudio.by/api/users/logout`).then(
            userData => {
                console.log(userData);
            },
            status => {
                console.log(status);
            }
        );
        this.setState({logIn: false});
    };


    createNewUser = () => {
        this.setState({registration: !this.state.registration});
    };


    render() {
        const {getFieldDecorator} = this.props.form;

        if (this.state.logIn) {
            return (
                <Form onSubmit={this.handleSubmit} className="login-form">

                    <Form.Item>
                        <p>Добро пожаловать, {this.state.user} !</p>
                        <Button onClick={this.logout} type="primary" htmlType="submit" className="login-form-button">
                            Logout
                        </Button>
                    </Form.Item>
                </Form>
            );

        } else if (this.state.registration) {
            return (
                <Form onSubmit={this.handleSubmit} className="login-form">

                    <Form.Item>
                        {getFieldDecorator('userName', {
                            rules: [{required: true, message: 'Please input your username!'}],
                        })(
                            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   placeholder="Username"/>
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('login', {
                            rules: [{required: true, message: 'Please input your login name!'}],
                        })(
                            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Login"/>
                        )}
                    </Form.Item>

                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Please input your Password!'}],
                        })(
                            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                                   placeholder="Password"/>
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        {/* <a className="login-form-forgot" href="">Forgot password</a>*/}
                        <Button  type="primary" htmlType="submit" className="login-form-button">
                            Register me
                        </Button>
                        <a onClick={this.createNewUser}>Cancel</a>
                    </Form.Item>
                </Form>
            );

        } else if (!this.state.registration) {
            return (
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('login', {
                            rules: [{required: true, message: 'Please input your login name!'}],
                        })(
                            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Login"/>
                        )}
                    </Form.Item>

                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Please input your Password!'}],
                        })(
                            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                                   placeholder="Password"/>
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <a onClick={this.createNewUser}>register now!</a>
                    </Form.Item>
                </Form>
            );
        }


    }
}

export default NormalLoginForm;