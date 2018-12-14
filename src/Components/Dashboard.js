import React, {Component} from 'react';
import Product from './Product';

export default class Dashboard extends Component{
    constructor(props){
        super(props);

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