// window --> it is global object created by browser and inserted into js file
// document --> is also object inside the window

document.getElementById("IdName"); // first, second etc

document.getElementsByTagName("TagName");// h1, ul, form etc will return htmlcollection like array [...htmlCollection]

document.getElementsByClassName("ClassName"); // flex, color etc

// query selector

document.querySelector("")// you can write id class or tag here but #id, .class and tag name like that
// it will give you the first element found not all

// for all

document.querySelectorAll(""); // will return nodelist like array you can convert it [...nodeList]