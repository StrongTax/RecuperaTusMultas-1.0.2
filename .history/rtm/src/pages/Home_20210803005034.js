import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.png";
import "../styles/Home.css";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";


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
      return (
    <div className="menu">
      <h1 className="menuTitle">Nuestros Articulos</h1>
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
