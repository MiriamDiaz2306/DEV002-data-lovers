import data from "./data/harrypotter/data.js";
import {
     personajes,
     personajes_No_Humanos,
     order_AZ,
     order_ZA,
     pureSpecies,
     dirtyBlood,
     buscadorDePersonajes
} from './data.js';

const characters = data.characters;
const Libros = data.books;
const Potions = data.potions;
const spells = data.spells;

//seleccionamos las secciones del DOM
const sMain_acceso = document.querySelector("#sMagosHechizos"),
      sLibrosMain_Acceso = document.querySelector("#sLibrosMain"),
      sPersonajesMain_Acceso = document.querySelector("#sPersonajesMain"),
      sHechizosMain_acceso = document.querySelector("#sHechizosMain"),
      sPosionesMain_acceso = document.querySelector("#sPosionesMain"),    
      nav_acesso = document.querySelector("#menu-navegacion"),
      navMenuQuery = document.querySelector("#menuQuery"),
      buscadorInput = document.querySelector("#BuscadorDePersonajes"),
      containerPorcentaje = document.querySelector("#porcentajeDom")
//seleccionamos el select
const selecteFilter = document.querySelector("#filtroId");
//DIV contenedores de tarjetas
const sContainerSectionPersonajes = document.querySelector(".sSizePersonajes"),
      sContainerSectionLibros = document.querySelector(".sSizeLibros"),
      sContainerSectionHechizos = document.querySelector(".sSizeHechizos"),
      sContainerSectionPosiones = document.querySelector(".sSizePosiones")
//capturamos los botones de la pagina principal
const sBtnCaptura_Libros = document.querySelector("#sBtnLibros"),
      sBtnCaptura_Personajes = document.querySelector("#sBtnPersonajes"),
      sBtnCaptura_Hechizos = document.querySelector("#sBtnHechizos"),
      sBtnCaptura_Posiones = document.querySelector("#sBtnPosiones");
//capturamos los botones que navegan en el NAV
const capturaBtnVolver = document.querySelector("#sBtnMenuPrincipalNav"),
      capturaBtnLibros = document.querySelector("#sBtnLibrosNav"),
      capturaBtnPersonajes = document.querySelector("#sBtnPersonajessNav"),
      capturaBtnHechizos = document.querySelector("#sBtnHechizosNav"),
      capturaBtnPosiones = document.querySelector("#sBtnPosionesNav");
