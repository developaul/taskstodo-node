const inquirer = require('inquirer');

require('colors');

const questions = [
    {
        type: 'list',
        name: 'option',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tarea(s)`,
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir\n`
            }
        ]
    }
];

const inquireMenu = async () => {

    console.clear();

    console.log('========================'.green);
    console.log('  Seleccine una opción  '.green);
    console.log('========================\n'.green);

    const { option } = await inquirer.prompt(questions);

    return option;
};


const pauseMenu = async () => {

    const questionPause = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.green} para continuar`
        }
    ]

    console.log('\n');

    await inquirer.prompt(questionPause);

};

const readInput = async message => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (!value.length) return 'Por favor ingrese un valor';
                return true;
            }
        }
    ]

    const { desc } = await inquirer.prompt(question);

    return desc;
}

module.exports = {
    inquireMenu,
    pauseMenu,
    readInput
};