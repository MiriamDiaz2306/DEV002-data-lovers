const fs = require('fs');
const path = require('path');
const axios = require('axios');

// existe la ruta?
const pathExist = (route) => fs.existsSync(route);

// la ruta es absoluta? si no convertir a absoluta
const toAbsolute = (route) => {
  if (!path.isAbsolute(route)) {
    return path.resolve(route);
  }
  return route;
};

// es un archivo md o directorio?


const findMdFiles = (dir) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) {
        reject(err);
        return;
      }
      const promises = files.map((file) => {
        const filePath = path.join(dir, file);
        return new Promise((resolve, reject) => {
          fs.stat(filePath, (err, stats) => {
            if (err) {
              reject(err);
              return;
            }
            if (stats.isDirectory()) {
              findMdFiles(filePath).then(resolve).catch(reject);
            } else if (stats.isFile() && path.extname(filePath) === '.md') {
              resolve(filePath);
            } else {
              resolve();
            }
          });
        });
      });
      Promise.all(promises)
        .then((results) => {
          resolve(results.filter((result) => result));
        })
        .catch(reject);
    });
  });
};


// leer archivo
const readFile = (mdFile) => new Promise((resolve, reject) => {
  fs.readFile(mdFile, 'utf-8', (error, file) => {
    if (error) {
      reject(error);
    } else {
      resolve(file);
    }
  });
});


// obtener links, retorna un array de objetos
const getLinks = (mdFile) => new Promise((resolve, reject) => {
    const arrayLinks = [];
    readFile(mdFile)
        .then((file) => {
            const links = /\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g;
            let match = links.exec(file);
            while (match !== null) {
                arrayLinks.push({
                    href: match[2],
                    text: match[1],
                    file: mdFile,
                });
                match = links.exec(file)
            }
            resolve(arrayLinks);
        })
        .catch((error) => {
            reject(error);
        })
});

// validar links
const validateLinks = (arrayLinks) => Promise.all(arrayLinks.map((link) => axios.get(link.href)
    .then((response) => {
        return Object.assign({}, link, {status: response.status, ok: response.statusText});
    })
    .catch((error) => {
        if (error.response) {
            return Object.assign({}, link, {status: error.response.status, ok: 'Fail'});
        } else {
            return Object.assign({}, link, {status: 'ERROR: ' + error.message, ok: 'Fail'});
        }
    })));

// estadisticas
const getStats = (links) => {
    const total = links.length;
    const uniqueLinks = new Set(links.map((link) => link.href)).size;
    return {
        Total: total,
        Unique: uniqueLinks,
    };
};

const getStatsAndValidate = (links) => {
    const total = links.length;
    const uniqueLinks = new Set(links.map((link) => link.href)).size;
    const brokenLinks = links.filter((link) => link.ok === 'Fail').length;
    return {
        Total: total,
        Unique: uniqueLinks,
        Broken: brokenLinks,
    };
};



module.exports = {
    pathExist,
    toAbsolute,
    mdFile,
    readFile,
    getLinks,
    validateLinks,
    getStats,
    getStatsAndValidate,
    getMdFile
}