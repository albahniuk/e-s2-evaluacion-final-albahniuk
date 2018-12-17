El ejercicio consiste en desarrollar una aplicación web de búsqueda de series de TV, donde
demostraremos los conocimientos de JavaScript adquiridos durante el sprint. El ejercicio también
tiene una parte de maquetación con HTML y Sass, os recomendamos dedicar esfuerzo a la
maquetación una vez terminada la parte de JavaScript, ya que los criterios de evaluación están
relacionados con esta última.

a aplicación de búsqueda de series consta de dos partes
1. Un campo de texto y un botón para buscar series por su título
2. Un listado de resultados de búsqueda donde aparece el cartel de la serie y el título.

Al hacer clic sobre el botón de 'Buscar', nuestra aplicación debe conectarse al API abierto de
TVMaze para búsqueda de series. Os recomendamos echar un vistazo al JSON que devuelve una
petición de búsqueda para ver qué datos de los que nos devuelve necesitamos. Para construir la
URL de búsqueda necesitaremos recoger el texto que ha introducido el usuario en el campo debúsqueda. Por cada show contenido en el resultado de búsqueda debemos pintar una tarjeta
donde mostramos una imagen de la serie y el título.
Algunas de las series que obtenemos en los resultados no tienen cartel. En ese caso debemos
mostrar una imagen de relleno. Podemos crear una imagen de relleno con el servicio de
placeholder.com donde en la propia URL indicamos el tamaño, colores, texto:
https://via.placeholder.com/210x295/cccccc/666666/?text=TV

Una vez aparecen los resultados de búsqueda, podremos indicar cuáles son nuestros favoritos.
Para ello, al hacer clic sobre un resultado cambia el color de fondo y se pone un borde alrededor
de la tarjeta. También vamos a almacenar la información de favoritos en el localStorage. De esta
forma si como resultado de búsqueda aparece una se
