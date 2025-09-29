# Presentado por:
Samuel Álvarez
Alejandro Henríquez
Vicente Orellana

##  Índice
1. [Resumen del Proyecto](#resumen-del-proyecto)
2. [Requerimientos](#requerimientos)
3. [Arquitectura de la Información](#arquitectura-de-la-información)
4. [Diseño de prototipos](#prototipo-de-diseño)
5. [Librerías en Angular](#liberías-usadas-con-angular)

## Resumen del Proyecto

El proyecto consiste en el desarrollo de una aplicación web y móvil para la gestión de reservas de canchas e instalaciones deportivas de un centro llamado SportReserve. El propósito principal es digitalizar el proceso de arriendo de instalaciones, permitiendo a los usuarios reservar, pagar y administrar sus reservas de manera rápida y accesible, mientras que el administrador puede gestionar usuarios y supervisar la operación de la plataforma.

Se definieron dos roles principales:

Usuario (arrendatario): puede registrarse, iniciar sesión, explorar las instalaciones disponibles, ver detalles de cada recinto, iniciar reservas, realizar pagos en línea, editar su perfil y recuperar su contraseña en caso de olvido.

Administrador: tiene acceso a un panel de gestión donde puede visualizar usuarios activos y desactivados, activar o desactivar cuentas, eliminar usuarios, y modificar atributos como rol, nombre o información de contacto.

En cuanto a la experiencia de usuario (UX), se aplicaron patrones reconocidos como el uso de cards para mostrar instalaciones, formularios estándar para login y registro, mensajes de retroalimentación en acciones críticas y división de usuarios en listas (activos y desactivados) para una gestión clara en el panel de administración.

---
## Requerimientos

## Roles del Sistema
Administradores
Usuarios

## Requerimientos Funcionales por Rol

#Usuario:

RF1 – Visualización de instalaciones deportivas
El sistema debe mostrar al usuario un listado de las instalaciones disponibles para arriendo, incluyendo el nombre de la instalación, el tipo de recinto (por ejemplo: gimnasio o cancha techada), la tarifa por media hora de uso y los servicios básicos incluidos. Esta información debe presentarse en forma de tarjetas, cada una con un botón que permita iniciar el proceso de reserva de la instalación seleccionada.

RF2 – Inicio del proceso de reserva
Cuando el usuario seleccione el botón “Reservar” en una tarjeta de instalación, el sistema debe iniciar el flujo de reserva para esa instalación, asegurando que se mantenga la referencia de la cancha o recinto elegido durante todo el proceso de reserva.

RF3 – Generación de orden de pago
El sistema debe generar una pantalla de orden de pago que muestre de manera clara el monto a cancelar por la reserva, ofreciendo como opciones de pago el ingreso de una tarjeta bancaria o el uso de otros métodos de pago. El botón de confirmación debe mostrar explícitamente el monto total de la transacción, y al finalizar el proceso, el sistema debe registrar el estado del pago como aprobado, fallido o cancelado.

RF4 – Recuperación de contraseña de usuario
El sistema debe permitir que un usuario que haya olvidado su contraseña solicite la recuperación de la misma, mediante un formulario que requiera ingresar su nombre y su correo electrónico. Una vez completada esta información, el sistema debe enviar un correo electrónico de verificación al usuario para que pueda restablecer su acceso.

RF5 – Edición de perfil de usuario
El sistema debe permitir que el usuario edite su perfil personal, actualizando campos como el nombre, la descripción opcional y el medio de contacto, además de permitir cambiar la foto de perfil mediante una acción específica. Los cambios realizados deben guardarse y quedar visibles inmediatamente en la interfaz de perfil del usuario.

#Administrador:

RF6 – Visualización de usuarios en el panel de administración
El sistema debe mostrar al administrador un panel dividido en dos listas: una lista de usuarios activos y una lista de usuarios desactivados. En cada lista se debe mostrar el nombre de cada usuario junto con su rol (por ejemplo, administrador o usuario estándar).

RF7 – Activación de usuarios desactivados
El sistema debe permitir que el administrador active a un usuario que se encuentre en la lista de desactivados, mediante la acción “Activar”. Una vez realizada la acción, el usuario debe pasar a la lista de activos y el sistema debe mostrar un mensaje confirmando que el usuario ha sido activado.

RF8 – Desactivación de usuarios activos
El sistema debe permitir que el administrador desactive a un usuario que se encuentre en la lista de activos, mediante la acción “Desactivar”. Una vez realizada la acción, el usuario debe pasar a la lista de desactivados y el sistema debe mostrar un mensaje confirmando que el usuario ha sido desactivado.

RF9 – Eliminación de usuarios
El sistema debe permitir que el administrador elimine a un usuario de forma permanente, ya sea que se encuentre en la lista de activos o en la lista de desactivados. Una vez confirmada la acción, el usuario eliminado no debe aparecer en ninguna de las listas del panel de administración.

RF10 – Modificación de rol y atributos de usuario
El sistema debe permitir que el administrador visualice y modifique los atributos de un usuario, tales como nombre, descripción, medio de contacto y rol asignado. Una vez realizados los cambios, estos deben guardarse y reflejarse inmediatamente tanto en el perfil del usuario como en las listas del panel de administración.

---
## Requerimientos No Funcionales

RNF1 – Rendimiento en carga inicial
El sistema debe cargar la pantalla principal con el listado de instalaciones en un tiempo menor a 5 segundos en una red de velocidad media (4G o WiFi doméstica).

RNF2 – Rendimiento en navegación
El sistema debe responder a las acciones de navegación del usuario (por ejemplo, abrir la vista de reserva o el perfil) en un tiempo menor a 4 segundos.

RNF3 – Disponibilidad
El sistema debe estar disponible al menos el 95% del tiempo durante las horas de uso definidas para pruebas y demostraciones académicas, excluyendo mantenimientos programados.

RNF4 – Compatibilidad de dispositivos
El sistema debe funcionar correctamente en navegadores modernos como Google Chrome y Microsoft Edge, en sus dos últimas versiones, y en dispositivos móviles con Android 10 o superior.

RNF5 – Accesibilidad básica
El sistema debe permitir que las pantallas sean navegables usando teclado, y todos los botones principales deben tener etiquetas claras y textos alternativos en imágenes de perfil.

RNF6 – Seguridad de contraseñas
El sistema debe almacenar las contraseñas de los usuarios de manera encriptada mediante un algoritmo estándar, sin guardar contraseñas en texto plano.

RNF7 – Usabilidad en reservas
El sistema debe permitir que un usuario realice una reserva completa (selección de instalación y confirmación de pago) en no más de 3 pasos visibles.

RNF8 – Facilidad de mantenimiento
El código del sistema debe estar organizado en módulos de Angular/Ionic, con nombres claros y comentarios básicos, para que otro programador junior pueda comprender la estructura en menos de 1 hora de revisión.

RNF9 – Documentación mínima
El sistema debe contar con un archivo README en el repositorio que explique cómo instalar dependencias, cómo ejecutar el proyecto y credenciales de prueba para el rol de usuario y de administrador.

RNF10 – Escalabilidad académica
El sistema debe soportar al menos 50 usuarios accediendo de manera concurrente sin fallar ni interrumpir las funciones principales (visualizar instalaciones y realizar reservas).


---
## Arquitectura de la Información 
https://lucid.app/lucidchart/539abc26-ee65-4f54-a5c8-16705a6b0c89/edit?viewport_loc=-664%2C-54%2C2895%2C1378%2C0_0&invitationId=inv_b69eaf09-cc37-4329-974e-85a9d78924ea

---
## Prototipo de diseño
https://www.figma.com/design/lLmROkOk49umYfN7cTNh2j/Reservas-para-Centro-Depotivo?node-id=234-1223&t=dn88yuIrTEl7sUy9-1

---
## Librerías usadas con Angular/Ionic
- **@ionic/angular** → componentes UI
- **Ionicons** → iconos para la interfaz                                        

## Tecnologías
- **Ionic Framework** (v8+) → para desarrollo híbrido web y móvil
- **Angular** (v20+) → framework principal de la app
- **TypeScript** → lenguaje principal del proyecto
- **RxJS** → manejo reactivo de datos
- **Angular Router** → navegación entre vistas
- **Angular Forms** → manejo de formularios
- **HttpClient** → comunicación con backend / APIs
