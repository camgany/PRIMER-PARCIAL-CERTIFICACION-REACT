# Aplicación de Relojes Mundiales

Esta es una aplicación de React que muestra una lista de relojes de diferentes ciudades alrededor del mundo. Utiliza el entorno de desarrollo Vite y el framework de estilos Tailwind CSS.

## Tecnologías Utilizadas

- [React](https://reactjs.org/): Librería de JavaScript para construir interfaces de usuario.
- [Vite](https://vitejs.dev/): Entorno de desarrollo para aplicaciones web.
- [Tailwind CSS](https://tailwindcss.com/): Framework de CSS para construir interfaces de usuario.
- [PostCSS](https://postcss.org/): Herramienta para transformar CSS con JavaScript.

## Importancia de Vite y Tailwind CSS

Vite es un entorno de desarrollo para aplicaciones web que permite construir aplicaciones React de manera rápida y sencilla. Vite utiliza el sistema de módulos nativo de JavaScript (ESM) para cargar los módulos de la aplicación, lo que permite que la aplicación se cargue más rápido. Además, Vite proporciona un servidor de desarrollo con recarga en caliente (hot module replacement) para que los cambios en el código se reflejen inmediatamente en el navegador web.

## Funcionalidades Implementadas

## Uso de las funcionalidades en el código

A continuación se muestra cómo puedes utilizar estas funcionalidades en tu código:

- Utiliza el concepto de estado (`useState`) para controlar el contenido del formulario de la página.
useState: El hook useState se utiliza para definir y actualizar el estado de los componentes funcionales. En el código, se utiliza para definir y actualizar los estados de city, timeZone y timeZoneOffset. Por ejemplo, en el componente AddClockForm, se utiliza useState para definir el estado de city, timeZone y timeZoneOffset, y también para proporcionar funciones (setCity, setTimeZone, setTimeZoneOffset) para actualizar esos estados.

- Utiliza el efecto (`useEffect`) para guardar los datos del formulario en el almacenamiento local (`localStorage`) cada vez que cambien.
useEffect: El hook useEffect se utiliza para ejecutar efectos secundarios en componentes funcionales. En el código, se utiliza para cargar los datos del almacenamiento local (localStorage) y establecer los valores iniciales de los estados en el componente AddClockForm. El efecto se ejecuta una vez, cuando el componente se monta.

- Utiliza los métodos `reduce` y `map` de JavaScript para renderizar una lista de características de la página de manera dinámica.
reduce y map: Los métodos reduce y map se utilizan para manipular y transformar arrays en JavaScript. En el código, se utilizan para renderizar una lista de características de la página de manera dinámica en el componente CounterClocks. El método reduce se utiliza para contar los relojes por ciudad y el método map se utiliza para renderizar la lista de ciudades con sus respectivos recuentos.
- Utiliza el almacenamiento local (`localStorage`) para almacenar los datos del formulario de manera persistente.
localStorage: El objeto localStorage se utiliza para almacenar datos de forma persistente en el navegador web. En el código, se utiliza para guardar los datos del formulario en el almacenamiento local en el componente AddClockForm. Los datos se guardan en localStorage utilizando el método setItem y se recuperan utilizando el método getItem.

## Estructura de la Página

La página se compone de los siguientes elementos:

- Un encabezado con el título de la página.
Se creo un Navbar con el titulo de la pagina con un logo y otras opciones de navegacion pero sin funcionalidad.
- Un formulario para agregar relojes. El formulario contiene los siguientes campos:
  - Ciudad: campo de texto para ingresar el nombre de la ciudad.
  - Zona horaria: campo de texto para ingresar la zona horaria de la ciudad.
  - Desplazamiento horario: campo de texto para ingresar el desplazamiento horario de la ciudad.

- Una lista de características de la página generada dinámicamente, esto fue implementado con el metodo map de javascript en el componente CounterClocks.
- Un botón de envío para enviar el formulario, esto ubica en el componente AddClockForm.

- Una lista de relojes agregados generada dinámicamente, esto fue implementado con el metodo map de javascript en el componente Menu.
- Un contador de relojes por ciudad, esto fue implementado con el metodo reduce de javascript en el componente CounterClocks.

## Requisitos y Validaciones

La página cumple con los siguientes requisitos:

- El estado del formulario se actualiza correctamente cuando los campos cambian.
- Los datos del formulario se almacenan en el almacenamiento local (`localStorage`) cada vez que cambian.
- La lista de características se genera dinámicamente a partir de un array de características.
- Al enviar el formulario, se muestra una alerta en pantalla con los datos del formulario.

Además de los requisitos mencionados, se han implementado las siguientes funcionalidades opcionales:

- Validación de campos en el formulario.
- Diseño responsive utilizando las utilidades de Tailwind CSS.

## Componentes

La aplicación consta de los siguientes componentes:

- `AddClockForm`: Componente que representa el formulario de agregación de relojes. Permite ingresar los datos de la ciudad, zona horaria y desplazamiento horario. Al enviar el formulario, se llama a la función `onAddClock` pasada como propiedad.

- `ClockCard`: Componente que representa la tarjeta de un reloj. Muestra la información de la ciudad, zona horaria y desplazamiento horario, y proporciona un botón para eliminar el reloj. Al hacer clic en el botón de eliminar, se llama a la función `onDelete` pasada como propiedad, que elimina el reloj correspondiente.

- `CounterClocks`: Componente que muestra el conteo de relojes por ciudad. Calcula el número de relojes para cada ciudad utilizando el método `reduce` de JavaScript y muestra la información en una lista.

- `Menu`: Componente principal que muestra la lista de relojes y proporciona la opción de agregar nuevos relojes. Se encarga de gestionar el estado de los relojes y el contador de cada ciudad. Al agregar un nuevo reloj, se llama a la función `onAddClock` pasada como propiedad.

## Uso

1. Clona el repositorio en tu máquina local.

   ```shell
   git clone https://github.com/camgany/PRIMER-PARCIAL-CERTIFICACION-REACT.git
    ```

2. Instala las dependencias ejecutando el siguiente comando en la raíz del proyecto:

   ```shell
   npm install
    ```
3. Ejecuta el siguiente comando para iniciar la aplicación:

   ```shell
   npm run dev
   ```
4. Abre la aplicación en tu navegador web con la url que se muestra en la terminal.


