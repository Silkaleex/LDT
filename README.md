# Aplicación LDT

### Esta aplicación sirve para desarrollar ideas que necesitemos en nuestro dia a dia,
### En la que podremos añadir eventos,Notas o ciertos momentos importante en los que recordar,
### Además podremos añadir una alarma para que nos envie un correo para que nos avise sobre la hora y fecha exacta de algo puntual que nos quiera avisar.
### Un Planificador donde podremos destacar algo importante o que necesitemos mejorar, destacar en un mes dia o un tiempo establecido. 

# BackEnd & DataBase

## Instalación de Nuestro Backend con Express
#### Empezamos descargando he instalando NodeJs en nuestro ordenador.
#### una vez instalado, instalamos en nuestro terminal de VSCode Npm y verificando que node esta instalado correctamente.
#### Aqui Djunto los comandos que pusimos en la terminal de VSCode.
#### node -v => version actual de Node
#### npm -v => version actual de nuestro npm
#### node "unarchivo.js" => nos visualizara los datos de todo el proyecto
#### npm Init => nos crea un archivo desde cero, un package.json y le añade contenido
#### npm install express => instala los datos de express en nuestro package.json
#### npm i nodemon --D => instala nodemon, una extension de nodeJs que nos verificará de si funciona o contiene errores nuestro backend.

# Verbos HTTP
### 1- Get: Es el que recibe los Datos
### 2- Post: Es el que me envia o crea Datos
### 3- Put: Es el que Actualiza o modifica los Datos
### 4- Delete: Es el que me Elimina los datos

# Pasos a seguir
### creamos la funcion  y levantamos el servidor usando nodemon "server.js" que es una aplicacion que voy a crear en mi aplicación LDT

### ![Captura 1](https://user-images.githubusercontent.com/82760991/236807178-f0ab22a6-56c9-448b-b837-acaef6b5432b.PNG)

### linea 1- Ejemplo para verificar que nodemon lee el mensaje de hello world!, podemos poner lo que queramos o no(opcional)
### linea 2- Importamos express
### linea3- Creamos el nombre del servidor en mi caso app, que podemos poner otro nombre que queramos, este utilizará todos los metodos de nuestro express

