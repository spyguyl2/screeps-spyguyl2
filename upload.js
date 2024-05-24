const api = require('./screeps-config');
const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');
const branch = 'default'; // or any branch you are working on

const files = fs.readdirSync(directoryPath).reduce((acc, file) => {
  const filePath = path.join(directoryPath, file);
  acc[file] = fs.readFileSync(filePath, 'utf8');
  return acc;
}, {});

api.code.set(branch, files).then(response => {
  console.log('Code uploaded:', response);
}).catch(err => {
  console.error('Error uploading code:', err);
});
