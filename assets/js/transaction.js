const showBtn = document.querySelector('.show-btn');  
const listItems = document.querySelectorAll('.forum-item'); 

for (let i = 0; i < listItems.length; i++) { //Displaying none all list item
    listItems[i].style.display = "none";
}

let n = 1;

for (let i = 0; i <= n; i++) { // Displaying block n(0) items of list   
    listItems[i].style.display = "block";
}
n += 3; //Adding 3 to the value of n(here: 1 + 3 = 4)  

showBtn.addEventListener('click', () => {
    showBtn.style.display = "none";
    setTimeout(() => {
        for (let i = 0; i <= n; i++) { // Displaying block n items of list after pressing show-btn (every time +3 items)  
            listItems[i].style.display = "block";
        }
        if (n <= listItems.length) {  
            n += 3;
        }
        showBtn.style.display = "block";

    }, 500);
  
});


// Modal Start
const addBtn = document.querySelector('.add-btn');
const bgModal = document.querySelector('.bg-modal');
const modalContents = document.querySelector('.madal-contents');
const toggleSidebarBtn = document.querySelector('.toggle-sidebar-btn');
const cross =document.querySelector('.cross');
const body = document.querySelector('body');

addBtn.addEventListener('click', () => {
    bgModal.style.display = "flex";
    toggleSidebarBtn.style.display = "none";
    body.classList.add('toggle-sidebar');
});

cross.addEventListener('click', () => {
    bgModal.style.display = "none";
    toggleSidebarBtn.style.display = "block";
    body.classList.remove('toggle-sidebar');
});
bgModal.addEventListener('click', () => {
    bgModal.style.display = "none";
    toggleSidebarBtn.style.display = "block";
    body.classList.remove('toggle-sidebar');
});
// Modal End