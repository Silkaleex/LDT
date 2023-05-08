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
###### ![image](https://user-images.githubusercontent.com/82760991/236811895-21864365-d9c2-48da-9a4b-880f5865816b.png)
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

##Modelos y Rutas
####Ahora crearé dos carpetas Models(modelos) y routes(rutas)
En mi proyecto creare 5 nuevos archivos que son calendario,notes,user,planificador,alarma con la extensión .js
En user.js exporto objetos a mi base de datos con mongoose, aqui lo que hago es crear los datos de un usuario es decir su nombre, apellidos... de tipo String y que sea obligatorio(required)
##### ![image](https://user-images.githubusercontent.com/82760991/236814322-b773ce6b-81e8-4696-b1a5-9c79242e3564.png)
### En la linea 21 y 27 hago una relación de modelos que voy a usar en otros archivos.
###### ![image](https://user-images.githubusercontent.com/82760991/236814440-8562dfbb-b345-4233-b47b-8cdcda1ae6a1.png)
### Hay más codigo debajo pero aquí os muestro lo importante 
###### ![image](https://user-images.githubusercontent.com/82760991/236814461-6357370d-610e-4c10-8980-022074cb35a2.png)
### Ponemos las marcas de tiempo verdaderas(timestamp)
Exportamos el modulo a mongoose en nuestra archivos de rutas donde vamos a crear también otros 5 archivos que seran calendarioRouter,planificadorRouter,alarmaRouter NotesRouter y userRouter también con la extensión de js.
En los archivos Router pondremos estos comandos para conectar con express y los datos que creamos en nuestros modelos y conectarlos a estos
##### ![image](https://user-images.githubusercontent.com/82760991/236815124-78775ea3-9aa8-4b1d-8f60-61b036a4f494.png)

