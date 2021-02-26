const fs = require('fs');

const file = './db/data.json';

const saveData = data => {
    fs.writeFileSync(file, JSON.stringify(data));
}

const loadData = () => {

    if (!fs.existsSync(file)) return null;

    const info = fs.readFileSync(file, { encoding: 'utf-8' });
    const data = (info) ? JSON.parse(info) : [];

    return data;
}


module.exports = {
    saveData,
    loadData
} 