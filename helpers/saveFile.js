const fs = require('fs');

const saveData = data => {

    const file = './db/data.json';

    fs.writeFileSync(file, JSON.stringify(data));

}


module.exports = {
    saveData
} 