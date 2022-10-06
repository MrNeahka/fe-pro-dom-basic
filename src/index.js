export const paintCards = () => {
  let element = document.querySelector('.item');

 while (true){
   if(element.classList.contains("likedItem")){
     element.style.background = "blue";
     break;
   }
   element = element.nextElementSibling;
  }
};

export const findElement = () => {
  const massLi = document.querySelectorAll('.item');
  for(let i = 0; i < massLi.length; i++){
    if(i % 2 === 0){
      massLi[i].style.background = "red";
    }
  }
};
