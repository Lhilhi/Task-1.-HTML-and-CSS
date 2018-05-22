var myBox = document.getElementById('Box1');
var greenButton = document.getElementById('green');
var redButton = document.getElementById('red');


greenButton.addEventListener('click', function(){
myBox.style.backgroundColor = 'green'
})


redButton.addEventListener('click', function(){
myBox.style.backgroundColor = 'red'
})
