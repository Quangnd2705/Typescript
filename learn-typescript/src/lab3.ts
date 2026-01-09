//1. Hàm tính điểm trung bình
const averageScore = (...scores: number[]): number => {
  if (scores.length === 0) return 0;
  const total = scores.reduce((sum, current) => sum + current, 0);
  return total / scores.length;
};

console.log(averageScore(10,20,30));   
console.log(averageScore(50,100,150)); 


//2.Định nghĩa kiểu hàm kiểm tra số chẵn lẻ 
type CheckNumber = (n: number) => string;
const checkNumber: CheckNumber = (n) => {
  return n % 2 === 0 ? "even" : "odd";
};

console.log(checkNumber(4)); 
console.log(checkNumber(7)); 

//3.Hàm tạo thông tin người dùng
const createUser = (
    name: string,           
    age?: number,          
    role: string = "user"  
): string => {
    const ageInfo = age ? `, Age: ${age}` : "";
    return `Name: ${name}${ageInfo}, Role: ${role}`;
};


console.log(createUser("Quang"));               
console.log(createUser("Quangnd", 25, "admin")); 


//4. Hàm xử lý danh sách sản phẩm
const mergeProducts = (arr1: string[], arr2: string[]): string[] => {
    return [...arr1, ...arr2];
};

const printProducts = (...products: string[]): void => {
    products.forEach(p => console.log(p));
};

const a = ["iPhone", "Samsung"];
const b = ["Xiaomi", "Oppo"];

const allProducts = mergeProducts(a, b);
console.log(allProducts); 

printProducts(...allProducts);