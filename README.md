# 📋 Full-Stack To-Do App

Una aplicación de lista de tareas completa (Full-Stack To-Do App) construida con **Node.js, Express, MongoDB** y un diseño moderno impulsado por **Tailwind CSS**. Este proyecto incluye autenticación de usuario completa con verificación de correo electrónico.

## 🚀 Características

* **Autenticación de Usuario:** Registro (Signup), inicio de sesión (Login) y cierre de sesión (Logout).
* **Verificación de Correo Electrónico:** Los usuarios deben verificar su correo electrónico para activar su cuenta (utilizando **Nodemailer**).
* **Gestión de Tareas (CRUD):** Creación, lectura, actualización y eliminación de tareas.
* **Seguridad:** Uso de **JWT (JSON Web Tokens)** y **cookies** para mantener la sesión del usuario de forma segura.
* **Configuración por Entorno:** Manejo de variables de entorno para entornos de desarrollo y producción.
* **Estilizado Moderno:** Interfaz de usuario responsiva y moderna gracias a **Tailwind CSS**.

### 📂 Estructura del Proyecto
todo-app


├── controllers/          # Lógica para manejar las rutas (usuarios, login, todos)

├── middleware/           # Middleware personalizado (ej: auth.js)

├── models/               # Esquemas de Mongoose para la base de datos

├── views/                # Archivos estáticos del frontend (HTML, JS, CSS)

├── .env                  # Variables de entorno

├── app.js                # Configuración principal de Express y conexión a DB

├── config.js             # Lógica para elegir variables de entorno (DEV/PROD)

├── index.js              # Punto de entrada y escucha del servidor

├── package.json          # Metadatos y dependencias
  

## 🛠️ Tecnologías Utilizadas

### Backend (API REST)
| Tecnología | Descripción |
| :--- | :--- |
| **Node.js** | Entorno de ejecución para JavaScript. |
| **Express** | Framework web rápido y minimalista para Node.js. |
| **MongoDB** | Base de datos NoSQL flexible y escalable. |
| **Mongoose** | Modelado de objetos para MongoDB. |
| **JWT** | Autenticación basada en tokens. |
| **Bcrypt** | Hashing de contraseñas. |
| **Nodemailer** | Envío de correos electrónicos (para verificación). |
| **Cookie-Parser** | Middleware para parsear cookies. |
| **Cross-env** | Para configurar variables de entorno. |

### Frontend
| Tecnología | Descripción |
| :--- | :--- |
| **HTML/CSS/JS** | Componentes del lado del cliente servidos estáticamente. |
| **Tailwind CSS** | Framework de CSS de primera utilidad para estilos rápidos y a medida. |

### 💻 Vistas Previas 
## Home
<img width="1917" height="862" alt="image" src="https://github.com/user-attachments/assets/d63dfeb1-c369-4526-8396-09065e520600" />

## Login
<img width="1916" height="872" alt="image" src="https://github.com/user-attachments/assets/ff5115d8-015c-417e-9601-138620cc10cb" />

## Registro
<img width="1918" height="862" alt="image" src="https://github.com/user-attachments/assets/10cbd6ca-b30f-4a7d-9b0e-5bd4e07bfc79" />

## TodoApp
<img width="1918" height="866" alt="image" src="https://github.com/user-attachments/assets/cc0710eb-192f-4a8b-bf04-af37f9fc8e02" />


### 📝 Licencia

Este proyecto está bajo la Licencia (ISC), con fines educativos e informativos.











