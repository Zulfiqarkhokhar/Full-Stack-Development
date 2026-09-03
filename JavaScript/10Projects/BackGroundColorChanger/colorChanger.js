const parent = document.getElementById("parent");
const body = document.getElementById('body');
parent.addEventListener('click',(e)=>{

    const child = e.target;
    body.style.backgroundColor = child.id;
})