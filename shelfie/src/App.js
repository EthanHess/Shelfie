import React, { Component } from 'react';
import './App.css';

import Dashboard from './components/Dashboard/Dashboard.js'
import Form from './components/Form/Form.js'
import Header from './components/Header/Header.js'

import axios from 'axios'; 

//import Product from './components/Product/Product.js'

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      imageInput: '', 
      productNameInput: '',
      productPriceInput: '', 
      productDescription: 'Test Description',
      inventory: []
    }
    // this.child = React.createRef(); 
    this.imageUpdateHandler = this.imageUpdateHandler.bind(this); 
    this.nameUpdateHandler = this.nameUpdateHandler.bind(this);
    this.priceUpdateHandler = this.priceUpdateHandler.bind(this);
    this.addInventory = this.addInventory.bind(this);
    this.cancelHandler = this.cancelHandler.bind(this);
  }

  cancelHandler() {
    console.log('---CANCEL CALLED---')
    this.setState({
      imageInput: '',
      productNameInput: '',
      productPriceInput: '',
    }); 
  }

  imageUpdateHandler(val) {
    console.log('val', val); 
    this.setState({ imageInput: val })
  }

  nameUpdateHandler(val) {
    this.setState({ productNameInput: val })
  }

  priceUpdateHandler(val) {
    this.setState({ productPriceInput: val })
  }

  //(name, description, price, image_url)
  addInventory() {
    console.log('---ADD CALLED---');
    const { imageInput, productNameInput, productPriceInput, productDescription } = this.state; 
    var newInventory = {
      productNameInput, 
      productDescription, 
      productPriceInput, 
      imageInput
    }
    axios.post('/api/inventory', newInventory).then(res => {
      this.setState({ inventory: res.data })
    }).catch(error => {
      console.log('--- ERROR POSTING NEW INV ---', error); 
    })
  }

  render() {
    return (
      <div>
      <Header />
      <Form 
        priceUpdateFn={this.priceUpdateHandler}
        imageUpdateFn={this.imageUpdateHandler}
        nameUpdateFn={this.nameUpdateHandler} 
        cancelFn={this.cancelHandler}
        addFn={this.addInventory} />
      <Dashboard />
      </div>
    ); 
  }
}

export default App;