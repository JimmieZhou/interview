// 二叉树定义，创建
function TreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
const node = new TreeNode(1);

// 定义测试节点
const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D",
    },
    right: {
      val: "E",
    },
  },
  right: {
    val: "C",
    right: {
      val: "F",
    },
  },
};
// 先序遍历（根左右）
function preOrder(root) {
  if (!root) {
    return;
  }
  console.log("当前遍历的结点值是：", root.val);
  preOrder(root.left);
  preOrder(root.right);
}

// 中序遍历（左根右）
function inOrder(root) {
  if (!root) {
    return;
  }
  inOrder(root.left);
  console.log("当前遍历的结点值是：", root.val);
  inOrder(root.right);
}

// 后序遍历（左右根）
function postOrder(root) {
  if (!root) {
    return;
  }
  postOrder(root.left);
  postOrder(root.right);
  console.log("当前遍历的结点值是：", root.val);
}
