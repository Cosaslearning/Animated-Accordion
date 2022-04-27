const item = document.getElementsByClassName('item');
const plusicon = document.getElementsByClassName('plus');
const closeicon = document.getElementsByClassName('close');

for(let i = 0; i < item.length; i++){
    closeicon[i].style.display = "none";
    item[i].addEventListener('click', () => {
     const showPlus = item[i].classList.toggle("active");
     if(showPlus){
         closeicon[i].style.display = "block";
         plusicon[i].style.display = "none";
     }else{
        closeicon[i].style.display = "none";
        plusicon[i].style.display = "block"; 
     }
    })
}