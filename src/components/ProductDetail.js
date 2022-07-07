import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  console.log(productId);
  console.log(product);

  const getProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Error", err);
      });
      dispatch(selectedProduct(response.data))
  };

  useEffect(() => {
    getProduct()
  }, [productId]);

  return (
    <div>
      <div>
        <ul>
          <li>{}</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
