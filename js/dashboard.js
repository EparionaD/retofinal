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

    var etiqueta = document.getElementById("sedes");


    etiqueta.addEventListener("change", (event)=>{
        //Borrar los elementos duplicados
        var contenedor = document.querySelector("#selector");
        var borrar = contenedor.querySelectorAll("select");
        for(i=0;i<borrar.length;i++){
            var borrado = borrar[i];
            borrado.parentNode.removeChild(borrado);
        }

        var valorEtiqueta = document.getElementById("sedes").options.selectedIndex;
        if(valorEtiqueta === 0){

            var arrayPromociones = [];
            var nombreEtiqueta = document.getElementById("sedes").options[valorEtiqueta].text;
            for(promo in data[nombreEtiqueta]){
                arrayPromociones.push(promo);
            }

            var optionPromocion = document.getElementById("anclaje");
            var ubicacion = optionPromocion.closest(".selectores");
            var select = document.createElement("select");
            select.setAttribute("id", "promocion1");
            ubicacion.insertBefore(select, optionPromocion);

            for(i=0;i<arrayPromociones.length;i++){
                var option = document.createElement("option");
                option.innerHTML = arrayPromociones[i];
                select.appendChild(option);
            }
            //Agregando evento
            var etiqueta1 = document.getElementById("promocion1");
            etiqueta1.addEventListener("change", (event1)=>{
                //Borra los elementos duplicados
                var contenedor1 = document.querySelector("#alumnos");
                var borrar1 = contenedor1.querySelectorAll("p");
                for(i=0;i<borrar1.length;i++){
                    var borrado1 = borrar1[i];
                    borrado1.parentNode.removeChild(borrado1);
                }

                var valorPromocion = document.getElementById("promocion1").options.selectedIndex;
                var nombrePromocion = document.getElementById("promocion1").options[valorPromocion].text;

                var datosSedes = data[nombreEtiqueta][nombrePromocion];
                //Ejercicio1

                var estudiantes = datosSedes.students;
                var activos = 0;
                var inactivos = 0;

                for(i=0;i<estudiantes.length;i++){
                    if(estudiantes[i].active === true){
                        activos++
                    }else{
                        inactivos++
                    }
                }
                var total = activos+inactivos;
                x = (inactivos*100)/total;
                var porcentajeInactivos = Math.round(x);

                var divActivos = document.createElement("p");
                var contenido = document.createTextNode(activos);
                divActivos.appendChild(contenido);

                var divInactivos = document.createElement("p");
                var contenidoI = document.createTextNode(porcentajeInactivos+"%");
                divInactivos.appendChild(contenidoI);

                var alumnos = document.getElementById("alumnos");
                alumnos.appendChild(divActivos);
                alumnos.appendChild(divInactivos);

            });
            //console.log(arrayPromociones);
        }else if(valorEtiqueta === 1){

            var arrayPromociones1 = [];
            var nombreEtiqueta = document.getElementById("sedes").options[valorEtiqueta].text;
            for(promo in data[nombreEtiqueta]){
                arrayPromociones1.push(promo);
            }

            var optionPromocion = document.getElementById("anclaje");
            var ubicacion = optionPromocion.closest(".selectores");
            var select1 = document.createElement("select");
            select1.setAttribute("id", "promocion2");
            ubicacion.insertBefore(select1, optionPromocion);

            for(i=0;i<arrayPromociones1.length;i++){
                var option1 = document.createElement("option");
                option1.innerHTML = arrayPromociones1[i];
                select1.appendChild(option1);
            }
            //Agregando evento
            var etiqueta1 = document.getElementById("promocion2");
            etiqueta1.addEventListener("change", (event1)=>{
                //Borra los elementos duplicados
                var contenedor1 = document.querySelector("#alumnos");
                var borrar1 = contenedor1.querySelectorAll("p");
                for(i=0;i<borrar1.length;i++){
                    var borrado1 = borrar1[i];
                    borrado1.parentNode.removeChild(borrado1);
                }

                var valorPromocion = document.getElementById("promocion2").options.selectedIndex;
                var nombrePromocion = document.getElementById("promocion2").options[valorPromocion].text;

                var datosSedes = data[nombreEtiqueta][nombrePromocion];
                //Ejercicio1

                var estudiantes = datosSedes.students;
                var activos = 0;
                var inactivos = 0;

                for(i=0;i<estudiantes.length;i++){
                    if(estudiantes[i].active === true){
                        activos++
                    }else{
                        inactivos++
                    }
                }
                var total = activos+inactivos;
                x = (inactivos*100)/total;
                var porcentajeInactivos = Math.round(x);

                var divActivos = document.createElement("p");
                var contenido = document.createTextNode(activos);
                divActivos.appendChild(contenido);

                var divInactivos = document.createElement("p");
                var contenidoI = document.createTextNode(porcentajeInactivos+"%");
                divInactivos.appendChild(contenidoI);

                var alumnos = document.getElementById("alumnos");
                alumnos.appendChild(divActivos);
                alumnos.appendChild(divInactivos);

            });
            console.log(arrayPromociones1);
        }else if(valorEtiqueta === 2){

            var arrayPromociones2 = [];
            var nombreEtiqueta = document.getElementById("sedes").options[valorEtiqueta].text;
            for(promo in data[nombreEtiqueta]){
                arrayPromociones2.push(promo);
            }

            var optionPromocion = document.getElementById("anclaje");
            var ubicacion = optionPromocion.closest(".selectores");
            var select2 = document.createElement("select");
            select2.setAttribute("id", "promocion3");
            ubicacion.insertBefore(select2, optionPromocion);

            for(i=0;i<arrayPromociones2.length;i++){
                var option2 = document.createElement("option");
                option2.innerHTML = arrayPromociones2[i];
                select2.appendChild(option2);
            }
            //Agregando evento
            var etiqueta1 = document.getElementById("promocion3");
            etiqueta1.addEventListener("change", (event1)=>{
                //Borra los elementos duplicados
                var contenedor1 = document.querySelector("#alumnos");
                var borrar1 = contenedor1.querySelectorAll("p");
                for(i=0;i<borrar1.length;i++){
                    var borrado1 = borrar1[i];
                    borrado1.parentNode.removeChild(borrado1);
                }

                var valorPromocion = document.getElementById("promocion3").options.selectedIndex;
                var nombrePromocion = document.getElementById("promocion3").options[valorPromocion].text;

                var datosSedes = data[nombreEtiqueta][nombrePromocion];
                //Ejercicio1

                var estudiantes = datosSedes.students;
                var activos = 0;
                var inactivos = 0;

                for(i=0;i<estudiantes.length;i++){
                    if(estudiantes[i].active === true){
                        activos++
                    }else{
                        inactivos++
                    }
                }
                var total = activos+inactivos;
                x = (inactivos*100)/total;
                var porcentajeInactivos = Math.round(x);

                var divActivos = document.createElement("p");
                var contenido = document.createTextNode(activos);
                divActivos.appendChild(contenido);

                var divInactivos = document.createElement("p");
                var contenidoI = document.createTextNode(porcentajeInactivos+"%");
                divInactivos.appendChild(contenidoI);

                var alumnos = document.getElementById("alumnos");
                alumnos.appendChild(divActivos);
                alumnos.appendChild(divInactivos);

            });
            console.log(arrayPromociones2);
        }else if(valorEtiqueta === 3){

            var arrayPromociones3 = [];
            var nombreEtiqueta = document.getElementById("sedes").options[valorEtiqueta].text;
            for(promo in data[nombreEtiqueta]){
                arrayPromociones3.push(promo);
            }

            var optionPromocion = document.getElementById("anclaje");
            var ubicacion = optionPromocion.closest(".selectores");
            var select3 = document.createElement("select");
            select3.setAttribute("id", "promocion4");
            ubicacion.insertBefore(select3, optionPromocion);

            for(i=0;i<arrayPromociones3.length;i++){
                var option3 = document.createElement("option");
                option3.innerHTML = arrayPromociones3[i];
                select3.appendChild(option3);
            }
            //Agregando evento
            var etiqueta1 = document.getElementById("promocion4");
            etiqueta1.addEventListener("change", (event1)=>{
                //Borra los elementos duplicados
                var contenedor1 = document.querySelector("#alumnos");
                var borrar1 = contenedor1.querySelectorAll("p");
                for(i=0;i<borrar1.length;i++){
                    var borrado1 = borrar1[i];
                    borrado1.parentNode.removeChild(borrado1);
                }

                var valorPromocion = document.getElementById("promocion4").options.selectedIndex;
                var nombrePromocion = document.getElementById("promocion4").options[valorPromocion].text;

                var datosSedes = data[nombreEtiqueta][nombrePromocion];
                //Ejercicio1

                var estudiantes = datosSedes.students;
                var activos = 0;
                var inactivos = 0;

                for(i=0;i<estudiantes.length;i++){
                    if(estudiantes[i].active === true){
                        activos++
                    }else{
                        inactivos++
                    }
                }
                var total = activos+inactivos;
                x = (inactivos*100)/total;
                var porcentajeInactivos = Math.round(x);

                var divActivos = document.createElement("p");
                var contenido = document.createTextNode(activos);
                divActivos.appendChild(contenido);

                var divInactivos = document.createElement("p");
                var contenidoI = document.createTextNode(porcentajeInactivos+"%");
                divInactivos.appendChild(contenidoI);

                var alumnos = document.getElementById("alumnos");
                alumnos.appendChild(divActivos);
                alumnos.appendChild(divInactivos);

            });
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


/*var estudiantes = data.AREQUIPA["2017-1"].students;
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