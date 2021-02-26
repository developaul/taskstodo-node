const Tasks = require('./models/Tasks');

const {
    saveData,
    loadData
} = require('./helpers/crud');

const {
    inquireMenu,
    pauseMenu,
    readInput
} = require('./helpers/inquirer');

require('colors');

const main = async () => {

    console.clear();

    let opt = '';

    const tasks = new Tasks();

    const dbTasks = loadData();

    if (dbTasks) tasks.loadTasksFromArr(dbTasks);

    do {

        opt = await inquireMenu();

        switch (opt) {

            case '1':
                const desc = await readInput('Descripción:');
                tasks.createTask(desc);
                break;

            case '2':
                tasks.listTasks();
                break;

        }

        saveData(tasks.listArr);

        if (opt !== '0') await pauseMenu();

    } while (opt !== '0');

}

main();