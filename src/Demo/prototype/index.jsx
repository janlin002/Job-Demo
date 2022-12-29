import React from 'react'

const Index = () => {
  // 建構函式
  function Car(wheel, door, fuel) {
    this.wheel = wheel,
    this.door = door,
    this.fuel = fuel
  }

  let truck = new Car(6, 2, "柴油")

  console.log(truck, 'truck')
  console.log(Car.prototype, 'car') // Car 的原型
  console.log(Car.prototype.__proto__, 'car proto')
  console.log(truck.__proto__, 'truck.__proto__') // truck 的原型鏈
  console.log(truck.prototype, 'truck.prototype') // undefined

  console.log(window.door, 'window')

  // new 所做的事
  function newObject(Constructor, values) {
    var o = new Object()  // 1. 建立新物件
    o.__proto__ = Constructor.prototype  // 2. 重新指向原型
    Constructor.apply(o, values)  // 3. 初始化物件
    return o // 4. 回傳新物件
  };
  let trucks = newObject(Car, [6, 2, "柴油"])

  // 1. 建立新物件： 建立一個新物件，起初這個物件的 __proto__ 指向的會是 Object.prototype
  // 2. 重新指向原型： 重新將 __proto__ 指向建構函式的原型，使物件成為建構函式的實例
  // 3. 初始化物件： 執行建構函式，但利用 apply 將 this 指定給實例，這樣才能為它新增屬性
  // 4. 回傳新物件： 最後回傳這個處理完成的實例

  // Car.prototype === truck.__proto__

  /**
   * Car.prototype
   * {
   * constructor: Car(wheel, door, fuel), // 建構函示
   *  __proto__: Object // 指向他的原型
   * }
   */

  // 身為一個實例，truck 應該繼承 Car 類別的屬性，但 Car 只是建構函式而不是真的類別，所以 JavaScrip 為函式設計了 prototype 屬性，讓實例被創建時，可以繼承建構函式的原型。

  /**
   * 現在知道當我們在創建實例時，主要會有兩件事情發生：
   * 1. 實例會被初始化，並透過建構函式新增屬性
   * 2. 實例的 __proto__ 會被指向建構函式的 prototype
   */

  // Object 是原型鏈的最頂端，這也是為什麼會說 JavaScript 中一切都是物件的原因了

  return (
    <div>Index</div>
  )
}

export default Index

// 別拿你殘破不全的資歷，來說嘴