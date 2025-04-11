import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import './HojaTramite.css';

const HojaTramite = () => {
  const sigCanvas = useRef();

  const clearSignature = () => sigCanvas.current.clear();
  const saveSignature = () => {
    const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
    console.log("Firma capturada:", dataURL);
  };

  return (
    <div className="tramite-container">
      <div className="tramite-header">
        <img src="/logo-ag.png" alt="Logo" className="logo" />
        <div>
          <h2>ADMINISTRACIÓN MUNICIPAL DE BARCELONETA</h2>
          <h3>OFICINA DE ARTES GRÁFICAS</h3>
        </div>
      </div>

      <h2 className="center">HOJA DE TRÁMITE</h2>

      <label>FECHA:</label>
      <input type="date" />

      <label>A:</label>
      <input type="text" placeholder="Nombre del destinatario" />

      <label>DE:</label>
      <input type="text" placeholder="Nombre del remitente" />

      <label>ASUNTO:</label>
      <textarea rows="4" placeholder="Describa el asunto del trámite"></textarea>

      <label>RECIBIDO POR (Nombre en letra de molde):</label>
      <input type="text" />

      <label>RECIBIDO POR:</label>
      <input type="text" />

      <label>FIRMA:</label>
      <div className="firma">
        <SignatureCanvas ref={sigCanvas} canvasProps={{width: 400, height: 150, className: 'sig-canvas'}} />
        <div className="firma-buttons">
          <button onClick={clearSignature}>Limpiar</button>
          <button onClick={saveSignature}>Guardar Firma</button>
        </div>
      </div>

      <footer className="tramite-footer">
        <strong>TEL:</strong> 787-846-3400 | <strong>EXT:</strong> 2309, 2334 | 
        <strong>EMAIL:</strong> artesgraficas@barceloneta.pr.gov
      </footer>
    </div>
  );
};

export default HojaTramite;

