import {
  personajes,
  personajes_No_Humanos,
  _author,
  order_AZ,
  order_ZA,
  dirtyBlood,
  pureSpecies,
  informacionPotions,
  informacionHechizos,
  buscadorDePersonajes

} from '../src/data.js';
// import data from "../src/data/harrypotter/data.js";
// const characters = data.characters,
//       books = data.books,
//       potions = data.potions,
//       spells = data.spells
      
const characters = [
  {
    "name": "Harry Potter",
    "species": "Human",
    "ancestry": "Half-blood",
    "house": "Gryffindor"
  },
  {
    "name": "Sandra rios",
    "species": "Acromantula",
    "ancestry": "null",
    "house": "valledupar"
  },
  {
    "name": "Sebastian",
    "species": "Peacok",
    "ancestry": "null",
    "house": "valledupar"
  },
  {
    "name": "Euan Abercrombie",
    "species": "Human",
    "ancestry": "null",
    "house": "Gryffindor"
  },
  {
    "name": "Carl Mousak",
    "species": "Centaur",
    "ancestry": "null",
    "house": "Hufflepuff"
  }
]
//filtramos todos los humanos
describe ('filtro de Humanos', () => {   /* método que nos ayuda acrear bloques que agrupan pruebas rel */
  it("is a function", () => {            /* Recibe la callBack para evaluar lo que espera*/
    expect(typeof personajes).toBe("function"); /* tipos de datos primitivo */
  });

  it('devuelve humanos', () => {
    expect(personajes(characters).length).toEqual(2); /* valores compuestos: objetos,arrays... */
  });

});
//Filtramos No Humanos
describe('filtro de no Humanos', () => {
  it("is a function", () => {
    expect(typeof personajes_No_Humanos).toBe("function");
  });

  it('devuelve no humanos', () => {
    expect(personajes_No_Humanos(characters).length).toEqual(3);
  });
});
const books = [
{
  "id": 1,
  "title": "Harry Potter and the Sorcerer's Stone",
  "author": "J. K. Rowling"
},
{
  "id": 2,
  "title": "Harry Potter and the chamber of secrets",
  "author": "J. K. Rowling"
},
{
  "id": 3,
  "title": "Harry Potter and the Prisoner of Azkaban",
  "author": "J. K. Rowling"
},
{
  "id": 4,
  "title": "Harry Potter and the Goblet of Fire",
  "author": "J. K. Rowling"
},
{
  "id": 5,
  "title": "Harry Potter and the Order of the Phoenix",
  "author": "J. K. Rowling"
},
{
  "id": 6,
  "title": "Harry Potter and the Half-Blood Prince",
  "author": "J. K. Rowling"
},
{
  "id": 7,
  "title": "Harry Potter and the Deathly Hallows",
  "author": "J. K. Rowling"
},
{
  "id": 8,
  "title": "Harry Potter and the Cursed Child",
  "author": "J. K. Rowling"
}
]

//filtar los libros por iDs
describe('libros', () => {
  it('is a function', () => {
    expect(typeof _author).toBe("function");
  });

  it('Devuelve Libros', () => {
    expect(_author(books).length).toEqual(8);
  });
});

const vocabularyHuman = [
  {
    "name": "Mousak-black and decker",
    "house": "pluton",
    "species": "not nature",
    "ancestry":  "blood"
  },
  {
    "name": "Sara Rios",
    "house": "Gryffindor",
    "species": "Acromantula",
    "ancestry":  "blood"
  },
  {
    "name": "African prince",
    "house": "Gryffindor",
    "species": "Human",
    "ancestry":  "blood"
  },
  {
    "name": "Bertram Aubrey",
    "house":  null,
    "species": "Human",
    "ancestry":  null
  }
];
const orderA_z = [
  {
    "name": "African prince",
    "house": "Gryffindor",
    "species": "Human",
    "ancestry":  "blood"
  },
  {
    "name": "Bertram Aubrey",
    "house":  null,
    "species": "Human",
    "ancestry":  null
  },
  {
    "name": "Mousak-black and decker",
    "house": "pluton",
    "species": "not nature",
    "ancestry":  "blood"
  },
  {
    "name": "Sara Rios",
    "house": "Gryffindor",
    "species": "Acromantula",
    "ancestry":  "blood"
  }
]
//filtrar por orden Alfabetico y su reversa
describe('Orden Alfabetico', () =>{
  it('is a function', () =>{
    expect(typeof order_AZ).toBe("function")
  });
  it('Return A_Z', () =>{
    expect(order_AZ(vocabularyHuman)).toEqual(orderA_z)
  });
});

const orderZ_a = [
  {
    "name": "Sara Rios",
    "house": "Gryffindor",
    "species": "Acromantula",
    "ancestry":  "blood"
  },
  {
    "name": "Mousak-black and decker",
    "house": "pluton",
    "species": "not nature",
    "ancestry":  "blood"
  },
  {
    "name": "Bertram Aubrey",
    "house":  null,
    "species": "Human",
    "ancestry":  null
  },
  {
    "name": "African prince",
    "house": "Gryffindor",
    "species": "Human",
    "ancestry":  "blood"
  }

];

