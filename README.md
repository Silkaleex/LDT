# Aplicación LDT
### Esta aplicación sirve para desarrollar ideas que necesitemos en nuestro dia a dia,
### En la que podremos añadir eventos,Notas o ciertos momentos importante en los que recordar,
### Además podremos añadir una alarma para que nos envie un correo para que nos avise sobre la hora y fecha exacta de algo puntual que nos quiera avisar.
### Un Planificador donde podremos destacar algo importante o que necesitemos mejorar, destacar en un mes dia o un tiempo establecido. 

## RoadMap
#### ![roadmap](https://github.com/Silkaleex/LDT/assets/82760991/babcbd5c-03bb-418e-a9c6-799c23edd2c0)

# Como Hice mi proyecto LDT
# BackEnd & DataBase
## Instalación de Nuestro Backend con Express
#### Empezamos descargando he instalando NodeJs en nuestro ordenador.
#### una vez instalado, instalamos en nuestro terminal de VSCode Npm y verificando que node esta instalado correctamente.
#### Estos fueron los comandos que usamos para la instalación.
#### node -v => versión actual de Node
#### npm -v => versión actual de nuestro npm
#### node "unarchivo.js" => nos visualizará los datos de todo el proyecto
#### npm Init => nos crea un archivo desde cero, un package.json y le añade contenido
#### npm install express => instala los datos de express en nuestro package.json
#### npm install -g nodemon => instala nodemon, una extensión de nodeJs que nos verificará de si funcionará o contiene errores nuestro backend.

# Verbos HTTP
### 1- Get: Es el que recibe los Datos
### 2- Post: Es el que me envia o crea Datos
### 3- Put: Es el que Actualiza o modifica los Datos
### 4- Delete: Es el que me Elimina los datos

# Pasos a seguir
### Creamos la función, levantamos el servidor usando nodemon "server.js" que es una aplicación que voy a crear en mi aplicación LDT

### ![Captura 1](https://user-images.githubusercontent.com/82760991/236807178-f0ab22a6-56c9-448b-b837-acaef6b5432b.PNG)

### linea 1- Ejemplo para verificar que nodemon lee el mensaje de hello world!, podemos poner lo que queramos o no(opcional)
### linea 2- Importamos express
### linea 3- Creamos el nombre del servidor en mi caso app, que podemos poner otro nombre que queramos, este utilizará todos los metodos de nuestro express

# MongoDB
### Creando nuestra Base de Datos
### Primero de todo vamos a crearnos una cuenta en mongoDB, y después empezamos a crear nuestra base de datos paso a paso,
### A- Seleccionamos un nuevo proyecto
##### ![Captura2](https://user-images.githubusercontent.com/82760991/236808952-5c7ebeba-adf4-4ee6-88ad-5d07bed82748.PNG)
### B- Aqui escribimos el nombre de nuestro proyecto
#### ![Captura3](https://user-images.githubusercontent.com/82760991/236809015-8988a0dc-8bdc-422f-990c-7d053ef34f15.PNG)
#### C- Creamos el proyecto
##### ![image](https://user-images.githubusercontent.com/82760991/236812595-67782662-1fa7-4f7b-a8d6-c742139ed03e.png)
### D- Añadimos la dirección actual (Add Ip Address)
##### ![image](https://user-images.githubusercontent.com/82760991/236810893-c793b502-6d0c-4717-949a-d6f0cabfad22.png)
### E- Seleccionamos Network Access
##### ![image](https://user-images.githubusercontent.com/82760991/236811116-9af2b2c2-e8c5-4abe-ba71-7ba127bb30a7.png)
### F- Editamos nuestra ip acutal (Add ip Address), la oculto por motivos de seguridad
##### ![image](https://user-images.githubusercontent.com/82760991/236811171-b073714d-e4fe-4185-8825-79e2d764be11.png)
### G- Seleccionamos permitir el acceso desde cualquier lugar (Allow Acess from anywhere) y confirmamos
##### ![image](https://user-images.githubusercontent.com/82760991/236811525-a6b6b9fc-0bfe-4f86-bca9-11e67538277c.png)
### H- Luego saldremos a la ventana anterior y eliminaremos la anterior Ip en el caso de que nos vuelva a salir, nos quedamos con la que hemos creado y nos vamos a Deployment - Database.
##### ![image](https://user-images.githubusercontent.com/82760991/236811592-01eeff8c-daff-4de9-b628-f478c1ad3600.png)
### I- Una vez estemos en esa sección le damos a Build a DataBase - construir una base de datos
##### ![image](https://user-images.githubusercontent.com/82760991/236811651-8181c72a-4e44-460c-a7ee-e5a39854f740.png)
### J- Ahora crearemos una base de datos Básica de 512mb que mongo nos da gratuita, seleccionamos la región mas cercana  y el nombre a nuestro grupo yo puse para mi aplicación LDT, hay que tener en cuenta que una vez escribamos nuestro nombre del grupo no se podrá modificar.
##### ![image](https://user-images.githubusercontent.com/82760991/236811694-eb606913-f772-4e36-b003-cfda5263369a.png)
##### ![image](https://user-images.githubusercontent.com/82760991/236811720-82f98755-3359-470f-9d10-13eb52c18c78.png)
### K- Después de crearnos nuestra base de datos nos toca crear un usuario y contraseña importante guardarla, a continuación seleccionamos el botón create User
##### ![image](https://user-images.githubusercontent.com/82760991/236811782-b51eff25-03e5-4082-aff2-49c3ba6d992b.png)
### L- Acabando ya esta parte verificamos nuestra Ip access list es la que pusimos antes en Add Ip Address y pulsamos el boton Finish and Close
##### ![image](https://user-images.githubusercontent.com/82760991/236811849-b8373b55-10a9-4e6f-af54-7373113ef0dd.png)
### M- Volvemos DataBase y a data Service, aqui nos quedamos en mongo ahora vamos a nuestro visual estudio code
##### ![image](https://user-images.githubusercontent.com/82760991/236811895-21864365-d9c2-48da-9a4b-880f5865816b.png)
### N- En nuestra terminal pondremos esta terminal para instalar mongoDb en nuestro visual estudio npm i dotenv mongoose. Volvemos a mongoDb otra vez y ahora donde nos quedamos pulsamos el botton connect.
### Ñ- Ahora nos vamos a connect your aplicación que nos generará una url y la copiamos.
##### ![image](https://user-images.githubusercontent.com/82760991/236812028-71966139-5d38-4b61-8def-bdd21b1f2954.png)
### O- Ahora volvemos a nuestro visual estudio code creamos un archivo con la extensión .env, no nos hara falta poner una variable como let const o var ponemos por ejemplo mongo_db = "enlace" y donde pone <password> borramos todo y le ponemos la contraseña que creamos antes.

