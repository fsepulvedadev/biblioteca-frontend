import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function Acordion() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          ¿Que es la Biblioteca Arcoíris?
        </AccordionHeader>
        <AccordionBody>
          La Biblioteca Arcoíris es el primer repositorio digital que recopila
          archivos que abordan, desde distintas disciplinas, las temáticas que
          atraviesan a la Diversidad Sexual. El objetivo es poder reunir en un
          solo sitio cientos de materiales de consulta para familias,
          profesionales y personas del colectivo LGBT+ que estén en busca de
          mayor información. Aquí podrán encontrar documentación de carácter
          legal, normativas, manuales, investigaciones, estudios y ensayos; y
          demás archivos en distintos formatos, tales como: videos, imágenes y
          audios, relacionados a las diversidades sexuales.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          ¿Como puedo buscar archivos?
        </AccordionHeader>
        <AccordionBody>
          El sistema para buscar archivos es muy similar al buscador de Google.
          Hay que ir a la sección “Buscar”, que se encuentra en el margen
          superior derecho, y allí colocar al menos una palabra clave para ser
          direccionados a archivos que coincidan con esa frase. La búsqueda
          puede ser por categoría y así el usuario puede elegir buscar por
          título, autor, institución, tema, lugar, fecha, etcétera.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          ¿Quienes llevan adelante este proyecto?
        </AccordionHeader>
        <AccordionBody>
          Este proyecto lo impulsa el gobierno de la provincia del Neuquén, a
          través de la Subsecretaría de Diversidad, perteneciente al Ministerio
          de las Mujeres y la Diversidad, y el apoyo técnico de la Secretaría de
          Estado de Planificación y Acción para el Desarrollo (COPADE).
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)}>
          ¿Como puedo colaborar?
        </AccordionHeader>
        <AccordionBody>
          Podes comunicarte con el equipo que lleva a cabo la biblioteca
          utilizando el formulario de contacto en la sección "Contacto" o
          enviando un correo electrónico a cualquiera de los emails que figuran
          en dicha seccion.
        </AccordionBody>
      </Accordion>
    </>
  );
}
