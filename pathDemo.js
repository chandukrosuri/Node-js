import path from 'path';
import url from 'url';

const filePath = './dir1/dir2/test.txt';

// basename()
console.log(path.basename(filePath));

// dirname()
console.log(path.dirname(filePath));

// extname()
console.log(path.extname(filePath));

//parse() - an object with all the stuff related to the file
console.log(path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);
console.log(__filename);


// join()
 