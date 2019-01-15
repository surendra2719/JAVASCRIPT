class node {
    constructor(element) {
        this.element = element;
        this.next = null;

    }
}
class linkedlist {

    add(element) {

        var n = new node(element);

        if (this.head == null) {
            this.head = n;
            this.size++;
            return;
        }
        var t = this.head;
        while (t.next != null) {
            t = t.next;
        }
        this.size++;
        t.next = n;
        return;


    }

    inserstionfirst(element) {
        var n = new Node(element);
        if (head == null) {
            this.head = n;
            this.size++;
            return;
        }
        else {
            n.next = this.head;
            this.head = n;
            this.size++;

        }

    }
    inserst(element, index) {
        if (index == 0) {
            this.inserstionfirst(element)
            return;

        }
        if (this.head == null) {
            return;
        }
        else {
            var n = new Node(element);
            var t = 0;
            var prev = this.head;
            var current = this.head;
            while (current) {
                if (t == index - 1) {
                    prev.next = n;
                    n.next = current;
                    this.size++;
                    return;
                }

                t++;
                prev = current;
                current = current.next;
            }
            return false;

        }

    }
    deleteFirst() {
        if (this.head = null) {
            console.log("EMPTY LINKED LIST")
        }
        var n = this.head;
        this.head = head.next;
        this.size--;
        return n;
    }
    Pop() {
        if (this.head == null) {
            console.log("linked list is empty ");
        }
        if (this.head.next == null) {
            return;
        }
        var current = this.head;
        var prev = this.head;
        while (this.head.next != null) {
            prev = current;
            current = cuirrent.next;
        }
        prev.next = null;
        this.size--;
        return current.next;

    }
    Popindex(index) {
        if (index < 0) {
            console.log(" enter correct index");
            return false;
        } else if (index == 1) {
            this.deleteFirst();
            return;
        }
        var current = this.head;
        var prev = current;
        var t = 0;
        while (current) {
            if (t == index - 1) {
                prev.next = current.next;
                this.size--;
                return current.element;

            }
            t++;
            prev = current;
            current = current.next;
        }
        return null


    }
    Remove(element) {

        var current = this.head;
        if (current.element == element) {
            this.deleteFirst();
            return;
        }
        var prev = current;
        while (current) {
            if (current.element == element) {
                prev.next = current.next;
                this.size--;
                return current.element;

            }

            prev = current;
            current = current.next;
        }
        return null;
    }
    search(item) {
        if (this.head == null) {
            return false;
        }

        var current = this.head;
        while (current) {
            if (current.element == item) {
                return true;
            }

            current = current.next;
        }
        return false;
    }
    isEmpty() {
        if (this.size == 0) {
            return true;
        }
        return false;
    }
    sizeoflist() {
        return this.size;
    }

    displayQueue() {
        var current = this.head;
        var str = "";
        while (current) {
            str = str + current.element + " ";
            if (current.next != null) {
                str = str + " ";
            }
            current = current.next;
        }
        return str;
    }
    addAscending(){
        var main=this.head;
          var mainHead=null;
        while(main){
         var n=new node(main.element);
         var flag=true;
         if(mainHead==null){
           
             mainHead=n;
          this.head=mainHead;
 
         }else{
             var prev=mainHead,current=mainHead;
             if(current.next==null){
                 if(n.element<current.element){
                     n.next=current;
                     mainHead=n;
                     flag=false;
                 }
             }
             while(current&&flag){
               if(n.element<current.element){
                   prev.next=n;
                   n.next=current;
                   flag=false;
               }
 
                 prev=current;
                 current=current.next;
             }
             if(flag){
                 prev.next=n;
             }
         }
         
            main=main.next;
 
        }
        return this.head=mainHead;
    }
    sort() {
        do {
            var swaping = 0;
            var temp = this.head;
            while (temp.next != null) {
                if (parseInt(temp.next.data) < parseInt(temp.data)) {
                    var n = temp.next.data;
                    temp.next.data = temp.data;
                    temp.data = n;
                    swapped = 1;


                }
                temp = temp.next;
            }
        } while (swaping)
    }
    show() {

        var temp = this.head;
        var str = "";
      

        while (temp != null) {
            str = str + temp.element+" ";
            if(temp.next!=null){
            str=str+" ";
            }
            temp = temp.next;
        }
        console.log(str);



    }
    getData() {
        var current = this.head;
        var str = "";
        while (current) {
            str = str + current.element;
            if (current.next != null) {
                str = str + " ";
            }
            current = current.next;
        }
        return str;
    }



}


module.exports = {
    linkedlist
}
