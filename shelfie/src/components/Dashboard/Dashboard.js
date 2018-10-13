import React, { Component } from 'react'; 
import '../../App.css'; //TODO make custom
import Product from '../Product/Product.js'; 

export default class Dashboard extends Component {
    constructor() {
        super(); 
    }

    render() {
        return (
            <div> Dashboard 
                <div> <Product /> </div>
            </div>
        )
    }
}