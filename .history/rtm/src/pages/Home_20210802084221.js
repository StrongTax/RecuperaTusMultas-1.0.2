import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import BannerImage2 from "../assets/iphone.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Recupera Tus Multas </h1>
        <p> Un servicio y un blog de noticias para mantenerte al tanto de esta ley.</p>
        <Link to="/menu">
          <button> Suscribete ahora!</button>
        </Link>
      </div>
      <div className="home" style={{ backgroundImage1: `url(${BannerImage2})` }}></div>
    </div>
    
  );
}
export default Home;
