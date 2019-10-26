const fs = require('fs');

const readableStream = fs.createReadStream('keyboard.txt');
let data = '';

readableStream.on('data', chunk => {
  data += chunk;
});

readableStream.on('end', () => {
  console.log(data);
});
