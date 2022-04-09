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
5. Aviones
6. Vuelos
7. Boletos
8. Equipaje


### Futuras mejoras

