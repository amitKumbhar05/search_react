import { Children, createContext, useContext, useState } from "react";

const resultcontext = createContext();

export const Resultcontextprovider = ({ children }) => {

    const [result, setResult] = useState()
    const [searchterm, setSearchterm] = useState('');
    const [isloading, setIsloading] = useState(false);

    async function getresult() {
        const query = encodeURIComponent(searchterm);
        setIsloading(true);
        const url = `https://google-web-search1.p.rapidapi.com/?query=${query}&limit=20&related_keywords=true`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': `${import.meta.env.VITE_REACT_APP_API_KEY}`,
                'X-RapidAPI-Host': 'google-web-search1.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const res = await response.json();
            setResult(res);
            console.log(res);
            setIsloading(false)
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <resultcontext.Provider value={{ result, searchterm, setSearchterm, isloading, getresult }}>
            {children}
        </resultcontext.Provider>
    )
}

export const useResultcontext = ()=> useContext(resultcontext);

