/*
import React, { Component } from 'react';
import Main from './Main';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
     <Main/>
    );
  }
}

export default App;
*/
import React, {Component} from 'react';
import {Form, Icon, Input, Button, Checkbox,} from 'antd';
import SiderDemo from './PageLayout/PageLayout'
/*import NormalLoginForm from './LoginForm/NormalLoginForm'*/
import './App.css';

/*const WrappedNormalLoginForm = Form.create({name: 'normal_login'})(NormalLoginForm);*/

class App extends Component {
    render() {
        return (
            <div className="App">
                <SiderDemo />
            </div>
        );
    }
}

export default App;