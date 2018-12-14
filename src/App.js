import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';
import Header from './Components/Header';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      text: ''
    };
  }

  updateProduct=(id, text)=>{
    this.setState({text});
  }

  createProduct=()=>{
  
  }

  render() {
    const{text}=this.state;
    const{int}=this.state;

    return (
      <div className="App">
        <header className="App-header">
          <p><Dashboard/></p>
          <p><Form/></p>
          <p><Header/></p>
        </header>
        <input
          placeholder='Product'
          value={text}
          onChange={(e)=>this.createProduct(e.target.value)}
        />
        <input
          placeholder='Price'
          value={int}
          onChange={(e)=>this.price(e.target.value)}
        />
        <input
          placeholder='Image'
          value={int}
          onChange={(e)=>this.image(e.target.value)}
        />
        <div>
          <button>Cancel</button>
          <button>Add Inventory</button>
        </div>
      </div>
    );
  }
}

export default App;
