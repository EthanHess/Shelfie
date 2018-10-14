import React, { Component } from 'react'; 
import '../../App.css'; //TODO make custom
import Product from '../Product/Product.js'; 

export default class Dashboard extends Component {
    constructor(props) {
        super(props); 
    }

    render() {
        console.log('this.props --- ', this.props.products);
        return (
            <div className="SDashboard"> Dashboard 
                <div> 
                    { this.props.products.map(product => (
                        <div className="SProduct_container">
                        <Product /> 
                        <ul>
                        <li>
                        <img src={product.image_url}/>
                        </li>
                        <li>
                        <p>{product.name}</p>
                        </li>
                        <li>
                        <p>{product.price}</p>
                        </li>
                        </ul>
                        </div>
                    ))
                    }
                </div>
            </div>
        )
    }
}