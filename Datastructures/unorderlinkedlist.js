/*****************************************************************************************
 *purpose   : it wiil giving methods to perform unorderlist

 
 * @file    : Unorderlinkedlist.js
 * @overview: Reading methods for unorderedlinkedlist file
 * @author  : surendra 
 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/
class node
// class for node 
 {
    constructor(element) {
        this.element = element;
        this.next = null;

    }
}
// class for linked list







class linkedlist {

    add(element)
    // method for adding elements in node
    {

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







    // method for insertion an elements at first  in node

    inserstionFirst(element) 
    {
        var n = new Node(element);
        if (head == null) {
            this.head = n;
            this.size++;
            return;
    }
        else 
        {
            n.next = this.head;
            this.head = n;
            this.size++;

        }

    }





    // method for inserstion an element at particular position in node
    inserst(element, index)
     {
        if (index == 0) 
        {
            this.inserstionfirst(element)
            return;

        }
        if (this.head == null)
         {
            return;
        }
        else 
        {
            var n = new Node(element);
            var t = 0;
            var prev = this.head;
            var current = this.head;
            while (current)  
            {
                if (t == index - 1) 
                {
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





    // method for deleting first element in  node 
    deleteFirst() 
    {
        if(this.head==null)
        {
            console.log("Linked List empty");
            return;
        }
        var n=this.head.element;
          this.head=this.head.next;
          this.size--;
          return n;
    }





// method for deleting elements in node
    remove(element) 
    {

        var current = this.head;
        if (current.element == element) 
        {
            this.deleteFirst();
            return;
        }
        var prev = current;
        while (current)
         {
            if (current.element == element)
             {
                prev.next = current.next;
                this.size--;
                return current.element;

            }

            prev = current;
            current = current.next;
        }
        return null;
    }





    //method for searching elements in node
    search(item)
     {
        if (this.head == null)
         {
            return false;
        }

        var current = this.head;
        while (current) 
        {
            if (current.element == item) 
            {
                return true;
            }

            current = current.next;
        }
        return false;
    }




    //checking whether the list is empty is or not
    isEmpty() 
    {
        if (this.size == 0)
         {
            return true;
        }
        return false;
    }
    // it will giving size of list 
    sizeOfList() 
    {
        return this.size;
    }




// method for sorting for given elements in node 
    addAscending()
    {
        var main=this.head;
          var mainHead=null;
        while(main)
        {
         var n=new node(main.element);
         var flag=true;
         if(mainHead==null)
         {
           
             mainHead=n;
          this.head=mainHead;
 
         }
         else
         
         {
             var prev=mainHead,current=mainHead;
             if(current.next==null)
             {
                 if(n.element<current.element)
                 {
                     n.next=current;
                     mainHead=n;
                     flag=false;
                 }
             }
             while(current&&flag)
             {
               if(n.element<current.element)
               {
                   prev.next=n;
                   n.next=current;
                   flag=false;
               }
 
                 prev=current;
                 current=current.next;
             }
             if(flag)
             {
                 prev.next=n;
             }
         }
         
            main=main.next;
 
        }
        return this.head=mainHead;
    }




    // method for sorting an  elements in node
    sort() 
    {
        do 
        {
            var swaping = 0;
            var temp = this.head;
            while (temp.next != null) 
            {
                if (parseInt(temp.next.data) < parseInt(temp.data)) 
                {
                    var n = temp.next.data;
                    temp.next.data = temp.data;
                    temp.data = n;
                    swapped = 1;


                }
                temp = temp.next;
            }
        }
         while (swaping)
    }




    // method for displaying an elements in node
    show()
     {

        var temp = this.head;
        var str = "";
      

        while (temp != null)
         {
            str = str + temp.element+" ";
            if(temp.next!=null)
            {
            str=str+" ";
            }
            temp = temp.next;
        }
        console.log(str);



    }




    // method for getting data after the adding or removing an element in string
    getData() 
    {
        var current = this.head;
        var str = "";

        while (current) 
        {
            str = str + current.element;
            if (current.next != null)
             {
                str = str + " ";
            }
            current = current.next;
        }
        return str;
    }



}
   



module.exports = 
{
    linkedlist
}
