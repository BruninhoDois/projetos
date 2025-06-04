var visitante= 2000;
var nome = "Pedro Samuel;"


if(visitante === 2000){
    alert("Parabéns "+nome+" , você ganhou 50 mil reais!")
}else{
    alert("Perdeu trouxa!!");
}
/*cpomentário*/
//obtém o componente do menu do celular(icone)
var celular = document.querySelector('.celular');
//obtém lista
var listaMenu = document.querySelector('.menu ul');

//evento de click no menu
celular.addEventListener('click', function(){
    listaMenu.classList.toggle('mostraMenu');
});




