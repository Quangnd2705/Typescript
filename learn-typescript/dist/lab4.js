"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1
const studentA = {
    id: 1,
    name: "Quangnd",
    score: 8.5
};
console.log(studentA);

//2
const user1 = { id: 2, email: "user@gmail.com", phone: "0901234567" };
console.log(user1);

//3
const add = (a, b) => {
    return a + b;
};
const multiply = (a, b) => {
    return a * b;
};
console.log(add(5, 3));
console.log(multiply(5, 3));

//4
function logStatus(status) {
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
