// rows = 3
// columns = 3
// for (i = 1; i <= rows; i++) {
//     line = ''
//     for (j = 1; j <= columns; j++) {
//         line += j
//     }
//     console.log(line)
// }



// // rows = 3
// // columns = 3
// // for (i = 1; i <= rows; i++) {
// //     line = ''
// //     for (j = 1; j <= columns; j++) {
// //         line += j
// //     }
// //     console.log(line)
// // }


pattern=""
for (i=1;i<=3;i++){
    for(j=1;j<=3;j++){
        pattern=pattern+j
    }
    pattern=pattern+"\n"
}
console.log(pattern)