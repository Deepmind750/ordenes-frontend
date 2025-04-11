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
    <div className="pagina-fondo"> {/* Fondo negro envolvente */}
      <div className="tramite-container">
        <div className="tramite-header">
          <img src="/logo-ag.png" alt="Logo" className="logo" />
          <div>
            <h2>ADMINISTRACIÓN MUNICIPAL DE BARCELONETA</h2>
            <h3>OFICINA DE ARTES GRÁFICAS</h3>
          </div>
        </div>

        <h2 className="center">HOJA DE TRÁMITE</h2>

        <form>
          <label>Fecha:</label>
          <input type="date" />

          <label>Para:</label>
          <input type="text" placeholder="Nombre del destinatario" />

          <label>De:</label>
          <input type="text" placeholder="Nombre del remitente" />

          <label>Descripción:</label>
          <textarea rows="4" placeholder="Descripción del trabajo entregado"></textarea>

          <label>Recibido por:</label>
          <input type="text" placeholder="Nombre en letra de molde" />

          <label>Fecha de recibido:</label>
          <input type="date" />

          <label>Firma:</label>
          <div className="firma">
            <SignatureCanvas
              ref={sigCanvas}
              canvasProps={{ width: 400, height: 150, className: 'sig-canvas' }}
            />
            <div className="firma-buttons">
              <button type="button" onClick={clearSignature}>Limpiar</button>
              <button type="button" onClick={saveSignature}>Guardar Firma</button>
            </div>
          </div>
        </form>

        <footer className="tramite-footer">
          <strong>TEL:</strong> 787-846-3400 | <strong>EXT:</strong> 2309, 2334 |{' '}
          <strong>EMAIL:</strong> artesgraficas@barceloneta.pr.gov
        </footer>
      </div>
    </div>
  );
};

export default HojaTramite;
