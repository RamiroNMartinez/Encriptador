function Encriptar(){ // Cambio las vocales para encriptar el texto


    let palabraEntrada = document.getElementById("Entrada").value;
    if(!textoValido(palabraEntrada)){ //Valida que el texto esté en minúsculas y sin acentoss
        //vibra el text area y muetras el error
        return;
    }
        

    palabraEntrada = palabraEntrada.split('');

    for(let i = 0; i<palabraEntrada.length;i++){
        if(palabraEntrada[i] == 'a'){
            palabraEntrada[i] = palabraEntrada[i].replace('a','ai');
            continue;
        }
        if(palabraEntrada[i] == 'e'){
            palabraEntrada[i] = palabraEntrada[i].replace('e','enter');
            continue;
        }
        if(palabraEntrada[i] == 'i'){
            palabraEntrada[i] = palabraEntrada[i].replace('i','imes');
            continue;
        }
        if(palabraEntrada[i] == 'o'){
            palabraEntrada[i] = palabraEntrada[i].replace('o','ober');
            continue;
        }
        if(palabraEntrada[i] == 'u'){
            palabraEntrada[i] = palabraEntrada[i].replace('u','ufat');
        }
    }
    palabraEntrada = palabraEntrada.join('');

    console.log(palabraEntrada);
}

function Desencriptar(){  //Debo buscar las vocales y reemplazarlas por las originales

    let palabraEntrada = document.getElementById("Entrada").value;
    if(!textoValido(palabraEntrada)){ //Valida que el texto esté en minúsculas y sin acentoss
        //vibra el text area y muetras el error
        return;
    }

    if(palabraEntrada.includes('ai')){
        palabraEntrada = palabraEntrada.replaceAll('ai','a');
    }
    if(palabraEntrada.includes('enter')){
        palabraEntrada = palabraEntrada.replaceAll('enter','e');
    }
    if(palabraEntrada.includes('imes')){
        palabraEntrada = palabraEntrada.replaceAll('imes','i');

    }
    if(palabraEntrada.includes('ober')){
        palabraEntrada = palabraEntrada.replaceAll('ober','o');

    }
    if(palabraEntrada.includes('ufat')){
        palabraEntrada = palabraEntrada.replaceAll('ufat','u');

    }


    console.log(palabraEntrada);
}

function textoValido(palabra){

    const valorInvalido1 = /[A-Z]/g;
    const valorInvalido2 = /[á,é,í,ó,ú]/; 

    

}