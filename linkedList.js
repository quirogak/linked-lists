
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
        size:0,
        append: function(data){

            newTail = Node(data)
                                                       
            this.head.next.next = newTail 

            //on this algorithm, i need to add next "size" times to change append a new tail.

            this.size++
        },
        prepend : function (data) {
            currentHead = this.head
            this.head = Node(data,currentHead)  //we save the current value of head, and then, we put the new node as head, and the saved value of head, will be the next node of the new one.
            this.size++
        },
        tail: function(){
            let currentNode = this.head
            let nextNode = currentNode.next

            while(nextNode != null ){
                //while nextNode isn't null, we keep advancing through the linked list, by redefining the currentNode to the "nextNode", and nextNode is the next Node of this redefined variable.
                currentNode = nextNode
                nextNode = currentNode.next
            }
            return console.log(currentNode)
        },
    }

}

const LinkedListExample = LinkedList()

LinkedListExample.prepend(100)
LinkedListExample.prepend(200)
LinkedListExample.append(300)
LinkedListExample.tail()

console.log(LinkedListExample)


/*

const n1 = Node(100)
const n2 = Node(200)
n1.next = n2


console.log(n1)
*/