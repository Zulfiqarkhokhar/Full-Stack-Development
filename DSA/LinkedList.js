class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    addAtLast(data){
        let newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            return
        }

        let current = this.head;
        while(current.next){
            current = current.next;
        }

        current.next = newNode;
    }

    printNode(){
        let current = this.head;
        while(current){
            console.log(current.data)
            current = current.next;
        }
    }
}

let list = new LinkedList();

list.addAtLast(10);
list.addAtLast(20);
list.addAtLast(30);
list.addAtLast(40);
list.addAtLast(50);

list.printNode();