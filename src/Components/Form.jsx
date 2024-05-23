import React, { useState } from "react";
import Card from "./Card";
import ErrorMessage from "./ErrorMessage";

const Form = () => {
  const [cliente, setCliente] = useState({
    nombre: "",
    auto: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const nombreValido = cliente.nombre.trim().length >= 3 && !cliente.nombre.startsWith(" ");
    const autoValido = cliente.auto.length >= 6;

    if (nombreValido && autoValido) {
      setShow(true);
      setError(false);
    } else {
      setShow(false);
      setError(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Nombre del cliente</label>
        <input
          type="text"
          value={cliente.nombre}
          onChange={(event) =>
            setCliente({ ...cliente, nombre: event.target.value })
          }
        />
        <label>Modelo del auto</label>
        <input
          type="text"
          value={cliente.auto}
          onChange={(event) =>
            setCliente({ ...cliente, auto: event.target.value })
          }
        />
        <button type="submit">Enviar</button>
      </form>
      {show && <Card cliente={cliente} />}
      {error && <ErrorMessage />}
    </>
  );
};

export default Form;
