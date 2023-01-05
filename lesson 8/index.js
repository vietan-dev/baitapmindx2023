// // bai 1 
// // a
// let n;
// if (n % 2 == 0) {
//     console.log("la so chan")
// }
// else {
//     console.log("la so le")
// }
// // b
// let n 
// if (n > 0) {
//     console.log("la so duong")
// }
// else {
//     console.log("la so am")
// }
// // c và d

// function primenumber(n) {

//     if (n < 2) {
//       return false;
//     }

//     for (let i=2; n > i; i++) {
//       if (n % i === 0) {
//         return false ;
//       }
//     }

//     return true;
//   }

// function findPrimes(n) {
//     const primes = [];
//     for (let i = 2; i < n; i++) {
//       if (primenumber(i)) {
//         primes.push(i);
//       }
//     }
//     return primes;
//   }
//   console.log(findPrimes())
// e
// function printEvenNumbers(n) {
//   for (let i = 2; i < n; i++) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }
// }
// printEvenNumbers(10);
// f 
// function printOddNumbers(n) {
//     for (let i = 1; i <= n; i++) {
//       if (i % 2 !== 0) {
//         console.log(i);
//       }
//     }
//   }
  
//   printOddNumbers(10)
// g
// function print (n){
// for (let i = n; i >= 0; i--) {
//   console.log(i);
// }
// }
// console.log(print(10))
// bai 2
// let i = 3;
// while (i) {
//   console.log( i-- );
// }
// đoạn code này có giá trị cuối cùng bằng 1 vì ta sử dụng vào lặp while 
// ta cho giá trị của i = 3, vòng lặp sẽ bắt đầu chạy 3 và rồi giảm dần vì ta dùng i-- 
// cuối dùng cho giá trị là 1 vì vòng while vì while trả về giá trị true và 1 là giá trị true cuối của vòng lặp, 
// trong js giá trị false là false, 0 , '' lên 1 là giá trị cuối
// bai 3 
// function equation(a,b){
//   let x= -b/a;
//   if (a===0){
//     return false;
//   }
// else if (a*x+b===0){
//   return true;
// }
// }
// console.log(equation(-9,10))
// bai 4
// function sotuoi(n){
//   if(n<18){
//     console.log("ban chua du 18 tuoi vui long nhap lai")
//   }
//   else {
//     console.log("da du 18 tuoi")
//   }
// }
// console.log(sotuoi(18))
// bai 5
// function Nhahang(n) {
//   const Menu = ["ca dan", "dau ran", "vit quay", "lau duoi bo", "ga rang muoi"]
//   let MonAn = n;
//   switch (MonAn) {
//     case 1:
//       console.log(Menu[0]);
//       return Menu;
//     case 2:
//       console.log(Menu[1]);
//       return Menu;

//     case 3:
//       console.log(Menu[2]);
//       return Menu;

//     case 4:
//       console.log(Menu[3]);
//       return Menu;

//     case 5:
//       console.log(Menu[4]);
//       return Menu;
//     case 0: 
//     break;
//   }
// }
// console.log(Nhahang(5))