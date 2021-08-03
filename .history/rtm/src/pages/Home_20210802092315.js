import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";
import iphone1 from "../assets/iphone.png";


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
    </div>
)

}

console.log(iphone);

function Header() {

  return <img src={iphone} alt="iphone" />
}

export default Home;
