var upload_button_state=false;

document.getElementById('up').addEventListener('click', function(){
    if(upload_button_state==false){
        document.getElementById('hidden-upload').style.display='block';
        if(window.innerWidth<430){
            document.getElementById('down').style.marginTop='45%';
        }else if(window.innerWidth<600){
            document.getElementById('down').style.marginTop='35%';
        }else if(window.innerWidth<1000){
            document.getElementById('down').style.marginTop='25%';
        }else{document.getElementById('down').style.marginTop='0%';}
        upload_button_state=true;
    }else{
        document.getElementById('hidden-upload').style.display='none';
        if(window.innerWidth<600){
            document.getElementById('down').style.marginTop='5%';
        }else if(window.innerWidth<1000){
            document.getElementById('down').style.marginTop='5%';
        }else{document.getElementById('down').style.marginTop='0%';}
        upload_button_state=false;
    }
    
})


document.getElementById('down').addEventListener('click', function(){
    window.open('download');
})