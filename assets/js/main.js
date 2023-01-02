function clock(){

    function getTimeFromSeconds(seconds){
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-BR',{
            hour12:false,
            timeZone:'UTC'
        });
    }
    
    const relogio = document.querySelector('.relogio');
    let seconds=0;
    let timer;
    
    function startClock(){
        relogio.classList.remove('pausado');
        timer = setInterval(function(){
            seconds++;
            relogio.innerHTML = getTimeFromSeconds (seconds);
        },1000);
    }
    
    document.addEventListener('click', function(e){
        const el = e.target;
        const getIniciar = document.getElementById("iniciar");
        
        if(el.classList.contains('zerar')){
            clearInterval(timer);
            relogio.innerHTML='00:00:00';
            seconds = 0;
            relogio.classList.remove('pausado');  
            getIniciar.innerHTML = 'iniciar';
            getIniciar.disabled = false;     
        }
        
        if (el.classList.contains('iniciar')){
            getIniciar.innerHTML = 'iniciar';
            getIniciar.disabled = true;     
            relogio.classList.remove('pausado');      
            clearInterval(timer);
            startClock();
        }
    
        if (el.classList.contains('pausar')){
            clearInterval(timer);
            relogio.classList.add('pausado');
            getIniciar.innerHTML = 'reiniciar';
            getIniciar.disabled = false;     
        }
    })
}

clock();


