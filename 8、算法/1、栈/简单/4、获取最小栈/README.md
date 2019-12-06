<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-12-06 17:38:57
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-12-06 17:39:29
 -->
设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

push(x) -- 将元素 x 推入栈中。  
pop() -- 删除栈顶的元素。  
top() -- 获取栈顶元素。  
getMin() -- 检索栈中的最小元素。  
示例:  
  
MinStack minStack = new MinStack();  
minStack.push(-2);  
minStack.push(0);  
minStack.push(-3);  
minStack.getMin();   --> 返回 -3.  
minStack.pop();  
minStack.top();      --> 返回 0.  
minStack.getMin();   --> 返回 -2.  
