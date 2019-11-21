/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-10-31 16:28:30
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-10-31 17:31:46
 */
// 组合继承
function Parent(value) {
  this.value = value;
}
Parent.prototype.getValue = function() {
  console.log(this.value);
};

function Son(value) {
  Parent.call(this, value);
}
Son.prototype = new Parent();
Son.prototype.constructor = Son;

var son = new Son(1);
son.getValue();
son instanceof Parent;
son.value;

// 寄生组合继承
function Parent(value) {
  this.value = value;
}
Parent.prototype.getValue = function() {
  console.log(this.value);
};
function Son(value) {
  Parent.call(this, value);
}
Son.prototype = Object.create(Parent.prototype, {
  constructor: {
    value: Son,
    enumerable: false,
    writable: true,
    configurable: true
  }
});
var son = new Son(1);
son.getValue();
son instanceof Parent;

// class 继承
class Parent {
  constructor(value) {
    this.value = value;
  }
  getValue() {
    console.log(this.value);
  }
}
class Son extends Parent{
    constructor(value){
        super(value)
    }
}
var son = new Son(1)
son.getValue()
son instanceof Parent
