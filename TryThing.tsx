import React, { useState } from 'react';
import Product from './ProductList22';
import Card from './Card'; // Assuming there is a Card component for rendering products.

const Kallal = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [query, setQuery] = useState("");
    const [selected, setSelected] = useState("");

    // Function to handle changes in selected category.
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    // Initializing filtered products with the full product list.
    let filteredProducts = Product;

    // Filtering based on selected category.
    if (selectedCategory === "all") {
        filteredProducts = filteredProducts.filter(product => product.category?.main); // Optional chaining for safety.
    }

    // Filtering based on query string.
    const filteredItems = Product.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
    );

    // Filtering based on specific selected criteria.
    if (selected) {
        filteredProducts = filteredProducts.filter(
            ({ category, color, company, newPrice, title }) =>
                category === selected ||
                color === selected ||
                company === selected ||
                newPrice === selected ||
                title === selected
        );
    }

    // Function to handle search query changes.
    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div>
            <h3 className="Kallal">Kallal</h3>
            <section className="card-reviews">Ritam</section>
            <div>
                {filteredProducts.map(({ img, title, star, reviews, newPrice, prevPrice }) => (
                    <Card
                        key={Math.random()} // Using random keys is not recommended for performance. Use unique IDs instead.
                        img={img}
                        title={title}
                        star={star}
                        reviews={reviews}
                        newPrice={newPrice}
                        prevPrice={prevPrice}
                    />
                ))}
            </div>
        </div>
    );
};

export default Kallal;

// Function to filter data based on category and query.
const filterData = (products, selectedCategory, query) => {
    return products.filter(product => 
        (selectedCategory === "all" || product.category === selectedCategory) &&
        product.title.toLowerCase().includes(query.toLowerCase())
    );
};



function recommended(){
    returm(
        <>
        <div>
            <h2></h2>
        </div>
        </>
    )
}
