import { useState } from "react";
import { Context } from "./context";

const BiblioContext = ({ children }) => {
  const [archivos, setArchivos] = useState(null);
  const [archivoSeleccionado, setArchivoSeleccionado] = useState([]);

  const handleBusqueda = async ({ busqueda, campo }) => {
    const res = await fetch(
      `https://bibliotecaarcoiris-api.neuquen.gov.ar/buscar?busqueda=${busqueda}&campo=${campo}`
    );
    const data = await res.json();
    setArchivos(data);
  };

  const handleDownload = (file) => {
    fetch(`https://bibliotecaarcoiris-api.neuquen.gov.ar/descargar/${file}`)
      .then((res) => res.blob())
      .then((blob) => {
        const a = document.createElement("a");
        a.href = window.URL.createObjectURL(blob);
        a.download = file;
        a.click();
      });
  };

  return (
    <Context.Provider
      value={{
        archivos,
        handleBusqueda,
        handleDownload,
        archivoSeleccionado,
        setArchivoSeleccionado,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default BiblioContext;
