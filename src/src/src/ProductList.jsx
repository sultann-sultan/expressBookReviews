import React from "react";

const products = [
  { id: 1, name: "Plant 1", price: 10 },
  { id: 2, name: "Plant 2", price: 20 },
  { id: 3, name: "Plant 3", price: 30 },
  { id: 4, name: "Plant 4", price: 40 },
  { id: 5, name: "Plant 5", price: 50 },
  { id: 6, name: "Plant 6", price: 60 }
];

export default function ProductList() {
  return (
    <div>
      <h1>Plants</h1>
      {products.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>${p.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
