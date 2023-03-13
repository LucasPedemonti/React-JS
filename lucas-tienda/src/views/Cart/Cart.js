import React, { useState } from "react";

// Firebase
import { db } from "../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

import MensajeFinal from "../../components/MensajeFinal/MensajeFinal";

import "./Cart.css";

import TextField from "@mui/material/TextField";

const styles = {
  containerCart: {
    textAlign: "center",
    paddingTop: 20,
  },
};

const initialState = {
  name: "",
  lastName: "",
  email: "",
};

const Cart = () => {
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState("");

  

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
   
    const docRef = await addDoc(collection(db, "purchases"), {
      values,
    });
   
    setPurchaseID(docRef.id);
    setValues(initialState);
  };

  return (
    <div style={styles.containerCart}>
      <h1 className="FinalCompra">Finaliza tu compra</h1>
      <form className="FormContainer" onSubmit={handleOnSubmit}>
        <TextField
          placeholder="Name"
          style={{ margin: 10, width: 400 }}
          name="name"
          value={values.name}
          onChange={handleOnChange}
        />
        <TextField
          placeholder="Last Name"
          style={{ margin: 10, width: 400 }}
          name="lastName"
          value={values.lastName}
          onChange={handleOnChange}
        />
        <TextField
          placeholder="Email"
          style={{ margin: 10, width: 400 }}
          name="email"
          value={values.email}
          onChange={handleOnChange}
        />
        <button className="btnASendAction">Send</button>
      </form>
      {purchaseID ? <MensajeFinal purchaseID={purchaseID} /> : null}
    </div>
  );
};

export default Cart;