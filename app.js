const { showMenu, pauseMenu } = require('./helpers/messages');

require('colors');

const main = async () => {

    console.clear();

    let opt = '';

    do {

        opt = await showMenu();

        console.log({ opt });

        if (opt !== '0') await pauseMenu();

    } while (opt !== '0');


}

main();