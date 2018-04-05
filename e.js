function HocSinh(ten, namSinh, monHoc){
    this.ten = ten;
    this.namSinh = namSinh;
    this.monHoc = monHoc;
    this.sayHello = function() {
        console.log('Hello, toi ten la '+ this.ten);
    }
}
const teo = new HocSinh('Teo', 1990, ['Toan', 'Ly']);
console.log(teo.ten);
teo.sayHello();
console.log(teo.monHoc[1]);