//Ejecuciones de eventos botones NAV
capturaBtnLibros.addEventListener("click", () => {
    sLibrosMain_Acceso.classList.add("sLibrosMainAparecer");
    sPersonajesMain_Acceso.classList.remove("sPersonajesMainAparecer");
    sHechizosMain_acceso.classList.remove("sHechizosMainAparecer");
    sPosionesMain_acceso.classList.remove("sPosionesMainAparecer");
    nav_acesso.classList.add("sNavMainAparecer");
});
capturaBtnPersonajes.addEventListener("click", () => {
    sPersonajesMain_Acceso.classList.add("sPersonajesMainAparecer");
    sLibrosMain_Acceso.classList.remove("sLibrosMainAparecer");
    sHechizosMain_acceso.classList.remove("sHechizosMainAparecer");
    sPosionesMain_acceso.classList.remove("sPosionesMainAparecer");
    nav_acesso.classList.add("sNavMainAparecer");
});
capturaBtnHechizos.addEventListener("click", () => {
    sHechizosMain_acceso.classList.add("sHechizosMainAparecer");
    sLibrosMain_Acceso.classList.remove("sLibrosMainAparecer");
    sPersonajesMain_Acceso.classList.remove("sPersonajesMainAparecer");
    sPosionesMain_acceso.classList.remove("sPosionesMainAparecer");
    nav_acesso.classList.add("sNavMainAparecer");
});
capturaBtnPosiones.addEventListener("click", () =>{
    sPosionesMain_acceso.classList.add("sPosionesMainAparecer");
    sLibrosMain_Acceso.classList.remove("sLibrosMainAparecer");
    sPersonajesMain_Acceso.classList.remove("sPersonajesMainAparecer");
    sHechizosMain_acceso.classList.remove("sHechizosMainAparecer");
});
capturaBtnVolver.addEventListener("click", () => {
    sMain_acceso.classList.remove("sMainPrincipal");
    sLibrosMain_Acceso.classList.remove("sLibrosMainAparecer");
    sPersonajesMain_Acceso.classList.remove("sPersonajesMainAparecer");
    sHechizosMain_acceso.classList.remove("sHechizosMainAparecer");
    sPosionesMain_acceso.classList.remove("sPosionesMainAparecer");
    nav_acesso.classList.remove("sNavMainAparecer");
    navMenuQuery.classList.remove("menuQueryActive");
    nav_acesso.classList.remove("menu-desplegable")
});
//Ejecuciones de Eventos botones imagenes main
sBtnCaptura_Libros.addEventListener("click", ()=>{
    sLibrosMain_Acceso.classList.add("sLibrosMainAparecer");
    nav_acesso.classList.add("sNavMainAparecer");
    navMenuQuery.classList.add("menuQueryActive");
    sMain_acceso.classList.add("sMainPrincipal");
});
sBtnCaptura_Personajes.addEventListener("click", () => {
    sPersonajesMain_Acceso.classList.add("sPersonajesMainAparecer");
    nav_acesso.classList.add("sNavMainAparecer");
    navMenuQuery.classList.add("menuQueryActive");
    sMain_acceso.classList.add("sMainPrincipal");
});
sBtnCaptura_Hechizos.addEventListener("click", () => {
    sHechizosMain_acceso.classList.add("sHechizosMainAparecer");
    nav_acesso.classList.add("sNavMainAparecer");
    navMenuQuery.classList.add("menuQueryActive");
    sMain_acceso.classList.add("sMainPrincipal");
});
sBtnCaptura_Posiones.addEventListener("click", () => {
    sPosionesMain_acceso.classList.add("sPosionesMainAparecer");
    nav_acesso.classList.add("sNavMainAparecer");
    navMenuQuery.classList.add("menuQueryActive");
    sMain_acceso.classList.add("sMainPrincipal");
});
navMenuQuery.addEventListener("click", () => {
    nav_acesso.classList.add("menu-desplegable")
})

// Tarjeta Vacia
const tarjetasDePersonajes = (tarjeta) => {
    let almacenTarjetas = [];
    
    tarjeta.forEach(elemt => {
    let creacionDiv = document.createElement("div");
    creacionDiv.classList.add("tarjetasPersonajes");
    let creacionFigure = document.createElement("figure");
    creacionFigure.innerHTML = `<img src="img/profile.png">`;

    let creacionPoPup = document.createElement("div");
        creacionPoPup.classList.add("creacionPoPup");
    let hijoUnoCreacionPoPup = document.createElement("div");
        hijoUnoCreacionPoPup.classList.add("hijoUnoCreacionPoPup");
    let hijoDosCreacionPoPup = document.createElement("div"); 
        hijoDosCreacionPoPup.classList.add("hijoDosCreacionPoPup");
    let figuraHijoUno = document.createElement("figure"),
    tituloHijoDos = document.createElement("h2"),
    parrafoUno = document.createElement("p"),
    parrafoDos = document.createElement("p"),
    parrafoTres = document.createElement("p"),
    ParrafoCuatro = document.createElement("p");
    figuraHijoUno.innerHTML = `<img src="img/profile.png">;`
    let iconoSalir = document.createElement("span")
    iconoSalir.innerHTML = `<i class="fa-solid fa-x"></i>`

    const nombres = document.createElement("h2");
        nombres.classList.add("HarryP");
        nombres.textContent = elemt.name;
        sPersonajesMain_Acceso.appendChild(sContainerSectionPersonajes);

        sContainerSectionPersonajes.appendChild(creacionDiv);
        creacionDiv.appendChild(creacionFigure);
        creacionDiv.appendChild(nombres);

        creacionDiv.appendChild(creacionPoPup)

        creacionPoPup.appendChild(hijoUnoCreacionPoPup);
        creacionPoPup.appendChild(hijoDosCreacionPoPup);
        creacionPoPup.appendChild(iconoSalir);
        hijoUnoCreacionPoPup.appendChild(figuraHijoUno);
        
        hijoDosCreacionPoPup.appendChild(tituloHijoDos);
        hijoDosCreacionPoPup.appendChild(parrafoUno);
        hijoDosCreacionPoPup.appendChild(parrafoDos);
        hijoDosCreacionPoPup.appendChild(parrafoTres);
        hijoDosCreacionPoPup.appendChild(ParrafoCuatro);
        
        tituloHijoDos.textContent = elemt.name
        parrafoUno.textContent = elemt.gender
        parrafoDos.textContent = elemt.house
        parrafoTres.textContent = elemt.ancestry
        ParrafoCuatro.textContent = elemt.species

        creacionDiv.addEventListener("click", () => {
            creacionPoPup.classList.toggle("creacionPoPupUno")       
        })
        almacenTarjetas.push(creacionDiv); 
    }) 
    return almacenTarjetas;
}

