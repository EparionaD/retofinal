console.log(data);

var estudiantes = data.LIMA["2016-2"].students;
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
console.log(inactivos+"inactivos");
