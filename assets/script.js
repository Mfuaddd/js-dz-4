// ? TASK 1

// function average(cb,...rest) {
//     let sum = 0
//     for (let i = 0; i < rest.length; i++) {
//         sum = cb(sum,rest[i])
//     }
//     return sum/rest.length
// }

// console.log(average((sum,x) => sum+=x,1,2,3,4,5,6,7,8,9));

// ? TASK 2

// function average(cb,...rest) {
//     let sum = 0
//     for (let i = 0; i < rest.length; i++) {
//         sum = cb(sum,rest[i])
//     }
//     return sum
// }

// console.log(average((sum,x) => !(x%2) ? sum+=x : sum,1,2,3,4,5,6,7,8,9));

// ? TASK 3

// function average(cb,...rest) {
//     let sum = 0
//     for (let i = 0; i < rest.length; i++) {
//         sum = cb(sum,rest[i])
//     }
//     return sum
// }

// console.log(average((sum,x) => x%2 ? sum+=x : sum,1,2,3,4,5,6,7,8,9));

// ? TASK 4

// function average(cb,...rest) {
//     let sum = [0,0]
//     for (let i = 0; i < rest.length; i++) {
//         sum[rest[i]%2] = cb(sum[rest[i]%2],rest[i])
//     }
//     console.log(sum);
//     return sum[0]*sum[1]
// }

// console.log(average((sum,x) => sum+=x ,1,2,3,4,5,6,7,8,9));