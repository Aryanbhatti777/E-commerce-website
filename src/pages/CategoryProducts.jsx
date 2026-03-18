import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { electronics } from "../services/Api";

const CategoryProducts = () => {
  const { slug } = useParams();
  let [data , setData] = useState()

  // useEffect(
  //   () => {
  //     let product = electronics()
  //     setData(product)
  //     // console.log(data)
  //   }
  // )

  return (
    <>
      <h2>{slug} Products</h2>

      {/* {data.map(
        (pro) => {
          <ul key={pro.id}>
            <li>pro.title</li>
            <li>{pro.price}</li>
            <li>{pro.description}</li>
          </ul>
        }
      )} */}


    </>
  );
};

export default CategoryProducts;