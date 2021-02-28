const Tarea = require("./tarea");

class Tareas{
    _listado = {};

    get listadoArray(){
        const listado = [];
        
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push(tarea);    
        });

        return listado;
    }

    constructor(){
        this._listado = {}
    }

    listadoCompleto(){
        console.log("\n");
        this.listadoArray.forEach( (tarea, i ) => {
            const idx = `${ i + 1}`.green;
            const { descripcion, completadoEn } = tarea;
            const estado = (completadoEn)
                            ? "Completada".green
                            : "Incompleta".red

            console.log(`${idx} ${descripcion} :: ${estado}`);
        });
    }

    cargarTareasFromArray(tareas = []){
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea
        })
    }

    crearTarea(desc = ""){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
}



module.exports = Tareas;