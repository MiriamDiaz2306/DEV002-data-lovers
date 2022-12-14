

//filtramos por iDs y la especie Humana
export const personajes = (characters) => {
  const PersonajesFiltrados = characters.filter(filtrados => filtrados.species === "Human");
  return PersonajesFiltrados;
};
export const personajes_No_Humanos = (characters) => {
  const PersonajesFiltrados = characters.filter(filtrados => filtrados.species !== "Human");
  return PersonajesFiltrados;
};

//filtramos por orden alfabetico
export const order_AZ = (characters) => {
  const order_All = characters.sort((a, b) => a.name.localeCompare(b.name))
  return order_All
};
export const order_ZA = (characters) =>{
  const order_All = characters.sort((a, b) => b.name.localeCompare(a.name))
  return order_All
};

//filtramos tipo de Sangre
export const dirtyBlood = (characters) =>{
  const alamacenDirtyBlood = characters.filter(subGeneder => subGeneder.ancestry === "Muggle")
  return alamacenDirtyBlood
};
export const pureSpecies  = (characters) =>{
  const alamacenPureSpecies = characters.filter(subGeneder => subGeneder.ancestry === "Pure-blood")
  return alamacenPureSpecies
};
//filtramos los libros
export const _author = (books) => {
  const almacenAutor = books.filter(autor => typeof autor.id === "number" )
  return almacenAutor;
};
//filtrados las pociones
export const informacionPotions= (potions)=> {
    const almacenPociones = potions.filter(idPociones => typeof idPociones.id ==="number")
    return almacenPociones;

      }

//filtrados de hechizos
 export const informacionHechizos= (spells)=>{
  const almacenHechizos = spells.filter(idHechizos => typeof idHechizos.id === "number" )
  return almacenHechizos;
 }
//Buscador de personajes
 export const buscadorDePersonajes=(data,buscarNombreDePersonajes)=>{
  const allPersonajes= data.filter(personajes => personajes.name.toLowerCase().startsWith(buscarNombreDePersonajes))
  return allPersonajes;
 }