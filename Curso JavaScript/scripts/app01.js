var btnElement = document.querySelector('#botao');
var container = document.querySelector('#app');
btnElement.style.cssFloat = 'left';
        
        
btnElement.onclick = function(){
           
    var boxElement = document.createElement('div');          
    boxElement.style.width = '100';
    boxElement.style.height = '100';
    boxElement.style.backgroundColor = '#F00';  
    boxElement.style.cssFloat = 'left';   
    boxElement.style.marginTop = '50px';  
    boxElement.style.marginLeft = '20px';               
    container.appendChild(boxElement); 
            
    boxElement.onmouseover = function (){
        var newColor = getRandomColor(); // #E943F0
            boxElement.style.backgroundColor = newColor;
                
    }           
            
}
        
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

        