import {createContext, useState, ReactNode} from 'react'

const context = createContext<any>(null);

export const ContextProvider = ({children}: {children: ReactNode}) => {
    let darkModeStorage = false;

    if(localStorage.getItem('darkModeStorage')) {
        darkModeStorage = JSON.parse(localStorage.getItem('darkModeStorage')!);
        if(darkModeStorage) window.document.documentElement.classList.add('dark');
    }

    const [darkMode, setDarkMode] = useState(darkModeStorage);

    return (
        <context.Provider value={{darkMode, setDarkMode}}>
            {children}
        </context.Provider>
    )
}

export default context