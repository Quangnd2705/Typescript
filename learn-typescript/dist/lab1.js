"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Viết 1 hàm trả về chu vi và diện tích hình chữ nhật
function tinhHinhChuNhat(dai, rong) {
    const chuVi = (dai + rong) * 2;
    const dienTich = dai * rong;
    return { chuVi, dienTich };
}
// 2. Viết 1 hàm tính tổng nhiều số (không biết trước số lượng tham số), sử dụng rest parameter
function tinhTong(...numbers) {
    return numbers.reduce((tong, n) => tong + n, 0);
}
// 3. Viết hàm trả về số lượng xuất hiện của 1 kí tự trong chuỗi
function demKyTu(chuoi, kyTu) {
    let dem = 0;
    for (const ch of chuoi) {
        if (ch === kyTu) {
            dem++;
        }
    }
    return dem;
}
// 4. Viết hàm trả về boolean kiểm tra 1 số có phải số nguyên tố
function laSoNguyenTo(n) {
    if (n < 2)
        return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
const hcn = tinhHinhChuNhat(6, 4);
console.log("Chu vi:", hcn.chuVi);
console.log("Diện tích:", hcn.dienTich);
console.log("Tổng:", tinhTong(1, 2, 3, 4, 5));
console.log("Số lần xuất hiện:", demKyTu("typescript", "t"));
console.log("7 là số nguyên tố:", laSoNguyenTo(7));
console.log("10 là số nguyên tố:", laSoNguyenTo(10));
