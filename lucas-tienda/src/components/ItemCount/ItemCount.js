import React, { useState, useEffect } from "react";
import "./ItemCount.css";

const ItemCount = () => {
    const [count, setCount] = useState(1);

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () =>{
        setCount(count + 1);
    }

    useEffect(() => {
        setCount(1)

    },[]);

    return (
        <div className="counter">
            <button disabled={count <= 1} onClick={decrease}>-</button>
            <span>{count}</span>
            <button disabled={count <= 5} onClick={increase}>+</button>
            <div>
                <button >Agregar al carrito</button>
            </div>
        </div>
    );
};

export default ItemCount;