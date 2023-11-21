function validaFormulario(){
    const nome = document.getElementById ('nome').value;
    const email = document.getElementById ('#email').value;
    const senha = document.getElementById ('senha').value;
    const confirmaSenha = document.getElementById('confirmaSenha').value;

    if(nome === '' || email === '' || senha === ''){
        alert("Por favor,preencha os campos vazios!");
        return
    }
   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(emailRegex.text(email)){
        alert("Digite um e-mail válido");
        return
    }
    if( senha != confirmaSenha){
        alert("A senha deve ser igual a anterior");
        return
    }
    if(senha !== confirmaSenha){
        alert("A senha não coincidem.");
    }
   
    alert("Cadastro realizado com sucesso!");
    return

    
}
function darkMode(){
    const pagina = document.body

    pagina.classList.toggle("dark-mode");

    const botao = document.querySelector("p");

    const isDarkMode = document.body.classList.contains("dark-mode");
    
    if(isDarkMode == true){
        p.textContent = "Modo Claro"
    }else{
        p.textContent = "Modo Escuro"
    }


}