# Objetivo de este capitulo

- Sera crear una aplicacion de consola o terminal (linux)


## Documentacion de la version que estamos usando de node
- [Documentacion Nodejs](https://nodejs.org/dist/latest-v10.x/docs/api/)


## Objetivos


- Entender npm
- Aprender como controlar los packages para nuestras aplicaciones 
- Usar file system
- 


## Npm Comandos

- Para crear un paquete JSON: usaremos el comando **npm init** y nos despliega una serie de preguntas para la descripcion del proyecto
- Para instalar un paquete: npm i **nombre-del-paquete** --save . Nos permite instalar un paquete en el **package JSON** que creamos previamente(algo asi como ambientes en python por eso no instalamos como global).
- Para instalar un paquete especificamente para el desarrollo: npm i --save-dev **nombre-del-paquete**
- Para desinstalar : npm uninstall **nombre-del-paquete**
- Un paquete para cambiar el color de la letras que se muestren por consola seria **colors**.