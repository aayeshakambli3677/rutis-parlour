import React from "react";

function StockAlert({ products = [] }) {
    const lowStockProducts = products.filter(
        (product) => product.quantity <= 5
    );

    return (
        <div className="stock-alert">
            <h2>Stock Alerts</h2>

            {lowStockProducts.length === 0 ? (
                <p>All products have sufficient stock.</p>
            ) : (
                <div>
                    {lowStockProducts.map((product) => (
                        <div key={product.id} className="alert-item">
                            <strong>{product.name}</strong>
                            <span>Only {product.quantity} left</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default StockAlert;