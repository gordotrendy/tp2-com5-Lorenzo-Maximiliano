# TP2: Mi Portafolio Multipágina con React Router DOM

**Estudiante:** Maximiliano Lorenzo
**Comisión:** 5
**Materia:** Programación IV
**Institución:** Universidad Tecnológica Nacional – Facultad Regional Tucumán

---

## Descripción del Proyecto

Este proyecto es la continuación del TP1: un portafolio personal transformado en una aplicación **multipágina** utilizando **React**, **Vite** y **React Router DOM**. La interfaz se divide en un menú lateral (aprox. 30 % del ancho) y un área de contenido (aprox. 70 %) que cambia según la ruta seleccionada, sin recargar la página.

El objetivo del trabajo es aplicar los conceptos de componentes, JSX, `props`, listas dinámicas con `.map()` y `key`, estado con `useState` y eventos, incorporando la navegación entre páginas con rutas.

### Páginas y rutas

| Página     | Ruta          |
| ----------- | ------------- |
| Home        | `/`         |
| Sobre mí   | `/about`    |
| Habilidades | `/skills`   |
| Proyectos   | `/projects` |
| Contacto    | `/contact`  |

### Estructura del proyecto

```
src/
├── components/
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   ├── Footer.jsx
│   ├── SkillCard.jsx
│   └── ProjectCard.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   └── Contact.jsx
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

---

## Tecnologías Utilizadas

- **React**
- **Vite**
- **React Router DOM** (`BrowserRouter`, `Routes`, `Route`, `NavLink`, `Link`)
- **JavaScript (ES6+)** con JSX
- **CSS / HTML5**TP1: Mi Portafolio en React

---

## Descripción del Proyecto

Este proyecto es una aplicación web de un portfolio personal desarrollada en una sola página utilizando **React** y **Vite**. El objetivo del trabajo es aplicar los conceptos fundamentales de React, tales como la división en componentes reutilizables, el uso de JSX, paso de datos vía `props`, manejo de listas dinámicas con `.map()`, manejo de estado mediante `useState` y renderizado condicional.

---

## Tecnologías Utilizadas

- **React** (v18+)
- **Vite**
- **JavaScript (ES6+)**
- **CSS / HTML5**

---

## Instrucciones para Ejecución Local

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1.Clonar el repositorio:

	git clone https://github.com/gordotrendy/tp2-com5-Lorenzo-Maximiliano.git

2.Ingresar a la carpeta del proyecto:

	cd tp2-react-portafolio-Lorenzo-Maximiliano

3.Instalar las dependencias:
    npm install

4.Ejecutar servidor de desarrollo:
    npm run dev

5.Abri el navegador con el link que te da en la terminal
