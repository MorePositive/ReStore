import React, { Component } from 'react';

import Spinner from '../spinner/spinner'

import './app.css'

export default class App extends Component {

  render() {
    return (
      <div>
        <div>App</div>
        <Spinner />
      </div>
    )
  }
}