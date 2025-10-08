const buttonMode = document.getElementById("mode");
const body = document.body;

buttonMode.addEventListener('click', () => {
    body.classList.toggle('dark');

    if(body.classList.contains('dark')){
        buttonMode.textContent= "Mode Terang";
    }
    else{
        buttonMode.textContent= "Mode Gelap"
    }
})
