class Node {
    /**
     * 
     * @param {data} data 
     */

    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class mylinklist {

    add(data) {

        var n = new Node(data);

        if (this.head == null) {
            this.head = n;
            this.cap++;
            return;
        }

        var t = this.head;
        while (t.next != null) {

            t = t.next;
        }
        t.next = n;
        this.cap++;
        return;

    }
    display() {
        var t = this.head;
        var show = "";

        while (t != null) {


            show = show + t.data;
            if (t.next != null) {
                show =show + " ";
            }
            t = t.next;
        }
        console.log(show);
    }
    search(element) {
        var temp = this.head;
        // console.log("remove");
        while (temp != null) {
            // console.log(element+"== "+ temp.data);
            // console.log(element==temp.data.trim());

            // console.log('element: '+ typeof(element)+' ' + temp.data);
            // console.log('tempdata '+typeof(temp.data)+' ' +element);
            if (element == temp.data.trim()) {

                return true;
            }
            temp = temp.next;
        }
        return false;
    }
    remove(element) {
        var temp = this.head;
        var prev = this.head;
        //console.log(temp.data);
        if (temp.data.trim() == element) {
            this.head = temp.next;
            return true;
        }
        // console.log(temp.data);
        while (temp.data.trim() != element) {
            prev = temp;
            temp = temp.next;
        }

        prev.next = temp.next;
        return;
    }
    getdata() {
        var t = this.head;
        var disp = "";


        while (t != null) {
            disp = disp + t.data;
            if (t != null) {

                disp = disp + " ";
            }

            t = t.next;
        }
        return disp;
    }
    sort() {
        //console.log("sorted enter ");
        //  var temp2 = null;
        do {
            var swapped = 0;
            var t = this.head;
            while (t.next != null) {

                if (parseInt(t.next.data) < parseInt(t.data)) {

                    var neww = t.next.data;
                    t.next.data = t.data;
                    t.data = neww;
                    swapped = 1
                }
                t = t.next;
            }

        } while (swapped)
    }
    addInSequence2(item) {
        var current;
        var node = new Node(item);

        /* Special case for head node */
        if (this.head == null || this.head.data >= item) {
            node.next = this.head;
            this.head = node;
            return;
        }
        else {

            /* Locate the node before point of insertion. */
            current = this.head;

            while (current.next != null && current.next.data < item)
                current = current.next;

            node.next = current.next;
            current.next = node;
        }
    }

    isEmpty() {
        if (this.head == null) {
            return true;
        }
    }
    /**
     * @description find the present size of linkedlist
     * @returns {Number} size of linkedlist
     */
    size() {
        return this.capacity;
    }
}
module.exports = {
    mylinklist
}