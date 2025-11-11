const fs= require('fs');
const app=require('./server.js');
const fileObject=require('./fileObject.js');


app.get('/', (req, res)=> {
    res.sendFile(__dirname+'/mycloud/nube.html');
})
app.get('/download', (req, res)=> {
    res.sendFile(__dirname+'/download/download.html');
})
app.get('/getFiles', (req, res)=>{
    fs.readFile(__dirname+'/files.json', 'utf-8', (err, jsonDB)=>{
        const result=JSON.parse(jsonDB);
        res.send(result);
    })
    
})
app.get('/fileFetch/:fileName', (req, res)=>{
    res.sendFile(__dirname+'/fileDb/'+req.params.fileName);
})


function rewrite_json(){
    let jsoncontent={"archivos":[]}
    fs.readdir(__dirname+'/fileDb', (error, files)=>{
        files.forEach(file=>{
            jsoncontent.archivos.push(new fileObject(file));
        })
        jsoncontent=JSON.stringify(jsoncontent);
        fs.writeFile(__dirname+'/files.json', jsoncontent, 'utf-8', (err)=>{if(err){console.log(err);}})
    })
}
rewrite_json()

app.post('/upload', (req, res)=> {
    if (req.files && Object.keys(req.files).length !== 0) {
        const uploadedFiles = req.files.uploadFile;
        if(uploadedFiles.length>1){
            uploadedFiles.forEach(file=>{
                const uploadPath = __dirname+ "/fileDb/" + file.name;
                console.log("Saving file "+file.name);
                file.mv(uploadPath, (err)=>{
                    if(err){console.log(err)}else{rewrite_json();}
                });
                console.log(file.name+" saved correctly!");
            })
        }else{
            const uploadPath = __dirname+ "/fileDb/" + uploadedFiles.name;
            console.log("Saving file "+uploadedFiles.name);
            uploadedFiles.mv(uploadPath, (err)=>{
                if(err){console.log(err)}else{rewrite_json();}
            });
            console.log(uploadedFiles.name+" saved correctly!");
        }     
    }
    res.sendFile(__dirname+'/mycloud/nube.html');
    }
)

app.post('/dfile', (req, res)=>{
    res.download(__dirname+'/fileDb/'+req.body.file_name, (err)=>{if(err){console.log(err);}})
})


app.listen(3000, () => console.log('server on port 3030'));
