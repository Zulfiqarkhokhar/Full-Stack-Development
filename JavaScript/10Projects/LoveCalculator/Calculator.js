const form = document.querySelector("form");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const boy = document.getElementById('Boy');
    const girl = document.getElementById('Girl');

    const l1 = boy.value.length;
    const l2 = girl.value.length;

    console.log(l1,l2)

    const result = Math.pow(l1,l2,3)%101;

    const resultElement = document.getElementById("result");
    resultElement.textContent = `Result: ${result}`

    form.reset();
})