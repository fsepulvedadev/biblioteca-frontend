import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";

export default function Formulario() {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="flex items-center justify-center"
    >
      <Typography
        variant="h4"
        color="blue-gray"
        className="text-center text-biblioteca"
      >
        Contacto
      </Typography>
      <Typography color="gray" className="mt-1 font-normal text-center">
        Envianos tu consulta sobre la biblioteca.
      </Typography>
      <form className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96">
        <div className="flex flex-col gap-6 mb-4">
          <Input size="lg" label="Nombre" />
          <Input size="lg" label="Apellido" />
          <Input type="email" size="lg" label="Email" />
          <Textarea color="lightBlue" size="regular" label="Mensaje" />
        </div>

        <Button className="mt-6 bg-biblioteca" fullWidth>
          Enviar
        </Button>
      </form>
    </Card>
  );
}
