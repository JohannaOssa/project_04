// función para recorrer y mostrar lista de personas
function listarPersonas() {
var personas = [{nombre:'Carlos', apellido: 'Ruiz'},{nombre: 'María', apellido: 'Perez'}]
var table = document.getElementById('people-table')
for(var i = 0; i < personas.length; i++) {
var row = table.insertRow(0)
var cell0 = row.insertCell(0)
var cell1 = row.insertCell(1)

cell0.innerHTML=personas[i].nombre
cell1.innerHTML=personas[i].apellido
}
};

function calcularraiz(){
var numero= prompt ("Por favor ingrese un número")
if (/^[1-9]\d$/.test(numero) ){
resultado=Math.sqrt(numero)
  window.alert ("La raíz cuadrada de " + (numero) + " es " + (resultado))
}else if (numero==undefined){
 window.alert("Gracias")
}else if (/^[a-z][a-z]*/.test (numero)) {
window.alert("Por favor ingrese un valor numérico")
calcularraiz()
}
};
function Eliminar (i) {
    document.getElementsByTagName("table")[0].setAttribute("id","tableid");
    document.getElementById("tableid").deleteRow(i);
}
