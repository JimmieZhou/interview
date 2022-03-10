// 保证一个类仅有一个实例，并提供一个访问它的全局访问点，这样的模式就叫做单例模式。
// Redux 和 Vuex，它们都实现了一个全局的 Store 用于存储应用的所有状态。这个 Store 的实现，正是单例模式的典型应用。

class Singleton {
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
const ins1 = Singleton.getInstance()
const ins2 = Singleton.getInstance()
ins1 === ins2 // true
