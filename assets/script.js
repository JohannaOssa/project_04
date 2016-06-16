// función para recorrer y mostrar lista de personas
var people = [{nombre: ‘Carlos’, apellido: ‘Ruiz’},
{nombre: ‘María’, apellido: ‘Perez’}]

function listarPersonas(personas) {
var table = document.getElementById(‘people-table’)
for(var i = 0; i < personas.length; i++) {
var row = table.insertRow(0)
var cell0 = row.insertCell(0)
var cell1 = row.insertCell(1)
cell0.innerHTML(personas[i].nombre)
cell1.innerHTML(personas[i].apellido)
}
};
