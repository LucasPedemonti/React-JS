import React, { useState } from "react";
import CartContent from "../../components/CartContent/CartContent";
import { useContext } from "react";
import { itemsContext } from "../../context/CartContext";
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
  telefono:"",
  email: "",
};

const Cart = () => {
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState("");
  const { cart } = useContext(itemsContext);

  

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

  return cart.length >  0 ? (
    <div style={styles.containerCart}>
      <CartContent />
      <h1 className="FinalCompra">Finaliza tu orden de compra</h1>
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
          placeholder="Telefono"
          style={{ margin: 10, width: 400 }}
          name="telefono"
          value={values.telefono}
          onChange={handleOnChange}
        />
        <TextField
          placeholder="Email"
          style={{ margin: 10, width: 400 }}
          name="email"
          value={values.email}
          onChange={handleOnChange}
        />
        <button className="btnASendAction">Enviar</button>
      </form>
      {purchaseID ? <MensajeFinal purchaseID={purchaseID} /> : null}
    </div>
  ) : ( 
    <h2> Tu carrito esta vacio</h2>
  )
};

export default Cart;