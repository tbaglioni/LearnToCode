var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'endnu en test!\r\n', function (err) {
    if (err){
        throw err;
    }
    console.log('Saved!');
});
