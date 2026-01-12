//1. khởi tạo class: java/ OOP / Angular
class Person{
    name: string;
    age: number;

    constructor (name: string, age: number){
        this.name = name;
        this.age = age;
    }

    showInfo(){
        return `Name: ${this.name} - Age: ${this.age}`;
    }
}

//2. khởi tạo đối tượng
const p1 = new Person("quangnd", 20);
console.log(p1.showInfo());

//3. Interface: cấu trúc object
interface Product{
    name: string;
    price: number;
    isActive: boolean;
}

const product1: Product={
    name: "IP 15",
    price: 30000,
    isActive: true,
    // hasDiscount: false. // error
};

//3.1 Interface cho funtion
interface SumFuntion{
    (a: number, b: number): number;
}
const sum: SumFuntion = (a,b)=>{
    return a+b;
};
sum(1,2);

//4. Type Object
type TProduct = {
    name: string;
    price: number;
};
const product2: TProduct = {
    name: "Samsung s25",
    price: 40000,
}

//5. type với union
type Status = "pending" | "success" | "error";
const status: Status = "success";

type Description = string | null;

type TProduct2 = {
  name: string;
  price: number;
  description: Description;
};

type TBlog = {
  title: string;
  description: Description;
};

//5.2 type kết hợp object

type User ={
    id: number;
    name: string;
    email: string;
};

type UserReponse = User & {
    token: string;
};

const userReponse: UserReponse ={
    id: 1,
    name: "Quangnd",
    email: "dinhquang@gmail.com",
    token: "token",
};

//extend interface
interface IUser extends User{
    token: string;
}