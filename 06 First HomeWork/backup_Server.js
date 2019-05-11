const fs = require('fs-extra');

fs.copy('./backup/', './backupnew/', err =>{
  if(err) return console.error(err);
  console.log('success!');
});