//tarjetas que se ven
const allCharacters = () => {
    //iteramos los personajes y pasan a ser elemt para imprimirlos en su div  
    characters.forEach(elemt => {
    let creacionDiv = document.createElement("div");
    creacionDiv.classList.add("tarjetasPersonajes")
    let creacionFigure = document.createElement("figure");
    creacionFigure.innerHTML = `<img src="img/profile.png">`;
    //creamos la esctructura del poPup
    let creacionPoPup = document.createElement("div");
    creacionPoPup.classList.add("creacionPoPup");
    let hijoUnoCreacionPoPup = document.createElement("div");
    hijoUnoCreacionPoPup.classList.add("hijoUnoCreacionPoPup");
    let hijoDosCreacionPoPup = document.createElement("div"); 
    hijoDosCreacionPoPup.classList.add("hijoDosCreacionPoPup");
    let figuraHijoUno = document.createElement("figure"),
        tituloHijoDos = document.createElement("h2"),
        parrafoUno = document.createElement("p"),
        parrafoDos = document.createElement("p"),
        parrafoTres = document.createElement("p"),
        ParrafoCuatro = document.createElement("p");
    figuraHijoUno.innerHTML = `<img src="img/profile.png">;`
    let iconoSalir = document.createElement("span")
        iconoSalir.innerHTML = `<i class="fa-solid fa-x"></i>`
    const nombres = document.createElement("h2");
        nombres.classList.add("HarryP")
        nombres.textContent = elemt.name;
        sPersonajesMain_Acceso.appendChild(sContainerSectionPersonajes);
        sContainerSectionPersonajes.appendChild(creacionDiv);
        creacionDiv.appendChild(creacionFigure);
        creacionDiv.appendChild(nombres)

        creacionDiv.appendChild(creacionPoPup)

        creacionPoPup.appendChild(hijoUnoCreacionPoPup);
        creacionPoPup.appendChild(hijoDosCreacionPoPup);
        creacionPoPup.appendChild(iconoSalir);
        hijoUnoCreacionPoPup.appendChild(figuraHijoUno);
        
        hijoDosCreacionPoPup.appendChild(tituloHijoDos);
        hijoDosCreacionPoPup.appendChild(parrafoUno);
        hijoDosCreacionPoPup.appendChild(parrafoDos);
        hijoDosCreacionPoPup.appendChild(parrafoTres);
        hijoDosCreacionPoPup.appendChild(ParrafoCuatro);
        
        tituloHijoDos.textContent = elemt.name
        parrafoUno.textContent =  `Genero: ${elemt.gender}`
        parrafoDos.textContent = `House: ${elemt.house}`
        parrafoTres.textContent = `Ancestry: ${elemt.ancestry}`
        ParrafoCuatro.textContent = `Species: ${elemt.species}`
        
        creacionDiv.addEventListener("click", () => {
            creacionPoPup.classList.toggle("creacionPoPupUno")       
        })
       
    })  
    
}
allCharacters();

