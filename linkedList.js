
const Node = (data,next) => {

   if (data == undefined){
    data = null
   }
   if (next == undefined){
    next = null
   }

    return {data,next}
}


const LinkedList = () => {

    return {
        head:null,
        tail:null,
        size:0,
        append: function(data){
            
            if(Object.keys(this.tail).length === 0){ //after adding the pop() method, i had to create this conditional, because the new tail node was getting inside a double "next" parent.

                this.tail.data = Node(data).data
                this.tail.next= Node(data).next
                this.tail = Node(data)
                this.size++
            }
            else{
            
            this.tail.next = Node(data)  //we append the node to the last.next node.
            this.tail = this.tail.next  //we change the tail value to the new node.
            this.size++
            }
            
            
        },
        prepend : function (data) {
            currentHead = this.head
            this.head = Node(data,currentHead) //we save the current value of head, and then, we put the new node as head, and the saved value of head, will be the next node of the new one.
            
            if(this.head.next == null){ //if we prepend a new node, IE for the first time, the next node will be null, so this new head will be also the tail. So if we keep pushing new nodes using prepend, the tail will always be correct.
               this.tail = this.head
            }
            this.size++
        },
        at : function (index) {

            let currentValue = this.head
            let nextValue = currentValue.next
            
            for (let i = 0; i < index; i++) {
               
              currentValue = nextValue //exchanging these values, we are able to traverse the linked list using a loop, the value index determines how much we want to traverse the LL.
              nextValue = currentValue.next   
            }

            return currentValue
        },
        pop : function () {            
          delete this.tail.data
          delete this.tail.next
          this.size--
  
        },
        contains : function (data){

            let currentValue = this.head
            let nextValue = currentValue.next
            let hasValue = false

            if(currentValue.data == data){  //if the head.data value of the linked list matches the input value, we return true, if not, we traverse the LL searching the input value.
                hasValue = true
                return hasValue
            }
            else {

            for (let i = 0; i < this.size-1; i++) {
               
              currentValue = nextValue 
              nextValue = currentValue.next  

              if(currentValue.data == data){
                 hasValue = true
              }
              
            }
            return hasValue
               }
        },
        find: function (data) {

            let currentValue = this.head
            let nextValue = currentValue.next
            let hasValue = false
            // i used the traverse algorithm of at() and contains(), but instead of returning the node or a boolean, i returned the size of the linked list, when the node value is matched. 
            for (let i = 0; i < this.size-1; i++) { 
               
              currentValue = nextValue
              nextValue = currentValue.next

              if (currentValue.data == data) {
                hasValue = true
                return this.size-1
              }
            }
            if (hasValue == false) return null
        },
        toString: function () {
            //first, convert the LL to a string, and then, simplify it and replace commas with " => ".
            const linkedList = JSON.stringify(this.head)
            const simpleList = linkedList.replace(/"/g,"").replace(/:/g,"").replace(/{/g,"").replace(/}/g,"").replace(/next/g,"").replace(/data/g,"")
            const finalList = simpleList.replace(/,/g," => ")

            return finalList
        }
    }

}



const LinkedListExample = LinkedList()

LinkedListExample.prepend(100)
LinkedListExample.prepend(200)
LinkedListExample.append(300)
LinkedListExample.append(500)
LinkedListExample.pop()
LinkedListExample.append(400)



console.log(LinkedListExample.toString())




