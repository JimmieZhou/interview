// 链表的创建
function ListNode(value) {
  this.value = value;
  this.next = null;
}
const node = new ListNode(1);
node.next = new ListNode(2);

// 链表的添加操作

// 如果目标结点本来不存在，那么记得手动创建
const node3 = new ListNode(3);
// 把node3的 next 指针指向 node2（即 node1.next）
node3.next = node1.next;
// 把node1的 next 指针指向 node3
node1.next = node3;

// 链表的删除操作
// 在涉及链表删除操作的题目中，重点不是定位目标结点，而是定位目标结点的前驱结点。
const target = node1.next;
node1.next = target.next;

// 结论
// 1）高效的增删操作O(1)
// 2）麻烦的访问操作O(n)
// 链表的插入/删除效率较高，而访问效率较低；数组的访问效率较高，而插入效率较低。