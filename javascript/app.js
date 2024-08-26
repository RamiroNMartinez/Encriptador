const mensajeEntrada = document.getElementById('Entrada');
const mensajeSalida = document.getElementById('mensajeSalida');
const botonCopiar = document.getElementById('Copia');
const botonDesencriptar = document.getElementById('Desencriptar');
const botonEncriptar = document.getElementById('Encriptar');



function Encriptar(entrada, mensajeSalida, botonCopiar){ 
    let palabraEntrada = entrada.value;

    mensajeSalida.textContent = ''; //limpio el mensaje antes de empezar
    botonCopiar.textContent='Copiar'; 

    if(!textoValido(palabraEntrada) && palabraEntrada!=''){ //Valida que el texto esté en minúsculas y sin acentos
        //vibra el textarea 
        ocultarMensaje();
        activarError();

        return;
    }
    limpiarInput(entrada);  //limpio la entrada acá para que no quede basura
    if(palabraEntrada==='' || palabraEntrada.replaceAll(' ','')===''){
        ocultarMensaje();
        return;
    }
        
    if(palabraEntrada.includes('e')){
        palabraEntrada = palabraEntrada.replaceAll('e','enter');
    }
    if(palabraEntrada.includes('i')){
        palabraEntrada = palabraEntrada.replaceAll('i','imes');
    }
    if(palabraEntrada.includes('a')){
        palabraEntrada = palabraEntrada.replaceAll('a','ai');
    }   
    if(palabraEntrada.includes('o')){
        palabraEntrada = palabraEntrada.replaceAll('o','ober');
    }
    if(palabraEntrada.includes('u')){
        palabraEntrada = palabraEntrada.replaceAll('u','ufat');
    }

    mensajeSalida.textContent = palabraEntrada; 
    mostrarMensaje();
}    

function Desencriptar(entrada, mensajeSalida, botonCopiar){ 
    let palabraEntrada = entrada.value;

    mensajeSalida.textContent = ''; //limpio el mensaje antes de empezar
    botonCopiar.textContent='Copiar';

    if(!textoValido(palabraEntrada) && palabraEntrada!=''){ //Valida que el texto esté en minúsculas y sin acentos
        //vibra el text area y muetras el error
        ocultarMensaje();
        activarError();

        return;
    }
    limpiarInput(entrada);
    if(palabraEntrada==='' || palabraEntrada.replaceAll(' ','')===''){
        ocultarMensaje();
        return;
    }

    if(palabraEntrada.includes('enter')){
        palabraEntrada = palabraEntrada.replaceAll('enter','e');
    }
    if(palabraEntrada.includes('imes')){
        palabraEntrada = palabraEntrada.replaceAll('imes','i');
    }
    if(palabraEntrada.includes('ai')){
        palabraEntrada = palabraEntrada.replaceAll('ai','a');
    }
    if(palabraEntrada.includes('ober')){
        palabraEntrada = palabraEntrada.replaceAll('ober','o');

    }
    if(palabraEntrada.includes('ufat')){
        palabraEntrada = palabraEntrada.replaceAll('ufat','u');

    }
    
    mensajeSalida.textContent = palabraEntrada; 
    mostrarMensaje();

}

//Valido si el texto esta sólo en minúsculas y no contiene nada más que minúsculas
function textoValido(palabra){ 

    return /^[a-zñ ]+$/.test(palabra);  
}


function Copiar(boton, palabraEntrada){
    const mensaje = palabraEntrada;

    navigator.clipboard.writeText(mensaje.textContent);
    boton.textContent='Copiado';
    setTimeout(() => {
        boton.textContent = 'Copiar';
    }, 1800);
}

function limpiarInput(entrada){
    entrada.value = '';
}

function activarError(){
    const entrada = document.getElementById('Entrada');
    const icono = document.getElementById('icono');
    const texto = document.getElementById('texto');

    icono.classList.add('texto--error');
    texto.classList.add('texto--error');
    entrada.classList.add('vibrar--cambio');
    setTimeout(() => {
        entrada.classList.remove('vibrar--cambio');
        icono.classList.remove('texto--error');
        texto.classList.remove('texto--error');
    }, 1000);
}

function mostrarMensaje(){
    const contConMensaje = document.getElementById('contenido--Cmsj');
    const contSinMensaje = document.getElementById('contenido--Smsj');

    contConMensaje.style.display = 'flex';
    contSinMensaje.style.display = 'none';
}

function ocultarMensaje(){
    const contConMensaje = document.getElementById('contenido--Cmsj');
    const contSinMensaje = document.getElementById('contenido--Smsj');

    contConMensaje.style.display = 'none';
    contSinMensaje.style.display = 'flex';
}


botonEncriptar.addEventListener("click", ()=> { Encriptar(mensajeEntrada, mensajeSalida, botonCopiar) } );
botonDesencriptar.addEventListener("click", ()=> { Desencriptar(mensajeEntrada, mensajeSalida, botonCopiar) } );
botonCopiar.addEventListener("click", () => { Copiar(botonCopiar, mensajeSalida) } );