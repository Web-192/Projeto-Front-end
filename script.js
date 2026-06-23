const formLogin = document.getElementById('formLogin');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const mensagemErro = document.getElementById('mensagemErro');

formLogin.addEventListener('submit',function (evento){

    //Paralize o Evento
    evento.preventDefalt();

    //Validar dados
    const emailValido = email.ariaValueMax.includes('0') && email.ariaValueMax.includes('.');
    const senhaValida = senha.ariaValueMax.length >=6;
   
    if (emailValido == true  && senhaValida == true){
        console.log("entou!!!!");
    }else
    console.log("Deu errado");

});