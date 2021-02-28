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

    borrarTarea( id = ''){
        if( this._listado[id]){
            delete this._listado[id];
        }
    }

    listarPendientesCompletadas( completadas = true ){
        console.log("\n");
        let contador = 0;

        this.listadoArray.forEach( (tarea ) => {

            const { descripcion, completadoEn } = tarea;
            const estado = (completadoEn) ? "Completada".green : "Incompleta".red

            if(completadas) {
                if(completadoEn) {
                    contador += 1;
                    console.log(`${contador.toString().green} ${descripcion} :: ${completadoEn}`);
                }
            }else{
                if(!completadoEn)  {
                    contador += 1;
                    console.log(`${contador.toString().green} ${descripcion} :: ${estado}`);
                }
            }
 
        });
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