# Volvemos a Express
### Volvemos a server.js en mi caso
### dotenv es una dependencia que nos esconderá las claves de mi base de datos.
### el archivo dontenv trae el archivo privado de mi extensión .env y poder utilizarlo previamente. Por otro lado declararemos la variable con mongoose para acceder a nuestra base de datos, a través de URl = progress.env."mongo_db" que es la variable donde esta nuestra clave
##### ![image](https://user-images.githubusercontent.com/82760991/236813674-96912499-15c9-4604-8444-55f522624c7a.png)
### Una vez puesto esto añadiremos nuestras puertos en el backend es el puerto 5000 y en el frontend 3000, con una bucle then y catch en el que empezará a verificar si funciona o contiene errores nuestro servidor.
##### ![image](https://user-images.githubusercontent.com/82760991/236813867-3caad8d7-8c51-4271-a47b-8dfd24e2991c.png)

# Proteger nuestra contraseña en mongoDB
### Creamos nuestro archivo .env
#### ![image](https://user-images.githubusercontent.com/82760991/236873661-e1504e22-708c-4ec3-b1ec-c99fb75f3c61.png)
### Creamos una variable (no hace falta poner let, const o var en este caso) pegamos la url que copiamos en nuestro mongo db (seccion ñ)
### En la url donde pone password borramos este texto y ponemos nuestra contraseña que pusimos en mongoDB
  #### ![Captura 49](https://user-images.githubusercontent.com/82760991/236875044-d65996e0-d355-47d3-9993-4d76ad7f72e7.png)
### En server.js ponermos lo siguiente
  #### ![image](https://user-images.githubusercontent.com/82760991/236875620-8d2ae38f-7c51-4cc2-8dde-df3747697132.png)
  ### Ponemos nodemon en nuestro terminal de VSCode
  ### En otro terminal instalaremos -> npm i dotenv mongoose 
  ### *dotenv va a ser una dependencia que lo que va a hacer es darme a esconder mis claves
#### ![image](https://user-images.githubusercontent.com/82760991/237025909-e2d103a2-06ab-47b0-8188-b1fc6863e2ad.png)
  ### Aqui declaramos la variable para poder utilizarla

  ## Modelos y Rutas
#### Ahora crearé dos carpetas Models(modelos) y routes(rutas)
### 1-Modelos
En mi proyecto crearé 5 nuevos archivos que son calendario, notes, user, planificador, alarma con la extensión .js
En user.js exporto objetos a mi base de datos con mongoose, aqui lo que hago es crear los datos de un usuario es decir su nombre, apellidos... de tipo String y que sea obligatorio(required).
### Luego en los otros modelos haremos lo mismo pero con sus datos correspondientes(fecha,hora,nota...) a cada Nota, Evento, Planificador, Alarma.
##### ![image](https://user-images.githubusercontent.com/82760991/236814322-b773ce6b-81e8-4696-b1a5-9c79242e3564.png)
### En la línea 21 y 27 hago una relación de modelos que voy a usar en otros archivos que van a ser Notas, Alarmas, Planificador, y Eventos.
###### ![image](https://user-images.githubusercontent.com/82760991/236814440-8562dfbb-b345-4233-b47b-8cdcda1ae6a1.png)
###### ![image](https://user-images.githubusercontent.com/82760991/236814461-6357370d-610e-4c10-8980-022074cb35a2.png)
### Ponemos las marcas de tiempo verdaderas(timestamp), me dira cuando un usuario se a creado una cuenta, actualiza datos....
Exportamos el modulo a mongoose en nuestro archivos de rutas donde vamos a crear también otros 5 archivos que seran calendarioRouter, planificadorRouter, alarmaRouter, NotesRouter y userRouter también con la extensión de js.
### 2-Rutas
En los archivos Router pondremos estos comandos para conectar con express y los datos que creamos en nuestros modelos y conectarlos a estos
##### ![image](https://user-images.githubusercontent.com/82760991/236815124-78775ea3-9aa8-4b1d-8f60-61b036a4f494.png)
#### UserRouter nombre del archivo
#### User nombre del modelo y su ruta donde se encuentra nuestro archivo
  
