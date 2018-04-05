function inSoChan(){
    for(let i = 0; i <= 100 ; i += 2) {
        console.log(i);
    }
}
function inSoLe(){
    for (let i = 1; i <=100 ; i+=2) {
        console.log(i);
    }
}
function inSoChinhPhuong() {
    for (let i = 1; i <= 10; i++) {
        console.log(i * i);
    }
}
function soChan() {
    for(let i = 1; i <= 100; i++) {
        const dieukien = i % 2 === 0;
        if (dieukien == false) console.log(i);
    }
}
function soChinhPhuong() {
    for(let i = 1; i <= 100; i++) {
        const dieukien = Math.sqrt(i) % 1 === 0;
        if (dieukien) console.log(i);
    }
}
function inSo(fn) {
    for(i = 1; i <= 100; i++) {
        const dieukien = fn(i);
        if(dieukien) console.log(i);
    }
}
inSo(x => x % 1 === 0);
