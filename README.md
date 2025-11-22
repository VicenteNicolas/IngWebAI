## Entrega Parcial 2 – Integración Frontend + Backend y Autenticación

## Ejecución del Backend
Entrar a la carpeta Backend.

Instalar dependencias con: npm install

Crear un archivo llamado .env dentro de la carpeta Backend con los siguientes datos:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=TU_PASSWORD
DB_NAME=miapp_db
JWT_SECRET=miclaveultrasecreta

## Base de Datos

Importar la base de datos usando phpMyAdmin o una herramienta similar ejecutando el archivo:

database/ingWeb.sql

## Acceso y Roles

Los usuarios registrados se crean con rol "usuario".

Para crear un administrador, ejecutar este comando SQL en la base de datos:

INSERT INTO usuarios (username, password, rut, email, region_id, comuna_id, role, activo)
VALUES (
  'vic',
  '$2b$12$uMxJdtlqdSgOxm4mwz8WAOsHMshCyvwmRGAcgdVUEAla6YzENPX06',
  '00000000-0',
  'admin@admin.cl',
  1,
  1,
  'admin',
  1
);

La contraseña de este usuario es: admin123

## Pruebas API (Postman)

Las pruebas se encuentran en la carpeta:

Backend/postman/EP2-Pruebas-Postman
