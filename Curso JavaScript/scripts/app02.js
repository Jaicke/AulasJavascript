var listElement = document.querySelector('#app02 ul');
var inputElement = document.querySelector('#app02 input');
var btntElement = document.querySelector('#app02 button');

var paraFazer = JSON.parse(localStorage.getItem('lista_itens'))  || [];

function renderFazer(){
    listElement.innerHTML='';
    for(fazer of paraFazer){
        var fazerElement = document.createElement('li');
        var fazerText = document.createTextNode(fazer);
        
        var pos = paraFazer.indexOf(fazer);
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', 'deletaParaFazer('+ pos +')');

        
        
        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);
        
        fazerElement.appendChild(fazerText);
        fazerElement.appendChild(linkElement);
        listElement.appendChild(fazerElement);
    }
    

}
renderFazer();

function addParaFazer(){
    var inputText = inputElement.value;    
    paraFazer.push(inputText);
    inputElement.value = '';
    renderFazer();
    salvaParaFazer();
}

btntElement.onclick = addParaFazer;

function deletaParaFazer(pos){
    paraFazer.splice(pos , 1);
    renderFazer();
    salvaParaFazer();
}

function salvaParaFazer(){
    localStorage.setItem('lista_itens', JSON.stringify(paraFazer));
}