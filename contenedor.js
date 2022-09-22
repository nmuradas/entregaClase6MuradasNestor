const fs = require('fs');

class Contenedor{
    constructor(archivo){
        this.archivo = archivo
    }

    getAll(){
        let contenido = fs.readFileSync(this.archivo)
        let contenidoObjeto = JSON.parse(contenido)
        console.log(contenidoObjeto)
        return contenidoObjeto
    }
}


module.exports = Contenedor