## Ruta Post de Register
### Línea 24 Name, Email, Password son datos creados en el modelo user, vistos anteriormente
### Línea 26 Comprobación de que no se repitan usuarios con el mismo nombre o apellidos a través de findOne(Encuentrame)
### Después en la Línea 30 pusimos un mensaje para avisar al usuario de que ya esta registrada su cuenta en LDT.
## Luego puse otra condición que si no cumplia todas las casillas de registro (Línea 36) y que si no tenía un mínimo de 3 caracteres (Linea 42), le saldría un error de que no completo todos los requisitos.
## Y por finalizar esta ruta luego si hicimos todo correctamente nos enviará un mensaje de usuario encontrado, o nos saldrá un error en caso de que haya algun fallo en la aplicación.
#### ![image](https://user-images.githubusercontent.com/82760991/236846471-061feb17-788e-4ace-8802-1d2c80487f91.png)
#### ![image](https://user-images.githubusercontent.com/82760991/236848537-8d229429-43a7-43d2-9d43-f9b2ecda04c3.png)
#### ![image](https://user-images.githubusercontent.com/82760991/236848595-693555fa-7c81-43f0-acc0-e779bc945ea9.png)

  ## Petición Post de Login
### Pasamos por el body los datos que quiero o que necesita el usuario para logearse en mi caso puse el email y el password
### Busco al usuario en nuestra base de datos con el email y password que me llega del body si no es correcto me saldrá un mensaje de que algo no funcionó correctamente, si lo encuentra me dirá Login Correcto.
Cuantas menos explicaciones demos mejor por que así les damos mas dificultad a los hackers para poder acceder o verificar cual es el fallo y que puedan acceder con facilidad y vulnerar nuestros datos.
y en caso de que los datos que pongamos no sean correctos pues nos dara un error
#### ![image](https://user-images.githubusercontent.com/82760991/236852071-de98946b-0301-4dd5-a115-9b77f4eb3bc4.png)
#### ![image](https://user-images.githubusercontent.com/82760991/236852121-2dd82f5b-82fa-4d20-89a0-825a6dcfb380.png)

  ## Petición GET como ver a un usuario ya registrado
  ### Cogemos el id del usuario en request, en params (Línea 251)
  ### Encuentrame la id del usuario (Línea 252) y a partir de aqui me saldrá un mensaje de usuario encontrado o no (Líneas 256,261)
  ### Si no me sale ninguno de estos dos mensajes me saldrá un mensaje de error (Línea 267)
  #### ![image](https://user-images.githubusercontent.com/82760991/237030919-5a104b11-5767-4466-b8d2-95716da67872.png)

  ## Petición Delete Eliminacion de cuenta de un usuario
### Encuentrame el id del usuario registrado y logeado, dame su token de auth (authorization) y eliminame mi cuenta de usuario (Linea 393)
### si los datos del usuario estan correctos nos enviará un mensaje de que nuestra cuenta fue eliminada correctamente (LInea 396)
### si no nos enviará un error(Linea 401)
#### ![image](https://user-images.githubusercontent.com/82760991/236856926-2895c39a-fd7d-45bd-99c6-43a73f6d53bc.png)

  ## Petición Put
### Añadimos una petición de PUT en este caso lo pondré en mi NoteRouter ya que queremos modificar una nota que ya no nos sirve o queramos añadir algo en concreto.
### Línea 90, cogemos la id en req params, es decir la nota que queremos modificar.
### Línea 91, Los datos del modelo que queremos modificar
### Línea 93, encuantrame la nota y actualizame su id
### Si no cumplistes los requisitos necesarios te enviará un mensaje de no completastes todos los campos, en caso contrario nos enviará un mensaje de notas modificadas con exito.
## Nos puede dar un error en caso de que algo falle en la aplicación.  
#### ![image](https://user-images.githubusercontent.com/82760991/236857876-de77baae-33c0-4172-a2a9-f4ab4ab8a3cf.png)  

## Exportación de nuestras rutas en nuestro server.js  
### Para que POSTMAN, MONGODB y NODEMON nos lean los datos creados deberemos exportarlos al archivo que creamos al principio es decir nuestro server.js
#### ![image](https://user-images.githubusercontent.com/82760991/236861122-e8bebd72-4eb4-4471-b179-9f782f1318a9.png)

## POSTMAN
  ### Hay que estar muy atento a estos puntos, de lo contrario no funcionará nuestra ruta por muy bien que este escrita.
  ### Importante siempre el verbo al que vasmos a usar, es decir si nuestra ruta es un Get tendremos que poner esta ruta, no funcionará si ponemos otra.
  ### Enlace con la ruta por ejemplo http://localhost:5000/api/registro si no la escribimos al pulsar el botón send nos dará un error de que no encuentra esa ruta específica
  ### Lo que pusimos en nuestra ruta es decir si por ejemplo en register pusimos nombre, email y password en body en la parte de x-www-form-urlencoded deberán poner esos datos y como se puso en la ruta de lo contrario nos dara otro error.
  #### ![image](https://user-images.githubusercontent.com/82760991/236861745-936cdd57-1413-46e4-87bb-7f06e84dba49.png)

