import './style/root.css'

import {sf2024context, Sf2024gameProps} from './context';

import Error from '../../../components/mini/Error';

// pages components
import Root from './pages/root'
import Home from './pages/home'
import Hack from './pages/Hack';
import { useContext } from 'react';


function App() {
    const context = useContext(sf2024context);
    if (context.path == "/") {
        return (
             <Root />
        )
    } else if (context.path == "/home") {
        return (
            <Home />
        )
    } else if (context.path.split('/')[1] == "hack") {
        let id = 0;
        try{
            id = Number(context.path.split('/')[2]);
            return (
                <><Hack id={id} /></>
            )
        } catch(e) {
            return (
                <Error>Page Not Found</Error>
            )
        }
    }
}

function Sf2024Game() {
    return (
        <sf2024context.Provider value={new Sf2024gameProps()}>
            <App />
        </sf2024context.Provider>
    )
}

export default Sf2024Game;