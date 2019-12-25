import React, { Component } from 'react';
import Listt from './List';
import Headerr from './Header';
import axios from 'axios';
import AddProduct from './addForm';
// import dataproduct from 'http://localhost:4000/getData'
const getProductData = () => axios.get('/getData')
  .then((res) => res.data)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }

  }

  componentWillMount() {
    if (this.state.data === null) {
      getProductData().then((res) => {
        this.setState({
          data: res
        })
      })
      console.log(getProductData());
    }
  }

  inDuLieu = () => {
    if (this.state.data !== null) {
     return  this.state.data.map((value, key) => (<Listt
        key={key}
        product_name= {value.product_name}
        product_price= {value.product_price} />)
    )

    }
  }

  render() {
    console.log(this.state.data);
    return (
      <div>
        <Headerr></Headerr>
        <AddProduct></AddProduct>
        {this.inDuLieu()}
      </div>
    );
  }
}

export default App;