/*-------navigation bar function------*/
function myMenuFunction(){

    var menuButton = document.getElementById("myNavMenu");
    if(menuButton.className === 'nav-menu'){
        menuButton.className += 'responsive';
    }else{
        menuButton.className = 'nav-menu';
    }
}