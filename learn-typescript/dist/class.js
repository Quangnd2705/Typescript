"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1. khởi tạo class: java/ OOP / Angular
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showInfo() {
        return `Name: ${this.name} - Age: ${this.age}`;
    }
}
//2. khởi tạo đối tượng
const p1 = new Person("quangnd", 20);
console.log(p1.showInfo());
const product1 = {
    name: "IP 15",
    price: 30000,
    isActive: true,
    // hasDiscount: false. // error
};
const sum = (a, b) => {
    return a + b;
};
sum(1, 2);
const product2 = {
    name: "Samsung s25",
    price: 40000,
};
const status = "success";
const userReponse = {
    id: 1,
    name: "Quangnd",
    email: "dinhquang@gmail.com",
    token: "token",
};
