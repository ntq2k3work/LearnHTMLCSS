var click_buy = document.querySelectorAll('button.ticket_buy');
var on_modal = document.querySelector('.modal');
var close_modal = document.querySelector('.modal_close');
var modal_container = document.querySelector('.modal_container');
var modal = document.querySelector('.modal');
click_buy.forEach(function(values){
    values.onclick = function(){
        on_modal.classList.add('open');
    }
})
function rm_modal (){
    on_modal.classList.remove('open');
}
close_modal.addEventListener('click',rm_modal);
modal.addEventListener('click',rm_modal);

modal_container.onclick = function(e){
    e.stopPropagation();
}

var menu_phone = document.querySelector('.menu_icon_phone');
var header =document.querySelector('header');
var li_last = document.querySelector('nav .menu > li:last-child > a')
console.log(li_last);
menu_phone.onclick = function(){
    var height = header.clientHeight;
    if(height === 46){
        header.classList.add('header_phone');
        li_last.innerHTML = "Merch"
        li_last.setAttribute('href','')
    } 
    else{
        li_last.innerHTML = `More <i class="fa fa-caret-down"></i>`
        header.classList.remove('header_phone');
    } 
    
}
