import React, { StrictMode,createContext,useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import ColorModeSwitcher from './ColorModeSwitcher';

export const serverr = "https://nodejs-codexapp.onrender.com/";
export const Context = createContext();
const isAuthenticated =false


const AppWrapper = ()=>{

    const [isAuthenticated,setIsAuthenticated] = useState(false)
    const [userr,setUserr]=useState({})
    return(
        <Context.Provider value={{
            isAuthenticated,
            setIsAuthenticated,
            userr,
            setUserr

        }}>
             <StrictMode>
    <ColorModeScript/>
<ChakraProvider>
<ColorModeSwitcher/>

    <App />
</ChakraProvider>
    </StrictMode>
        </Context.Provider>
    )
} 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppWrapper/>  
    
);
export const server ='https://api.coingecko.com/api/v3'

