class Dog{
    name: string;
    age: number;

    // constructor 被称为构造函数
    //  构造函数会在对象创建时调用
    constructor(name: string, age: number) {
        // 在实例方法中，this就表示当前当前的实例
        // 在构造函数中当前对象就是当前新建的那个对象
        // 可以通过this向新建的对象中添加属性
        this.name = name;
        this.age = age;
    }

    bark(){
        // alert('汪汪汪！');
        // 在方法中可以通过this来表示当前调用方法的对象
        console.log(this.name);
    }
}

const dog = new Dog('小黑', 4);
const dog2 = new Dog('小白', 2);

// console.log(dog);
// console.log(dog2);

dog2.bark();


//  内部属性不指定默认就为public
// class Person{
//     //  先指定内部属性名称
//     public name:string
//     public age:number

//     //  再处理构造器函数
//     constructor(name:string, age:number){
//         //  变量覆盖内部属性
//         this.name = name
//         this.age = age
//     }

//     //  声明方法打印属性
//     showInfo(){
//         console.log(`名字:${this.name}, 姓名${this.age}`)
//     }
// }
// let p = new Person('空条承太郎',18)
// p.showInfo()    //  名字:空条承太郎, 姓名18
// p.name = 'Thever Wang'
// p.showInfo()    //  名字:Thever Wang, 姓名18

// class Person2 extends Person{
//     constructor(name:string, age:number){
//         super(name,age)
//         this.name = name
//     }
//     //  声明方法打印属性
//     showInfo(){
//         console.log(`名字:${this.name}, 姓名${this.age}`)
//     }
// }
// let p2 = new Person2('净坛使者',20)
// //  类继承了但是属性独立，只是复制了结构和方法而已
// p2.showInfo()   //  名字:净坛使者, 姓名20
// p.showInfo()    //  名字:Thever Wang, 姓名18

//  protected 不能被实例化范围，只能在子类或者内部属性中被访问修改
// class Person{
//     //  先指定内部属性名称
//     protected name:string
//     protected age:number

//     //  再处理构造器函数
//     constructor(name:string, age:number){
//         //  变量覆盖内部属性
//         this.name = name
//         this.age = age
//     }

//     //  声明方法打印属性
//     showInfo(){
//         console.log(`名字:${this.name}, 姓名${this.age}`)
//     }
// }
// let p = new Person('空条承太郎',18)
// p.showInfo()    //  名字:空条承太郎, 姓名18
// // p.name = 'Thever Wang'  //  protected不能被实例化范围，只能在子类或者内部属性中被访问修改

// class Person2 extends Person{
//     constructor(name:string, age:number){
//         super(name,age)
//     }
//     //  声明方法打印属性
//     showInfo(){
//         console.log(`名字:${this.name}, 姓名${this.age}`)
//     }
// }
// let p2 = new Person2('净坛使者',20)
// p2.showInfo()   //  名字:净坛使者, 姓名20

// private是class的私有属性，只能被这个类中使用，不能被继承和修改
// class Person{
//     protected name:string
//     protected age:number
//     private set:string = 'Person'

//     constructor(name:string,age:number){
//         this.name = name
//         this.age = age
//     }

//     showInfo(){
//         console.log(`name ${this.name}, age ${this.age} set ${this.set}`)
//     }
// }
// let p = new Person('jojo', 18)
// p.showInfo()
// // console.log(p.name) //  private实例化不能读取修改

// //  private私有属性不能被继承，只能被声明的类使用
// class Person2 extends  Person{
//     // protected set:string,   //   由于继承，不能声明与父类一样的私有属性名
//     private now:string
//     constructor(name:string, age:number){
//         // super(name,age,this.set) private不能继承
//         super(name,age)
//         this.now ='set2'
//     }
//     showInfo(){
//         console.log(`name ${this.name}, age ${this.age} now ${this.now}`)
//     }
// }
// let p2 = new Person2('dio',200)
// p2.showInfo()

// public 默认，实例用，子类用，本类用
// protect 子类用，本类用
// private 本类用

//  属性存取器可以配合private来使用，实现属性读写    
// class Person{
//     private _name:string
//     constructor(name:string){
//         this._name = name
//     }
//     //  读
//     get name(){
//         return this._name
//     }
//     //  写
//     set name(name:string){
//         this._name = name
//     }
// }
// let p1 = new Person('猴哥')
// console.log(p1.name)    //  getter方法读取this._name
// p1.name = '孙悟空'  //  setter方法读取this._name
// console.log(p1.name)

//  static声明的静态方法可以直接在外部调用，不需要实例化
// class Mixed{
//     static pi:number = 3.14
//     static sum(num1:number,num2:number){
//         return num1+num2
//     }
// }
// console.log(Mixed.pi)
// console.log(Mixed.sum(2,4))

//  this的指向当前对象