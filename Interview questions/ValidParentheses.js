function validParentheses(parentheses){

    let stack = [];
    let par = new Map([
        [")","("],
        ["}","{"],
        ["]","["],
    ]);

    for(let char of parentheses){
        if(char === "(" || char === "{" || char === "["){
            stack.push(char);
        }else{

            if(stack.length === 0){
                return 0;
            }

            let top = stack.pop();

            if(top !== par.get(char)){
                return false;
            }
        }
    }

    return stack.length === 0;

}


console.log(validParentheses("()[]{}"))
console.log(validParentheses("(]"))