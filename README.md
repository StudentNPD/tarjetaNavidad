# 🎄 Tarjetas Navideñas Interactivas

Colección de tarjetas navideñas interactivas creadas con HTML, CSS y Bootstrap. Este proyecto incluye dos versiones: una tarjeta interactiva con efectos 3D y animaciones, y una versión más simple y minimalista.

## 📋 Contenido

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación y Uso](#instalación-y-uso)
- [Personalización](#personalización)
- [Contribución](#contribución)
- [Licencia](#licencia)

## ✨ Características

### Tarjeta Interactiva
- Efecto 3D de volteo al pasar el cursor
- Animación de copos de nieve
- Diseño responsivo
- Mensaje personalizado para desarrolladores Java
- Efectos de brillo y sombras
- Cinta decorativa con año

### Tarjeta Simple
- Diseño minimalista
- Estructura de una cara
- Colores navideños tradicionales
- Totalmente responsiva

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3
- Bootstrap 5.3.2
- JavaScript (para animaciones)

## 📁 Estructura del Proyecto

```
christmas-cards/
│
├── interactive/
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
├── simple/
│   ├── index.html
│   └── styles.css
│
└── README.md
```

## 🚀 Instalación y Uso

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/christmas-cards.git](https://github.com/StudentNPD/tarjetaNavidad.git)
```

2. Abre cualquiera de los archivos HTML en tu navegador:
- `interactive/index.html` para la versión interactiva
- `simple/index.html` para la versión simple

No se requiere ninguna instalación adicional, ya que los recursos de Bootstrap se cargan mediante CDN.

## ✏️ Personalización

### Modificar el Mensaje
Para personalizar el mensaje, edita el contenido dentro de las clases:
- `.card-back` para la tarjeta interactiva
- `.card-body` para la tarjeta simple

### Cambiar Colores
Los colores principales se pueden modificar en las variables CSS o directamente en las clases:

```css
/* Tarjeta Interactiva */
.card-front {
    background: linear-gradient(45deg, #d42f2f, #b31919);
}

/* Tarjeta Simple */
.card-header {
    background: #d42f2f;
}
```

### Ajustar Animaciones
Las animaciones de la tarjeta interactiva se pueden modificar en las keyframes CSS:

```css
@keyframes snowfall {
    /* Modifica los valores según necesites */
}
```

## 🤝 Contribución

Las contribuciones son bienvenidas. Para contribuir:

1. Haz un Fork del proyecto
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`)
3. Realiza tus cambios
4. Haz commit de tus cambios (`git commit -m 'Añade nueva característica'`)
5. Haz push a la rama (`git push origin feature/nueva-caracteristica`)
6. Abre un Pull Request



## 👥 Autores

- Bootcamp Java 2025

## 🙏 Agradecimientos

- A Bootstrap por proporcionar un excelente framework
- A la comunidad de desarrolladores por sus contribuciones e inspiración
