const fs = require('fs');

const guardaDB = ( data ) => {
    const archivo = './db/data.json';
    fs.writeFileSync( archivo, JSON.stringify(data) );
}

module.exports = {
    guardaDB
}