const newElement = document.createElement("h2");
newElement.textContent = "I am JavaScript Developer";
newElement.id = "second";

const h1 = document.getElementById("first");
h1.after(newElement);


const newElement2 = document.createElement("h2");
newElement2.textContent = "I love coding";
newElement2.id = "third";
newElement2.classList.add("bio");
newElement2.classList.add("intro");

newElement.after(newElement2);

// adding element inside element like list

const unOrderedList = document.getElementById("listing");

const li1 = document.createElement("li");
li1.textContent = "Milk";

unOrderedList.append(li1);

const li2 = document.createElement("li");
li2.textContent = "Sugar"
unOrderedList.prepend(li2);

// to delete any element

h1.remove();


// events

// function handleClick(){
//     const element = document.getElementById("event");
//     element.textContent = "I am Event tiggered";
// } old way

// new way

const element = document.getElementById("event");

element.addEventListener('click',()=>{
    element.textContent = "I am event Tiggered"
})

element.addEventListener('click',()=>{
    element.style.color = "red"
})

element.addEventListener('dblclick',()=>{
    element.textContent = "I am clicked twice";
})


