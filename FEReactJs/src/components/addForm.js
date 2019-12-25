import React, { Component } from 'react';
import axios from 'axios';

const addProduct = (product_name, product_price) => {
    return (axios.post('/add', {product_name, product_price})
    .then((res)=> res.data))
}
class addForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product_name:'',
            product_price: ''
        }
    }

    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value; 
        this.setState({
            [name]: value
        });
        console.log(name);
        console.log(value);
        console.log(this.state);
       

    }
    handleClick = () => {
        var {product_name ,product_price } = this.state;
        addProduct(product_name, product_price).then((res) => {
                console.log(res);
        })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-8 mx-auto">
                            <form action="/add" method="post">
                                <div className="form-group">
                                    <label htmlFor="product_name">Tên sản phẩm</label>
                                    <input onChange = {(event) => this.isChange(event)} type="text" className="form-control" name="product_name" id="product_name" aria-describedby="name_text" placeholder="Nhập tiên sản phẩm" />
                                    <small id="name_text" className="form-text text-muted">Nhập text </small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="product_price">Giá sản phẩm</label>
                                    <input onChange = {(event) => this.isChange(event)} type="text" className="form-control" name="product_price" id="product_price" aria-describedby="price_text" placeholder="Nhập giá sản phẩm" />
                                    <small id="price_text" className="form-text text-muted">Nhập text </small>
                                </div>
                                <button type="submit" onClick = {() => this.handleClick()} className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default addForm;