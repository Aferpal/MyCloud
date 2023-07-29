
function fileDiv(file){
    let newFile= document.createElement('div');
    let filename=document.createElement('h2');
    let img=imgDiv(file);
    newFile.setAttribute('class', 'file');
    filename.setAttribute('class', 'file_name');
    filename.innerText=file.name;
    newFile.append(img);
    newFile.append(filename);
    newFile.addEventListener('click', function(){
        document.getElementById('file_name').value=file.fullname;
        document.getElementById('show_selected_file').innerText=file.fullname;
        document.getElementById('file_preview').style.backgroundImage=file.url;
        
    })
    return newFile;
}   
function imgDiv(file){
        let div=document.createElement('div');
        div.setAttribute('class', 'file_preview');
        div.style.backgroundImage=file.url;
        return div;
}


const xml=new XMLHttpRequest();
xml.open('GET', '/getFiles');
xml.onload=()=>{
    const files=JSON.parse(xml.response);
    const box= document.getElementById('box');
    for(let i =0; i<files.archivos.length; i++){
        let newFile= fileDiv(files.archivos[i]);
        box.appendChild(newFile);
    }
    
    
}
xml.send();




