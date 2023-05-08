# Aplicación LDT

### Esta aplicación sirve para desarrollar ideas que necesitemos en nuestro dia a dia,
### En la que podremos añadir eventos,Notas o ciertos momentos importante en los que recordar,
### Además podremos añadir una alarma para que nos envie un correo para que nos avise sobre la hora y fecha exacta de algo puntual que nos quiera avisar.
### Un Planificador donde podremos destacar algo importante o que necesitemos mejorar, destacar en un mes dia o un tiempo establecido. 

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
### Ponemos las marcas de tiempo verdaderas(timestamp), me dira cuando un usuario se a creadi una cuenta,actualiza datos....
Exportamos el modulo a mongoose en nuestra archivos de rutas donde vamos a crear también otros 5 archivos que seran calendarioRouter,planificadorRouter,alarmaRouter NotesRouter y userRouter también con la extensión de js.
### 2-Rutas
En los archivos Router pondremos estos comandos para conectar con express y los datos que creamos en nuestros modelos y conectarlos a estos
##### ![image](https://user-images.githubusercontent.com/82760991/236815124-78775ea3-9aa8-4b1d-8f60-61b036a4f494.png)
#### UserRouter nombre del archivo
#### user nombre del modelo y su ruta donde se encuentra nuestro archivo
  
## Ruta Post de Register
### Linea 24 Name, Email, Password son datos creados en el modelo user,vistos anteriormente
### Linea 26 Comprobación de que no se repitan usuarios con un musmo nombre o apellidos a traves de findOne(Encuentrame)
### Después en la linea 30 pusimos un mensaje de que un usuario ya estaba registrado, asi avisamos al usuario de que ya se registro.
##Luego puse otra condicion que si no cumplia todas las casillas de registro (Linea 36) y que si no tenia un mínimo de 3 caracteres (Linea 42), le saldría un error de que no completo todos los requisitos
##Y por finalizar esta ruta luego si hicimos todo correctamente nos enviará un mensaje de usuario encontrado, o nos saldrá un error en caso de que haya algun fallo en la aplicación.
#### ![image](https://user-images.githubusercontent.com/82760991/236846471-061feb17-788e-4ace-8802-1d2c80487f91.png)
#### ![image](https://user-images.githubusercontent.com/82760991/236848537-8d229429-43a7-43d2-9d43-f9b2ecda04c3.png)
#### ![image](https://user-images.githubusercontent.com/82760991/236848595-693555fa-7c81-43f0-acc0-e779bc945ea9.png)

  ## Peticion Post
### Pasamos por el body los datos que quiero o que necesita el usuario para logearse en mi caso puse el email y el password
###busco al usuario en nuestra base de datos con el email y password que me llega del body si no es correcto me saldra un mensaje de que algo no funciono correctamente, si lo encuentra me dira Login Correcto(captura no Hecha)
cuantas menos explicaciones demos mejor por que así les damos mas dificultad a los hackers para poder acceder o verificar cual es el fallo y que puedan acceder con facilidad y vulnerar nuestros datos.
y en caso de que los datos que pongamos no sean correctos pues nos dara un error
#### ![image](https://user-images.githubusercontent.com/82760991/236852071-de98946b-0301-4dd5-a115-9b77f4eb3bc4.png)
#### ![image](https://user-images.githubusercontent.com/82760991/236852121-2dd82f5b-82fa-4d20-89a0-825a6dcfb380.png)

  ## Petición GET
### Después de crear una ruta de Login, lo que hago es una petición GET en la que verificamos todos los datos de ese usuario que notas a escrito, como por ejemplo una lista de la compra, un evento que se va a desarrollar en un dia, un aviso de la alarma que nos avise por correo el dia y la hora exactas, etc.
#### ![image](https://user-images.githubusercontent.com/82760991/236854558-180950ed-ade9-445d-a992-15591f6e1a27.png)

  ## Peticion Delete
### También tendremos una petición DELETE en caso de que el usuario ya no necesite la aplicación se elimine su cuenta
### Cuando nos logeamos nos da un token para poder eliminar nuestros datos de usuario.
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
### Por ultimo para que POSTMAN, MONGODB y NODEMON nos lean los datos creados deberemos exportarlos al archivo que creamos al principio es decir nuestro server.js
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
## Creando un Administrador & Usuario
  ### Lo primero de todo lo que hay que hacer es en user.js es poner role type NUMBER y que los usuarios que se registren por defecto serán 0 y los administradores serán 1
  #### ![image](https://user-images.githubusercontent.com/82760991/236867021-b6f190e2-b780-4ce4-9440-481d55939ed0.png)
### Ahora para hacerlos administradores una vez registrados tenemos que acceder a mongoDb buscar el lapiz escribir en role y ponerle 1 después actualizarlo, se guardara y se quedará registrado como administrador
  #### ![image](https://user-images.githubusercontent.com/82760991/236867124-2eed189b-fd11-4345-8915-9547e36d9ac5.png)

  
