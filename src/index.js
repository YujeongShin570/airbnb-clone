const modal = document.querySelector(".modal");
const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
// function openModal(){
//     var modal = document.querySelector('.modal');
//     modal.classList.add('active');
// }
modalBtn.onclick = function(){
    modal.style.display = "none"
}

window.onclick = function(e){
    if(e.target == modal){
        modal.style.disply = "none"
    }
}
// modal.addEventListener('click', () => {
//     modal.classList.remove('active');
// })



