const hocSinh1 = {
    ten : 'Teo',
    namsinh: 1992,
    monHoc: {
        soMon : 2,
        tenMon : ['Toan', 'Ly']
    },
    hocGioi: [1,2,3,4,5],
    sayHello: function() {
        console.log('Xin chao, toi ten la ' + this.ten + ', toi sinh nam ' 
        + this.namsinh + ',toi hoc '+ this.monHoc.soMon +' mon')
    }
};
console.log(hocSinh1.ten);
console.log(hocSinh1.monHoc.tenMon[1]);
console.log(hocSinh1.hocGioi);
hocSinh1.sayHello();
