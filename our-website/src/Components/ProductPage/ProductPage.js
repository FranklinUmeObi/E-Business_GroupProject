import React from 'react'
import './ProductPage.css';

function ProductPage(props) {
    return (
        <div>
            <h2>ProductPage</h2>
            <h3>{props.name}</h3>
        </div>
    )
}

export default ProductPage