# MongoDB
### Creando nuestra Base de Datos
### Primero de todo vamos a crearnos una cuenta, y despues empezamos a crear nuestra base de datos,
### A- Seleccionamos un nuevo proyecto
##### ![Captura2](https://user-images.githubusercontent.com/82760991/236808952-5c7ebeba-adf4-4ee6-88ad-5d07bed82748.PNG)
### B- Aqui escribimos el nombre de nuestro proyecto
#### ![Captura3](https://user-images.githubusercontent.com/82760991/236809015-8988a0dc-8bdc-422f-990c-7d053ef34f15.PNG)
#### C- Creamos el proyecto
##### ![image](https://user-images.githubusercontent.com/82760991/236812595-67782662-1fa7-4f7b-a8d6-c742139ed03e.png)
### D-Añadimos la direccion actual(Add Ip Address)
##### ![image](https://user-images.githubusercontent.com/82760991/236810893-c793b502-6d0c-4717-949a-d6f0cabfad22.png)
### E-Seleccionamos Network Access
##### ![image](https://user-images.githubusercontent.com/82760991/236811116-9af2b2c2-e8c5-4abe-ba71-7ba127bb30a7.png)
### F-Editamos nuestra ip acutal(Add ip Address), la oculto por motivos de seguridad
##### ![image](https://user-images.githubusercontent.com/82760991/236811171-b073714d-e4fe-4185-8825-79e2d764be11.png)
### G-seleccionamos permitir el acceso desde cualquier lugar(Allow Acess from anywhere) y confirmamos
##### ![image](https://user-images.githubusercontent.com/82760991/236811525-a6b6b9fc-0bfe-4f86-bca9-11e67538277c.png)
### H-Luego saldremos a la ventana anterior y eliminaremos la anterior Ip en el caso de que nos vuelva a salir, nos quedamos con la que hemos creado y nos vamos a Deployment -Database.
##### ![image](https://user-images.githubusercontent.com/82760991/236811592-01eeff8c-daff-4de9-b628-f478c1ad3600.png)
### I-Una vez estemos en esa sección le damos a Build a DataBase - construir una base de datos
##### ![image](https://user-images.githubusercontent.com/82760991/236811651-8181c72a-4e44-460c-a7ee-e5a39854f740.png)
### J-Ahora crearemos una base de datos Básica de 512mb que mongo nos da gratuita
seleccionamos la región mas cercana  y el nombre a nuestro grupo yo puse para mi aplicacion LDT, hay que tener en cuenta que una vez escribamos nuestro nombre del grupo no se podrá modificar.
##### ![image](https://user-images.githubusercontent.com/82760991/236811694-eb606913-f772-4e36-b003-cfda5263369a.png)
##### ![image](https://user-images.githubusercontent.com/82760991/236811720-82f98755-3359-470f-9d10-13eb52c18c78.png)
### K-Después de crearnos nuestra base de datos nos toca crear un usario y contraseña importante guardarla,seleccionamos el botón create User
##### ![image](https://user-images.githubusercontent.com/82760991/236811782-b51eff25-03e5-4082-aff2-49c3ba6d992b.png)
### L-Acabando ya esta parte verificamos que nuestra Ip access list es la que pusimos antes en Add Ip Address y pulsamos el boton Finish and Close
##### ![image](https://user-images.githubusercontent.com/82760991/236811849-b8373b55-10a9-4e6f-af54-7373113ef0dd.png)
### M-Volvemos DataBase y a data Service, aqui nos quedamos en mongo ahora vamos a nuestro visual estudio code
##### ![image](https://user-images.githubusercontent.com/82760991/236811895-21864365-d9c2-48da-9a4b-880f5865816b.png)
### N-En nuestra terminal pondremos esta terminal para instalar mongoDb en nuestro visual estudio npm i dotenv mongoose. Volvemos a mongoDb otra vez y ahora donde nos quedamos pulsamos el botton connect.
### Ñ-Ahora nos vamos a connect your aplicación que nos generará una url y la copiamos.
##### ![image](https://user-images.githubusercontent.com/82760991/236812028-71966139-5d38-4b61-8def-bdd21b1f2954.png)
### O-Ahora volvemos a nuestro visual estudio code creamos un archivo con la extensión .env, no nos hara falta poner una variable como let const o var ponemos por ejemplo mongo_db = "enlace" y donde pone <password> borramos todo y le ponemos la contraseña que creamos antes.

# Volvemos a Express
### Volvemos a server.js en mi caso
### dotenv es una dependencia que nos esconderá las claves de mi base de datos.
el archivo dontenv trae el archivo privado de mi extensión .env y poder utilizarlo previamente.
Por otro lado declararemos la variable con mongoose para acceder a nuestra base de datos, a través de URl = progress.env."mongo_db" que es la variable donde esta nuestra clave
##### ![image](https://user-images.githubusercontent.com/82760991/236813674-96912499-15c9-4604-8444-55f522624c7a.png)
### Una vez puesto esto añadiremos nuestras puertos en el backend es el puerto 5000 y en el frontend 3000, con una bucle then y catch en el que empezará a verificar si funciona o contiene errores nuestro servidor.
##### ![image](https://user-images.githubusercontent.com/82760991/236813867-3caad8d7-8c51-4271-a47b-8dfd24e2991c.png)

# Proteger nuestra contraseña en mongoDB
### Creamos nuestro archivo .env
#### ![image](https://user-images.githubusercontent.com/82760991/236873661-e1504e22-708c-4ec3-b1ec-c99fb75f3c61.png)
### Creamos una variable (no hace falta poner let, const o var en este caso) pegamos la url que copiamos en nuestro mongo db (seccion ñ)
### En la url donde pone password borramos este texto y ponemos nuestra contraseña que pusimos en mongoDB
  #### ![Captura 49](https://user-images.githubusercontent.com/82760991/236875044-d65996e0-d355-47d3-9993-4d76ad7f72e7.png)
### en server.js ponermos lo siguiente
  #### ![image](https://user-images.githubusercontent.com/82760991/236875620-8d2ae38f-7c51-4cc2-8dde-df3747697132.png)
  ### Ponemos nodemon en nuestro terminal de VSCode
  ### En otro terminal instalaremos -> npm i dotenv mongoose 
  ### *dotenv va a ser una dependencia que lo que va a hacer es darme a esconder mis claves
