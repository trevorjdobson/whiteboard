
//Check Link List for ascending order, return true if it is in ascending order
class ListNode {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor(){
        this.root = null;
    }
    isEmpty(){
        return this.root === null; 
    }
    prepend(value){
        let node = new ListNode(value);
        node.next = this.root;
        this.root = node;
    }
    listSize(){

    }
    isSorted(){
        let current = this.root;
        
        while(current !== null){
            current = current.next
        }
        return result;
    }
}
    

let list = new LinkedList();
list.prepend(5);
list.prepend(8);
list.prepend(10);
console.log(list)

// let current = list.root
// while (current !== null){
//     current = current.next
// }

// function isSorted(arr){
//     if(arr.length <= 1){
//         return true;
//     }
//     for(let i = 1; i < arr.length; i++){
//         if(a[i-1] >= a[i]){
//             return false;
//         }
//     }
//     return true;
// }