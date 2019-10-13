console.log(data);

function cargarLista(){
    //Cargando Sedes
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

    //Cargando Promociones
    var arrayPromociones = [];

    var etiqueta = document.getElementById("sedes");
    //var nombreEtiqueta = document.getElementById("sedes").options[valorEtiqueta].text;


    etiqueta.addEventListener("change", (event)=>{
        var valorEtiqueta = document.getElementById("sedes").options.selectedIndex;
        if(valorEtiqueta === 0){
            var arrayPromociones = [];
            var nombreEtiqueta = document.getElementById("sedes").options[valorEtiqueta].text;
            for(promo in data[nombreEtiqueta]){
                arrayPromociones.push(promo);
            }
            console.log(arrayPromociones);
        }else if(valorEtiqueta === 1){
            var arrayPromociones1 = [];
            var nombreEtiqueta = document.getElementById("sedes").options[valorEtiqueta].text;
            for(promo in data[nombreEtiqueta]){
                arrayPromociones1.push(promo);
            }
            console.log(arrayPromociones1);
        }else if(valorEtiqueta === 2){
            var arrayPromociones2 = [];
            var nombreEtiqueta = document.getElementById("sedes").options[valorEtiqueta].text;
            for(promo in data[nombreEtiqueta]){
                arrayPromociones2.push(promo);
            }
            console.log(arrayPromociones2);
        }else if(valorEtiqueta === 3){
            var arrayPromociones3 = [];
            var nombreEtiqueta = document.getElementById("sedes").options[valorEtiqueta].text;
            for(promo in data[nombreEtiqueta]){
                arrayPromociones3.push(promo);
            }
            console.log(arrayPromociones3);
        }
    });

}
cargarLista();

/*var etiqueta = document.getElementById("sedes");
var valorEtiqueta = document.getElementById("sedes").options.selectedIndex;
var nombreEtiqueta = document.getElementById("sedes").options[valorEtiqueta].text;

var prueba = data.LIMA;
console.log(prueba);
for( datos in prueba){
    console.log(datos);
}*/


/*etiqueta.addEventListener("change", (event)=>{
    var otra = document.getElementById("prueba1");
    var valorEtiqueta = document.getElementById("sedes").options.selectedIndex;
    if(valorEtiqueta === 0){
        otra.textContent = "paso";
    }else{
        otra.textContent = "No paso";
    }
});*/


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