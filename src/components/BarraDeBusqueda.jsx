import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Button, Input, Select, Option } from "@material-tailwind/react";
import { useState, useContext } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { Context } from "../Contexto/context";

const BarraDeBusqueda = () => {
  const [busqueda, setBusqueda] = useState("");
  const [campo, setCampo] = useState(null);
  const [fecha, setFecha] = useState({
    start: new Date(),
    end: new Date().setMonth(11),
  });

  const { handleBusqueda } = useContext(Context);

  const buscar = (e) => {
    e.preventDefault();
    handleBusqueda({ busqueda, campo });
  };

  const handleCambioFecha = (nuevoValor) => {
    setFecha(nuevoValor);
  };

  return (
    <form onSubmit={buscar} action="">
      <div className="grid grid-cols-2 gap-2">
        <div className={`${campo === "fecha" ? "hidden" : "block"}`}>
          <Input
            value={busqueda}
            label="Busqueda"
            type="text"
            onChange={(e) => {
              setBusqueda(e.target.value);
            }}
          />
        </div>
        <div className={`${campo === "fecha" ? "block" : "hidden"}`}>
          <Datepicker
            asSingle={true}
            inputClassName="relative transition-all border-blue-gray-200 duration-300 py-2.5 pl-4 pr-14 w-full border dark:bg-slate-800 dark:text-white/80 dark:border-slate-600 rounded-lg tracking-wide font-light text-sm placeholder-gray-500 bg-white focus:ring disabled:opacity-40 disabled:cursor-not-allowed focus:border-blue-500 focus:ring-blue-500/20"
            primaryColor="blue"
            className="bg-red-300"
            value={fecha}
            onChange={handleCambioFecha}
          />
        </div>
        <Select
          onChange={(e) => {
            console.log(e);
            setCampo(e);
          }}
          label="Campo"
        >
          <Option value="titulo">Titulo</Option>
          <Option value="autor">Autor</Option>
          <Option value="institucion">Institucion / Organismo</Option>
          <Option value="tema">Tema</Option>
          <Option value="lugar">Lugar</Option>
          <Option value="coleccion">Coleccion</Option>
          <Option value="nombre">Nombre</Option>
          <Option value="nivel">Destinado a</Option>
          <Option value="fecha">Fecha</Option>
        </Select>
      </div>
      <Button
        className="flex items-center justify-center w-6/12 mx-auto mt-4 bg-[#1a3a67]"
        type="submit"
      >
        Buscar
        <MagnifyingGlassIcon className="w-3 ml-1 " />
      </Button>
    </form>
  );
};

export default BarraDeBusqueda;
