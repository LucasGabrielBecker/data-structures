class Stack {
  top = 0;
  data = [];
  stackSize;

  constructor(stackSize) {
    this.stackSize = stackSize;
  }
  push(x) {
    this.data[this.top] = x;
    if (this.top >= this.stackSize) return;
    this.top++;
  }

  pop() {
    console.log(`Data before pop: `, this.data);
    const removedItem = this.data.splice(this.top - 1, 1);
    this.top--;

    console.log(`Data after pop: `, this.data);
    console.log("Removed Item: ", removedItem, "\n");
  }
}

const s = new Stack(2);

console.log("Smaller than stacksize");
s.push(1);
s.push(26);
s.pop();

console.log("Bigger than stacksize");
s.push(15);
s.push(7);
s.push(234);
s.push(53246);
s.push(123);
s.pop();
