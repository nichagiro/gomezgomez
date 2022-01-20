const formy = document.getElementById('formy');
formy.addEventListener('submit', (e) => {
    e.preventDefault();
    const button = document.getElementById('btn-contact');
    button.setAttribute('disabled', true);
    button.innerText = 'Cargando...'
    const data = new FormData(formy);
    fetch('assets/php/contact.php',{
        body: data,
        method: 'POST',

    })
    .then(response => response.json())
    .then(data => {
        if(data == 'ok'){           
            ShowAlert('success');
            formy.reset();
            SetDisplayButton(true)
        }
        else{
            ShowAlert('danger');
            SetDisplayButton(false)
        }
    });
})

const ShowAlert = color => {
    const msg = color == 'info' ? 'Se envio con exito' : 'llene todos los campos'
    const alert =   
        `<div id="alert" class="alert alert-${color} fixed-top w-100" role="alert">
            ${msg}
        </div>`

    document.getElementById('alertContact').innerHTML =alert;

    setTimeout(() => {
        document.getElementById('alert').remove()
    }, 4000);
}

const SetDisplayButton = (disabled) => {
    const button = document.getElementById('btn-contact');
    if(disabled){
        button.innerText = 'ENVIADO'
        button.removeAttribute('disabled');
    } 
    else{
        button.removeAttribute('disabled');
        button.innerText = 'ENVIA MENSAJE'
    }
}

