import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Recupera Tus Multas </h1>
        <p> Un servicio y un blog</p>
        <Link to="/menu">
          <button> Suscribete ahora!</button>
        </Link>
      </div>
     
    </div>
  );
}

import React from 'react'

const Home = () => {
  return (
    <div>
      
    </div>
  )
}

export default Home


export default Home;