#### ![image](https://user-images.githubusercontent.com/82760991/237025909-e2d103a2-06ab-47b0-8188-b1fc6863e2ad.png)
  ### Aqui declaramos la variable para poder utilizarla

  ## Modelos y Rutas
#### Ahora crearé dos carpetas Models(modelos) y routes(rutas)
### 1-Modelos
En mi proyecto creare 5 nuevos archivos que son calendario, notes, user, planificador, alarma con la extensión .js
En user.js exporto objetos a mi base de datos con mongoose, aqui lo que hago es crear los datos de un usuario es decir su nombre, apellidos... de tipo String y que sea obligatorio(required).
### Luego en los otros modelos haremos lo mismo pero con sus datos correspondientes(fecha,hora,nota...) a cada Nota, Evento, Planificador, Alarma.
##### ![image](https://user-images.githubusercontent.com/82760991/236814322-b773ce6b-81e8-4696-b1a5-9c79242e3564.png)
### En la linea 21 y 27 hago una relación de modelos que voy a usar en otros archivos que van a ser Notas, Alarmas, Planificador, y Eventos.
###### ![image](https://user-images.githubusercontent.com/82760991/236814440-8562dfbb-b345-4233-b47b-8cdcda1ae6a1.png)
###### ![image](https://user-images.githubusercontent.com/82760991/236814461-6357370d-610e-4c10-8980-022074cb35a2.png)
### Ponemos las marcas de tiempo verdaderas(timestamp), me dira cuando un usuario se a creado una cuenta, actualiza datos....
Exportamos el modulo a mongoose en nuestra archivos de rutas donde vamos a crear también otros 5 archivos que seran calendarioRouter, planificadorRouter, alarmaRouter, NotesRouter y userRouter también con la extensión de js.
### 2-Rutas
En los archivos Router pondremos estos comandos para conectar con express y los datos que creamos en nuestros modelos y conectarlos a estos
##### ![image](https://user-images.githubusercontent.com/82760991/236815124-78775ea3-9aa8-4b1d-8f60-61b036a4f494.png)
#### UserRouter nombre del archivo
#### user nombre del modelo y su ruta donde se encuentra nuestro archivo
  
## Ruta Post de Register
### Linea 24 Name, Email, Password son datos creados en el modelo user,vistos anteriormente
### Linea 26 Comprobación de que no se repitan usuarios con el mismo nombre o apellidos a través de findOne(Encuentrame)
### Después en la linea 30 pusimos un mensaje para avisar al usuario de que ya esta registrada su cuenta en LDT.
## Luego puse otra condición que si no cumplia todas las casillas de registro (Linea 36) y que si no tenia un mínimo de 3 caracteres (Linea 42), le saldría un error de que no completo todos los requisitos.
## Y por finalizar esta ruta luego si hicimos todo correctamente nos enviará un mensaje de usuario encontrado, o nos saldrá un error en caso de que haya algun fallo en la aplicación.
#### ![image](https://user-images.githubusercontent.com/82760991/236846471-061feb17-788e-4ace-8802-1d2c80487f91.png)
#### ![image](https://user-images.githubusercontent.com/82760991/236848537-8d229429-43a7-43d2-9d43-f9b2ecda04c3.png)
#### ![image](https://user-images.githubusercontent.com/82760991/236848595-693555fa-7c81-43f0-acc0-e779bc945ea9.png)

  ## Peticion Post de Login
### Pasamos por el body los datos que quiero o que necesita el usuario para logearse en mi caso puse el email y el password
### busco al usuario en nuestra base de datos con el email y password que me llega del body si no es correcto me saldra un mensaje de que algo no funciono correctamente, si lo encuentra me dira Login Correcto(captura no Hecha)
cuantas menos explicaciones demos mejor por que así les damos mas dificultad a los hackers para poder acceder o verificar cual es el fallo y que puedan acceder con facilidad y vulnerar nuestros datos.
y en caso de que los datos que pongamos no sean correctos pues nos dara un error
#### ![image](https://user-images.githubusercontent.com/82760991/236852071-de98946b-0301-4dd5-a115-9b77f4eb3bc4.png)
#### ![image](https://user-images.githubusercontent.com/82760991/236852121-2dd82f5b-82fa-4d20-89a0-825a6dcfb380.png)

  ## Petición GET como ver a un usuario ya registrado
  ### Cogemos el id del usuario en request, en params (Línea 251)
  ### Encuentrame la id del usuario(Línea 252) y a partir de aqui me saldra un mensaje de usuario encontrado o no(Líneas 256,261)
  ### Si no me sale ninguno de estos dos mensajes me saldra un mensaje de error (Línea 267)
  #### ![image](https://user-images.githubusercontent.com/82760991/237030919-5a104b11-5767-4466-b8d2-95716da67872.png)

  ## Peticion Delete Eliminacion de cuenta de un usuario
