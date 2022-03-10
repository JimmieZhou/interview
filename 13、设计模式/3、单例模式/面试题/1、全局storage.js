// 实现 Storage
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


