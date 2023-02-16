import React, { useEffect, useState } from "react";
import ProductContainer from "../ProductContainer/ProductContainer";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    /*
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
    */
    axios("https://jsonplaceholder.typicode.com/users").then((res) =>
      setUsers(res.data)
    );
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <Link to={`/detail/${user.id}`}>
            <ProductContainer  />
          </Link>
        );
      })}
    </div>
  );
};

export default ProductList;