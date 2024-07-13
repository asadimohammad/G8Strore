import React, { Component, useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";
import { httpRequest } from "../../services/httpRequest";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";

const Shop = (props) => {
  let [counter, setCounter] = useState(0);
  let [products, setProducts] = useState([
    { id: 1, title: "P1", price: 1000, qty: 5 },
    { id: 2, title: "P2", price: 2000, qty: 5 },
    { id: 3, title: "P3", price: 3000, qty: 5 },
    { id: 4, title: "P4", price: 4000, qty: 5 },
    { id: 5, title: "P5", price: 5000, qty: 5 },
  ]);



  let loc = useLocation()
  let navigate= useNavigate()

  const getData = async () => {
    let response = await httpRequest("/users" , {method: 'GET'});
    console.log(response.data.users);
  };
  const postData = async () => {
    let usr = {
      fName: "Mehdi",
      lName: "Kazemi",
      email: "kazemi@gmail.com",
      mobile: "09355039733",
      title: "Web developer",
      skills: "react-nodejs",
      password: "111111",
      image: "/",
    };

    let response = await httpRequest("/signup", {
      method: 'POST',
      data: usr,
    });
  };

  const deleteData = async () => {
    let response = await axios("https://wins-api-v2.liara.run/api/users", {
      method: "GET",
      // headers: {
      //   'Content-Type' : 'application/json',
      //   'Authorization' : 'Bearer ' + token
      // },
      // data : obj
    });
    console.log(response.data.users);
  };

  const editData = async () => {
    let response = await axios("https://wins-api-v2.liara.run/api/users", {
      method: "GET",
      // headers: {
      //   'Content-Type' : 'application/json',
      //   'Authorization' : 'Bearer ' + token
      // },
      // data : obj
    });
    console.log(response.data.users);
  };

  useEffect(() => {
    getData();
    let token = localStorage.getItem('token')
    if(!token) {
      navigate('/login')
    }
  }, []);

  return (
    <div className="shop">
      <h2>Welcome {loc.state.fName}</h2>

      <button onClick={() => setCounter(counter + 1)}>+</button>
      {products.map((item) => (
        <Product
          product={item}
          key={item.id}
          setCartArray={props.setCartArray}
        />
      ))}
      <button onClick={postData}>Add User</button>
    </div>
  );
};

export default Shop;
