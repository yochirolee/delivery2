import React,{useContext,useState} from "react";
import {ProductsInCartContext} from "../../context/productInCartContext";
const SideBarProductsInCart = ({ open }) => {
 
  const [productsInCart,setProductsInCart]=useContext(ProductsInCartContext)

  return (
    <div
      className={
        open
          ? " transition delay-150 duration-300 ease-in-out transfom:right fixed right-0 lg:w-2/6  mr-1 w-3/4 bg-gray-100 h-full mt-2 "
          : "hidden  "
      }
    >
      {productsInCart.map((product) => (
        <div className="flex flex-row ">
          <p className=" w-4/6 ml-1 py-2 text-sm text-gray-700  ">
            {product.name}
          </p>
          <p className="w-1/6 block ml-1 py-2 text-sm text-gray-700">
            {product.price}
          </p>
          <button className=" pl-1 w-1/6 py-2 text-sm text-gray-700  hover:text-red">
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default SideBarProductsInCart;
