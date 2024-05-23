import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Customer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then(response => setProducts(response.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Customer Panel</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Customer;