## Encriptación de contraseña y creando Token
### Ahora Para crear un token primero debemos instalar en nuestro terminal npm i jsonwebtoken, creamos una carpeta del middeleware y importamos el archivo
### Importamos la dependencia para encriptar la contraseña, lo que tenemos que dar al usuario es seguridad y fiabilidad a la hora de registrarse y tener sus datos guardados, se le encripta su contraseña para que no sea verificada por hackers
  #### ![image](https://user-images.githubusercontent.com/82760991/236863612-c7a096a5-fe6d-4d91-811a-e8f42af976ea.png)
 ### Bcrypt es una dependencia que nos ayuda a hashear (hash) / encriptar nuestra contraseña en la base de datos que no sea real, que tape los datos reales.
#### ![image](https://user-images.githubusercontent.com/82760991/236864083-cc8269c7-5121-4740-8f2e-09be5b6fcf44.png)
### Declaramos las vueltas que quiero que de mi contraseña, se recomienda que sean 10 ya que es mucho mas seguro
##### ![image](https://user-images.githubusercontent.com/82760991/236864559-b81784c5-9fa4-48ca-8882-79f87b3ab33f.png)
### Por ultimo lo que hacemos es que nuestro usuario cuando acceda a su cuenta, su cuenta expire en ciertos dias en este caso le puse 7 dias
#### ![image](https://user-images.githubusercontent.com/82760991/236864731-1ddeeb82-b933-45ec-9891-497aeccf60b2.png)

# Middelware Auth y AuthAdmin
  ## Ahora crearemos otra carperta llamada middelware donde nos dará información del usuario 
  
  ## 1- Auth -Usuario
  ### importamos la dependencia de jsonwebtoken
 #### ![image](https://user-images.githubusercontent.com/82760991/236869299-d46e3d7e-5dad-43a7-9dcf-d36f9bb9a9f0.png)
  ### req -> request
  ### res -> response
  ### next:() -> Bloque o codigo que lleva escrito antes pasa el control y luego sige su tarea
  ### Línea 5 recogemos del header el token que nos envia el usuario.
  ### Es importante que el token, lo verifiquemos  y decodifiquemos para que nos devuelva información del usuario logeado
  ### Línea 13: Coge la contraseña que pongamos en .env para acceder dentro de nuestra contraseña que pongamos en nuestra Database ya creada
  ### Línea 20 y 21: Si todo va bien pasa el control al siguiente bloque de codigo
  #### ![Captura 48](https://user-images.githubusercontent.com/82760991/236870177-ca4b0ade-564a-41c1-b035-09bba0ffde37.png)
  
## 2- AuthAdmin -Admin
  ### Esta función se ejecuta después de ejecutarse la función de Auth.js, después de comprobar que el usuario esta logeado
  ### Línea 3 y 4: Busca al usuario logueado por su id que me viene devuelto en el req.user que me viene devuelto del token
  ### si no me encuentra el usuario me dará un error como que no existe dicho usuario,
  ### ![image](https://user-images.githubusercontent.com/82760991/236871450-a743b124-6589-4929-ab4c-5956a2bf22aa.png)
  
## 1- añadimos la propiedad "role" al modelo de usuario
## 2- Creamos el middelware
## 3- Importamos la función creada en la ruta en cada Router que necesitamos
## 4- Importamos el AuthAdmin, en cada ruta requerida (ruta que va a ser privada para el admin, después de importar el primer middelware que me comprueba si el user esta logeado
  
 ## Creando un Administrador & Usuario
  ### Lo primero de todo lo que hay que hacer es en user.js es poner role type NUMBER y que los usuarios que se registren por defecto serán 0 y los administradores serán 1
  #### ![image](https://user-images.githubusercontent.com/82760991/236867021-b6f190e2-b780-4ce4-9440-481d55939ed0.png)
