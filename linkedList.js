class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
    }

    append(value) {
        if(this.head === null) {
            this.head = new Node(value);
        } else {
            let temp = this.head;
            while(temp.next !== null) {
                temp = temp.next;
            }
            temp.next = new Node(value);
        }
        this.length++;
    }

    prepend(value) {
        if(this.head === null) {
            this.head = new Node(value);
        } else {
            let temp = this.head;
            this.head = new Node(value);
            this.head.next = temp;
        }
        this.length++;
    }

    getSize() {
        return this.length;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        if(this.head !== null) {
            let temp = this.head;
            while(temp.next !== null) {
                temp = temp.next;
            }
            return temp;
        }
    }

    at(index) {
        let temp = this.head;
        for (let i = 0; i <= index; i++) {
            if(i === index) {
                return temp;
            }
            temp = temp.next;
        }        
    }

    pop() {
        if(this.head !== null) {
            let temp = this.head;
            if(temp.next === null) {
                temp = null;
            } else {
                while(temp.next.next !== null) {
                    temp = temp.next;
                }
                temp.next = null;
            }
            this.length--;
        }
    }

    contains(value) {
        if(this.head === null) {
            return console.error('list is empty!');
        }

        let temp = this.head;
        while(temp !== null) {
            if(temp.value === value) {
                return true;
            }
            temp = temp.next;
        }
        return false;
    };

    find(value) {
        if(this.head === null) {
            return console.error('list is empty!');
        }

        let temp = this.head;
        let counter = 0;
        while(temp !== null) {
            if(temp.value === value) {
                return counter;
            }
            temp = temp.next;
            counter++;
        }
        return null;
    }

    insertAt(value, index) {
        if(index > this.length) {
            return console.error('list is too short!');
        }

        let temp = this.head;
        let prev;

        for (let i = 0; i <= index; i++) {
            if(i === index) {
                prev.next = new Node(value);
                prev.next.next = temp;
            }
            prev = temp;
            temp = temp.next;
        }
    }

    removeAt(index) {
        if(index > this.length) {
            return console.error('list is too short!');
        }

        let temp = this.head;
        let prev;
        if(index === 0) {
            this.head = null;
            this.head = temp.next;
        } else {
            for (let i = 0; i <= index; i++) {
                if(i === index) {
                    prev.next = temp.next;
                    temp = null;
                    break;
                }
                prev = temp;
                temp = temp.next;
            }
        }
    }

    toString() {
        if(this.head === null) {
            return console.error('list is empty!');
        }

        let temp = this.head;
        while(temp !== null) {
            console.log(String(temp.value));
            temp = temp.next;
        }
    }
}

let list = new LinkedList();

list.append('hi!');
list.prepend(54);
list.append('hello');
list.append('world');
console.log(list.find('hello'));
console.log(list.getSize());
console.log(list.getTail());
console.log(list.getHead());
list.insertAt('wtf', 3);
list.removeAt(0);
list.toString();
