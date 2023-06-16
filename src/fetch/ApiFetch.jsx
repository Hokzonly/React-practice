import React, { useEffect, useState } from "react";
import './apiFetch.css'

const DataFetcher=()=> {
    const [data, setData] = useState(null);

    useEffect(()=>{
        fetch('https://api.example.com/data')
        .then((response) => response.json())
        .then((data)=> setData(data))
        .catch((error)=> console.log(error))
    }, []);

    return(
        <div>
            {data ?(
                <ul>
                    {data.map((item)=>{
                        <li key={item.id}>{item.name}</li>
                    })}
                </ul>
            ):(
                <p className="loading">Loading data  Loading data  Loading data ...</p>
            )}
        </div>
    )
}

export default DataFetcher;