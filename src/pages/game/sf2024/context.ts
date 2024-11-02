import { createContext } from "react";

class Sf2024gameProps {
    path: string
    constructor() {
        this.path = '/';
    }
    navigation(path: string) {
        this.path = path;
    }
}

const sf2024context = createContext(new Sf2024gameProps());

export {
    sf2024context,
    Sf2024gameProps
};