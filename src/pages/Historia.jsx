import { Typography } from "@material-tailwind/react";
import React from "react";
import Lucha from "../assets/Lucha.avif";

const Historia = () => {
  return (
    <div className="w-9/12 mx-auto border-2 mt-10 trans-border">
      <Typography
        variant="h4"
        className="text-center my-10 border-b-4 lgbt-border md:w-3/12 w-8/12 mx-auto"
      >
        Historia de la biblioteca
      </Typography>

      <article className="flex flex-col gap-4 my-10 min-h-[40vh] w-10/12 mx-auto pb-20">
        <Typography>
          La Biblioteca Arcoíris surge desde la Subsecretaría de Diversidad con
          el objetivo de seguir promocionando los derechos del colectivo LGBT+ y
          facilitando el acceso a la información que demanda la sociedad en su
          conjunto.
        </Typography>

        <Typography className="">
          Este repositorio digital es la forma más práctica para acercar una
          gran cantidad de leyes, proyectos, manuales, investigaciones,
          documentales y demás archivos que fueron creados para hacer respetar y
          seguir ampliando los derechos de las diversidades sexuales.
        </Typography>

        <img
          src={Lucha}
          alt=""
          className="md:w-8/12 my-6 mx-auto inline-flex"
        />

        <Typography>
          Se trata de una base de datos única, en permanente actualización, que
          recopila materiales producidos a nivel local, nacional y también
          internacional con una temática especializada, sin antecedentes en la
          región.
        </Typography>

        <Typography>
          Su creación y modernización se completa a partir del aporte técnico
          que realizó la Secretaría de Estado de Planificación y Acción para el
          Desarrollo (COPADE), quienes brindaron las herramientas necesarias
          para que sea de sencillo acceso y navegación.
        </Typography>
      </article>
    </div>
  );
};

export default Historia;
