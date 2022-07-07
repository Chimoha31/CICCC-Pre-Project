import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";

const ProductList = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const getAllProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
      console.log("Error", err);
    });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  console.log(products);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductList;
