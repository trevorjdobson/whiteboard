let stack = [];

let isBalanced = function(input){
    if(input === ''){
        console.log(true)
        return true;
    }
    stack = input.split('');
    if(stack.length % 2  !== 0){

        console.log(false)
        return false;
    }
    if(stack[0] === '}'){
        console.log(false)
        return false;
    }
    while(stack.length > 0){
        while(stack[0] === '{' && stack[stack.length -1] === '}' || stack[0] === '}' && stack[stack.length -1] ==='{'){
            stack.splice(0, 1);
            stack.splice(stack.length -1, 1)
            if(stack.length ===0){
                console.log(true)
                return true;
            }
            
        }
        console.log(false)
        return false;
    }
}

isBalanced('');     //true
isBalanced('}{');   //false
isBalanced('{{}');  //false
isBalanced('{}{}'); //true
isBalanced('{{}}'); //true
isBalanced('{{{}}{'); //false
