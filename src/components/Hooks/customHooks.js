import { useEffect, useState } from "react";

export const useContador = (valorInicial, valorMaximo) =>{
    const [contador, setContador] = useState (valorInicial);
    const incrementar = () => {
        if (contador<valorMaximo){
            setContador(contador+1);
        }
    }

    const decrementar = () => {
        if (contador>valorInicial){
            setContador(contador-1);
        }
    }

    return{ contador, incrementar, decrementar }
}

//Hook para consumir API

export const useFetch = (url) =>{
    const [data, setData] = useState (null);

    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(jsonData => setData(jsonData))
        .catch(error => console.log(error))
    }, [url])

    return{data}
}