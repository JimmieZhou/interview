/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-12-05 14:01:11
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-12-07 16:19:56
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