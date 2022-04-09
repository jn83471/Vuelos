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
>>><pre>{
    "correo":"Email",
    "password":"Contraseña"
    }</pre>
2. Roles
>Roles de usuario
>
>>Metodo: POST Ruta:/api/roles
>>
>>><pre>{
    "displayname":"Nombre ",
    "key":"Llave de identificación",
    "level": 1 **Nota:Nivel(1:Admin, 2:Empleados, 3:Clientes) Se tiene pensado agregar más para datos fiscales o casos de mejora**
}</pre>
3. Puestos
>Puestos de trabajo
>
>>Metodo: Post Ruta: /api/job/create
>>
>>><pre>{
    "name":"Jefe de Mantenimientoa",
    "controlUsuarios":false, **Control sobre usuarios "incluye clientes"**
    "controlClientes":false, **Control sobre clientes**
    "controlBoletos":false, **Control sobre tikets**
    "viajesCorporativos":true, **Si el empleado puede realizar viajes corporativos esta pensado para azapatas**
    "EstatusAviones":1, **Modificar el estado del avion a en reparación o en vuelo**
    "Estatus":1 **Si se encuentra activo**
}</pre>
>>Metodo: Get Ruta: /api/job
>>
>>>Headers: x-token:"Token de acceso"

### Futuras mejoras

