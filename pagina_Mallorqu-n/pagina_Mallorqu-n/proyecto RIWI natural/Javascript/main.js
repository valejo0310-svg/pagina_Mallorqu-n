function hidden_menu(){

    var btn = document.getElementById('show_menu');
    var menu = document.getElementsByClassName('navegacion');

    if (menu[0].classList.contains('active')){  
        btn.innerText = '≡'
    }else{
        btn.innerText = 'X'
    }
    menu[0].classList.toggle('active')
}
