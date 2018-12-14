import React, {Component} from 'react';
import axios from 'axios';
import Product from './Product';

export default class Dashboard extends Component{
    constructor(props){
        super(props);

        this.state={
            product: '',
            products: []
          };

    }
    componentDidMount(){
        axios
        .get('api/product')
        .then(response=>{
          this.setState({products: response.data});
        });
      }

    render(){
        return(
            <header>
            <div>Dashboard</div>
            <p><Product/></p>
            </header>
        )
    }
}