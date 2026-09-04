console.log("Start");

setTimeout(()=>{
    console.log("I am middle"); // handled by web api --> callback queue --> stack -> executed by Js
},3000)

console.log("End")

// JavaScript it single threaded synchronous language it execute the code and does not stop for any asynch task
// so the task like setTimeOut or fetch or any asynch is handle by WEB API 
// after time or result the task is sent to CallBack QUeue and then
// Event loop take it back into stack and javascript run it

// high priority task like fetch are placed in Microtask Queue and Event Loop take back to stack