const Tasks = require('./models/Tasks');

const {
    saveData,
    loadData
} = require('./helpers/crud');

const {
    showListCheckList,
    listTasksDelete,
    inquireMenu,
    pauseMenu,
    readInput,
    confirm
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

            case '3':
                tasks.listCompletedPending(true);
                break;

            case '4':
                tasks.listCompletedPending(false);
                break;

            case '5':
                const ids = await showListCheckList(tasks.listArr);
                tasks.toggleCompleted(ids);
                break;

            case '6':
                const id = await listTasksDelete(tasks.listArr);
                if (id === '0') break;

                const ok = await confirm('¿Está seguro?');
                if (!ok) break;

                tasks.deleteTask(id);
                console.log('Tarea borrada');
                break;

            case '0':
                break;
        }

        saveData(tasks.listArr);

        if (opt !== '0') await pauseMenu();

    } while (opt !== '0');

}

main();