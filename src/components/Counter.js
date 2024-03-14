import React, { useEffect, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [products, setProducts] = useState();

  useEffect(() => {
    console.log("Use Effect on intialization");

    fetch('https://dummyjson.com/products/1')
    .then(res => res.json())
    .then(json => setProducts(json));
  }, [setProducts]);

  useEffect(() => {
      console.log("Products", products)
  }, [products])


  // useEffect(() => {
  //   console.log(`Use effect executed for counter ${counter}`);

  //   return () => {
  //     console.log(`on component unmount for counter ${counter}`);
  //   }
  // }, [counter]);

  const addValue = () => {
    setCounter( counter + 1);
  };

  // const removeValue = () => {
  //   setCounter(counter - 1);
  // };



  return (
    <>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      {/* <br />
      <button onClick={removeValue}>Decrement value {counter}</button>
      <p>footer: {counter}</p> */}
    </>
  );
}

export default Counter;
