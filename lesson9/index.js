// bai 1
//a
// function total(n) {
//     let sum = 0
//     for (let i = 1; i < n;i++) {
//         if (i % 2 !== 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }
// console.log(total(10))
// b
// function squarenumber(n){
//     let sum = 0
//     for (let i = 1; n > i;i++){
//         if (Math.sqrt(i)%1===0) {
//             sum +=i;
// }
//     }
//     return sum;
// }
// console.log(squarenumber(10))
//c
// function totalprime(n) {
//     function prime(x) {
//         if (x < 2) {
//             return false;
//         }
//         for (let i = 2; x > i; i++) {
//             if (x % i === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
//     let sum = 0;
//     for (let i = 2; i < n; i++) {
//         if (prime(i)) {
//             sum += i;
//         }
//     }
//     return sum;
// }
// console.log(totalprime(10))
// bài 2
// let user = {
//     firstname: 'David',
//     lastname: 'Johnson'
//   }
//   user.firstname = 'Viet An'
//   user.surname = 'Leo'
//   delete user.lastname
//   console.log(user)
//   // đã xóa lastname nên thay bằng surname
//   user.showName = function() {
//     console.log(`${this.firstname} ${this.surname}`)
//   }

// user.showName()
// Bài 3
// function divinebyhalf(sum){
//     console.log(Math.floor(sum/2))
// }
// function operationonsum(num1,num2, operation){
//     var sum = num1 + num2;
//     operation(sum);
// }
// operationonsum(3,3,divinebyhalf)
// giải thích: function 2 tính tổng của num1 và num2 và lưu vào biến sum sau đó gọi operation và lưu sum vào 
// function 1 lấy giá trị sum là 6 chia 2 bằng 3 và dùng floor để lấy số nguyên gần nhất là 3 => output là 3
//bài 4
let foods = ['cats', 'camels', 'chickens'].slice(0, 1).concat(['cows', 'snakes', 'dogs']);
console.log(foods)
