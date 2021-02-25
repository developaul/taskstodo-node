const Tasks = require('./models/Tasks');

const {
    saveData
} = require('./helpers/saveFile');

const {
    inquireMenu,
    pauseMenu,
    readInput
} = require('./helpers/inquirer');

require('colors');

const main = async () => {

    console.clear();

    const tasks = new Tasks();

    let opt = '';

    do {

        opt = await inquireMenu();

        switch (opt) {

            case '1':
                const desc = await readInput('Descripción:');
                tasks.createTask(desc);
                break;

            case '2':
                console.log(tasks.listadoArr);
                break;
        }

        saveData(tasks.listArr);

        if (opt !== '0') await pauseMenu();

    } while (opt !== '0');

}

main();