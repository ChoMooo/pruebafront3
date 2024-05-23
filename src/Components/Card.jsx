import React from "react";

const Card = ({ cliente }) => {
  return (
    <div>
      <h3>Gracias, {cliente.nombre}</h3>
      <h4>Tu auto es: {cliente.email}</h4>
    </div>
  );
};

export default Card;
