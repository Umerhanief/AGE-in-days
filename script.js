function ageindays()
{
    var birthyear = prompt('what year were yor born ..good friend');
    var ageindayss = (2018-birthyear)*365;
    var h1 = document.createElement('h1');
    var textanswer = document.createTextNode('you are '  + ageindayss+  ' days old');
    h1.setAttribute('id', 'ageindays');
    h1.appendChild(textanswer);
    document.getElementById('flex-box-result').appendChild(h1);
    
}

function reset(){
    document.getElementById('ageindays').remove();
}