### Ahora para hacerlos administradores una vez registrados tenemos que acceder a mongoDb buscar el lapiz escribir en role y ponerle 1 después actualizarlo, se guardará y se quedará registrado como administrador
#### ![Captura49](https://user-images.githubusercontent.com/82760991/237041907-e86c544c-e063-4f2a-aca2-bb686e7a5792.jpg)

 # FrontEnd con React
  ## Instalación
  ### Vamos a nuestra terminal y pondremos el comando npx create-react-app "nombre del archivo" en mi caso fue client
  ### npx es una herramienta de ejecucción de paquetes que viene con npm
  ### Create se encarga de una logica de backend o de base de datos tan solo crea un flujo de construcción de Front-End de manera que lo puedes usar con  cualquier BackEnd.
  
  ## comando para inicar React
  ### npm start: arranca el componente
  ### npm run build: inicio de procucción
  ### npm run test: Inicio de prueba
  
  ## JSX
  ### Es un lenguaje especial que mezcla HTML5 con JS, Además es como una especie de lenguaje de plantilla que me permite imprimir variables y hacerlo todo de manera mas dinámica y queda bastante limpia.
  ## Estructurando y Diseñando LDT
  ### Empecé creando componentes en varias carpetas
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/da34f3b4-33e3-4201-a321-d00e46ac94fe)
  
  ## App
  ### Es nuestro archivo pricnipal en el que añadiremos  nuestros componentes en mi caso fueron Navbar y Pages
  ### Navbar, Pages (Nombre del componente)
  ### from "" componente donde se encuentra el archivo
  ### Componentes donde esta estructurado mis archivos, Navbar: mi barra de navegación, Pages:donde estarán enlazados todos mis componentes. (Linea 7 y 8)
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/92e21403-c5de-44b8-97f0-8686a39ddb78)
  
  ## Home
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/9f495d7f-6384-49c6-8ce5-3dba10d83e90)
  ### Import enlace del archivo de Css (Línea 2)
  ### Link es una etiqueta que sustituye <a/> en HTML5 (Línea 3, 14, 17) si pusieramos dicha etiqueta no funcionaría correctamente el enlace, react-router-dom habilita el enrutamiento del lado del cliente (Linea 3).
  ### ClassName es una nueva manera de poner estilos de clase en nuestro Css en React.
  ### Home tanto la función como la exportación se tiene que llamar igual, de lo contrario no podrán enlazarse a otros componentes y nos dará un error (Linea 4 y 26).
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/2ba69c3d-4c20-461a-a6bd-bda5c6769d85)
  
  ## Navbar
  ### Navbar Admin
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/65a4b24d-9e60-4e01-9d92-127e07088ab5)
  ### Navbar User
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/68f6658a-d436-4d5a-bb69-380bc88284af)
  ### SetItem ==> Es para definir
  ### getItem ==> Coge un valor de una variable
  ### RemoveItem ==> Borra una clave o algo en concreto, por ejemplo el logout o eliminamos la cuenta de nuestro usario
  ### role es el archivo que hay en la aplicación en consola, lo creamos en el modelo user de nuestro Backend, 
  ### localStorage es la aplicaión de nuestra consola (Linea 6).
  ### Creo una condicion en mi variable navbar, que cuando acceda al logout en mi cuenta si mi role es 0 entrare como navuser (Usuario)
  ### y si mi role es 1 entraré como navAdmin (Admin)(linea 82).
  ### La variable Navbar la declaro en la Línea 86 con las condiciones que le pusimos en la Líneas anteriores.
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/71f6f91b-7fb5-46c3-b4a2-c1cb1cae60af)
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/eaf71a23-5b69-4b84-9b36-612da4fe873b)
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/138acb4d-4ad6-4bdb-a477-554ef12cd5e7)
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/361e5e61-a4e8-407b-8ca7-525493b7e4ce)
  
  ## Pages
  ### En este componente importaremos todos los archivos que vayamos a crear y usaremos el react-router-dom para hacer enrutamientos entre ellas 
  ### path es la dirección de la ruta que nos dirigiremos con Link y element es nuestro componente
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/65f691cf-a3bf-445c-9af7-245312ad28cf)
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/f741bf98-b74d-4bf6-a4aa-8f1e6223b44b)
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/c77b0efd-bbdb-4dce-952d-5f42a9cf779d)

  ## Login
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/3fcd2077-f55e-456b-a526-3515869901a2)
  ### UseState es un Hook que es una función especial que permite "conectarse" a características de React.
  ### Permite agregar una variable de estado a nuestro componente
  ### Axios es una biblioteca de cliente Http que le permite realizar solicitudes a un endpoint determinado
  ### Cogemos los datos del BackEnd de nuestra petición Post de Login (Linea 7 a la 10)
  ### Creamos datos para cuando nos logeamos nos envíe un mensaje (Linea 11 a la 17)
  ### Aparte de rellenar los datos de mi login, que me verifique los datos en el submit(Linea 18 a la 38)
  ### Llamamos a la petición BackEnd con Axios(Linea 21 a la 23)
  ### Es importante poner aqui la consola en response por que asi obtendremos todos los datos de la ruta o errores para verificar donde esta el fallo (linea 24)
  ### Aqui guardamos toda la información del usuario en la memoria del navegador (Linea 26, 27 y 28)
  ### Refrescame el Navegador (Linea 29)
  ### Si no es correcto  los datos que envio envíame un mensaje de error (Linea 33)
  ### Si esta correcto los datos me envías al usuario (Linea 30) y sino me llevas a login (Linea 35)
  ### Cuando accedemos a Login no tendremos ningun mensaje (None), cuando pongamos nuestros datos de email y password si pusimos bien todos los datos nos enviará un mensaje de "Login Correcto", en caso contrario de que no esten correctos los datos se activará un mensaje que dirá "Algo no funcionó correctamente" (Linea 67 y 78)
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/3a4fadc4-78ee-404f-8ba1-eb78ba623bc4)
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/c93aabe3-57da-4b08-bc9f-61e2609b7a7d)
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/33216632-a590-4bd4-9c64-ea8dfaca3a7e)
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/1863a0a6-a162-4acd-b799-c9a3cdf316ec)
  
