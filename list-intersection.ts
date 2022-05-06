export class LinkedList {
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


    // ------------------------------------- FINDING LIST INTERSECTIONS -------------------------------------
    checkIntersect(l2:LinkedList){
        let l1Item = this.head; //current item in L1
        let l2Item = l2.head; //current item in L2

        if (!l1Item || !l2Item) {
            return "empty list found";
        }

        if (l1Item.value === l2Item.value) {
            //first elements match
            return l1Item.value;
        } else {
            while(true){
                //check if the two items are equal
                if (l1Item === l2Item) {
                    return l1Item.value;
                }

                //if not at the end of L1, iterate through L1.
                //if yes at the end of L1, start L1 over and iterate through L2.
                if(l1Item.next){
                    l1Item = l1Item.next;
                } else {
                    l1Item = this.head;
                    if(l2Item.next){
                        l2Item = l2Item.next;
                    } else break;
                }


            }
            return "no intersection found";
        }
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
//both L1 and L2 start with head, L3 starts
let linkedList = new LinkedList(head);
let linkedList2 = new LinkedList(head);
let linkedList3 = new LinkedList(new LinkedListItem('4'))


linkedList.append('52');
linkedList.append('2');
linkedList.prepend('1');
linkedList.prepend('100');

console.log("list 1: " + linkedList.toString()); 
console.log("list 2: " + linkedList2.toString());
console.log("list 3: " + linkedList3.toString()); 

console.log("comparing 1 and 2: " + linkedList.checkIntersect(linkedList2))
console.log("comparing 1 and 3: " + linkedList.checkIntersect(linkedList3))