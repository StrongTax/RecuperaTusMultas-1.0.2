import React from "react";

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {Nombre Del Art} </h1>
      <p> {Descripcion} </p>
    </div>
  );
}

export default MenuItem;
