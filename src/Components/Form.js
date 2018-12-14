import React, {Component} from 'react';
import axios from 'axios';

export default class Form extends Component{
    constructor(props){
        super(props);

        this.handleChange=this.handleChange.bind(this);

    }

    handleChange(event){
        this.setState({text: event.target.value});
    }
    

    render(){
        return(
            <div>  
            <div>
                
            </div>
        <div>
        <input
          placeholder='Product'
          value={this.state.text}
          onChange={this.handleChange}
        />
        <input
          placeholder='Price'
          value={this.state.int}
          onChange={this.handleChange}
        />
        <input
          placeholder='Image'
          value={this.state.img}
          onChange={this.handleChange}
        />
        </div>
        </div>
        )
    }
}