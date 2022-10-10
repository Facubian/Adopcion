import {datos} from './data.js';

var animales = datos;
console.log(animales);

var nuevo = document.getElementById("carrusel");
console.log(nuevo);

var n = 0

for (var i=0; i < animales.length; i++){
    n=((i==2)?"HOLA":"NO");
    console.log(n);

    nuevo.innerHTML+=`<div class="carousel-item ${(i==0)?"active":""}">
                        
                        <div class="container d-flex justify-content-between">
                            <div>
                                <img src="${animales[i].img}" class="img" alt="...">
                            </div>

                            <div id="texto">
                                <div class="card">
                                    <div class="card-body">
                                    <h5 class="card-title">${animales[i].nombre}</h5>
                                    <p class="card-text">
                                    Hola mi nombre es <b>${animales[i].nombre}</b> y soy un <b>${animales[i].tipo}</b>, mi pasatiempo favorito es <b>${animales[i].actividades.map((act)=>{return act})}</b>. Mi comida favorita es <b>${animales[i].comida.map((alimento)=>{return alimento})}</b>.
                                    Tengo pelo <b>${animales[i].pelaje}</b> y tengo alrrededor de <b>${animales[i].edad_aprox}</b>.
                                    Tengo caracter <b>${animales[i].caracter.map((carac)=>{return carac})}</b> y soy <b>${animales[i].cualidades.map((cuali)=>{return cuali})}</b>.
                                    </p>
                                </div>

                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <td>VACUNAS</td>
                                            <td>${animales[i].vacunas}</td>
                                        </tr>
                                        <tr>
                                            <td>RAZA</td>
                                            <td>${animales[i].raza}</td>
                                        </tr>
                                        <tr>
                                            <td>GENERO</td>
                                            <td>${(animales[i].genero == "H")?"HEMBRA":"MACHO"}</td>
                                        </tr>
                                        <tr>
                                            <td>TAMAÑO</td>
                                            <td>${animales[i].tamaño}</td>
                                        </tr>
                                        <tr>
                                            <td>CASTRADO</td>
                                            <td>${(animales[i].castrado)? "SI":"NO"}</td>
                                        </tr>
                                        <tr>
                                            <td>DISCAPACIDAD</td>
                                            <td>${animales[i].discapacidad}</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>

                    </div>`;
}