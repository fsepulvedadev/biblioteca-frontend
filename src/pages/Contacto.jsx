import Formulario from "../components/Formulario";
import divisorIzq from "../assets/divisor_izq.svg";
import divisor from "../assets/divisor.svg";

import { Typography } from "@material-tailwind/react";
import {
  EnvelopeIcon,
  PhoneIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { RiTwitterXLine, RiInstagramLine } from "react-icons/ri";
import { SiFacebook } from "react-icons/si";

const Contacto = () => {
  return (
    <div className="flex flex-col items-center ">
      <img src={divisorIzq} alt="" className="w-full mt-10 -mb-10" />

      <div className="my-10">
        <Formulario />

        <Typography className="mt-8 text-xl font-bold text-center text-biblioteca">
          Otros medios de contacto
        </Typography>
        <div className="grid gap-4 my-8 md:grid-cols-2 md:grid-rows-2">
          <div className="flex gap-2">
            <EnvelopeIcon className="w-4" />
            <Typography className="">
              direcciondiversidadneuquen@gmail.com
            </Typography>
          </div>

          <div className="flex gap-2">
            <PhoneIcon className="w-4" />
            <Typography className="">299 155 816 357</Typography>
          </div>
          <div className="flex gap-2">
            <EnvelopeIcon className="w-4" />
            <Typography className="">
              subsecretariadiversidad@neuquen.gov.ar
            </Typography>
          </div>
          <div className="flex gap-2">
            <ClockIcon className="w-4" />
            <Typography className="">
              08:00 a 15:00 hs. de lunes a viernes
            </Typography>
          </div>
        </div>
        <ul className="flex items-center justify-center w-full gap-4 mx-auto my-4">
          <li>
            <a
              href="https://x.com/MujeresyDiversi?s=20"
              target="_blank"
              rel="noreferrer"
            >
              <RiTwitterXLine className="text-2xl text-biblioteca" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/MujeresyDiversi"
              target="_blank"
              rel="noreferrer"
            >
              <SiFacebook className="text-2xl text-biblioteca" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/mujeresydiversi/?igshid=NjIwNzIyMDk2Mg%3D%3D"
              target="_blank"
              rel="noreferrer"
            >
              <RiInstagramLine className="text-2xl text-biblioteca" />
            </a>
          </li>
        </ul>
      </div>
      <img src={divisor} alt="" className="w-full rotate-180 -mt-10" />
    </div>
  );
};

export default Contacto;
