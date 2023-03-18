import React, { useRef } from "react";
import "../Form/Form.css";

export default function Form() {
  const name = useRef("");
  const description = useRef("");
  const price = useRef("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res =await fetch(
      "https://crudcrud.com/api/2a36f5428f3d4727bf3aa7062cf926ba/medDetails",
      {
        method: "POST",
        mode:'cors',
        body: JSON.stringify({
          medName: name.current.value,
          medDesc: description.current.value,
          medPrice: price.current.value,
        }),
        headers:{
          'Content-Type':'application/json'
        }
      }
    );
    console.log(res.status)
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input ref={name} />
        <label>Description:</label>
        <input ref={description} />
        <label>Price:</label>
        <input ref={price} />
        <button className="button-10" type="submit">
          Add
        </button>
      </form>
    </>
  );
}
