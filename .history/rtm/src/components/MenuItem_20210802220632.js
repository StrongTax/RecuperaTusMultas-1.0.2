import React from "react";

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {Nombre} </h1>
      <p> ${Articulo} </p>
    </div>
  );
}

export default MenuItem;
