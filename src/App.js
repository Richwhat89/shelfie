import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';
import Header from './Components/Header';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      product: '',
      products: []
    };

    // this.handleChange=this.handleChange.bind(this);
  }

  componentDidMount(){
    axios
    .get('api/product')
    .then(response=>{
      this.setState({products: response.data});
    });
  }

  // handleChange(event){
  //   this.setState({text: event.target.value});
  // }

  updateProduct=(id, text)=>{
    axios
      .put('api/product/:id', {text})
      .then(results=>{this.setState({product: results.data});
    });
  }

  deleteProduct=(id)=>{
    axios
      .post(`api/product?id=${id}`)
      .then(results=>{this.setState({product: results.data});
    });
  }

  createProduct=()=>{
    const{text}=this.state
    axios
      .delete('api/product', {text})
      .then(results=>{console.log('results', results)
      this.setState({product: results.data});
    });
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
        <Header/>
        </div>
        <div>
        <Dashboard/>
        </div>
        <div>
          {this.state.products.map(product=>(
        <Form
          name={this.handleChange}
          price={product.int}
          image={product.img}/>
          ))
          }
        </div>
        <div>
          <button>Cancel</button>
          <button>Add Inventory</button>
        </div>
      </div>
    )
  }
}

export default App;
