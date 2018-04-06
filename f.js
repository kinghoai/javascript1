class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getDistance() {
        return (Math.sqrt(this.x * this.x + this.y * this.y));
    }
}


class Line {
    constructor(pointA, pointB) {
        this.pointA = pointA;
        this.pointB = pointB;
    }
    getLenght() {
        const dx = this.pointA.x - this.pointB.x;
        const dy = this.pointA.y - this.pointB.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}
const p1 = new Point(0, 2);
const p2 = new Point(0, 5);
// //console.log(p1.getDistance());
// const l1 = new Line(p1, p2);
// console.log(l1.getLenght());

//Mo rong lop doi tuong class
Point.prototype.Show = function() {
    console.log(this);
}
p1.Show();