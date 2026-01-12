//1. Tạo type student
type Student = {
    id: number;
    name: string;
    score: number;
  };
  
  const studentA: Student = {
    id: 1,
    name: "Quangnd",
    score: 8.5
};
console.log(studentA);

//2. Tạo interface user
interface User {
    id: number;
    email: string;
    phone?: string;
  }
  
const user1: User = { id: 2, email: "user@gmail.com", phone: "0901234567" };

console.log(user1);
  
//3. Tạo type funtion
type Calculate = (a: number, b: number) => number;

const add: Calculate = (a, b) => {
  return a + b;
};

const multiply: Calculate = (a, b) => {
  return a * b;
};

console.log(add(5, 3));  
console.log(multiply(5, 3)); 

//4. Tạo type apistatus
type ApiStatus = "idle" | "loading" | "success" | "error";

function logStatus(status: ApiStatus): void {
  switch (status) {
    case "loading":
      console.log("Đang tải...");
      break;
    case "success":
      console.log("Thành công");
      break;
    case "error":
      console.log("Có lỗi xảy ra");
      break;
    case "idle":
      console.log("Đang chờ...");
      break;
  }
}

logStatus("loading");
logStatus("success"); 