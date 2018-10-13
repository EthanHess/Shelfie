import React, { Component } from 'react'; 
import '../../App.css'; //TODO make custom

export default class Form extends Component {
    constructor(props) {
        super(props); 
        console.log('props', this.props); 
        this.state = {
            imageValue: '',
            nameValue: '',
            priceValue: ''
        }; 
        this.clear = this.clear.bind(this); 
        this.imageUpdateLocal = this.imageUpdateLocal.bind(this); 
        this.nameUpdateLocal = this.nameUpdateLocal.bind(this); 
        this.priceUpdateLocal = this.priceUpdateLocal.bind(this); 
    }

    clear() {
        console.log('---CLEARED---'); 
        this.props.cancelFn(); 
        this.setState({
            imageValue: '',
            nameValue: '',
            priceValue: ''
        }); 
    }

    imageUpdateLocal(val) {
        this.setState({ imageValue: val }); 
        this.props.imageUpdateFn(val);
    }

    nameUpdateLocal(val) {
        this.setState({ nameValue: val }); 
        this.props.nameUpdateFn(val);
    }

    priceUpdateLocal(val) {
        this.setState({ priceValue: val }); 
        this.props.priceUpdateFn(val);
    }

    render() {
        return (
            <div> Form 
                <img src="default-img.png"/> 
                <input value={this.state.imageValue} 
                        placeholder="Image URL" 
                        onChange={(e)=> this.imageUpdateLocal(e.target.value)}>
                </input>
                <input value={this.state.nameValue} 
                       placeholder="Product Name" 
                       onChange={(e)=> this.nameUpdateLocal(e.target.value)}>
                </input>
                <input value={this.state.priceValue} 
                       placeholder="Price" 
                       onChange={(e)=> this.priceUpdateLocal(e.target.value)}>
                </input>
                <button 
                       onClick={() => this.clear()}> Cancel 
                </button>
                <button 
                       onClick={() => this.props.addFn()}> Add to Inventory 
                </button>
            </div>
        )
    }
}