## Register
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/e88b7fd0-36b7-47bc-ac71-3e60d5520e42)
### Aqui creamos la sección de rergister donde cogemos todos los datos de un nuevo usuario, cogemos los datos en useState y sacamos la ruta a través de axios en la ruta post de register que creamos anteriormente
### Pondremos tambien mensajes de alerta, si se registró correctamente o no y que me refresque la página.
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/a18061a8-c3f5-40ef-bd4f-85ab6c1ccb8f)
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/35ccd8b6-ea7e-4214-a3f9-8cdd5cc8bee6)
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/b055242b-d08d-4137-89ef-d6e73fd2f527)
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/b14f6103-8773-45ed-b5ad-7b1933705746)
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/7f3cc67c-83b6-4005-9615-68a0b355c4d8)
  
 ## User
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/44d59573-ca13-4dd9-b11d-98d94b51428c)
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/7eaecb72-db36-4c6a-ae66-0e8e25647d69)
  ### Una vez nos registremos y accedamos por Login, entraremos a nuestro menú principal
  ### UseEffect es un hook de React que nos permite sincronizar un componente con un Sistema externo
  ### Ambos metodos funcionán por igual, cogen los datos del BackEnd y lo muestran en FrontEnd (Linea 11 a la 24 y 25 a la 36)
  ### Cogemos la ruta con axios por la autorización(authorization) del token, cogemos los datos en la consola para verificar que funciona correctamente y que elementos vamos a coger, los mostramos con el useState.
  ### Aquí ponermos las diferencias cuando accedes a admin o user, si tu rol es 1 accederas como Admin, si tu rol es 0 accederas como usuario (Linea 41 y 50)
   #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/3ee20df8-2c0f-4810-ad70-5a38b5986c7b)
   #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/16c03b44-1ec7-404c-ba4e-1b6d27c0b0a5)
   #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/1224f886-094d-4934-88b2-39dfc784b08f)

## Ahora iremos con TodosLosPlanificadores, Planificador, newPlanificadory modificacionPlan, los demás al final son lo mismo salvo que los datos del Backend tanto el modelo y la ruta son diferentes, pero la estructura es la misma
  
  ## TodosLosPlanificadores
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/3e40fc49-0fdb-46ae-9cca-dfd0b2273edc)
  ### cogemos el valor de UseState y hacemos un mapeo(map) para que nos salga todas las planificaciones que hemos creado y que vayamos a crear (Linea 35 a la 41)
  ### Aqui mostraremos los datos de nuestro modelo del BackEnd(Linea 38 y 39)
  ### Me coge un planificador por el id, una vez creada ya puedo acceder a ella pulsando este botón(Linea 41).
   #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/7b84ad66-7b50-4c3b-a84b-de979a6fd812)
   #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/a0394be9-f44a-4afa-9b47-5c07207f1e61)
   #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/48f0c206-371b-4da4-837d-73a163b47b38)
   #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/83af4f20-af19-489a-91f3-6edf7e289ec0)
  
## Planificador
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/40e03643-159a-4e4b-8b91-3cadb825fb12)
### Accede al objeto del historial del enrutador de React y navega a los otros enrutadores utilizando los metodos de inserción o remplazo, ayuda ir a una URl específica, tanto hacia adelante como atrás(Linea 18)
### Cojo PlanificadorId en useParams, cuando accedo a TodosLosPLanificadores creo un botón para poder acceder a ese Planificador. Ese Planificador contiene una id que es la ruta que cogemos en pages en Front, y accedemos a ese planificador concreto  por el mapeo(map). (Linea 22)
 ### preventDefault Evita el comportamiento por defecto del navegador para algunos eventos que no lo tienen (Linea 37)
 ### Aqui creamos el Botón de Eliminar, cuando pulsemos el botón nos saldrá un aviso de si quermos borrar o no el planificador, si confirmamos al cabo de unos segundos, nos llevará al menú de usuario y ese planificador ya no existirá, nos lleva de nuevo en TodosLosPlanificadores (Linea 36 a la 57)
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/50fc0582-029b-4e4e-a4aa-85c77d6869bf)
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/d1d5e0a3-4abf-4470-9fc4-5b40b4e6a249)
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/20f06357-b014-4986-9677-c09b25924ebe)
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/90bd1e34-3842-4972-a68a-fe7517705f87)

## New Plan
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/d04fabf4-39c7-44ae-8588-15ce5d63cf7c)
### Este componente me creará un nuevo Planificador en el que cogemos el modelo y la ruta sera post de planificador, a través del token se eliminará la nota que queremos crear y una vez creada nos enviará de nuevo a TodosLosPlanificadores
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/92b8674b-dabd-4e5d-b7e6-f4ca3441d22b)
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/91e99f54-58ac-4138-8311-f81f5445a8b1)
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/654134ab-ede3-4385-b690-d75cfaf5deca)
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/f80090c1-4543-46fb-a27a-e844f915d283)
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/5d0fef5a-96c8-4acc-a75a-4de0271a4db5)
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/2d0d8c84-5bf0-43f8-8159-428c9002cd27)

## ModificacionPlan
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/a9e3baad-7603-4e80-85cf-3df0c949fd3e)
### En este componente modificacaremos un planificador que queremos cambiar los datos, por que nos equivocamos o por que los datos no sean correctos, etc
### Cogemos la nota en la ruta de Front a través de useParams y una vez modifiquemos los datos, estos se modificarán y nos enviarán de nuevo al planificador corregido (Linea 36 a la 50).
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/a111360d-e5be-470f-add3-8ef0be19233f)
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/ce5c43c5-5dd7-45f4-b32d-02f857a9ce19)
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/57125405-0734-4cd5-8976-145dd9b7d1de)
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/c0a89563-8213-44ea-9c13-9016c660ee19)
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/1e7d4513-751e-417b-8c7b-6185d27edbe3)

