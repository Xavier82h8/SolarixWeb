# 🌞 Solarix - Plataforma Inmobiliaria

**Solarix** es una plataforma inmobiliaria desarrollada con tecnologías modernas como **Next.js**, **Firebase** y **TypeScript**. Su propósito es permitir la publicación, visualización y gestión de propiedades por parte de tres tipos de usuarios: administradores, vendedores y clientes.

-----

## 🚀 Tecnologías utilizadas

  * **Frontend:** Next.js (React) + TypeScript
  * **Backend y autenticación:** Firebase
  * **Base de datos:** Firebase Firestore
  * **Despliegue:** Exportación estática (`next export`) para hosting Apache (ej. DonWeb)
  * **Estilo:** Tailwind CSS

-----

## ⚙️ Configuración del proyecto

### 1\. Clonar el repositorio

```bash
git clone https://github.com/tuusuario/solarix.git
cd solarix
```

### 2\. Instalar dependencias

```bash
npm install
```

### 3\. Configurar variables de entorno

Crea un archivo `.env.local` con las siguientes claves de Firebase:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```

### 4\. Exportar el sitio estático

```bash
npm run build
npm run export
```

Esto generará una carpeta `/out` que contiene los archivos listos para subir a `public_html` en DonWeb u otro hosting similar.

-----

## 📁 Estructura del proyecto

```bash
solarix/
├── components/           # Componentes reutilizables
├── pages/                # Páginas y rutas de Next.js
│   ├── index.tsx         # Página principal
│   ├── login.tsx         # Inicio de sesión
│   ├── dashboard/        # Paneles según tipo de usuario
│   │   ├── admin.tsx
│   │   ├── vendedor.tsx
│   │   └── cliente.tsx
├── firebase/             # Configuración e integración de Firebase
│   └── firebaseConfig.ts
├── public/               # Archivos estáticos
│   └── images/
├── styles/               # Estilos globales
│   └── globals.css
├── .htaccess             # Configuración para hosting Apache
├── tsconfig.json         # Configuración de TypeScript
├── next.config.js        # Configuración de Next.js (exportStatic)
├── package.json
└── README.md
```

-----

## 🧩 Funciones del sistema

### 🔐 Autenticación

  * Login con Google/Gmail mediante Firebase
  * Sistema de **tokens personalizados** basado en una base de datos

### 👤 Roles de usuario

  * **Administrador**
      * Accede a estadísticas de entrada y salida
      * Puede eliminar publicaciones si se detecta contenido inapropiado
      * No requiere aprobar publicaciones manualmente
  * **Vendedor**
      * Publica propiedades
      * Gestiona su catálogo de inmuebles
      * Agenda citas por teléfono
  * **Cliente**
      * Visualiza propiedades
      * Puede contactar a vendedores
      * Solicita citas telefónicas

### 🏠 Publicación de propiedades

  * Subida de imágenes (WebP, AVIF optimizadas)
  * Información de precio, ubicación, descripción, etc.
  * Categorización por tipo de propiedad

-----

## 🌐 Despliegue en servidor (Apache)

### Requisitos del servidor

  * Soporte para `.htaccess`
  * PHP (aunque no se usa directamente, es común en DonWeb)
  * Acceso a `public_html`

### Pasos:

1.  Ejecutar `npm run build && npm run export`
2.  Subir el contenido de `/out` al directorio `public_html/`
3.  Incluir el archivo `.htaccess` con lo siguiente:

<!-- end list -->

```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresDefault "access plus 1 year"
    ExpiresByType text/html "access plus 1 hour"
</IfModule>

Options -Indexes

<IfModule mod_mime.c>
    AddType image/webp .webp
    AddType image/avif .avif
</IfModule>
```

-----

## 🛡️ Seguridad recomendada

  * **Validación del contenido** de publicaciones antes de mostrarse
  * **Protección de rutas** según rol (condicionales en el frontend)
  * Uso de **tokens personalizados** generados por backend en Firebase

-----

## 📞 Contacto

Proyecto desarrollado por **Solarix Dev Team**.
Para soporte técnico: **email@solarix.mx**