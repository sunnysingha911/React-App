import React from 'react';
import NewProducts from './newproducts';
import AllProducts from './allproducts';
import './assets/css/product.css';

function Product(){
    return(
        <div className="product">
            <NewProducts />
            <AllProducts />
        </div>
    )
}

export default Product
