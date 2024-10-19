import GlobalContextClass from '../class/global';
import { createContext } from 'react';

const GlobalContext = createContext<GlobalContextClass>(new GlobalContextClass());

export default GlobalContext;