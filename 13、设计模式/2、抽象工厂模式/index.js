// 开闭原则，对扩展开放，对修改关闭

class MobilePhoneFactory {
    createOs() {
        new Error('抽象工厂方法不允许直接调用，你需要将我重写！')
    }
    createHardware() {
        new Error('抽象工厂方法不允许直接调用，你需要将我重写！')
    }
}

class OS {
    controlHardWare() {
        throw new Error('抽象产品方法不允许直接调用，你需要将我重写！');
    }
}

class AndoridOS extends OS {
    controlHardWare() {
        console.log('我会用安卓的方式去操作硬件');
    }
}

class AppleOS extends OS {
    controlHardWare() {
        console.log('我会用苹果的方式去操作硬件');
    }
}

class HardWare {
    operateByOrder() {
        throw new Error('抽象产品方法不允许直接调用，你需要将我重写！');
    }
}

class QualcommHardWare extends HardWare {
    operateByOrder() {
        console.log('我会用高通的方式去运转');
    }
}

class MiWare extends HardWare {
    operateByOrder() {
        console.log('我会用小米的方式去运转')
    }
}

class MobilePhone extends MobilePhoneFactory {
    createOs() {
        return new AndoridOS();
    }
    createHardware() {
        return new QualcommHardWare();
    }
}

const myPhone = new MobilePhone()
const myOS = myPhone.createOs()
const myHardware = myPhone.createHardware()
myOS.controlHardWare()
myHardware.operateByOrder()


