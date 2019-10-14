console.log(data);

var prueba = data.LIMA["2017-1"].ratings;
//console.log(prueba);

var suma = 0;
for(i=0;i<prueba.length;i++){
    var superar = prueba[i].student.supera;
    console.log(superar);
    suma += superar;

}
console.log(suma);

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
                //Borra los elementos duplicados 1
                var contenedor1 = document.querySelector("#alumnos");
                var borrar1 = contenedor1.querySelectorAll("p");
                for(i=0;i<borrar1.length;i++){
                    var borrado1 = borrar1[i];
                    borrado1.parentNode.removeChild(borrado1);
                }
                //Borra los elementos duplicados 8
                var contenedor2 = document.querySelector("#profesores");
                var borrar2 = contenedor2.querySelectorAll("p");
                for(i=0;i<borrar2.length;i++){
                    var borrado2 = borrar2[i];
                    borrado2.parentNode.removeChild(borrado2);
                }
                //Borra los elementos duplicados 9
                var contenedor3 = document.querySelector("#jedi");
                var borrar3 = contenedor3.querySelectorAll("p");
                for(i=0;i<borrar3.length;i++){
                    var borrado3 = borrar3[i];
                    borrado3.parentNode.removeChild(borrado3);
                }

                var valorPromocion = document.getElementById("promocion1").options.selectedIndex;
                var nombrePromocion = document.getElementById("promocion1").options[valorPromocion].text;

                var datosSedes = data[nombreEtiqueta][nombrePromocion];
                //Ejercicio1 y 2

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

                //Ejercicio 8 y 9

                var profesores = datosSedes.ratings;
                var total = 0;
                var totalj = 0;
                for(i=0;i<profesores.length;i++){
                    total += profesores[i].teacher;
                    totalj += profesores[i].jedi;
                }
                var promedioProfesores = (total/profesores.length).toFixed(2);
                var promedioJedi = (totalj/profesores.length).toFixed(2);

                //Agregando contenido a div profesores
                var divProfesores = document.createElement("p");
                var contenidoP = document.createTextNode(promedioProfesores);
                divProfesores.appendChild(contenidoP);

                var dprofesores = document.getElementById("profesores");
                dprofesores.appendChild(divProfesores);

                //Agregando contenido a div jedi
                var divJedi = document.createElement("p");
                var contenidoJ = document.createTextNode(promedioJedi);
                divJedi.appendChild(contenidoJ);

                var djedi = document.getElementById("jedi");
                djedi.appendChild(divJedi);


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
                //Borra los elementos duplicados 8
                var contenedor2 = document.querySelector("#profesores");
                var borrar2 = contenedor2.querySelectorAll("p");
                for(i=0;i<borrar2.length;i++){
                    var borrado2 = borrar2[i];
                    borrado2.parentNode.removeChild(borrado2);
                }
                //Borra los elementos duplicados 9
                var contenedor3 = document.querySelector("#jedi");
                var borrar3 = contenedor3.querySelectorAll("p");
                for(i=0;i<borrar3.length;i++){
                    var borrado3 = borrar3[i];
                    borrado3.parentNode.removeChild(borrado3);
                }

                var valorPromocion = document.getElementById("promocion2").options.selectedIndex;
                var nombrePromocion = document.getElementById("promocion2").options[valorPromocion].text;

                var datosSedes = data[nombreEtiqueta][nombrePromocion];
                //Ejercicio1 y 2

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

                //Ejercicio 8 y 9

                var profesores = datosSedes.ratings;
                var total = 0;
                var totalj = 0;
                for(i=0;i<profesores.length;i++){
                    total += profesores[i].teacher;
                    totalj += profesores[i].jedi;
                }
                var promedioProfesores = (total/profesores.length).toFixed(2);
                var promedioJedi = (totalj/profesores.length).toFixed(2);

                //Agregando contenido a div profesores
                var divProfesores = document.createElement("p");
                var contenidoP = document.createTextNode(promedioProfesores);
                divProfesores.appendChild(contenidoP);

                var dprofesores = document.getElementById("profesores");
                dprofesores.appendChild(divProfesores);

                //Agregando contenido a div jedi
                var divJedi = document.createElement("p");
                var contenidoJ = document.createTextNode(promedioJedi);
                divJedi.appendChild(contenidoJ);

                var djedi = document.getElementById("jedi");
                djedi.appendChild(divJedi);

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
                //Borra los elementos duplicados 8
                var contenedor2 = document.querySelector("#profesores");
                var borrar2 = contenedor2.querySelectorAll("p");
                for(i=0;i<borrar2.length;i++){
                    var borrado2 = borrar2[i];
                    borrado2.parentNode.removeChild(borrado2);
                }
                //Borra los elementos duplicados 9
                var contenedor3 = document.querySelector("#jedi");
                var borrar3 = contenedor3.querySelectorAll("p");
                for(i=0;i<borrar3.length;i++){
                    var borrado3 = borrar3[i];
                    borrado3.parentNode.removeChild(borrado3);
                }

                var valorPromocion = document.getElementById("promocion3").options.selectedIndex;
                var nombrePromocion = document.getElementById("promocion3").options[valorPromocion].text;

                var datosSedes = data[nombreEtiqueta][nombrePromocion];
                //Ejercicio1 y 2

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

                //Ejercicio 8 y 9

                var profesores = datosSedes.ratings;
                var total = 0;
                var totalj = 0;
                for(i=0;i<profesores.length;i++){
                    total += profesores[i].teacher;
                    totalj += profesores[i].jedi;
                }
                var promedioProfesores = (total/profesores.length).toFixed(2);
                var promedioJedi = (totalj/profesores.length).toFixed(2);

                //Agregando contenido a div profesores
                var divProfesores = document.createElement("p");
                var contenidoP = document.createTextNode(promedioProfesores);
                divProfesores.appendChild(contenidoP);

                var dprofesores = document.getElementById("profesores");
                dprofesores.appendChild(divProfesores);

                //Agregando contenido a div jedi
                var divJedi = document.createElement("p");
                var contenidoJ = document.createTextNode(promedioJedi);
                divJedi.appendChild(contenidoJ);

                var djedi = document.getElementById("jedi");
                djedi.appendChild(divJedi);

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
                //Borra los elementos duplicados 8
                var contenedor2 = document.querySelector("#profesores");
                var borrar2 = contenedor2.querySelectorAll("p");
                for(i=0;i<borrar2.length;i++){
                    var borrado2 = borrar2[i];
                    borrado2.parentNode.removeChild(borrado2);
                }
                //Borra los elementos duplicados 9
                var contenedor3 = document.querySelector("#jedi");
                var borrar3 = contenedor3.querySelectorAll("p");
                for(i=0;i<borrar3.length;i++){
                    var borrado3 = borrar3[i];
                    borrado3.parentNode.removeChild(borrado3);
                }

                var valorPromocion = document.getElementById("promocion4").options.selectedIndex;
                var nombrePromocion = document.getElementById("promocion4").options[valorPromocion].text;

                var datosSedes = data[nombreEtiqueta][nombrePromocion];
                //Ejercicio1 y 2

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

                //Ejercicio 8 y 9

                var profesores = datosSedes.ratings;
                var total = 0;
                var totalj = 0;
                for(i=0;i<profesores.length;i++){
                    total += profesores[i].teacher;
                    totalj += profesores[i].jedi;
                }
                var promedioProfesores = (total/profesores.length).toFixed(2);
                var promedioJedi = (totalj/profesores.length).toFixed(2);

                //Agregando contenido a div profesores
                var divProfesores = document.createElement("p");
                var contenidoP = document.createTextNode(promedioProfesores);
                divProfesores.appendChild(contenidoP);

                var dprofesores = document.getElementById("profesores");
                dprofesores.appendChild(divProfesores);

                //Agregando contenido a div jedi
                var divJedi = document.createElement("p");
                var contenidoJ = document.createTextNode(promedioJedi);
                divJedi.appendChild(contenidoJ);

                var djedi = document.getElementById("jedi");
                djedi.appendChild(divJedi);

            });
            console.log(arrayPromociones3);
        }
    });

}
cargarLista();