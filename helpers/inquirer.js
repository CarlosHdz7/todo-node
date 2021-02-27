const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value:'1',
                name:'1. Crear lista'
            },
            {
                value:'2',
                name:'2. Listar tareas'
            },
            {
                value:'3',
                name:'3. Listar tareas completadas'
            },
            {
                value:'4',
                name:'4. Lista tareas pendientes'
            },
            {
                value:'5',
                name:'5. Completar tareas'
            },
            {
                value:'6',
                name:'6. Borrar Tarea'
            },
            {
                value:'0',
                name:'0. Salir'
            }       
        ]
    }
];

const inquirerMenu  = async() => {
    console.clear();
    console.log("===========================".green);
    console.log("   Seleccione una opcion   ".green);
    console.log("==========================\n".green);

    const { opcion } = await inquirer.prompt(preguntas);
    
    return opcion;
}

const pausa = async() => {

}

module.exports = {
    inquirerMenu,
    pausa
}