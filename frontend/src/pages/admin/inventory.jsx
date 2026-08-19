import React, { useState } from "react";

function Inventory() {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Shampoo",
            category: "Hair Care",
            quantity: 20,
            price: 250,
        },
        {
            id: 2,
            name: "Hair Serum",
            category: "Hair Care",
            quantity: 15,
            price: 350,
        },
        {
            id: 3,
            name: "Face Cream",
            category: "Skin Care",
            quantity: 10,
            price: 450,
        },
    ]);

    const [showForm, setShowForm] = useState(false);

    const [newProduct, setNewProduct] = useState({
        name: "",
        category: "",
        quantity: "",
        price: "",
    });

    const handleChange = (e) => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value,
        });
    };

    const addProduct = (e) => {
        e.preventDefault();

        const product = {
            id: products.length + 1,
            name: newProduct.name,
            category: newProduct.category,
            quantity: Number(newProduct.quantity),
            price: Number(newProduct.price),
        };

        setProducts([...products, product]);

        setNewProduct({
            name: "",
            category: "",
            quantity: "",
            price: "",
        });

        setShowForm(false);
    };

    return (
        <div className="inventory-page">
            <div className="inventory-header">
                <div>
                    <h1>Inventory</h1>
                    <p>Manage parlour products and stock</p>
                </div>

                <button onClick={() => setShowForm(!showForm)}>
                    + Add Product
                </button>
            </div>

            {showForm && (
                <form className="inventory-form" onSubmit={addProduct}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Product Name"
                        value={newProduct.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        value={newProduct.category}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        name="quantity"
                        placeholder="Quantity"
                        value={newProduct.quantity}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={newProduct.price}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Save Product</button>
                </form>
            )}

            <div className="inventory-table-container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.quantity}</td>
                                <td>₹{product.price}</td>
                                <td>
                                    {product.quantity <= 5 ? "Low Stock" : "Available"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Inventory;