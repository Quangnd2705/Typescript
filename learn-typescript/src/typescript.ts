console.log("typescript");
let myName: string = "Quangnd";
const age: number = 21;
const isMarried: boolean = true;

console.log(myName);

//2. Type isMarried suy diễn ra kiểu dữ liệu
let count = 10;
//count = "20"; //Lỗi

//3. core types: object
let product:{
    id: number,
    title: string,
    price: number,
    isActive: boolean
} = {
    id : 1,
    title : "Iphone 14 Pro Max",
    price : 30000000,
    isActive : true
}

//4. core types: array number
let numbers: number[] = [1,2,3,4,5];
let name: string[] = ["Quangnd", "Nguyendinh"];
let scores: Array<number> = [90, 85, 88];

//5. Special Types: tuple
let tuple: [string, number] = ["Alice", 25];
// Lỗi nếu sai kiểu hoặc độ dài
// tuple = ["Bob", 30, "extra"]; // Lỗi: Độ dài không khớp

//6. Special Types: any
let randomValue: any = 10; // Gan any cho chay code
randomValue = "Hello";

//7. Types Union
let result: number | string;
result = 42; // Hợp lệ
result = "Success"; // Hợp lệ
// result = true; // Lỗi

// 8 Literal Type
let status: "active" | "inactive" | "pending";
// status = "success"; // error
status = "active";

// 8. Null và Undefined
const data: {
  id: number;
  title: string;
  description: string | null;
  timeLearn?: number | undefined;
} = {
  id: 1,
  title: "Learn TypeScript",
  description: null,
  // timeLearn: undefined,
};
data.timeLearn; // undefined
data.description; // null

// 9. Unknown và Any

let input: unknown = "hello";
// input.toLowerCase(); // error
// hay gap try catch axios => catch (error: unknown) { as AxiosError} : message

// 10. Type Assertions
(input as string).toLowerCase(); // casting
(<string>input).toLowerCase(); // casting