### Encuentrame el id del usuario registrado y logeado, dame su token de auth(authorization) y eliminame mi cuenta de usuario (Linea 393)
### si los datos del usuario estan correctos nos enviara un mensaje de que nuestra cuenta fue eliminada correctamente (LInea 396)
### si no nos enviará un error(Linea 401)
#### ![image](https://user-images.githubusercontent.com/82760991/236856926-2895c39a-fd7d-45bd-99c6-43a73f6d53bc.png)

  ## Petición Put
### Añadimos una petición de PUT en este caso lo pondré en mi NoteRouter ya que queremos modificar una nota que ya no nos sirve o queramos añadir algo en concreto.
### Línea 90, cogemos la id en req params, es decir la nota que queremos modificar.
### Linea 91, Los datos del modelo que queremos modificar
### Linea 93, encuantrame la nota y actualizame su id
### Si no cumplistes los requisitos necesarios te enviará un mensaje de no completastes todos los campos, en caso contrario nos enviará un mensaje de notas modificadas con exito.
## Nos puede dar un error en caso de que algo falle en la aplicación.  
#### ![image](https://user-images.githubusercontent.com/82760991/236857876-de77baae-33c0-4172-a2a9-f4ab4ab8a3cf.png)  

## Exportacion de nuestras rutas en nuestro server.js  
### Para que POSTMAN, MONGODB y NODEMON nos lean los datos creados deberemos exportarlos al archivo que creamos al principio es decir nuestro server.js
#### ![image](https://user-images.githubusercontent.com/82760991/236861122-e8bebd72-4eb4-4471-b179-9f782f1318a9.png)

## POSTMAN
  ### Hay que estar muy atento a estos puntos, de lo contrario no funciona nuestra ruta por muy bien que este escrita.
  ### Importante siempre el verbo al que vasmo a usar, es decir si nuestra ruta es un Get tendremos que poner esta ruta, no funcionara si ponemos otra.
  ### enlace con la ruta por ejemplo http://localhost:5000/api/registro si no la escribimos al pulsar el boton send nos dara un error de que no encuentra esa ruta especifica
  ### Lo que pusimos en nuestra ruta es decir si por ejemplo en register pusimos nombre email y password en body en la parte de x-www-form-urlencoded deberan poner esos datos y como se puso en la ruta de lo contrario nos dara otro error.
  #### ![image](https://user-images.githubusercontent.com/82760991/236861745-936cdd57-1413-46e4-87bb-7f06e84dba49.png)

## Encriptación de contraseña y creando Token
### Ahora Para crear un token primero debemos instalar en nuestro terminal npm i jsonwebtoken, creamos una carpeta del middeleware y importamos el archivo
### Importamos la dependencia para encriptar la contraseña, lo que tenemos que dar al usuario es seguridad y fiabilidad a la hora de registrarse y tener sus datos guardados, se le encripta su contraseña para que no sea verificada por hackers
  #### ![image](https://user-images.githubusercontent.com/82760991/236863612-c7a096a5-fe6d-4d91-811a-e8f42af976ea.png)
 ### Bcrypt es una dependencia que nos ayuda a hashear(hash) / encriptar nuestra contraseña en la base de datos que no sea real, que tape los datos reales.
