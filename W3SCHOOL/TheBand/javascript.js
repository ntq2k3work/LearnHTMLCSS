var list_img = document.querySelectorAll('.slider_section');
function auto (){
    list_img.forEach(element => {
        if(element.style.display == 'block') element.style.display = 'none';
        else element.style.display = 'block'
    });
}
// setInterval(function() {
//     auto()
// },1000)