//Se imprimen en orden alfabetico
selecteFilter.addEventListener("change", () => {
    if(selecteFilter.value === "a_z"){
        sContainerSectionPersonajes.innerHTML = " ";
        const nombres_Ordenados = order_AZ(characters);
        const tarjetaOrdenada = tarjetasDePersonajes(nombres_Ordenados);
        tarjetaOrdenada.forEach(iterador => {
            sContainerSectionPersonajes.appendChild(iterador)
        });
    }
})
selecteFilter.addEventListener("change", () => {
    if(selecteFilter.value === "z_a"){
        sContainerSectionPersonajes.innerHTML = " ";
        const nombres_Ordenados_Reversa = order_ZA(characters);
        const tarjeta_Ordenada_Reversa = tarjetasDePersonajes(nombres_Ordenados_Reversa);
        tarjeta_Ordenada_Reversa.forEach(iterador => {
            sContainerSectionPersonajes.appendChild(iterador);
        });
    }
})
//Se imprimen Humanos
selecteFilter.addEventListener("change", ()  => {
    if(selecteFilter.value === "Humans"){
        sContainerSectionPersonajes.innerHTML = " ";
        const humanos = personajes(characters)
        const tarjeta_Humanos = tarjetasDePersonajes(humanos);
        tarjeta_Humanos.forEach(iterador => {
            sContainerSectionPersonajes.appendChild(iterador);
            sContainerSectionPersonajes.classList.add("grid_Humanos");
            sContainerSectionPersonajes.classList.remove("grid_No_Humanos");
            sContainerSectionPersonajes.classList.remove("grid_Puros");
        sContainerSectionPersonajes.classList.remove("grid_Impuros");
        })
        let calculoPersonaje = personajes(characters).length * 100 / characters.length;
        let calculoFinal = Math.floor(calculoPersonaje);
        containerPorcentaje.textContent = `${calculoFinal}%`;
    }
})
//Se imprimen no Humanos
selecteFilter.addEventListener("change", () => {
    if(selecteFilter.value === "Not_Humans"){
        sContainerSectionPersonajes.innerHTML = " ";
        const no_humanos = personajes_No_Humanos(characters);
        const tarjeta_No_Humanos =  tarjetasDePersonajes(no_humanos);
            tarjeta_No_Humanos.forEach(iterador => {
                sContainerSectionPersonajes.appendChild(iterador)
                sContainerSectionPersonajes.classList.add("grid_No_Humanos");
                sContainerSectionPersonajes.classList.remove("grid_Humanos");
                sContainerSectionPersonajes.classList.remove("grid_Puros");
                sContainerSectionPersonajes.classList.remove("grid_Impuros");
            })
        let calculoPersonaje = personajes_No_Humanos(characters).length * 100 / characters.length;
        let calculoFinal = Math.floor(calculoPersonaje);
        containerPorcentaje.textContent = `${calculoFinal}%`;
    }
})
//Se filtro sangre pura sin utilizar el forEach ;)
selecteFilter.addEventListener("change", () => {
    if(selecteFilter.value === "sangre_Pura"){
        sContainerSectionPersonajes.innerHTML = " ";
        containerPorcentaje.innerHTML = " "
        const personajes_Puros = pureSpecies(characters);
        tarjetasDePersonajes(personajes_Puros);
        sContainerSectionPersonajes.classList.add("grid_Puros");
        sContainerSectionPersonajes.classList.remove("grid_Impuros");
        sContainerSectionPersonajes.classList.remove("grid_No_Humanos");
        sContainerSectionPersonajes.classList.remove("grid_Humanos");
    }
       
})
selecteFilter.addEventListener("change", () => {
    if(selecteFilter.value === "sangre_Impura"){
        sContainerSectionPersonajes.innerHTML = " ";
        containerPorcentaje.innerHTML = " "
        const personajes_Impuros = dirtyBlood(characters);
        tarjetasDePersonajes(personajes_Impuros);
        sContainerSectionPersonajes.classList.add("grid_Impuros");
        sContainerSectionPersonajes.classList.remove("grid_Puros");
        sContainerSectionPersonajes.classList.remove("grid_No_Humanos");
        sContainerSectionPersonajes.classList.remove("grid_Humanos");
    }
        
})
//Se vuelven a imprimir todos
selecteFilter.addEventListener("change", () => {
    if(selecteFilter.value === "alls"){
        sContainerSectionPersonajes.innerHTML = " ";
        sContainerSectionPersonajes.classList.remove("grid_No_Humanos");
        sContainerSectionPersonajes.classList.remove("grid_Humanos");
        sContainerSectionPersonajes.classList.remove("grid_Impuros");
        sContainerSectionPersonajes.classList.remove("grid_Puros");
        allCharacters();
        containerPorcentaje.innerHTML = " "
    }
   
})

