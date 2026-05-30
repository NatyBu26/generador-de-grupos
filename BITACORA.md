# Bitácora del proyecto: Generador de grupos

## 1. Idea inicial

El proyecto surgió como una continuación de la aplicación **Compañeros de computadora**, que permitía formar parejas aleatorias de estudiantes.

A partir de esa experiencia, se pensó en una nueva herramienta que permitiera armar grupos de distintas cantidades de integrantes, no solo parejas. La idea fue crear una aplicación sencilla para usar en el aula, especialmente en actividades colaborativas, juegos o trabajos grupales.

## 2. Objetivo del proyecto

El objetivo principal fue desarrollar una aplicación web que permitiera:

* ingresar una lista completa de estudiantes;
* indicar cuántos integrantes debía tener cada grupo;
* generar grupos de manera aleatoria;
* mostrar los resultados de forma clara;
* limpiar el sistema para volver a comenzar.

La herramienta fue pensada para facilitar la organización del aula y ahorrar tiempo al momento de distribuir estudiantes en equipos.

## 3. Organización de archivos

Se creó una carpeta independiente para el proyecto y se organizaron los archivos principales:

```text
generador-grupos
│
├── index.html
├── style.css
├── script.js
├── README.md
├── BITACORA.md
│
├── imagenes
│   └── grupos-aleatorios-logo.png
│
└── capturas
    ├── vista_escritorio_1.png
    └── vista_escritorio_2.png
```

Esta organización permitió separar la estructura, los estilos, la lógica de JavaScript, las imágenes y las capturas del proyecto.

## 4. Desarrollo de la estructura HTML

Se creó el archivo `index.html` con una estructura simple y ordenada.

La página incluye:

* un logo del proyecto;
* un título principal;
* una breve descripción;
* un área de texto para ingresar estudiantes;
* un campo numérico para indicar la cantidad de integrantes por grupo;
* botones para generar grupos y limpiar el sistema;
* una sección donde se muestran los resultados.

La estructura fue pensada para que cualquier usuario pueda comprender rápidamente cómo utilizar la aplicación.

## 5. Diseño visual con CSS

En el archivo `style.css` se trabajó una estética similar a la del proyecto **Compañeros de computadora**, manteniendo una identidad visual oscura con detalles en naranja y verde terminal.

Se diseñaron:

* contenedores con bordes redondeados;
* tarjetas para la lista de estudiantes y la configuración;
* botones visibles y claros;
* sección de resultados destacada;
* logo circular;
* adaptación responsive para pantallas más pequeñas.

También se cuidó que el diseño fuera simple, legible y coherente con la temática tecnológica y educativa.

## 6. Programación de la lógica en JavaScript

En el archivo `script.js` se desarrolló la lógica principal de funcionamiento.

Se crearon funciones para:

* mezclar aleatoriamente la lista de estudiantes;
* leer los nombres ingresados por el usuario;
* validar que haya estudiantes cargados;
* validar que la cantidad por grupo sea correcta;
* formar grupos según el número indicado;
* mostrar los grupos generados en pantalla;
* limpiar los campos y reiniciar el resultado.

La función principal permite que el usuario escriba una lista única de estudiantes y elija grupos de 2, 3, 4, 5, 6 o más integrantes.

## 7. Manejo de casos especiales

Durante el desarrollo se pensó qué debía ocurrir cuando la cantidad total de estudiantes no se divide exactamente por el tamaño de grupo elegido.

Se decidió que, si sobran estudiantes, se forme un último grupo con menos integrantes. De esta manera, nadie queda fuera del agrupamiento y todos los nombres ingresados aparecen en el resultado final.

También se agregaron mensajes para orientar al usuario cuando:

* no ingresa ningún nombre;
* no coloca una cantidad válida;
* la cantidad por grupo es menor a 2;
* la cantidad por grupo es mayor que la cantidad total de estudiantes.

## 8. Pruebas realizadas

Se realizaron pruebas ingresando diferentes listas de estudiantes y cambiando la cantidad de integrantes por grupo.

Se verificó que:

* los nombres se mezclen de manera aleatoria;
* los grupos se formen correctamente;
* los resultados se muestren en pantalla;
* el botón de limpiar funcione;
* los mensajes de error aparezcan cuando corresponde;
* la interfaz se vea correctamente en escritorio;
* el diseño mantenga una buena organización visual.

## 9. Capturas del proyecto

Se tomaron capturas de la aplicación para documentar el proceso y mostrar evidencias del funcionamiento.

Las capturas guardadas hasta el momento muestran:

* la vista inicial del proyecto en escritorio;
* la generación de grupos luego de cargar estudiantes e indicar la cantidad de integrantes.

Queda pendiente agregar capturas de la versión en celular para mostrar el comportamiento responsive.

## 10. Dificultades encontradas

Una de las dificultades principales fue pensar la lógica para dividir una lista en grupos de la cantidad indicada por el usuario.

También fue necesario resolver cómo mostrar correctamente el último grupo cuando no tenía la misma cantidad de integrantes que los demás.

Otra decisión importante fue mantener una interfaz clara, similar al proyecto anterior, pero adaptada a una nueva funcionalidad.

## 11. Estado actual

El proyecto se encuentra funcional.

Actualmente permite:

* ingresar una lista de estudiantes;
* elegir la cantidad de integrantes por grupo;
* generar grupos aleatorios;
* visualizar los resultados;
* limpiar el sistema;
* utilizar la aplicación desde una pantalla de escritorio.

## 12. Próximos pasos

Como mejoras futuras, se podrían agregar nuevas funciones:

* capturas de la versión móvil;
* opción para copiar los grupos generados;
* descarga de resultados en archivo de texto o PDF;
* guardado de listas frecuentes;
* opción para evitar que ciertos estudiantes queden juntos;
* nombres automáticos para los grupos;
* colores diferentes para cada grupo;
* mejora de accesibilidad en formularios y botones.

## 13. Uso de inteligencia artificial

Durante el desarrollo se utilizó inteligencia artificial como apoyo para:

* organizar la idea inicial;
* estructurar los archivos del proyecto;
* revisar la lógica de JavaScript;
* mejorar textos del README y la bitácora;
* generar una imagen de logo coherente con la identidad visual del proyecto;
* pensar futuras mejoras.

La IA se usó como herramienta de acompañamiento, pero el proyecto fue revisado, probado y adaptado según las necesidades de uso en el aula.

## 14. Autora

Proyecto desarrollado por **Naty Bur**.
