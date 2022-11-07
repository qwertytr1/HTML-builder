const fs = require('fs');
const path = require('path');

const stylesPath = path.join(__dirname , 'styles');
const writableStream = fs.createWriteStream(path.join(__dirname , 'project-dist', 'bundle.css'));
fs.writeFile(path.join(__dirname , 'project-dist' , 'bundle.css'), '', function(){})
fs.readdir(stylesPath, {withFileTypes:true}, (err , files)=>{
  if (err) throw err ;
  for (let file of files){
    if (file.isFile()&& path.extname(file.name) === '.css'){
      const readable = fs.createReadStream(path.join(stylesPath, file.name), 'utf-8');
      readable.on('data' , a =>{
        writableStream.write(a);
      })
    }
  }
})
