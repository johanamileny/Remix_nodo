# Welcome to Remix!

- 📖 [Remix docs](https://remix.run/docs)

## Development

Run the dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.



##  Instalación
Para instalar las dependencias, primero asegúrate de que tienes Node.jsy npm instalados en tu sistema. Luego, abre tu terminal en el directorio del proyecto y ejecuta el siguiente comando:

```sh
npm install
```


## Arranque del Proyecto

Para iniciar el servidor de desarrollo, ejecuta el siguiente comando en tu terminal:

```sh
npm run dev 
```
El proyecto estará disponible en http://localhost:3000.


## Enlaces

Los enlaces en Remix se crean utilizando el componente <Link> del paquete @remix-run/react. Estos enlaces permiten la navegación dentro de la aplicación sin recargar la página.

Ejemplo:
import { Link } from "@remix-run/react";

export default function Home() {
  return (
    <div>
      <h1>Bienvenido</h1>
      <Link to="/about">Ir a About</Link>
    </div>
  );
}
#

## Rutas Dinámicas

Las rutas dinámicas permiten crear rutas que pueden variar según parámetros. En Remix, se definen utilizando corchetes en el nombre del archivo de la ruta, por ejemplo, [id].tsx.

Ejemplo:

Si tienes un archivo app/routes/users/[id].tsx, puedes acceder a él usando una URL como /users/123.

Rutas Anidadas
Las rutas anidadas permiten crear rutas dentro de otras rutas, lo que facilita la creación de interfaces jerárquicas. Se definen organizando los archivos de rutas dentro de carpetas.

## Ejemplo:

app/routes/dashboard.tsx

app/routes/dashboard/settings.tsx

Componente de salida
El componente <Outlet> se utiliza para renderizar contenido anidado en las rutas. Sirve como un punto de inserción para las rutas secundarias dentro de una ruta principal.

## Ejemplo:

import { Outlet } from "@remix-run/react";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}


## Componente de salida
El componente <Outlet> se utiliza para renderizar contenido anidado en las rutas. Sirve como un punto de inserción para las rutas secundarias dentro de una ruta principal.

## Ejemplo:

import { Outlet } from "@remix-run/react";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}


## Cargadoras
Los loaders en Remix se utilizan para cargar datos antes de renderizar una página. Se definen exportando una función loader en el componente de la ruta.

## Ejemplo:

import { json, LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  const data = await fetchData();
  return json(data);
};


