function Encriptar(){ // Cambio las vocales para encriptar el texto

    const boton = document.getElementById('Copia');

    let palabraEntrada = document.getElementById("Entrada").value;
    if(textoInvalido(palabraEntrada)){ //Valida que el texto esté en minúsculas y sin acentoss
        
        
        //vibra el text area y muetras el error
        console.log('Le erraste'); //sacar esto
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

    boton.textContent='Copiar';
    const mensajeSalida = document.getElementById('mensajeSalida');
    mensajeSalida.textContent = palabraEntrada; 
    limpiarInput();
    console.log(palabraEntrada); //sacar esto - Funciona como muestra
}

function Desencriptar(){  //Debo buscar las vocales y reemplazarlas por las originales

    const boton = document.getElementById('Copia');


    let palabraEntrada = document.getElementById("Entrada").value;
    if(textoInvalido(palabraEntrada)){ //Valida que el texto esté en minúsculas y sin acentos


        //vibra el text area y muetras el error
        console.log('Le erraste'); //sacar esto
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

    boton.textContent='Copiar';
    const mensajeSalida = document.getElementById('mensajeSalida');
    mensajeSalida.textContent = palabraEntrada; 
    limpiarInput();
    console.log(palabraEntrada); //sacar esto - funciona como muestra
}

function textoInvalido(palabra){ 

    const longitud = palabra.length;
    let i =0;
    let validez = false;
    while(i<longitud && !validez){
        if(!((palabra.charCodeAt(i)>96 && palabra.charCodeAt(i)<123) || palabra.charCodeAt(i)==32)) //comprueba que sea un caracter que se acepta y lo niega para seguir, caso contrario ingresa
            validez = true;
        i++;
    }    
    
    return validez;

}


function Copiar(){

    const mensaje = document.getElementById('mensajeSalida');
    const boton = document.getElementById('Copia');

    navigator.clipboard.writeText(mensaje.textContent);
    boton.textContent='Copiado';
}

function limpiarInput(){
    document.querySelector('#Entrada').value = '';
}

function MostrarTexto(){

    const text = document.getElementById('Entrada');
    text.textContent = 'Ingrese el texto aqui';

}

function OcultarTexto(){

    const text = document.getElementById('Entrada');
    text.textContent = '';
}