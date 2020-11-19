import React, {useState, useEffect } from "react";
import ProductCard from "../componentes/CardProduct";

export default function CardProductContainer() {
   const [products, setProducts]= useState([])

   useEffect(()=>{
      getProducts
       .then((response) => {
        console.log(response);
        setProducts(response)
      });
   }, [])

   const getProducts = new Promise ((res,rej)=>{
      const Productos = [
      {
        "id":"1",
        "name" : "Remera Blanca"
      },
      {
        "id" : "2",
        "name" : "Remera Azul"
      }
    ];

    setTimeout(()=>{
      res(Productos)
      console.log('se ejecutó');
      rej("error")
    }, 3000)

    })

      
  return (
    <div>
      <ProductCard products={products}/>
    </div>
    );
}