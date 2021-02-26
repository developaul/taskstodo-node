const Task = require("./Task");

require("colors");

class Tasks {

    _list = {};

    get listArr() {

        let list = [];

        Object.keys(this._list).forEach(key => {
            list = [...list, this._list[key]];
        });

        return list;
    }

    constructor() {
        this._list = {};
    }

    loadTasksFromArr(tasks = []) {
        tasks.forEach(task => {
            this._list[task.id] = task;
        });
    }

    createTask(desc = '') {
        const task = new Task(desc);

        this._list[task.id] = task;
    }

    listTasks() {

        console.log();

        this.listArr.forEach(({ completedIn, desc }, i) => {

            const idx = `${i + 1}`.green;
            const state = (completedIn) ? 'Completado'.green : 'Pendiente'.red;

            console.log(`${idx}. ${desc} :: ${state}`);
        });

    }

}

module.exports = Tasks;