
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

            this.tail.next = Node(data)  //we append the node to the last.next node.
            this.tail = this.tail.next  //we change the tail value to the new node.
            this.size++
        },
        prepend : function (data) {
            currentHead = this.head
            this.head = Node(data,currentHead) //we save the current value of head, and then, we put the new node as head, and the saved value of head, will be the next node of the new one.
            
            if(this.head.next == null){ //if we prepend a new node, IE for the first time, the next node will be null, so this new head will be also the tail. So if we keep pushing new nodes using prepend, the tail will always be correct.
               this.tail = this.head
            }

            this.size++

        }
    }

}



const LinkedListExample = LinkedList()

LinkedListExample.prepend(100)
LinkedListExample.prepend(200)
LinkedListExample.append(300)
LinkedListExample.tail

console.log(LinkedListExample)

