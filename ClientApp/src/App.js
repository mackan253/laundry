import React, { Component } from 'react';
//import { Route } from 'react-router';
import { Layout } from './components/Layout';
import  Home  from './components/Home';
import { FetchData } from './components/FetchData';
import  Login  from './components/Login';
import  CreateUser  from './components/admin/CreateUser';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>

        <Route exact path='/' component={Home} />
        <Route path='/Login' component={Login} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/CreateUser' component={CreateUser} />


      </Layout>
    );
  }
}
