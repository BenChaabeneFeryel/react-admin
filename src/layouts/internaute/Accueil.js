import React, { Component } from 'react'
import Navbar from '../../components/internaute/Navbar';
import Main from '../../components/internaute/Main';
import Footer from '../../components/internaute/Footer';

export default class Accueil extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}
