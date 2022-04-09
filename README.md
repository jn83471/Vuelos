## Vuelos

### Modulos
1. Auth
2. Roles
3. Puestos
4. Usuarios(Administrador, Empleado "Restricciones de acuerdo a puestos" , Cliente)
5. Aviones
6. Vuelos
7. Boletos
8. Equipaje

### Comandos
>Código de sedders (Limpia los datos del usuario e inserta datos de prueba)
>
>>npm run reset

>Código de inicio (Monta el servidor)
>
>>npm start

### Apis
1.Auth
>Autentificaion
>
>>Metodo: Post Ruta:/
>>
>>>
```json
{
    "correo":"Email",
    "password":"Contraseña"
}
```

2. Roles
>Roles de usuario
>
>>Metodo: POST Ruta:/api/roles Función:Autentificar
>>
>>>Headers: x-token:"Token de acceso"
```json
{
    "displayname":"Nombre ",
    "key":"Llave de identificación",
    "level": 1 **Nota:Nivel(1:Admin, 2:Empleados, 3:Clientes) Se tiene pensado agregar más para datos fiscales o casos de mejora**
}
```

3. Puestos
>Puestos de trabajo
>
>>Metodo: Post Ruta: /api/job/create Función:Crear
>>
>>>Headers: x-token:"Token de acceso"
```json
{
    "name":"Jefe de Mantenimientoa",
    "controlUsuarios":false, **Control sobre usuarios "incluye clientes" Opcional**
    "controlClientes":false, **Control sobre clientes Opcional**
    "controlBoletos":false, **Control sobre tikets Opcional**
    "viajesCorporativos":true, **Si el empleado puede realizar viajes corporativos esta pensado para azapatas Opcional**
    "EstatusAviones":true, **Modificar el estado del avion a en reparación o en vuelo Opcional**
    "Estatus":1 **Si se encuentra activo**
}
```
>>Metodo: Get Ruta: /api/job Función:Buscar todos
>>
>>>Headers: x-token:"Token de acceso"

>>Metodo: Get Ruta: /api/job/:Nombre Función: Buscar algunos filtrandolo por nombre
>>>Headers: x-token:"Token de acceso"

>>Metodo: Delete Ruta: /api/job/:id Función: Cambiar el estatus a desactivado
>>>Headers: x-token:"Token de acceso"

>>Metodo: Put Ruta: /api/job/:id Función: Modificar un elemento ya existente
>>>Headers: x-token:"Token de acceso"
```json
{
    "name":"Jefe de Mantenimientoa",
    "controlUsuarios":false, **Control sobre usuarios "incluye clientes" Opcional**
    "controlClientes":false, **Control sobre clientes Opcional**
    "controlBoletos":false, **Control sobre tikets Opcional**
    "viajesCorporativos":true, **Si el empleado puede realizar viajes corporativos esta pensado para azapatas Opcional**
    "EstatusAviones":true, **Modificar el estado del avion a en reparación o en vuelo Opcional**
    "Estatus":1 **Si se encuentra activo Opcional**
}
```
4. Usuarios
>Puestos de trabajo
>
>>Metodo: Post Ruta: /api/usuarios/create Función:Crear
>>
>>>Headers: x-token:"Token de acceso"
```json
{
    "nombre":"Nombre",
    "apellidoPaterno":"Apellido paterno",
    "apellidoMaterno":"Apellido materno",
    "correo":"Email",
    "password":"Contraseña",
    "rol":"Llave del rol",
    "puesto":"idPuesto" **Llenar puesto si este es empleado**
}
```
>>Metodo: Get Ruta: /api/usuarios Función:Buscar todos
>>
>>>Headers: x-token:"Token de acceso"

>>Metodo: Get Ruta: /api/usuarios/:Nombre Función: Buscar algunos filtrandolo por email
>>>Headers: x-token:"Token de acceso"

>>Metodo: Delete Ruta: /api/job/:id Función: Cambiar el estatus a desactivado
>>>Headers: x-token:"Token de acceso"

>>Metodo: Put Ruta: /api/job/:id Función: Modificar un elemento ya existente
>>>Headers: x-token:"Token de acceso"
```json
{
    "nombre":"Nombre",
    "apellidoPaterno":"Apellido paterno",
    "apellidoMaterno":"Apellido materno",
    "correo":"Email",
    "password":"Contraseña",
    "rol":"Llave del rol",
    "puesto":"idPuesto" **Llenar puesto si este es empleado**
}
```
5. Aviones
>Puestos de trabajo
>
>>Metodo: Post Ruta: /api/planes/create Función:Crear
>>
>>>Headers: x-token:"Token de acceso"
```json
{
    "matricula": "Matricula",
    "nombre":"Nombre de avion se refiere a la manera a manera de filtro",
    "modelo":"Modelo",
    "capacidadMaxima": 200,
    "Estatus": 0 **Estatus del avion 0. Disponible 1. En vuelo 2. No disponible**
}
```
>>Metodo: Get Ruta: /api/planes Función:Buscar todos
>>
>>>Headers: x-token:"Token de acceso"

