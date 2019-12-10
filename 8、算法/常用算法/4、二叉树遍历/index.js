/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-12-10 11:13:15
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-12-10 11:18:11
 */

/**
 * 二叉树的先序，中序，后序遍历
先序遍历表示先访问根节点，然后访问左节点，最后访问右节点。

中序遍历表示先访问左节点，然后访问根节点，最后访问右节点。

后序遍历表示先访问左节点，然后访问右节点，最后访问根节点。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var result = [];
    function pushRoot(root){
        if(root != null){
            
            if(root.left != null){
                pushRoot(root.left);
            }
            result.push(root.val);
            if(root.right !=null){
                pushRoot(root.right);
            }
        }
    }
    pushRoot(root);
    return result;
};