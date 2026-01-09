"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("typescript");
let myName = "Quangnd";
const age = 21;
const isMarried = true;
console.log(myName);
//2. Type isMarried suy diễn ra kiểu dữ liệu
let count = 10;
//count = "20"; //Lỗi
//3. core types: object
let product = {
    id: 1,
    title: "Iphone 14 Pro Max",
    price: 30000000,
    isActive: true
};
//4. core types: array number
let numbers = [1, 2, 3, 4, 5];
let name = ["Quangnd", "Nguyendinh"];
let scores = [90, 85, 88];
//5. Special Types: tuple
let tuple = ["Alice", 25];
// Lỗi nếu sai kiểu hoặc độ dài
// tuple = ["Bob", 30, "extra"]; // Lỗi: Độ dài không khớp
//6. Special Types: any
let randomValue = 10; // Gan any cho chay code
randomValue = "Hello";
//7. Types Union
let result;
result = 42; // Hợp lệ
result = "Success"; // Hợp lệ
// result = true; // Lỗi
// 8 Literal Type
let status;
// status = "success"; // error
status = "active";
// 8. Null và Undefined
const data = {
    id: 1,
    title: "Learn TypeScript",
    description: null,
    // timeLearn: undefined,
};
data.timeLearn; // undefined
data.description; // null
// 9. Unknown và Any
let input = "hello";
// input.toLowerCase(); // error
// hay gap try catch axios => catch (error: unknown) { as AxiosError} : message
// 10. Type Assertions
input.toLowerCase(); // casting
input.toLowerCase(); // casting
