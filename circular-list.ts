class LinkedList {
    private head: LinkedListItem;
    constructor(item: LinkedListItem) {
        this.head = item;
    }

    //adds a value to the end of the list
    append(val: string) {
        let currentItem: LinkedListItem = this.head;
        let newItem = new LinkedListItem(val);

        if (!currentItem) {
            this.head = newItem;
        } else {
            while (true) {
                if (currentItem.next) {
                    currentItem = currentItem.next;
                } else {
                    currentItem.next = newItem;
                    break;
                }
            }
        }
    }

    //adds a value to the beginning of the list
    prepend(val: string) {
        let newItem = new LinkedListItem(val);
        let oldHead = this.head;

        this.head = newItem;
        newItem.next = oldHead;
    }

    //deletes all instances of a value from the list
    delete(val: string) {
        var currentItem = this.head;

        if (!currentItem) {
            return;
        }

        if (currentItem.value === val) {
            this.head = currentItem.next;
        } else {
            var previous = null as any;

            while (true) {
                if (currentItem.value === val) {
                    if (currentItem.next) { // case for the last value in the list 
                        previous.next = currentItem.next;
                    } else {
                        previous.next = null as any;
                    }
                    currentItem = null as any; 
                    break;
                } else {
                    previous = currentItem;
                    currentItem = currentItem.next;
                }
            }
        }
    }

    toString() {
        let arr = [];
        let currentItem = this.head;

        while (true) {
            arr.push(currentItem.value);

            if (currentItem.next) {
                currentItem = currentItem.next;
            } else {
                break;
            }
        }

        return arr;
    }
    
    //links the last element to the first element of the list
    makeCircular(){
        let currentItem: LinkedListItem = this.head;

        while(currentItem.next){
            currentItem = currentItem.next;
        }
        currentItem.next = this.head;
        return;
        
    }
    
    //it literally just loops until it can't count how many loops it's been.
    //oh i literally can't count anymore. i guess it's a loop.
    checkCircular(){
        let currentItem: LinkedListItem = this.head;
        let counter = 0;
        while(currentItem.next){
            currentItem = currentItem.next;
            if(!currentItem.next) return false;
            if(counter == Number.MAX_SAFE_INTEGER) return true;
        }
        return true;
    }

}

class LinkedListItem {
    value: any;
    next: LinkedListItem;

    constructor(val: string) {
        this.value = val;
        this.next = null as any;
    }
}


let head = new LinkedListItem('4');
let linkedList = new LinkedList(head);


linkedList.append('52');
linkedList.append('2');
linkedList.prepend('1');

console.log("list: " + linkedList.toString()); 
linkedList.makeCircular();

//unfinished. did not fully implement circular checking, but did make a circular list.
console.log(linkedList.checkCircular())
console.log("circular: " + linkedList.toString()); 

