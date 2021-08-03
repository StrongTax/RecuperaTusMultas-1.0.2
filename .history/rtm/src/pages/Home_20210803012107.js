import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.png";
import "../styles/Home.css";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import { principalArt } from "../helpers/MenuList copy";


function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Obten un dinero de las multas que tengas </h1>
        <p> Un servicio y un blog de noticias para mantenerte al tanto de esta ley.</p>
        <Link to="/menu">
          <button> Suscribete ahora!</button>
        </Link>
      </div>
      <h1 className="principal">Articulo de la semana </h1>
      {principalArt.map((principalArt, key) => {
          return (
            <principalArt
              key={key}
              image={principalArt.image}
              name={principalArt.Nombre}
              price={principalArt.Articulo}
            />
          );
        })}
    <div className="menu">
      <h1 className="menuTitle">Mas Articulos</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.Nombre}
              price={menuItem.Articulo}
            />
          );
        })}
      </div>
    </div>
    </div>
)

}



export default Home;