#### ![image](https://user-images.githubusercontent.com/82760991/236864083-cc8269c7-5121-4740-8f2e-09be5b6fcf44.png)
### declaramos las vueltas que quiero que de mi contraseña, se recomienda que sean 10 ya que es mucho mas seguro
##### ![image](https://user-images.githubusercontent.com/82760991/236864559-b81784c5-9fa4-48ca-8882-79f87b3ab33f.png)
### Por ultimo lo que hacemos es que nuestro usuario cuando acceda a su cuenta, su cuenta expire en ciertos dias en este caso le puse 7 dias
#### ![image](https://user-images.githubusercontent.com/82760991/236864731-1ddeeb82-b933-45ec-9891-497aeccf60b2.png)

# Middelware Auth y AuthAdmin
  ## Ahora crearemos otra carperta llamada middelware donde nos dara informacion del usuario 
  ## 1- Auth -Usuario
  ### importamos la dependencia de jsonwebtoken
 #### ![image](https://user-images.githubusercontent.com/82760991/236869299-d46e3d7e-5dad-43a7-9dcf-d36f9bb9a9f0.png)
  ### req -> request
  ### res -> response
  ### next:() -> el bloque o codigo que lleva escrito antes pasa el control y luego sige su tarea
  ### Linea 5 recogemos del header el token que nos envia el usuario.
  ### Es importante que el token, lo verifiquemos  y decodifiquemos para que nos devuelva informacion del usuario logeado
  ### Linea 13: Coge la contraseña que pongamos en .env para acceder dentro de nuestra contraseña que pongamos en nuestra database ya creada
  ### Linea 20 y 21: Si todo va bien pasa el control al siguiente bloque de codigo
  #### ![Captura 48](https://user-images.githubusercontent.com/82760991/236870177-ca4b0ade-564a-41c1-b035-09bba0ffde37.png)
## 2- AuthAdmin -Admin
  ### Esta función se ejecuta después de ejecutarse la funcion de Auth.js, despues de comprobar que el usuario esta logeado
  ### Linea 3 y 4: Busca al usuario logueado por su id que me viene devuelto en el req.user que me viene devuelto del token
  ### si no me encuentra el usuario me dara un error como que no existe dicho usuario,
  ### Si intentas acceder como usuario a un campo de administrador no te dejara acceder
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
  ### create se encarga de una logica de backend o de base de datos tan solo crea un flujo de construccion de Front-End de manera que lo puedes usar con  cualquier BackEnd.
  
  ## comando para inicar React
  ### npm start: arranca el componente
  ### npm run build: inicio de procucción
  ### npm run test: Inicio de prueba
  ### npm run reject: Elimina la herramienta y hace una copia de dependencias de compilación archivos de configuracion y scripts en el directorio de la aplicacion.(si se pone este comando, ya no podras volver a atras)
  
  ## JSX
  ### Es un lenguaje especial que mezcla HTML5 con JS, Además es como una especie de lenguaje de plantilla que me permite imprimir variables y hacerlo todo de manera mas dinámica y queda bastante limpia.
  ## Estructurando y Diseñando LDT
  ### Empecé creando componentes en varias carpetas
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/da34f3b4-33e3-4201-a321-d00e46ac94fe)
  
  ## App
  ### Es nuestro archivo pricnipal en el que añadiremos  nuestros componentes en mi caso fueron Navbar y Pages
  ### navbar,Pages (Nombre del componente)
  ### from "" componente donde se encuentra el archivo
  ### Componentes deonde esta estructurado mis archivos, Navbar:mi barra de navegacion, Pages:donde estarán enlazados todos mis componentes. (Linea 7 y 8)
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/92e21403-c5de-44b8-97f0-8686a39ddb78)
  
  ## Home
  ### Import enlace del archivo de Css(linea 2)
  ### Link es una etiqueta que sustituye <a/> en HTML5(Linea 3, 14, 17) si pusieramos dicha etiqueta no funcionaria correctamente el enlace, react-router-dom     ### habilita el enrutamiento del lado del cliente(Linea 3).
  ### className es una nueva manera de poner estilos de clase en nuestro Css
  ### Home tanto la función como la exportación se tiene que llamar igual,
  ### de lo contrario no podran enlazarse a otros componentes y nos dará un error (Linea 4 y 26).
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/2ba69c3d-4c20-461a-a6bd-bda5c6769d85)
  
  ## Navbar
  ### SetItem ==> es para definir
  ### getItem ==> coge un valor de una variable
  ### RemoveItem ==> borra una clave o algo en concreto, por ejemplo el logout o eliminamos la cuenta de nuestro usario
  ### role es el archivo que hay en la aplicacion en consola, lo creamos en el modelo user de nuestro Backend, 
  ### localStorage es la aplicaión de nuestra consola (Linea 6).
  ### Creo una condicion en mi vaiable navbar, que cuando acceda al logout en mi cuenta si mi role es 0 entrare como navuser(Usuario)
  ### y si mi role es 1 entraré como navAdmin(Admin)(linea 82).
  ### la variable navbar declaro en la linea 86 con las condiciones que le pusimos en la lineas anteriores.
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
  ### UseState es un Hook que es una función especial que permite "conectarse" a caracteristicas de React.
  ### Permite agregar una variable de estado a nuestro componente
  ### Axios es una biblioteca de cliente Http que le permite realizar solicitudes a un endpoint determinado
  ### Cogemos los datos del BackEnd de nuestra petición Post de Login (Linea 7 a la 10)
  ### Creamos datos para cuando nos logeamos nos envie un mensaje (Linea 11 a la 17)
  ### Aparte de rellenar los datos de mi login, que me verifique los datos en el submit(Linea 18 a la 38)
  ### Llamamos a la petición BackEnd con Axios(Linea 21 a la 23)
  ### Es importante poner aqui la consola en response por que asi obtendremos todos los datos de la ruta o errores para verificar donde esta el fallo(linea 24)
  ### Aqui guardamos toda la informacion del usuario en la memoria del navegador (Linea 26, 27 y 28)
  ### Refrescame el Navegador (Linea 29)
  ### Si no es correcto  los datos que envio enviame un mensaje de error (Linea 33)
  ### Si esta correcto los datos me envias a usuario (Linea 30) y sino me llevas a login (Linea 35)
  ### Cuando accedemos a Login no tendremos ningun mensaje (None), cuando pongamos nuestros datos de email y password si pusimos bien todos los datos
  ### nos enviara un mensaje de "Login Correcto", en caso contrario de que no esten correctos los datos se activará un mensaje que dirá "Algo no funcionó correctamente" (Linea 67 y 78)
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/3a4fadc4-78ee-404f-8ba1-eb78ba623bc4)
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/c93aabe3-57da-4b08-bc9f-61e2609b7a7d)
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/33216632-a590-4bd4-9c64-ea8dfaca3a7e)
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/1863a0a6-a162-4acd-b799-c9a3cdf316ec)
  
