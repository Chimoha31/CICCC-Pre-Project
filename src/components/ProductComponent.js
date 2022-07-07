import React from "react";
import "./ProductComponent.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => (
    <Link to={`/product/${product.id}`} key={product.id}>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          listStyle: "none",
          width: "350px",
          height: "350px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
        className="product_ul"
        key={product.id}
      >
        <li>
          <img
            src={product.image}
            alt="cloth"
            style={{ width: "150px", height: "150px" }}
          />
        </li>
        <li>
          <h3>{product.title}</h3>
          <p>
            <strong>$ {product.price}</strong>
          </p>
          <p>{product.category}</p>
        </li>
      </ul>
    </Link>
  ));

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        gap: "15px",
        margin: "100px 0px",
      }}
    >
      {renderList}
    </div>
  );
};

export default ProductComponent;
