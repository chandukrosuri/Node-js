// import fs from  'fs';

import fs from 'fs/promises';


//async read
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

//sync read
// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log(data);

//readFile() - Promise  version .then()
// fs.readFile('./test.txt', 'utf8').then((data) => {
//     console.log(data);
// }).catch((err) => console.log(err));

//readFile() - using async/await

const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf8');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// readFile();



//Write file - this over writes the file contents

const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'writing this a new');
        console.log('written to file');
    } catch (error) {
        console.log(error);
    }
}

// writeFile();
// readFile();

const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\nappending this a new');
        console.log('appended to file');
    } catch (error) {
        console.log(error);
    }
}

writeFile();
appendFile();
readFile();