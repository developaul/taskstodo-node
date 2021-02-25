const Tareas = require('./models/Tareas');
const {
    inquireMenu,
    pauseMenu,
    readInput
} = require('./helpers/inquirer');

require('colors');

const main = async () => {

    console.clear();

    const tareas = new Tareas();

    let opt = '';

    do {

        opt = await inquireMenu();

        switch (opt) {

            case '1':
                const desc = await readInput('Descripción:');
                tareas.crearTarea(desc);
                break;

            case '2':
                console.log(tareas._listado);
                break;
        }

        if (opt !== '0') await pauseMenu();

    } while (opt !== '0');

}

main();