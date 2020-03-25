import React, { Component } from 'react';
import moment from "moment";

export default class App extends Component { // parent component for all other components you have
  render() {
    return (
      <div className='app'>
        <h1>Kyle Deguzman Portfolio</h1>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
      </div> 
    );
  }
}

// components are what make up a react application
// https://bottega.devcamp.com/pt-full-stack-development-javascript-python-react/guide/analyzing-src-directory-react-application