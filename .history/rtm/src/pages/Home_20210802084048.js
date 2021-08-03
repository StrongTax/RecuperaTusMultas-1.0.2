import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import BannerImage2 from "../assets/pizza2.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="home" style={{ backgroundImage2: `url(${iphone})` }}></div>
      <div className="headerContainer">
        <h1> Recupera Tus Multas </h1>
        <p> Un servicio y un blog de noticias para mantenerte al tanto de esta ley.</p>
        <Link to="/menu">
          <button> Suscribete ahora!</button>
        </Link>
      </div>
    </div>
  );
}
export default Home;
