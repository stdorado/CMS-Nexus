
# CMS Simple para Creación de Posts

Este es un sistema de gestión de contenido (CMS) simple desarrollado en Node.js utilizando Express, JWT, Passport y Mongoose. Permite a los usuarios registrados crear y gestionar sus propios posts de manera segura.

## Características

- Registro de usuarios con autenticación segura mediante JWT (JSON Web Tokens).
- Sistema de gestión de sesiones implementado con Passport.js.
- Creación, edición y eliminación de posts por parte de usuarios autenticados.
- Base de datos MongoDB utilizando Mongoose para almacenar la información de usuarios y posts.

## Requisitos

- Node.js instalado en el sistema.
- MongoDB instalado y en funcionamiento.
- NPM o Yarn instalado para la gestión de paquetes.

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/repo-cms-simple.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd repo-cms-simple
   ```

3. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

4. Crea un archivo `.env` en la raíz del proyecto y define las siguientes variables de entorno:

   ```plaintext
   PORT=6000
   MONGODB_URI=tu_url_de_mongodb
   JWT_SECRET=tu_secreto_para_jwt
   ```

## Uso

1. Inicia el servidor:

   ```bash
   npm start
   ```

2. Accede a `http://localhost:6000` en tu navegador web.

3. Regístrate como nuevo usuario o inicia sesión si ya tienes una cuenta.

4. Una vez autenticado, podrás crear, editar y eliminar tus propios posts desde la interfaz de usuario.

## Contribución

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar este proyecto, por favor, abre un issue para discutir lo que te gustaría cambiar o envía una pull request.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](https://opensource.org/licenses/MIT).


## Arquitectura sistema : [Arquitectura Nexus.pdf](https://github.com/stdorado/CMS-Nexus/files/15031979/Arquitectura.Nexus.pdf)


---

Este README proporciona una guía básica para instalar, utilizar y contribuir al proyecto CMS Simple para Creación de Posts. Puedes personalizarlo y agregar más detalles según sea necesario para tu proyecto específico.
