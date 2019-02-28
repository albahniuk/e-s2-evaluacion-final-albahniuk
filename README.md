## Buscador de series de TV

El ejercicio consiste en desarrollar una aplicación web de búsqueda de series de TV con JavaScript y parte de maquetación con HTML y Sass.

La aplicación de búsqueda de series consta de dos partes:
1. Un campo de texto y un botón para buscar series por su título
2. Un listado de resultados de búsqueda donde aparece el cartel de la serie y el título. 

Cómo funciona:
- Al hacer clic sobre el botón de 'Buscar', la aplicación se conecta al API abierto de
TVMaze para búsqueda de series. 
- Por cada show contenido en el resultado de búsqueda se pinta una tarjeta donde mostramos una imagen de la serie y el título. Algunas de las series que obtenemos en los resultados no tienen cartel. En ese caso debemos
mostrar una imagen de relleno.
- Una vez aparecen los resultados de búsqueda, podemos indicar cuáles son nuestros favoritos.
Para ello, al hacer clic sobre un resultado cambia el color de fondo y se pone un borde alrededor
de la tarjeta. También se almacena la información de favoritos en el localStorage.
