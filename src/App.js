import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    nombre_usuario: '',
    telefono: '',
    email: '',
    oficina: '',
    descripcion: ''
  });

  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3001/api/ordenes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setMensaje('✅ Orden registrada con éxito');
        setFormData({
          nombre_usuario: '',
          telefono: '',
          email: '',
          oficina: '',
          descripcion: ''
        });
      } else {
        setMensaje('❌ Error al registrar la orden');
      }
    } catch (err) {
      setMensaje('❌ Error de conexión con el servidor');
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-400 flex items-center justify-center px-4 font-mono">
      <div className="bg-black border border-green-500 p-8 rounded-xl shadow-lg w-full max-w-lg">
        <div className="flex justify-center mb-4">
          <img src="/logo.png" alt="Logo de la empresa" className="h-20" />
        </div>
        <h3 className="text-center text-green-300 text-xl font-mono tracking-wider mb-4">
          Oficina de Sistema de Información
        </h3>
        <h2 className="text-2xl font-bold mb-6 text-green-400 text-center">
          <span role="img" aria-label="herramienta">🛠️</span> Solicitud de Orden de Trabajo
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="nombre_usuario" placeholder="Nombre" value={formData.nombre_usuario} onChange={handleChange} required className="w-full p-3 border border-green-600 bg-black text-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
          <input name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} required className="w-full p-3 border border-green-600 bg-black text-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
          <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-3 border border-green-600 bg-black text-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
          <input name="oficina" placeholder="Oficina" value={formData.oficina} onChange={handleChange} required className="w-full p-3 border border-green-600 bg-black text-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
          <textarea name="descripcion" placeholder="Descripción del problema" value={formData.descripcion} onChange={handleChange} required className="w-full p-3 border border-green-600 bg-black text-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
          <button type="submit" className="w-full bg-green-600 hover:bg-green-500 text-black font-bold py-3 px-4 rounded-lg transition duration-300">
            <span role="img" aria-label="enviar">📨</span> Enviar Orden
          </button>
        </form>
        {mensaje && <p className="mt-4 text-center text-sm text-green-400">{mensaje}</p>}
      </div>
    </div>
  );
}

export default App;
