class LinkedList {
  head;
  tail;
  data = [];
  constructor(data){
    this.data = data;
    for(let i=0; i< data.length;i++){
      this.data[i] = {
        node: data[i],
        next: data[i + 1] || null
      }
      if(i === 0){
        this.head = data[i]
      }

      this.tail = data[i]
    }
  }

  print(){
    console.log("Data itself: ",this.data)
    console.log("Head: ", this.head)
    console.log("Tail: ", this.tail)
  }

  get(x){
    const node = this.findByNodeValue(x)
    console.log("The node it self: ",node)
    console.log("Whom it's pointing at: ", this.findByNodeValue(node.next) )

    console.log("Getting node by its pointer: ", this.findByNodePointer(node.next))
  }

  replace(x, y){
    const node = th
  }

  findByNodeValue(x){
    return this.data.find(node => node.node === x )
  }

  findByNodePointer(x){
    return this.data.find(node => node.next === x)
  }
}


const ll = new LinkedList([23,4,6,1,2])
ll.print()
ll.get(6)