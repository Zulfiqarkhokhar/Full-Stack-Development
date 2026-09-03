const timer = document.getElementById('time');

setInterval(()=>{

    const time = new Date();
    timer.textContent = time.toLocaleTimeString();

},1000)