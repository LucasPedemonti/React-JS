import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import ProductContainer from "../../components/ProductContainer/ProductContainer";

const ProductDetail = () => {
  const [user, setUser] = useState({});

  let { id } = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
      setUser(res.data)
    );
  }, [id]);

  return (
    <div className="Product-detail">
      <div key={user.id}>
        <ProductContainer data={user} />
        <p>Product Detail</p>
      </div>
    </div>
  );
};

export default ProductDetail;