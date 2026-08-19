import React from "react";

function InventoryTable({ products = [] }) {
    return (
        <div className="inventory-table">
            <h2>Inventory</h2>

            {products.length === 0 ? (
                <p>No products available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
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
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.quantity}</td>
                                <td>₹{product.price}</td>
                                <td>
                                    {product.quantity === 0
                                        ? "Out of Stock"
                                        : product.quantity <= 5
                                            ? "Low Stock"
                                            : "Available"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default InventoryTable;