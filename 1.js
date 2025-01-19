// const book = "The Little Prince";
// console.log(book);

// let x;
// x = "hello world";
// console.log(x);
// x = 54;
// console.log(54);

// const a = 12;
// const b = 6;
// const c = 3;
// console.log(a + b + c);
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

// const a = 10;
// const b = 2;
// const c = 3;
// const result = a + b + c;
// console.log(result);

// // 1. Find the perimeter of the rectangle.
// // input a,b;
// const a = 7;
// const b = 5;
// const p = (a + b) * 2;
// console.log(p);
// // output p;

// // 1. Find the perimeter of the rectangle.
// // input a,b;
// const a = 7;
// const b = 5;
// const p = (a + b) * 2;
// const result = "result = ";
// console.log(result + p);
// // output p;

// // 2. Find the area of ​​a rectangle.
// // input a,b;
// const a = 5;
// const b = 3;
// const s = a * b;
// console.log(s);
// // output s;

// // 2. Find the area of ​​a rectangle.
// // input a,b;
// const a = 5;
// const b = 3;
// const s = a * b;
// const result = "result = ";
// console.log(result + s);
// console.log(`result = ${s}`);
// // output s;

// // 3. 3600 seconds in an hour 3600/3600 = 1
// // 3600 seconds in a minute 3600/60 = 60
// // input 3600 sec
// const seconds = 3600;
// const hours = seconds / 3600;
// const minutes = seconds / 60;
// console.log(`${hours} hours ${minutes} minutes ${seconds} seconds`);
// // output 1 hours 60 minutes 3600 seconds

// // input 3600 sec
// const sec = 3600;
// const hours = Math.floor(sec / 3600);
// const minutes = Math.floor((sec % 3600) / 60);
// const second = Math.floor(sec % 60);
// console.log(`${hours} hours ${minutes} minutes and ${second} seconds`);
// // output 1 hours 0 minutes 0 seconds

// // input 3600 sec
// const time = 3600;
// const hours = Math.floor(time / 3600);
// const minutes = Math.floor((time - hours * 3600) / 60);
// const seconds = Math.floor((time - minutes * 3600) / 60);
// console.log(hours, minutes, seconds);
// // output 1 hours 0 minutes 60 seconds

// // input 3600 sec
// const time = 3600;
// const hours = Math.floor(time / 3600);
// const minutes = Math.floor((time - hours * 3600) / 60);
// const seconds = Math.floor((time - (hours * 3600 + minutes * 60)) / 60);
// console.log(`${hours} hours, ${minutes} minutes, ${seconds}seconds`);
// // // output 1 hours 0 minutes 0 seconds

// // 4. 3601 seconds in an hour 3601/3600 = 1
// // 3601 seconds in a minute 3601/60 = 0
// // 3601 seconds in a second 3601/3600 = 1
// // input 3601 sec
// const seconds = 3601;
// const hours = Math.floor(seconds / 3600);
// const minutes = Math.floor((seconds % 3600) / 60);
// const second = Math.floor(seconds % 60);
// console.log(`${hours} hours ${minutes} minutes ${second} seconds`);
// // output 1 hours 0 minutes 1 seconds

// // input 3661 sec
// const sec = 3661;
// const hours = Math.floor(sec / 3600);
// const minutes = Math.floor((sec % 3600) / 60);
// const seconds = Math.floor(sec % 60);
// console.log(`${hours} hour ${minutes} minutes ${seconds} seconds`);
// // output 1 hours 1 minutes 1 seconds

// input 3606 sec
// const time = 3606;
// const hours = Math.floor(time / 3600);
// // time = time - hours * 3600;
// const minutes = Math.floor(time / 60);
// // time = time - minutes * 60;
// const seconds = Math.floor(time / 60);
// console.log(`цаг => ${hours}, минут => ${minutes}, секунд => ${seconds}`);
// output цаг => 1, минут => 60, секунд => 60

// // 5. Find solutions to quadratic equations.  2x^2 + 5x- 7  = 0
// const a = 2;
// const b = 5;
// const c = -7;
// const x1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
// const x2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
// console.log(`x1=${x1} x2=${x2}`);

// const hariu1 = a * x1 ** 2 + b * x1 + c;
// const hariu2 = a * x2 ** 2 + b * x2 + c;
// console.log(hariu1);
// console.log(hariu2);

// // input ax^2 + bx + c = 0
// const a = 2;
// const b = 5;
// const c = -7;
// const x1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
// const x2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
// console.log(x1, x2);
// // output x1, x2

// const hariu1 = a * x1 ** 2 + b * x1 + c;
// const hariu2 = a * x2 ** 2 + b * x2 + c;
// console.log(hariu1);
// console.log(hariu2);
