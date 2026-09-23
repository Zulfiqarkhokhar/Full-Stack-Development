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

    // adding at last

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

    // adding at first

    addAtFirst(data){

        let newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
        }

        let tempNode = this.head;
        this.head = newNode;
        this.head.next = tempNode;
    }

    // printing nodes data

    printNode(){
        let current = this.head;
        while(current){
            console.log(current.data)
            current = current.next;
        }
    }

    // linkedlist size

    size(){
        let count = 0;
        let current = this.head;
        while(current){
            count++;
            current = current.next;
        }

        return count;
    }


    // adding at perticular index

    addAtIndex(index,data){
        let newNode = new Node(data);
        if(this.size()>0){
            let current = this.head;
            let count = 1;
            while(index>count){
                current = current.next;
                count++;
            }
            newNode.next = current.next;
            current.next = newNode;
        }
    }

    // deleting node from first

    deleteFirst(){
        if(!this.head){
            return;
        }
        this.head = this.head.next;
    }

    // deleting node from last

    deleteLast(){
        if(!this.head){
            return;
        }
        if(!this.head.next){
            this.head = null;
        }
        let current = this.head;
        while(current.next.next){
            current = current.next;
        }
        current.next = null;
    }


}

let list = new LinkedList();

list.addAtLast(10);
list.addAtLast(20);
list.addAtLast(30);
list.addAtLast(40);
list.addAtLast(50);

list.addAtFirst(60);
list.addAtFirst(70);

list.addAtIndex(3,80);

list.printNode();

list.deleteFirst();
console.log("After deleting first node")
list.printNode();


list.deleteLast();
console.log("After deleting last node")
list.printNode();

// console.log(list.size());