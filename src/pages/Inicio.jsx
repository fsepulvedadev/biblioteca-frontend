import { Typography } from "@material-tailwind/react";
import Button from "@material-tailwind/react/components/Button";
import divisor from "../assets/divisor.svg";
import Acordion from "../components/Acordion";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <div className="pt-4 ">
      <div className="flex flex-col items-center p-4 my-8 ">
        <div className="">
          <Typography
            color="blue-gray"
            className="text-4xl font-extrabold text-center"
          >
            Bienvenido a la{" "}
            <span className="text-[#1a3a67]">Biblioteca Arcoiris</span>
          </Typography>
        </div>

        <div className="mt-4 md:w-6/12">
          <Typography
            color="blue-gray"
            className="font-thin text-center md:text-lg text-blue-gray-400"
          >
            El repositorio digital de archivos historicos sobre la lucha LGBTIQ+
            <br /> desarrollado por la Subsecretaria de Diversidad de la
            Provincia de Neuquen
          </Typography>
        </div>
        <div className="flex gap-4 mt-4">
          <Link to={"/buscar"}>
            <Button variant="filled" size="lg" className="bg-[#1a3a67]">
              Buscar archivos
            </Button>
          </Link>

          <Link to={"/historia"}>
            <Button
              size="lg"
              variant="outlined"
              className="border-[#1a3a67] text-[#1a3a67]"
            >
              Mas info
            </Button>
          </Link>
        </div>
      </div>

      <img src={divisor} alt="" className="w-full " />

      <div>
        <Typography
          color="blue-gray"
          className="text-center text-2xl font-extrabold text-[#1a3a67]"
        >
          Preguntas Frecuentes
        </Typography>

        <div className="w-6/12 mx-auto my-8">
          <Acordion />
        </div>
      </div>
    </div>
  );
};

export default Inicio;
