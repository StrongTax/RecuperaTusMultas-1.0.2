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


const iphone = () => {
  return (
    <divclassName="home" style={{ backgroundImage: `url(${BannerImage})` }}>>
      
    </div>
  )
}




export default Home;
