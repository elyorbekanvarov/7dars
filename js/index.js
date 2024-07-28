// 1 - masala

// function hisoblaKvadrat(son) {
//   return son ** 2;
// }
// let testSon = 4;
// console.log(`${hisoblaKvadrat(testSon)}`);

// 2 - masala

// function ayirmaHisobla(num1,num2) {
//     console.log(num1 - num2);
// }
// ayirmaHisobla(100,50);

// 3 - masala

// function berilganString(str) {
//     let res = "salom"
//     for (let str of res) {
//         console.log(res);
//     }
// }
// berilganString(5);

// 4 - masala

// function hisoblaKub(son) {
//   return son ** 3
// }
// let testSon = 4;
// console.log(`${hisoblaKub(testSon)}`);

// 5 - masala

// function butunQism(son1, son2) {
//   if (son2 === 0) {
//     throw new Error();
//   }
//   return Math.floor(son1 / son2);
// }
// let x = -7;
// let y = 3;
// console.log(`${butunQism(x, y)}`);

// 6 - masala

// function yilniAsrga(yil) {
//   if (yil <= 0) {
//     throw new Error("Yil musbat bo'lishi kerak.");
//   }
//   let asr = Math.ceil(yil / 100);
//   return asr;
// }
// let yil1 = 2024;
// console.log(
//   `${yil1}${yilniAsrga(yil1)}`);

// 9 - masala

// function strSlice(str, n) {
//   if (n < 0) {
//     n = 0;
//   }
//   return str.slice(0, -n);
// }
// let test = "JavaScript dasturlash";
// let num = 7;
// console.log(`${strSlice(test, num)}`)

// 11 - masala

// function sonningDarajasi(son1,son2) {
//     return son1 ** son2;
// }
// let asos = 2;
// let daraja = 3;
// console.log(`${asos}^${daraja} = ${sonningDarajasi(asos,daraja)}`);

// 13 - masala

// function string(str1,str2) {
//     return str1.concat(str2);
// }
// let res1 = "Salom";
// let res2 = "Dunyo";
// console.log(`${string(res1,res2)}`);

// 15 - masala

// function boshHarflarniKattaQil(str) {
//   return str
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//     .join(" ");
// }
// let matn = "bu misolda barcha so'zlarning bosh harfini katta qilamiz";
// console.log(boshHarflarniKattaQil(matn));

// Massivlarga oid masalalar

// 1 - masala

// function sumArr(arg) {
//     let sum = 0;
//     for (const i of arg) {
//         sum += i
//     }
//     return sum;
// }
// let arr = [1,2,3,4];
// let res = sumArr(arr);
// console.log(res);

// 2 - masala

// function maxElement(massiv) {
//   return Math.max(...massiv);
// }
// let numbers = [10, 25, 30, 5, 8];
// console.log(`${maxElement(numbers)}`);

// 3 - masala

// function teskariTartibda(massiv) {
//   return massiv.slice().reverse();
// }
// let originalMassiv = [1, 2, 3, 4, 5];
// let teskariMassiv = teskariTartibda(originalMassiv);
// console.log(`${originalMassiv}`);
// console.log(`${teskariMassiv}`);

// 5 - masala

// function hisoblaKvadrat(son) {
//   return son ** 2;
// }
// let testSon = 4;
// console.log(`${hisoblaKvadrat(testSon)}`);

// 7 - masala

// function massivBirlashtir(arg) {
//     let newArr = [];
//     for (const iterator of arg) {
//         newArr.push(arg);
//     }
// }
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let res = arr1.concat(arr2);
// console.log(res);

// 8 - masala

// function toqSon(arg) {
//     let res = [];
//     let counter = 0;
//     for (const iterator of arg) {
//         if (iterator % 2 == 1) {
//             counter++
//             res.push(iterator)
//         }
//     }
//     return counter;
// }
// let arr = [1,2,3,4,5];
// let res = toqSon(arr);
// console.log(res);

