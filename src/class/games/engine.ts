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

class Object {
    position: Pos
    angle: Angle
    element: HTMLElement | null
    constructor() {
        this.position = new Pos();
        this.angle = new Angle();
        this.element = null;
    }
    show() {
        const { x, y } = this.position.get();
        const angle = this.angle.get();
        const ele = this.element;
        if (ele == null) {
            console.error("the element of the Object is null");
        } else {
            ele.style.transform = `translate(${x}px, ${y}px) rotate(${angle}rad)`;
        }
    }
}

class Canvas {
    canvasId: string | null
    element: HTMLElement | null
    objectList: Object[]
    constructor() {
        this.canvasId = null;
        this.element = null;
        this.objectList = [];
    }
    setCanvasId(id: string) {
        this.canvasId = id;
        this.element = document.getElementById(this.canvasId);
    }
    setCanvasSize(width: Number, height: Number) {
        this.element?.setAttribute("width", String(width));
        this.element?.setAttribute("height", String(height));
    }
    addObject(object: Object) {
        this.objectList.push(object);
    }
    render() {
        this.objectList.forEach((item) => {
            item.show();
        });
    }
}

export {
    Pos,
    Angle,
    Object,
    Canvas
}