>>Metodo: Get Ruta: /api/planes/:Nombre Función: Buscar algunos filtrandolo por nombre
>>>Headers: x-token:"Token de acceso"

>>Metodo: Delete Ruta: /api/planes/:id Función: Cambiar el estatus a desactivado
>>>Headers: x-token:"Token de acceso"

>>Metodo: Put Ruta: /api/planes/:id Función: Modificar un elemento ya existente
>>>Headers: x-token:"Token de acceso"
```json
{
    "matricula": "Matricula",
    "nombre":"Nombre de avion se refiere a la manera a manera de filtro",
    "modelo":"Modelo",
    "capacidadMaxima": 200,
    "Estatus": 0 **Estatus del avion 0. Disponible 1. En vuelo 2. No disponible**
}
```
6. Vuelos
>Puestos de trabajo
>
>>Metodo: Post Ruta: /api/flights/create Función:Crear
>>
>>>Headers: x-token:"Token de acceso"
```json
{
    "avionId": "Id avion",
    "localizacion":"Localizacion",
    "estado":"Estado",
    "municiopio":"Muncipio",
    "dia":"Fecha y hora de inicio de vuelo",
    "diafinal":"Fecha y hora aproximado del final de vuelo",
    "status": 1 **Estatus del vuelo 0. Disponible 1. En vuelo 2. No disponible**
}
```
>>Metodo: Get Ruta: /api/flights Función:Buscar todos
>>
>>>Headers: x-token:"Token de acceso"

>>Metodo: Get Ruta: /api/flights/:Nombre Función: Buscar algunos filtrandolo por nombre
>>>Headers: x-token:"Token de acceso"

>>Metodo: Delete Ruta: /api/flights/:id Función: Cambiar el estatus a desactivado
>>>Headers: x-token:"Token de acceso"

>>Metodo: Put Ruta: /api/flights/:id Función: Modificar un elemento ya existente
>>>Headers: x-token:"Token de acceso"
```json
{
    "avionId": "Id avion",
    "localizacion":"Localización geografica",
    "estado":"Estado",
    "municiopio":"Municipio",
    "dia":"Fecha y hora de inicio de vuelo",
    "diafinal":"Fecha y hora aproximado del final de vuelo",
    "status": 1
}
```
7. Boletos
>Puestos de trabajo
>
>>Metodo: Post Ruta: /api/ticket/create Función:Crear
>>
>>>Headers: x-token:"Token de acceso"
opcion 1:
```json
{
    "vuelo":"Id avion", 
    "nombre":"nombre", 
    "apellidoPaterno":"apellido paterno", 
    "apellidoMaterno":"apellido materno", 
    "correo":"correo",
    "Asiento":"asioneto"
}
```
Opcion 2:
```json
{
    "vuelo":"Id avion", **Id del avion** 
    "cliente":"Id usuario", **Id cliente**
    "Asiento":"asionto"
}
```
>>Metodo: Get Ruta: /api/ticket Función:Buscar todos
>>
>>>Headers: x-token:"Token de acceso"

>>Metodo: Get Ruta: /api/ticket/:Nombre Función: Buscar algunos filtrandolo por nombre
>>>Headers: x-token:"Token de acceso"

>>Metodo: Delete Ruta: /api/ticket/:id Función: Cambiar el estatus a desactivado
>>>Headers: x-token:"Token de acceso"

>>Metodo: Put Ruta: /api/ticket/:id Función: Modificar un elemento ya existente
>>>Headers: x-token:"Token de acceso"
opcion 1:
```json
{
    "vuelo":"Id avion", 
    "nombre":"nombre", 
    "apellidoPaterno":"apellido paterno", 
    "apellidoMaterno":"apellido materno", 
    "correo":"correo",
    "Asiento":"asioneto"
}
```
Opcion 2:
```json
{
    "vuelo":"Id avion", **Id del avion** 
    "cliente":"Id usuario", **Id cliente**
    "Asiento":"asionto"
}
```
8. Equipaje
>Puestos de trabajo
>
>>Metodo: Post Ruta: /api/bagagge/create Función:Crear
>>
>>>Headers: x-token:"Token de acceso"
```json
{
    "boleto":"Id ticket",
    "producto":"Nombre de producto",
    "altura":"altura", **Opcional**
    "peso":"peso", **Opcional**
    "estatus":0
}
```


### Futuras mejoras