//Portada de libros
const portada_Libros = () => {
    Libros.map((elemt) =>{
    let creacionDiv = document.createElement("div"),
    creacionH2 = document.createElement("h2"),
    creacionH3 = document.createElement("h3"),
    creacionH3Autor = document.createElement("h3"),
    creacionP = document.createElement("p"); 
    
    creacionDiv.classList.add("sContainerLibrosJS");

    sContainerSectionLibros.appendChild(creacionDiv);
    creacionDiv.appendChild(creacionH2);
    creacionDiv.appendChild(creacionH3);
    creacionDiv.appendChild(creacionH3Autor);
    creacionDiv.appendChild(creacionP);

    creacionH2.textContent = elemt.title;
    creacionH3.textContent = elemt.releaseDay;
    creacionH3Autor.textContent = elemt.author;
    creacionP.textContent = elemt.description;
    })
}
portada_Libros();

//portada hechizos
 const idHechizos = () =>{
spells.map((hechizos)=>{
 let creacionDiv=document.createElement("div")
 creacionDiv.classList.add("mContenedorHechizos")
 let creacionFigure=document.createElement("figure")
 creacionFigure.innerHTML= `<img src="img/hechizosdom.png">`
 let creacionH2=document.createElement("h2")
 creacionH2.classList.add("HarryP")
 sContainerSectionHechizos.appendChild(creacionDiv)
 creacionDiv.appendChild(creacionFigure)
 creacionDiv.appendChild(creacionH2)
 creacionH2.textContent=hechizos.name

});
 }

idHechizos()

// portada pociones
const idPociones = () =>{
Potions.map((pociones) =>{
let creacionDiv=document.createElement("div")
creacionDiv.classList.add("mContenedorPociones")
let creacionFigure=document.createElement("figure")
creacionFigure.innerHTML= `<img src="img/pociondom.png">`
let creacionH2= document.createElement("h2")
creacionH2.classList.add("HarryP")
sContainerSectionPosiones.appendChild(creacionDiv)
creacionDiv.appendChild(creacionFigure)
creacionDiv.appendChild(creacionH2)
creacionH2.textContent=pociones.name

});
}
idPociones()

//Buscador input personajes
buscadorInput.addEventListener("input",(event)=>{
    sContainerSectionPersonajes.innerHTML=" "
    let personaBuscar= buscadorDePersonajes(characters,event.target.value)
    let buscandoNombre=tarjetasDePersonajes(personaBuscar)
    buscandoNombre.forEach(elemt=>{
    sContainerSectionPersonajes.appendChild(elemt)
    })
})













