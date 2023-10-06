import Formulario from "../components/Formulario";
import divisor from "../assets/divisor.svg";
import { Typography } from "@material-tailwind/react";

const Contacto = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="my-10">
        <Formulario />

        <Typography className="mt-8 text-xl font-bold text-biblioteca">
          Otros medios de contacto
        </Typography>
      </div>
      <img src={divisor} alt="" className="w-full " />
    </div>
  );
};

export default Contacto;
