const inquirer = require('inquirer');
require('colors');

const inquirerMenu  = async() => {

    const preguntas = [
        {
            type: 'list',
            name: 'opcion',
            message: '¿Que desea hacer?',
            choices: [
                {
                    value:'1',
                    name:`${'1.'.green} Crear tarea`
                },
                {
                    value:'2',
                    name:`${'2.'.green} Listar tareas`
                },
                {
                    value:'3',
                    name:`${'3.'.green} Listar tareas completadas`
                },
                {
                    value:'4',
                    name:`${'4.'.green} Lista tareas pendientes`
                },
                {
                    value:'5',
                    name:`${'5.'.green} Completar tareas`
                },
                {
                    value:'6',
                    name:`${'6.'.green} Borrar Tarea`
                },
                {
                    value:'0',
                    name:`${'0.'.green} Salir`
                }       
            ]
        }
    ];

    console.clear();
    console.log("===========================".green);
    console.log("   Seleccione una opcion   ".white);
    console.log("==========================\n".green);

    const { opcion } = await inquirer.prompt(preguntas);
    
    return opcion;
}

const pausa = async() => {
    const question = [{
        type: 'input',
        name: 'enter',
        message: `Presione ${'[ENTER]'.bgBrightWhite.black} para continuar`,
    }]
    console.log("\n");
    await inquirer.prompt(question);
}

const leerInput = async( message ) => {
    const question = [
        {
            type: "input",
            name: "desc",
            message,
            validate(value){
                if(value.length === 0){
                    return "Por favor ingrese un valor";
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc
}

const listadoTareasBorrar = async( tareas = []) => {
    //obtendo un arreglo de nuevos objetos por cada elemento
    const choices = tareas.map( (tarea,i) => {

        const idx = `${ i + 1}`.green;

        return {
            value: tarea.id,
            name:` ${idx} ${tarea.descripcion}`
        }
    });

    //Agregar un elemento al inicio del arreglo
    choices.unshift({
        value:"0",
        name:` ${"0".green} Cancelar`
    });


    const preguntas = [
        {
            type: "list",
            name:"id",
            message:"Borrar",
            choices
        }
    ]

    const { id } = await inquirer.prompt(preguntas);
    return id;
}

const mostrarListadoCompletadas = async( tareas = []) => {
    //obtendo un arreglo de nuevos objetos por cada elemento
    const choices = tareas.map( (tarea,i) => {

        const idx = `${ i + 1}`.green;

        return {
            value: tarea.id,
            name:` ${idx} ${tarea.descripcion}`,
            checked:(tarea.completadoEn) ? true : false
        }
    });

    const pregunta = [
        {
            type: "checkbox",
            name:"ids",
            message:"Seleccione",
            choices
        }
    ]

    const { ids } = await inquirer.prompt(pregunta);
    return ids;
}

const confirmar = async(message) => {

    const question = [{
        type:"confirm",
        name:"ok",
        message
    }];

    const { ok } = await inquirer.prompt(question);
    return ok;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoCompletadas
}