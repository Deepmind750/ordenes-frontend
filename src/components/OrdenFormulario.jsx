import React, { useState } from "react";

const OrdenFormulario = () => {
  const [nombre_usuario, setNombreUsuario] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ext, setExt] = useState(""); // <-- NUEVO
  const [email, setEmail] = useState("");
  const [oficina, setOficina] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const datos = {
      nombre_usuario,
      telefono,
      ext, // <-- NUEVO
      email,
      oficina,
      descripcion,
    };

    try {
      const response = await fetch("https://ordenes-backend.onrender.com/api/ordenes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      });

      const result = await response.json();

      if (response.status === 201) {
        alert("Orden enviada con éxito");
      } else {
        alert("Error: " + result.error);
      }
    } catch (error) {
      alert("Error de conexión con el servidor");
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Orden de Trabajo</h2>

      <input
        type="text"
        placeholder="Nombre del Usuario"
        value={nombre_usuario}
        onChange={(e) => setNombreUsuario(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />

      <input
        type="text"
        placeholder="Ext." // <-- NUEVO
        value={ext}
        onChange={(e) => setExt(e.target.value)}
      />

      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Oficina"
        value={oficina}
        onChange={(e) => setOficina(e.target.value)}
        required
      />

      <textarea
        placeholder="Descripción del problema"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        required
      />

      <button type="submit">Enviar Orden</button>
    </form>
  );
};

export default OrdenFormulario;