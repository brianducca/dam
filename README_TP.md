Ionic APP Mediciones
=======================

*Ayudaría mucho si apoyaras este proyecto con una ⭐ en Github!*

Este proyecto es una aplicación ionic que se ejecuta sobre el ecosistema `Docker`. Tiene un servicio en `NodeJS` que te permite ejecutar código en backend y al mismo tiempo disponibilizar el código del cliente web para interactar con el servicio. Además tiene una `base de datos` MySQL que puede interactuar con el backend para guardar y consultar datos, y de manera adicional trae un `administrador` de base de datos para poder administrar la base en caso que lo necesites.




## Comenzando 🚀

Esta sección es una guía con los pasos escenciales para que puedas poner en marcha la aplicación.

<details><summary><b>Mira los pasos necesarios</b></summary><br>

### Instalar las dependencias

Para correr este proyecto es necesario que instales `Docker` y `Docker Compose`. 

En [este artículo](https://www.gotoiot.com/pages/articles/docker_installation_linux/) publicado en nuestra web están los detalles para instalar Docker y Docker Compose en una máquina Linux. Si querés instalar ambas herramientas en una Raspberry Pi podés seguir [este artículo](https://www.gotoiot.com/pages/articles/rpi_docker_installation) de nuestra web que te muestra todos los pasos necesarios.

En caso que quieras instalar las herramientas en otra plataforma o tengas algún incoveniente, podes leer la documentación oficial de [Docker](https://docs.docker.com/get-docker/) y también la de [Docker Compose](https://docs.docker.com/compose/install/).

Continua con la descarga del código cuando tengas las dependencias instaladas y funcionando.

Instalar npm
@angular/cli
@ionic/cli

### Descargar el código

Para descargar el código, lo más conveniente es que realices un `fork` de este proyecto a tu cuenta personal haciendo click en [este link](https://github.com/gotoiot/app-fullstack-base/fork). Una vez que ya tengas el fork a tu cuenta, descargalo con este comando (acordate de poner tu usuario en el link):

```
git clone  https://github.com/leonardomancini/dam.git
```

> En caso que no tengas una cuenta en Github podes clonar directamente este repo.

### Ejecutar la aplicación

Para ejecutar la aplicación tenes que correr el comando `docker-compose up` desde el directorio TP. Este comando va a descargar las imágenes de Docker de node, de node (backend), de la base datos y del admin de la DB, y luego ponerlas en funcionamiento. 

Para desplegar la app dirigirse a TP/final_tp y ejecutar:
 npm install (para instalar las depencencias)
 ionic serve

Para acceder al cliente web ingresa a a la URL [http://localhost:8100/](http://localhost:8100/) y para acceder al admin de la DB accedé a [localhost:8001/](http://localhost:8001/). 



> Si te aparece un error la primera vez que corres la app, deteńe el proceso y volvé a iniciarla. Esto es debido a que el backend espera que la DB esté creada al iniciar, y en la primera ejecución puede no alcanzar a crearse. A partir de la segunda vez el problema queda solucionado.

</details>

Continuá explorando el proyecto una vez que lo tengas funcionando.

## Configuraciones de funcionamiento 🔩

Al crearse la aplicación se ejecutan los contenedores de Docker de cada servicio, se crea la base de datos , sus tablas y se cargan los datos iniciales . A continuación podés encontrar info si querés cambiar la estructura de la DB o bien sus configuraciones de acceso.

<details><summary><b>Lee cómo configurar la aplicación</b></summary><br>

### Configuración de la DB

Como ya comprobaste, para acceder PHPMyAdmin tenés que ingresar en la URL [localhost:8001/](http://localhost:8001/). En el login del administrador, el usuario para acceder a la db es `root` y contraseña es la variable `MYSQL_ROOT_PASSWORD` del archivo `docker-compose.yml`.

Para el caso del servicio de NodeJS que se comunica con la DB fijate que en el archivo `src/backend/mysql-connector.js` están los datos de acceso para ingresar a la base.

Si quisieras cambiar la contraseña, puertos, hostname u otras configuraciones de la DB deberías primero modificar el servicio de la DB en el archivo `docker-compose.yml` y luego actualizar las configuraciones para acceder desde PHPMyAdmin y el servicio de NodeJS.

### Estructura de la DB

Al iniciar el servicio de la base de datos, si esta no está creada toma el archivo que se encuentra en `db/dumps/smart_home.sql` para crear la base de datos automáticamente.



Tené en cuenta que la base de datos se crea con permisos de superusuario por lo que no podrías borrar el directorio con tu usuario de sistema, para eso debés hacerlo con permisos de administrador. En ese caso podés ejecutar el comando `sudo rm -r db/data` para borrar el directorio completo.

</details>


## Detalles principales 🔍

En esta sección vas a encontrar las características más relevantes del proyecto.

<details><summary><b>Mira los detalles más importantes de la aplicación</b></summary><br>
<br>



### Aplicacion movil

El cliente es una aplicacion hibirida desarrollada en Ionic que  se comunica con el servicio en NodeJS mediante JSON a través de requests HTTP. Puede consultar el estado de dispositivos en la base de datos (por medio del servicio en NodeJS) y también cambiar el estado de los mismos. 

### El servicio web

El servicio en **NodeJS** posee distintos endpoints para comunicarse con el cliente web mediante requests HTTP enviando **JSON** en cada transacción. Procesando estos requests es capaz de comunicarse con la base de datos para consultar y controlar el estado de los dispositivos, y devolverle una respuesta al cliente web también en formato JSON. Así mismo el servicio es capaz de servir el código del cliente web.

### La base de datos

La base de datos se comunica con el servicio de NodeJS y permite almacenar el estado de los dispositivos en la tabla **Devices**. Ejecuta un motor **MySQL versión 5.7** y permite que la comunicación con sus clientes pueda realizarse usando usuario y contraseña en texto plano. En versiones posteriores es necesario brindar claves de acceso, por este motivo la versión 5.7 es bastante utilizada para fases de desarrollo.

### El administrador de la DB

Para esta aplicación se usa **PHPMyAdmin**, que es un administrador de base de datos web muy utilizado y que podés utilizar en caso que quieras realizar operaciones con la base, como crear tablas, modificar columnas, hacer consultas y otras cosas más.



### Ejecución de servicios

Los servicios de la aplicación se ejecutan sobre **contenedores de Docker**, así se pueden desplegar de igual manera en diferentes plataformas. Los detalles sobre cómo funcionan los servicios los podés ver directamente en el archivo **docker-compose.yml**.



</details>

## Detalles de implementación 💻

En esta sección podés ver los detalles específicos de funcionamiento del código y que son los siguientes.

<details><summary><b>Mira los detalles de implementación</b></summary><br>

### Obtener dispositivos

Al inicializarse la pagina se listan todos los dispositivos del sistema, 

### Agregar un dispositivo

Para agregar un dispositivo nuevo hacer click en el boton flotante con el icono "+" qu se encuentra en la parte inferior. Se abrira una 
nueva page  en la que se ingresará:
    -Nombre
    -ubicacion
    -nombre de electrovalvula
    -Por defecto el estado se crea en 0


### Eliminar un dispositivo
En cada item de la lista,se encuentra el boton eliminar, esto eliminara del sistema al dispositivo

### Ver detalle de dispositivo
Al seleccionar un dispositivo, la pantalla mostrara un grafico gaussiano con el valor de la humedad del suelo en kPA. En caso de necesitar riego se mostrar un mensaje y se habilitara boton para abrir electrovalvula, luego podra cerrarse la misma.

### Ver log
Al seleccionar el boton para ver logs se navegará a una page que listara todas las aperturar/cierres de eletrovalvula
### Ver mediciones
Al seleccionar el boton ver mediciones se mostraran todas las mediciones asociadas a la electrovalvula del dispositivo


### Frontend

El front end esta desarrollado con ionic-angular

### Backend

La base de datos mysql permite almacenar los diferentes dispositivos del sistema y se permite obtener funcionalidad mediante una api rest realizada con express y node js.   Para la interaccion con la base se utiliza la clase mysql-connector, y utilizando un pool que nos brinda la conexion hacia la base y nos permite ejecutar sentencias SQL

<details><summary><b>Ver los endpoints disponibles</b></summary><br>



1) Devolver los dispositivos.
Header: Authorization:Bearer {token}
    URL: /api/dispositivos
    Metodo: GET

    
    
    Codigos de estado:
    -500: Error interno al conectarse a la base
    -200: Funcionamiento correcto
    
    Body Response:
    Array de json con los datos de cada device:
        [{ dispositivoId: number, 
            nombre: string, 
            ubicacion: string, 
            electrovalvulaId: number}]

2) Devolver un dispositivo.
Header: Authorization:Bearer {token}
    URL: /api/dispositivos/id
    Metodo: GET

    PathParam: Id del dispositivo
    
    Codigos de estado:
    -500: Error interno al conectarse a la base
    -200: Funcionamiento correcto
    
    
    Body Response:
    { dispositivoId: number, 
            nombre: string, 
            ubicacion: string, 
            electrovalvulaId: number}

3) Eliminar un dispositivo.
Header: Authorization:Bearer {token}
    URL: /api/dispositivos/:id
    Metodo: DELETE

    PathParam: Id del dispositivo
    
    Codigos de estado:
    -500: Error interno al conectarse a la base
    -200: Funcionamiento correcto
    
    Body Response:
    empty

4) Crear un dispositivo.
Header: Authorization:Bearer {token}
    URL: /api/dispositivos
    Metodo: POST

    
    Codigos de estado:
    -500: Error interno al conectarse a la base
    -201: ok
    Request Body:
            {nombre: string, 
            electrovalvula: string, 
            ubicacion: string}
    
    Body Response:
    Json con los datos del dispositivo creado:
            {dispositivoId: number,
            electrovalvulaId:number 
            }

5) Obtener ultima medicion                
Header: Authorization:Bearer {token}          
    URL: /api/dispositivos/:id/ultima-medicion
    Metodo: GET
    
    PathParam: Id del dispositivo
    Codigos de estado:
    -500: Error interno al conectarse a la base
    -200: Ok
    
            
    
    Response Body:
    Json con los datos de la medicion:
            {medicionId: number,
            fecha: Date,
            valor: number,
            dispositivoId: number}
            5) Obtener ultima medicion                          
 6) Obtener mediciones
 Header: Authorization:Bearer {token}
    URL: /api/dispositivos/:id/mediciones
    Metodo: GET
    
    PathParam: Id del dispositivo
    Codigos de estado:
    -500: Error interno al conectarse a la base
    -200: Ok
    
            
    
    Response Body:
    array con los datos de las mediciones:
            {[medicionId: number,
            fecha: Date,
            valor: number,
            dispositivoId: number}]

