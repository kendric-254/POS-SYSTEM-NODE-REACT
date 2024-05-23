import React, { useState } from 'react';
import axios from 'axios';
const Admin=()=>{
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const addProduct = () => {
        const product = { id: Date.now().toString(), name: productName, price: productPrice };
        axios.post('http://localhost:5000/api/products', product)
            .then(() => alert('Product added successfully!'))
            .catch(err => console.error(err));
    };
    return (
        <div>
            <h1>Admin Panel</h1>
            <input
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={e => setProductName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Product Price"
                value={productPrice}
                onChange={e => setProductPrice(e.target.value)}
            />
            <button onClick={addProduct}>Add Product</button>
        </div>
    );
};

export default Admin;
