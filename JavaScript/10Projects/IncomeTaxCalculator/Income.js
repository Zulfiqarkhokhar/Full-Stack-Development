const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const input = document.getElementById('income');
    const salary = parseInt(input.value);

    let totalTax = 0;

    if(salary<=1200000)
        totalTax = 0;
    else if(salary<=1600000){
        totalTax = (salary-1200000)*0.15;
    }
    else if(salary<=2000000){
        totalTax = (salary-1600000)*0.25 + 60000;
    }
    else{
        totalTax = (salary-2000000)*0.35 + 60000 + 80000;
    }

    const result = document.getElementById('result');
    result.textContent = `Total Tax: ${totalTax}`;
    form.reset();
})