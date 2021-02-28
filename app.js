
const { guardaDB, leerDB } = require("./helpers/guardarArchivo");
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar } = require("./helpers/inquirer");
const Tarea = require("./models/tarea");
const Tareas = require("./models/tareas");


console.clear();

const main = async() => {
    
    let opt = "";

    const tareas = new Tareas();
    const tareasDB = leerDB();

    if( tareasDB ){
        tareas.cargarTareasFromArray(tareasDB);
    }

    do{
     
        opt = await inquirerMenu();

        
        switch (opt) {
            case "1":
                const desc = await leerInput("Descripcion: ");
                tareas.crearTarea(desc);
                break;
            case "2":
                tareas.listadoCompleto();
                break;
            case "3":
                tareas.listarPendientesCompletadas(true);
                break;
            case "4":
                tareas.listarPendientesCompletadas(false);
                break;
            case "5":
                break;
            case "6":
                const id = await listadoTareasBorrar( tareas.listadoArray );
                if(id !== "0"){
                    const respuesta = await confirmar("¿Estas seguro que deseas borrarlo?");
                    if(respuesta){
                        tareas.borrarTarea(id);
                        console.log("Tarea borrada");
                    }
                    break;
                }
        }

        guardaDB(tareas.listadoArray);

        await pausa();

    }while( opt !== "0");

};

main();

// Codigo para guardar una lista
// const tarea = new Tarea("hola");
// const tareas = new Tareas();
// tareas._listado[tarea.id] = tarea;
// console.log(tareas);