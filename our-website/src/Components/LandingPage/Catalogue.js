import React from 'react'
import './Catalogue.css';
import ProductCard from   './ProductCard'
import data from '../../Data/products.json'

function Catalogue() {

    const cards = data.Products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          quantity={product.quantity}
          catagory={product.catagory}
        />
      ));


    return (
        <div className="catalogue">
            <h2>(tabs for filtering here)</h2>
            <div className="cards">
            {cards}
            </div>
            
        </div>
    )
}

export default Catalogue