## Datos Usuario
### Como admin
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/2faa7f1a-2a2c-44b0-8805-1102eba7867d)
### Como User
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/2dc7a0a2-b5fb-4319-b140-336116e3ba92)
### En este componente tendremos nuestros datos del usuario, también podrémos modificar o eliminar nuestros datos como usuario
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/a36c6fb8-2656-4f21-a5f8-a97ff58029f6)
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/1695c9b5-9fc2-4b6d-ba29-c28f2f36b6bd)
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/95f2e61e-196b-4f01-b221-7d4441063893)
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/42013e01-380d-4cbc-9dae-40f65b5e5a3e)

 ## Usuarios
  ### ![image](https://github.com/Silkaleex/LDT/assets/82760991/0baaa169-86d4-4c78-9ef7-53d034a3a943)
  ## En este componente tendremos todos los datos del usuario como administrador
  ### Se hizo un mapeo para mostrar todos los usuarios(Linea 30)
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/567cd469-f85a-436d-a79f-54d4ae6f6f9a)
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/bc1b2443-0adf-4626-9838-387ff52bd637)

## Pusuario
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/00331aa3-0aaa-4916-8f7f-5a521acfcf2f)
### En este componente veremos los datos del usuario y podremos eliminarlo o bannearlo al usuario como administrador.
### El botón hace la misma función que elimnar usuario en DatosUsuario solo que el admin elimina un usuario en caso de que no cumpla las normas de licencia (Linea 32 a la 50) 
### cuando pulso el botón de banneo, bloqueao al usuario y no podrá inciar sesión, pasados unos segundos nos llevará a nuestro perfil de Admin (Linea 52 a la 75)
### Cuando accedo al componente de PUsuario el botón tendrá el mensaje de Banear usuario, cuando lo pulso se activará y el usuario no podrá acceder a su cuenta, esperamos unos segundos y me enviará de nuevo a Datos Usuario.
### Cuando vuelva otra vez a ese perfil el mensaje del botón habrá cambiado por desbannear usuario, si le pulsamos se desactivará y el usuario podrá volver a acceder a su cuenta (Linea 119 a la 127)
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/488736ba-2001-45c6-a6fc-85ba07a547eb)
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/17853d8c-6a22-4707-9f6f-5112e2e2b214)
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/bbfb145d-04d6-4c00-9b93-f326bb287020)
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/74ff5ca9-f54b-4d4e-b469-25b6ba467478)
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/321fbdff-e02a-4875-ab96-a1ba5833948b)
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/08886309-527c-48d9-820f-f50d80a0a222)
  
## Logout
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/3589cc7e-458d-48dc-8245-087753044d54)
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/2ac415c7-63ef-4e50-b672-adb43e61f78b)
### Este componente nos cerrará sesión de nuestra cuenta cuando pulsemos el icono del navbar de cerrar sesion esperamos unos segundos y volveremos a home, nuestros datos estarán guardados
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/c9f051ab-de99-43de-8787-fc84ea9fc033)

## añadiendo un formulario de dudas en la seccion de Licencia
### Añadí un formulario para que un nuevo usuario cuando tenga dudas nos pueda escribir a nuestro correo, y así resolver todas las dudas posibles, poniendo sus datos, con su nombre e email y un texto sobre duda que tenga sobre las normas de licencia de LDT o otras cuestiones que quiera comentar sobre la aplicación.
  ### Lo primero que hice es entrar en EmailJs y hacerme una cuenta de usuario con mi email
  ### Lo segundo es crear un nuevo servicio ("Add New Service")
  ### En esta captura ya tengo tengo una creada, pero para empezar debemos seleccionar la casilla azul mencionada
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/b4a57d2c-07a8-4cce-8502-a82feeac3a1e)
  ### Aquí tenemos las diferentes opciones que nos ofrece EmailJs, en mi caso voy a elegir Gmail.
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/f9c51a05-cdad-40a7-89a4-d0f998f2c5dc)
  ### En esta parte generamos mi servicio con el nombre y su ID que usaremos mas adelante
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/34534b75-6813-4825-bb9e-b98c4a402633)
  ### Lo mas importante es crearnos una cuenta, vincularnos con ella  y acceder a ella para que pueda funcionar
  ### Una vez que nos de los accesos le damos a continuar, y seleccionamos a crear servicio ("Create Service")(Botón Azul abajo izquierda)
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/73b28fbf-15a3-4670-b652-9620413bd3a0)
### Una vez Hecho ycorrectamente lo anterior ya podremos acceder a nuestro servicio creado
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/9c3e96d2-23d1-4e94-8d07-5625137accd9)
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/89a10545-a259-485f-a010-057ed070d4f8)
### Vamos a crear un template, que es un formato que vamos a tener en el email, recibiremos en nuestro Email, que es lo que va a contener...
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/2e36bab3-98c5-42ed-a183-0ef57fe3444d)
  ### En esta parte podemos poner el mensaje o contenido necesitemos, yo puse el nombre del usuario, correo electrónico, mensaje que nos escriba dicho usuario
  ### Subject es como el asunto del mensaje user_name me hace referencia al From Name que hay a la derecha
