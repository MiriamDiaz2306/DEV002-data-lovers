
const {
  pathExist,
  toAbsolute,
  mdFile,
  validateLinks,
  getLinks,
  findMdFiles,

} = require('./functions');


const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    // la ruta existe?
    if (!pathExist(path)) {
      reject('la ruta no existe');  // si no existe la ruta rechaza la promesa
    } else {
      const absolutePath = toAbsolute(path); // funcion convierte a absoluta
      if (mdFile(absolutePath)) {
        // Si el path es un archivo .md
        // funcion para leer archivos y obtener links en el archivo
        getLinks(absolutePath).then((arrayLinks) => {
          if (arrayLinks.length === 0) {
            reject('no contiene links');
          } else {
            if (options && options.validate === false) {
              resolve(arrayLinks);
            } else {
              // funcion para validar links
              validateLinks(arrayLinks).then((result) => {
                resolve(result);
              });
            }
          }
        }).catch((error) => {
          reject(error);
        });
      } else {
        // Si el path es un directorio
        // función para buscar archivos .md en el directorio
        findMdFiles(absolutePath).then((mdFiles) => {
          const promises = mdFiles.map((mdFile) => getLinks(mdFile));
          Promise.all(promises)
            .then((arrayLinks) => {
              const links = arrayLinks.flat();
              if (links.length === 0) {
                reject('no contiene links');
              } else {
                if (options && options.validate === false) {
                  resolve(links);
                } else {
                  validateLinks(links).then((result) => {
                    resolve(result);
                  });
                }
              }
            })
            .catch((error) => {
              reject(error);
            });
        }).catch((error) => {
          reject(error);
        });
      }
    }
  });
};

module.exports = {
  mdLinks,
};