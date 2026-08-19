import React, { useState } from "react";

function ProductForm({ onAddProduct }) {
    const [product, setProduct] = useState({
        name: "",
        category: "",
        quantity: "",
        price: "",
    });

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            id: Date.now(),
            name: product.name,
            category: product.category,
            quantity: Number(product.quantity),
            price: Number(product.price),
        };

        if (onAddProduct) {
            onAddProduct(newProduct);
        }

        setProduct({
            name: "",
            category: "",
            quantity: "",
            price: "",
        });
    };

    return (
        <div className="product-form">
            <h2>Add Product</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    value={product.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={product.category}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    value={product.quantity}
                    onChange={handleChange}
                    min="0"
                    required
                />

                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={product.price}
                    onChange={handleChange}
                    min="0"
                    required
                />

                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default ProductForm;