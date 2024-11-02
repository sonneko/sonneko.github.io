class Pos {
    x: number | undefined
    y: number | undefined

    constructor() {
        this.x = undefined;
        this.y = undefined;
    }
    set(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    get() {
        return {
            x: this.x,
            y: this.y
        }
    }
    add(x: number, y: number) {
        this.x =+ x;
        this.y =+ y;
    }
}

const PI = Math.PI
class Angle {
    angle: number | undefined
    constructor() {
        this.angle = undefined;
    }
    set(angle: number) {
        if (0 < angle && angle < 2 * PI) {
            this.angle = angle;
        } else {
            console.error("the params of the Angle Object setter is wrong");
        }
    }
    get() {
        return this.angle;
    }
}

export {
    Pos,
    Angle
}