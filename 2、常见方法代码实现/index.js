function create() {
  var obj = {};
  var constuctor = [].shift.call(arguments);
  obj.__proto__ = constuctor.prototype;
  var ret = constuctor.apply(obj, arguments);
  return typeof ret === "object" ? ret : obj;
}

function instanceOf(left, right) {
  left = left.__proto__;
  var prototype = right.prototype;
  while (true) {
    if (left === null) {
      return false;
    }
    if (left === prototype) {
      return true;
    }
    left = left.__proto__;
  }
}

function clone(target) {
  if (typeof target === "object") {
    var ret = Array.isArray(target) ? [] : {};
    for (key in target) {
      ret[key] = target[key];
    }
    return ret;
  }
  return target;
}

function deepclone(target, weakMap = new weakMap()) {
  if (typeof target === "object") {
    var ret = Array.isArray(target) ? [] : {};
    if (weakMap.get(target)) {
      return weakMap.get(target);
    }
    weakMap.set(target, ret);
    for (key in target) {
      ret[key] = deepclone(target[key]);
    }
    return ret;
  }
  return target;
}

function debunce(fn, delay) {
  var timmer = null;
  return function () {
    var ctx = this;
    var args = arguments;
    if (timmer) clearTimeout(timmer);
    timmer = setTimeout(() => {
      fn.apply(ctx, args);
    }, delay);
  };
}

function throttle(fn, interval) {
  var last = 0;
  return function () {
    var ctx = this;
    var args = arguments;
    var now = +new Date();
    if (now - last >= interval) {
      last = now;
      fn.apply(ctx, args);
    }
  };
}

function debunce2(fn, delay) {
  var timmer = null;
  var last = 0;
  return function () {
    var ctx = this;
    var args = arguments;
    var now = +new Date();
    if (now - last >= delay) {
      last = now;
      fn.apply(ctx, args);
    } else {
      if (timmer) clearTimeout(timmer);
      timmer = setTimeout(function () {
        last = now;
        fn.apply(ctx, args);
      }, delay);
    }
  };
}

function mycall(ctx) {
  var context = ctx || window;
  context.fn = this;
  var args = [...arguments].slice(1);
  var ret = context.fn(...args);
  delete context.fn;
  return ret;
}

function myapply(ctx) {
  var context = ctx || window;
  context.fn = this;
  var ret;
  if (arguments[1]) {
    ret = context.fn(...arguments[1]);
  } else {
    ret = context.fn();
  }
  delete context.fn;
  return ret;
}

function mybind(ctx) {
  if (typeof this !== "function") {
    throw new TypeError("err");
  }
  var _this = this;
  var args = [...arguments].splice(1);
  return function F() {
    if (this instanceof F) {
      return new _this(...arguments, ...args);
    }
    return _this.apply(context, [...arguments, ...args]);
  };
}

setTimeout(() => {
  var total = 10000;
  var once = 20;
  var times = total / once;
  var countOfRender = 0;
  var ul = document.querySelector("ul");
  function add() {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < once; i++) {
      var li = document.createElement("li");
      li.innerText = Math.trunc(Math.random() * total);
      fragment.append(li);
    }
    ul.append(fragment);
    countOfRender++;
    loop();
  }
  function loop() {
    if (countOfRender < times) {
      requestAnimationFrame(add);
    }
  }
  loop();
}, 0);
