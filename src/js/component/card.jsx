import React from "react";

const Cards = () => {
  return (
    <div className="card col mb-3 ms-2" style={{ width: "18rem" }}>
      <img
        src="https://media.traveler.es/photos/613765fb06df43bef2d304a5/master/w_1600%2Cc_limit/172097.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Mapa de ruta</h5>
        <p className="card-text">
        Mapa de ejemplo del centro de madrid para la distribución de los repartidores 
        </p>
        <div className="card-footer d-flex ms-auto justify-content-center" style={{background: "none"}}>
        <a href="#" className="btn btn-warning">
        Ubica tu zona 
        </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