####![image](https://github.com/Silkaleex/LDT/assets/82760991/ac058226-102a-4df9-990c-fe64c659af37)
### Aqui esta el cuerpo del texto, aqui pondremos lo que queramos y entre {{}} aqui ponemos lo que queramos apurar
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/42f2f8af-f335-4ed3-9e7b-2c1750e371fc)
### Ahora accedemos a Test It
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/762d622c-6d11-4d7f-89d4-1b37d3b0b950)
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/20123cb0-b6d6-44fa-8382-5bd4a5114c4c)
### Aquí rellenamos los datos que recibiría del formulario a mi Email que queramos, en mi caso lo dejé en blanco, le damos al botón de comprobar ("Send Test Email") y nos saltará un aviso de 200 OK, es decir, el mensaje se envió correctamente.
### Si falla puede ser que no accedieras bien a los permisos dichos anteriormente cuando nos registramos con el email.
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/bbef77de-98ab-4bcc-9852-55c6900dbc79)
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/990cf63c-a35e-48a6-ac27-fa9fb23e326e)
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/ee802c5f-e8a7-403b-8172-776eaec11e98)
### Una vez comprabado que el correo se envia correctamente, lo que tenemos que hacer es ir a la documentación (DOCS)
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/dcd69b63-9d03-48a2-b154-d5cf6ca995b1)
### ahora accedemos a ejemplos (Examples) en mi caso es React
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/b95e63eb-6131-416b-92e2-ab3276e62b3a)
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/db48d9b2-8a2b-4230-9af7-6a42eddbb655)
### En la Documentación nos da un formulario que podemos usar en nuestro codigo
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/f33f104b-c8ba-42b4-ba15-4a6db3ac02a1)
### Estos 3 datos son importantes es exactamente los datos que puse en mi texto de correo (Template), esos datos no se pueden modificar, si se modifica al enviarse al correo no se veran dichos datos que pusimos
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/e77e2a81-4450-491f-9558-9643d091b729)
### importamos emailJS en nueswtro componente de licencia en react
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/627c65d8-ee53-44d6-884a-06da5a35400b)
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/a92ee45d-5f23-4c56-880f-ccf0d319ceaa)
 ### Copiamos de la documentación de EmailJs y la importamos a nuestro manera
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/e4c4e00a-265e-4370-bbd8-c3ab9f8c02c6)
### Asi es como quedaria en mi caso de diseño
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/0219aa49-7853-4f49-8bf8-ea6916285326)
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/67e558f0-f6e4-49de-b7b1-228ad965a9af)
### Ahora añadí unos mensajes de alerta en caso de que estubiera correcto nos diria "Mensaje enviado con éxito. Te responderemos lo antes posible". o en caso de fallo "no completastes todos los campos" para ello use el useState (Lineas 17 a la 21)
### Ademas creé un useRef, es un Hook que nos permite referenciar un valor que no es necesario renderizar (Linea 1 y linea 23)
 ### Luego dentro de nuestra constante creé otra para enviar un mensaje de Email en el que puse una condición de si no se pone ningun dato o hay algun fallo, nos dará un error y nos refrescará a la pagina de inicio (Línea 25 a la pagina 34)
 ### En la linea 36 a la 42 puse mis datos de la id de mi correo email y message para que cuando algun usuario tenga duda con las normas de licencia, el mensaje me llege correctamente a mi correo
 ### la línea 43 a la 53 si son correctos dichos datos me enviará el mensaje de "Mensaje enviado con éxito. Te responderemos lo antes posible." y si hay algun error nos pondrá este mensaje "Error al enviar el correo electrónico" y refrescara la pagina volviendo a Inicio.
### Línea 54 a la 57 son los valores del useState luego estos valores los importamos en las líneas 184, 194, 204.
### Para que nos funcionen los mensajes de que esta todo bien o no, ponemos una condición en la linea 206 hasta la 209 para que se active uno o otro mensaje
### En la linea 34 35 y 37 cogí los valores de la siguiente manera en EmailJs
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/7667fbcc-1e4a-4eed-b72a-c691e3bf5369)
### Es la Id de mi servicio lo copiamos y lo pegamos (Línea 34)
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/738b3b99-a1b2-4b9e-aea5-00da197f90b4)
### Volvamos a Plantillas de correo Electronico("Email Termplates")
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/531fbbeb-1d81-47a3-b482-0f6e12aa31a8)
### Cuando accedemos en esta sección vamos a coger el Template que contiene una Id, para ello seleccionamos el template y accederemos al mensaje de texto de nuevo.
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/158e8f95-9e87-4755-929f-4470774df77e)
### Vamos a la seccion de ajustes("Settings") y aqui nos data la id del template
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/32187628-5ef3-415b-a74e-ed1112f659bd)
### Aqui cogemos el template ID y lo copiamos en la línea 35 y por ultimo accedemos a acount
#### ![image](https://github.com/Silkaleex/LDT/assets/82760991/bbe103aa-aa7d-41e7-9f54-82f30cc98c7c)
### Cogemos la llave pública (Public Key) y la pegamos en nuestra línea 37

## To Do
### Darle una solución al usuario en caso de Banneo, que se ponga en contacto con nosotros
### Mejorar la sección de terminos y condiciones
### Organización de eventos con otros usuarios
### En eventos crear una seccion de chat en cada evento y se hable de ese evento en concreto
### Separar la sección de eventos publicos y privados, es decir que en los privados tengamos que enviar una peticion al usuario que creo ese evento, y este acepte o deniege la solicitud para unirse al chat, En Publicos se pueda acceder al chat sin ningun problema.
### Que se pueda expulsar al usuario del chat si no cumple las normas de licencia, bloqueandolo o denunciandolo y el admin tome las decisiones sobre que hacer con ese usuario.
### Poner un reloj en la hora en vez de escribirlo manualmente
  


