//requireds
const fs = require('fs');
colors = require('colors');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base ${base} no es un numero`)
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        };
        fs.writeFile(`tablas/tabla ${base} - al - ${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla ${base} - al - ${limite}.txt`.green)
        });

    });
};

let listarTabla = (base, limite) => {

    console.log('================'.red);
    console.log(`Tabla de ${base}`.red);
    console.log('================'.red);
    if (!Number(limite)) {
        console.log(`La base ${limite} no es un numero`)
        return;
    }
    let data = '';
    for (let i = 1; i <= limite; i++) {
        data += (`${base} * ${i} = ${base * i}\n`);
    };
    console.log(data);
};


module.exports = {
    crearArchivo,
    listarTabla

}