// console.log(console.log(1));
// function getLog() {
//     let a = 1;
//     console.log(a);
// }
// getLog();
function inSo(fn) {
    for(i = 1; i <= 100; i++) {
        const dieukien = fn(i);
        if(dieukien) console.log(i);
    }
}
// inSo(function(x) {
//     return x % 2 === 0;
// });

// inSo(function(x){
//     return Math.sqrt(x) % 1 ===0;
// })
inSo((x) => x % 2 === 0);

inSo((x)=> Math.sqrt(x) % 1 ===0 )