## Register
 ### Aqui creamos la seccion de rergister donde cogemos todos los datos de un nuevo usuario, cogemos los datos en useState y sacamos la ruta a través de axios en la ruta post de register que creamos anteriormente
 ### Pondremos tambien mensajes de alerta, si se registro correctamente o no y que me refresque la página.
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/a18061a8-c3f5-40ef-bd4f-85ab6c1ccb8f)
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/35ccd8b6-ea7e-4214-a3f9-8cdd5cc8bee6)
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/b055242b-d08d-4137-89ef-d6e73fd2f527)
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/b14f6103-8773-45ed-b5ad-7b1933705746)
  #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/7f3cc67c-83b6-4005-9615-68a0b355c4d8)
  
 ## User
  ### Una vez nos registremos y accedamos por Login, entraremos a nuestro menú principal
  ### UseEffect es un hook de react que nos permite sincronizar un componente con un sitema externo
  ### ambos metodos funcionan por igual, cogen los datos del BackEnd y lo muestran en FrontEnd (Linea 11 a la 24 y 25 a la 36)
  ### Cogemos la ruta con axios por la autorización(authorization) del token, cogemos los datos en la consola para verificar que funciona correctamente y que elementos vamos a coger, los mostramos con el useState.
  ### Aqui ponermos las diferencias cuando accedes a admin o user, si tu rol es 1 accederas como Admin, si tu rol es 0 accederas como usuario (Linea 41 y 50)
   #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/3ee20df8-2c0f-4810-ad70-5a38b5986c7b)
   #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/16c03b44-1ec7-404c-ba4e-1b6d27c0b0a5)
   #### ![image](https://github.com/Silkaleex/LDT/assets/82760991/1224f886-094d-4934-88b2-39dfc784b08f)

  

  


  


