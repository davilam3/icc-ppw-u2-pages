import React, { useState } from "react";

function PerfilPage() {
  // Estados: equivalentes a los signals de Angular
  const [name, setName] = useState("Diana");
  const [lastName, setLastName] = useState("Avila");
  const [age, setAge] = useState(20);

  // Función para obtener el nombre completo
  function getFullName() {
    return `${name} ${lastName} con ${age} años`;
  }

  // Funciones para cambiar datos
  function changeData() {
    setName("Ana");
    setLastName("Gonzales");
    setAge(25);
  }

  function changeAge() {
    setAge(18);
  }

  function resetData() {
    setName("Diana");
    setLastName("Avila");
    setAge(20);
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>PERFIL</h1>
      <h2>{name}</h2>

      <dl>
        <dt>Nombre:</dt>
        <dd>{name}</dd>

        <dt>Apellido:</dt>
        <dd>{lastName}</dd>

        <dt>Edad:</dt>
        <dd>{age}</dd>

        <dt>Nombre Completo:</dt>
        <dd>{getFullName()}</dd>

        <dt>Nombre y Apellido (Mayúsculas):</dt>
        <dd>{(name + " " + lastName).toUpperCase()}</dd>
      </dl>

      <br />

      <button onClick={changeData}>Cambiar datos</button>{" "}
      <button onClick={changeAge}>Cambiar edad</button>{" "}
      <button onClick={resetData}>Reset</button>
    </div>
  );
}

export default PerfilPage;