7) Crear Medicion
Header: Authorization:Bearer {token}
    URL: /api/mediciones
    Metodo: POST
    
    PathParam: Id del dispositivo
    Codigos de estado:
    -500: Error interno al conectarse a la base
    -200: Ok
    
            
    
    Request Body:
            {fecha: Date,
            valor: number,
            dispositivoId: number}
8)Obtener logs de electrovalvula
Header: Authorization:Bearer {token}
    URL: /api/electrovalvulas/:id/logs
    Metodo: GET
    
    PathParam: Id de electrovalvula
    Codigos de estado:
    -500: Error interno al conectarse a la base
    -200: Ok
    
            
    
    Response Body:
    array con los datos de cada log:
            {logRiegoId: number,
            fecha: Date,
            apertura: boolean,
            electrovalvulaId: number}

9)Abrir electrovalvula
    Header: Authorization:Bearer {token}
    URL: /api/electrovalvulas/:id/open
    Metodo: PUT
  
    PathParam: Id de electrovalvula
    Codigos de estado:
    -500: Error interno al conectarse a la base
    -200: Ok
    
   



10)Cerrar electrovalvula
    URL: /api/electrovalvulas/:id/close
    Metodo: PUT
    
    PathParam: Id de electrovalvula
    Codigos de estado:
    -500: Error interno al conectarse a la base
    -200: Ok
 11)/authorization
   Permite obtener un token jwt luego de loguearse exitosamente
   Request: {"username":"test", "password":"1234"} 
   Response:200  
   

</details>

</details>

## Usuarios de prueba
test;1234
test2;1122
## Tecnologías utilizadas 🛠️

En esta sección podés ver las tecnologías más importantes utilizadas.

<details><summary><b>Mira la lista completa de tecnologías</b></summary><br>

* [Docker](https://www.docker.com/) - Ecosistema que permite la ejecución de contenedores de software.
* [Docker Compose](https://docs.docker.com/compose/) - Herramienta que permite administrar múltiples contenedores de Docker.
* [Node JS](https://nodejs.org/es/) - Motor de ejecución de código JavaScript en backend.
* [MySQL](https://www.mysql.com/) - Base de datos para consultar y almacenar datos.
* [PHPMyAdmin](https://www.phpmyadmin.net/) - Administrador web de base de datos.
* [Inonic]
* [Angular]
* [TypeScript](https://www.typescriptlang.org/) - Superset de JavaScript tipado y con clases.

</details>
