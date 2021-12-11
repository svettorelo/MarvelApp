# Henry Workshop - React Native

## Overview

En este workshop vamos a crear una aplicación mobile utilizando React Native, para ello usaremos Expo para generar el boilerplate inicial y sobre el modificar lo necesario para elaborar la aplicación que se describirá a continuación.

## Setup Inicial

```bash
  // Instalamos expo-cli
  npm install -g expo-cli

  // Inicializamos un proyecto en este caso llamado MarvelApp
  expo init MarvelApp

  // Podemos ya probar su funcionamiento
  cd MarvelApp
  npm start
```

## Objetivo

La idea del workshop es crear una aplicación sobre Marvel en la cual se incluyan por lo menos las siguientes funcionalidades:

 - Poder mostrar un listado de personajes de Marvel (Incluyendo nombre y foto)
 - Poder filtrar el listado de personajes a partir de un input que ingrese el usuario y devuelva solo los personajes que comiencen con dicha palabra
 - Poder ir al detalle del personaje donde se deben poder seleccionar dos subpantallas:
    * Ver nuevamente el nombre y su foto pero también agregando la descripción 
    * Ver un listado de comics en los cuales aparece dicho personaje
- __EXTRA__: Hacer que el listado de personajes sea un scroll "infinito" que vaya cargando más personajes a medida que llegué al final de la lista
- __EXTRA__: Poder agregar/quitar personajes a una lista de favoritos
