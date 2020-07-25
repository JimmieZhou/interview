// 栈
const stack = [];
stack.push("a");
stack.push("b");
stack.push("c");
while (stack.length) {
  console.log(`当前是：${stack[stack.length - 1]}`);
  stack.pop();
}

// 队列
const queue = [];
queue.push("a");
queue.push("b");
queue.push("c");
while (queue.length) {
  console.log(`当前是：${queue[0]}`);
  queue.shift();
}
