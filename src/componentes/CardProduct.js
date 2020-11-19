import React from "react";

export default function ProductCrad({products}) {
  return (
    <div>
      <div>

      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        products.map( p => <li key={p.id}> {p.name} </li>)
      )}
      </div>
    </div>
  );
}
