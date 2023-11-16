import BarraDeBusqueda from "../components/BarraDeBusqueda";
import { Card, Typography } from "@material-tailwind/react";
import { Context } from "../Contexto/context";
import { useContext } from "react";
import { DocumentArrowDownIcon, EyeIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import arcoiris from "../assets/forma-arcoiris.svg";

const TABLE_HEAD = [
  "Titulo",
  "Autor",
  "Tema",
  "Lugar",
  "Coleccion",
  "Nombre",
  "Nivel",
  "Fecha",
  "",
];

const Buscar = () => {
  const { archivos, handleDownload, setArchivoSeleccionado } =
    useContext(Context);

  const navigate = useNavigate();

  return (
    <div className="h-[60vh] lgbt-border border-b-8">
      <Typography className="my-6 text-2xl font-bold text-center text-[#1a3a67]">
        Buscar Archivos
      </Typography>
      <div className=" md:w-6/12 mx-auto">
        <BarraDeBusqueda />
      </div>
      {archivos && (
        <Card className="w-full h-full overflow-auto">
          <table className="w-10/12 mx-auto my-10 text-left table-auto min-w-max">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="text-center py-2 border-b border-blue-gray-100 bg-[#1a3a67]"
                  >
                    <Typography
                      variant="small"
                      className="font-normal leading-none text-white "
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {archivos.map((archivo, index) => (
                <tr key={index} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {archivo.titulo.titulo}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {archivo.autorPersonalAsientoPrincipal.autor}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {archivo.tema.tema}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      <ul>
                        {archivo.publicacion.map((pub, i) => (
                          <li key={i}>{pub.lugar}</li>
                        ))}
                      </ul>
                    </Typography>
                  </td>

                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      <ul>
                        {archivo.coleccion.map((pub, i) => (
                          <li key={i}>{pub.titulo}</li>
                        ))}
                      </ul>
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      <ul>
                        {archivo.terminoDeMateriaNombreDePersona.map(
                          (pub, i) => (
                            <li key={i}>{pub.nombre}</li>
                          )
                        )}
                      </ul>
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      <ul>
                        {archivo.nivel.map((pub, i) => (
                          <li key={i}>{pub.nivel}</li>
                        ))}
                      </ul>
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      <ul>
                        {archivo.publicacion.map((pub, i) => (
                          <li key={i}>{`${new Date(pub.fecha).getDate() + 1}/${
                            new Date(pub.fecha).getMonth() + 1
                          }/${new Date(pub.fecha).getFullYear()}`}</li>
                        ))}
                      </ul>
                    </Typography>
                  </td>
                  <td className="flex gap-2 p-4">
                    <DocumentArrowDownIcon
                      onClick={() => handleDownload(archivo.archivo)}
                      className="p-1 text-white bg-yellow-800 rounded cursor-pointer w-7"
                    />
                    <EyeIcon
                      onClick={() => {
                        setArchivoSeleccionado(archivo);
                        navigate("/archivo");
                      }}
                      className="p-1 text-white bg-blue-600 rounded cursor-pointer w-7"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      )}
    </div>
  );
};

export default Buscar;
