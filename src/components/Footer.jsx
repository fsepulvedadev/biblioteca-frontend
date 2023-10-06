import { Typography } from "@material-tailwind/react";
import banner from "../assets/banner.svg";
import { Link } from "react-router-dom";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="w-full p-8 bg-white ">
      <div className="flex flex-row flex-wrap items-center justify-center text-center bg-white gap-y-6 gap-x-12">
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <Link to={"/inicio"}>
            <Typography
              color="blue-gray"
              className="text-sm font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Inicio
            </Typography>
          </Link>
          <Link to={"/historia"}>
            <Typography
              color="blue-gray"
              className="text-sm font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Historia
            </Typography>
          </Link>
          <li className="inline-flex">
            <Typography
              as="a"
              href="https://www.mujeresydiversidadnqn.gob.ar/"
              target="_blank"
              color="blue-gray"
              className="text-sm font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Sobre la secretaria
            </Typography>
            <ArrowUpRightIcon className="w-3 ml-1" />
          </li>
          <Link to={"/contacto"}>
            <Typography
              href="#"
              color="blue-gray"
              className="text-sm font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contacto
            </Typography>
          </Link>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <img src={banner} alt="" className="mx-auto lg:w-6/12" />
    </footer>
  );
}
