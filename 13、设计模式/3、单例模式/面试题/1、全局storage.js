// 实现 Storage class
class Storage {
    static getInstance() {
        if (!Storage.instance) {
            Storage.instance = new Storage()
        }
        return Storage.instance
    }

    getItem(key) {
        return localStorage.getItem(key)
    }

    setItem(key, value) {
        localStorage.setItem(key, value);
    }
}
const storage1 = Storage.getInstance()
const storage2 = Storage.getInstance()
storage1.setItem('name', 'abc')

console.log(storage1 === storage2)
console.log(storage1.getItem('name'))
console.log(storage2.getItem('name'))


// 闭包
function StorageBase() { }
StorageBase.prototype.setItem = function (key, value) {
    return localStorage.setItem(key, value)
}
StorageBase.prototype.getItem = function (key) {
    return localStorage.getItem(key)
}
const Storage = (function () {
    let instance = null
    return function () {
        if (!instance) {
            instance = new StorageBase()
        }
        return instance
    }
})()

const storage3 = new Storage()
const storage4 = new Storage()
storage3.setItem('name', 'abc')

console.log(storage3 === storage4)
console.log(storage3.getItem('name'))
console.log(storage4.getItem('name'))