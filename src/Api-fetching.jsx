import Axios from 'axios';
import { useEffect, useState } from 'react';


const Api_fetch = () => {
    const [catFact, setCatFact] = useState("");
    const cat = () => {
        Axios.get('https://catfact.ninja/fact')
        .then((response) => {
            setCatFact(response.data.fact)
        })
    }
    useEffect(() => {
        cat()
    }, [])
    

    return (
        <div>
            <button onClick={cat}>cat Fact</button>
            <h1>{catFact}</h1>
        </div>
    )
}

export default Api_fetch;