describe('Orden Alfabetico Reverse', () =>{
  it('is a function', () =>{
    expect(typeof order_ZA).toBe("function")
  });

  it('Return Z_A', () =>{
    expect(order_ZA(vocabularyHuman)).toEqual(orderZ_a);
  });
});

const sangrePuraImpura = [
  {
    "name": "Arkie Alderton",
    "species": "Human",
    "ancestry": "Pure-blood"
  },
  {
    "name": "Little Whinging postman",
    "species": "Human",
    "ancestry": "Muggle"
  },
  {
    "name": "Myrtle Warren's father",
    "species": "Human",
    "ancestry": "Muggle"
  },
  {
    "name": "Gregory Goyle",
    "species": "Human",
    "ancestry": "Pure-blood"
  },
  {
    "name": "Hugo Granger-Weasley",
    "species": "Human",
    "ancestry": "Muggle"
  },
  {
    "name": "Wilfred the Wistful",
    "species": "Human",
    "ancestry": "Pure-blood"
  }
]
//Filtrar sangre pura e impura
describe('Personajes de sangre pura', () =>{
  it('is a function', () =>{
    expect(typeof pureSpecies).toBe("function")
  });
  it('personajes puros', () =>{
    expect(pureSpecies(sangrePuraImpura).length).toEqual(3)
  });
});
describe('Personajes de sangre impura', () =>{
  it('is a function', () =>{
    expect(typeof dirtyBlood).toBe("function")
  });
  it('Personajes Impuros', () =>{
    expect(dirtyBlood(sangrePuraImpura).length).toEqual(3)
  });
});

const brujeria =[
  {
    "id":1,
    "name": "Aberto",
    "pronunciation": "Ah-bare-toh",
    "spell_type": "Charm",
    "etymology": null,
  },
  {
    "id":2,
  "name": "Accio",
  "pronunciation": "Ah-cci-oo",
  "spell_type": "Charm",
  "etymology": null,
},
{
  "id":3,
"name": "Aguamenti",
"pronunciation": "AH-gwah-MEN-tee",
"spell_type": "Charm",
"etymology": null,
},
{
  "id":4,
"name": "Alojomora",
"pronunciation": "ah-LOH-ho-MOR-ah",
"spell_type": "Charm",
"etymology": null,
},
]
//filtrar los hechizos 
 describe("filtrar Hehizos",()=>{
  it("informacion debe cumplir con ser una funcion",()=>{
    expect(typeof informacionHechizos).toBe("function");
  });
  it("filtra 4 hechizos",()=>{
    expect(informacionHechizos(brujeria).length).toEqual(4)
  });
 });

const Pocion = [
  {
    "id": 1,
    "name": "Ageing Potion",
    "description": "A potion that, depending on the amount taken"
  },
  {
    "id": 2,
    "name": "Alihotsy Draught",
    "description": "A potion from the Alihotsy plant; causes hysterical laughter."
  },
  {
    "id": 3,
    "name": "Amortentia",
    "description": "The world's strongest Love Potion; does not create real love."
  },
  {
    "id": 4,
    "name": "Angel's Trumpet Draught",
    "description": "Effects and usage of this potion are unknown."
  },
  {
    "id": 5,
    "name": "Anti-Paralysis Potion",
    "description": "A potion that heals paralysis."
  },
  {
    "id": 6,
    "name": "Antidote to Common Poisons",
    "description": "A potion that reverses the effects of common poisons."
  },
  {
    "id": 7,
    "name": "Antidote to Uncommon Poisons",
    "description": "A potion that reverses the effects of uncommon poisons."
  }
]
//filtrar las pociones 
describe('Filtrar las Pociones', () => {
  it('informacionPotions is a function', () => {
    expect(typeof informacionPotions).toBe("function");
  });

  it('Devuelve Pociones', () => {
    expect(informacionPotions(Pocion).length).toEqual(7);
  });
});

//Buscador de personajes
const input= [
  {
    name:"Mungo Bonham",
    gender: "Male",
    house: null
  },
  {
    name: "Clive Lundquist",
    gender: "Male",
    house: "Unknown"
  },
  {
    name: "Connolly",
    gender: "Male",
    house: null
  },
  {
    name: "Ritchie Coote",
    gender: "Male",
    house: "Gryffindor"

  },
  {
    name: "Fang",
    gender: "Male",
    house: null
  },
  { 
    name: "Euan Abercrombie",
    gender: "Male",
    house: "Gryffindor"
  },
  {
    name: "Edgar Bones",
    gender: "Male",
    house: "Hufflepuff (possibly)"
  }

]
const buscarNombreDePersonajes=[
  { 
    name: "Euan Abercrombie",
    gender: "Male",
    house: "Gryffindor"
  },
  {
    name: "Edgar Bones",
    gender: "Male",
    house: "Hufflepuff (possibly)"
  }
]
describe('Buscar nombres de personajes',()=>{
  it("buscadorDePersonajes is a function",() =>{
    expect(typeof buscadorDePersonajes).toBe("function")
  });
  it('Devuelve el nombre del persona a buscar',()=>{
    expect(buscadorDePersonajes(input,"e")).toEqual(buscarNombreDePersonajes);
  });
});
//el parametro input hace referencia a la Data y el segundo "e" hace referencia a la priemra letra del personaje a buscar































































