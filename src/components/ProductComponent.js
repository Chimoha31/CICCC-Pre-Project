import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  // console.log(products[0].title);

  return (
    <div style={{ height: "100vh", width: "100%", }}>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          listStyle: "none",
          width: "300px",
          border: "1px solid #ccc",
          height: "300px",
        }}
      >
        <li>
          <img src="" alt="cloth" />
        </li>
        <li>
          {/* <h3>{products[0].title}</h3> */}
        </li>
        <li>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ProductComponent;
