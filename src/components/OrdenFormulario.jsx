import React, { useState } from 'react';

function OrdenFormulario() {
  const [formData, setFormData] = useState({
    nombre_usuario: '',
    telefono: '',
    extension: '',
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
      const res = await fetch('https://ordenes-backend.onrender.com/api/ordenes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setMensaje('✅ Orden registrada con éxito');
        setFormData({
          nombre_usuario: '',
          telefono: '',
          extension: '',
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
    <div className="bg-black text-green-400 p-8 rounded-xl shadow-lg w-full max-w-lg mx-auto font-mono border border-green-600">
      <div className="flex justify-center mb-4">
        <img src="/logo.png" alt="Logo de la empresa" className="h-20" />
      </div>
      <h2 className="text-2xl font-bold text-center mb-6">🛠️ Solicitud de Orden de Trabajo</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="nombre_usuario" placeholder="Nombre" value={formData.nombre_usuario} onChange={handleChange} required className="w-full p-3 bg-black border border-green-500 text-green-400 rounded" />
        <input name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} required className="w-full p-3 bg-black border border-green-500 text-green-400 rounded" />
        <input name="extension" placeholder="Ext. (opcional)" value={formData.extension} onChange={handleChange} className="w-full p-3 bg-black border border-green-500 text-green-400 rounded" />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-3 bg-black border border-green-500 text-green-400 rounded" />
        <input name="oficina" placeholder="Oficina" value={formData.oficina} onChange={handleChange} required className="w-full p-3 bg-black border border-green-500 text-green-400 rounded" />
        <textarea name="descripcion" placeholder="Descripción del problema" value={formData.descripcion} onChange={handleChange} required className="w-full p-3 bg-black border border-green-500 text-green-400 rounded" />
        <button type="submit" className="w-full bg-green-600 hover:bg-green-500 text-black font-bold py-3 px-4 rounded">
          📨 Enviar Orden
        </button>
      </form>
      {mensaje && <p className="mt-4 text-center">{mensaje}</p>}
    </div>
  );
}

export default OrdenFormulario;