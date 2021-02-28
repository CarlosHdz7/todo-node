
const { inquirerMenu, pausa } = require("./helpers/inquirer");
const Tarea = require("./helpers/models/tarea");
const Tareas = require("./helpers/models/tareas");


console.clear();

const main = async() => {
    
    let opt = "";
    let mensaje = "";

    do{
        
        opt = await inquirerMenu();
        console.log({opt});

        await pausa();

    }while( opt !== "0");

};

main();

// Codigo para guardar una lista
// const tarea = new Tarea("hola");
// const tareas = new Tareas();
// tareas._listado[tarea.id] = tarea;
// console.log(tareas);