console.log(data);

function cargarSedes(){
    var arraySedes = [];

    for( sedes in data){
        arraySedes.push(sedes);
    }

    arraySedes.sort();
    var optionSedes = document.getElementById("sedes");

    for(i=0;i<arraySedes.length;i++){
        var option = document.createElement("option");
        option.innerHTML = arraySedes[i];
        optionSedes.appendChild(option);
    }

}
cargarSedes();
/*var estudiantes = data.LIMA["2016-2"].students;
console.log(estudiantes);

var activos = 0;
var inactivos = 0;

for( i=0; i < estudiantes.length; i++){
    if (estudiantes[i].active === true){
        activos++
    }else{
        inactivos++
    }
}

var total = activos + inactivos;

console.log(total+"total");
console.log(activos+"activos");
console.log(inactivos+"inactivos");*/

/*var arraySedes = [];

for( sedes in data){
    arraySedes.push(sedes);
}

console.log(arraySedes);*/