import Axios from 'axios';
import { useState } from 'react';


const Age = () => {
    const [name, setName] = useState("")
    const [predictedAge, setPredictedAge] = useState(null)
    function fetchData() {
        Axios.get(`https://api.agify.io/?name=${name}`)
        .then((res) => {
            setPredictedAge(res.data)
        })
    }


    return (
        <>
        <div className='flex justify-center items-center mt-[10em]'>
            <input className='bg-slate-500 p-4 rounded-md text-white' placeholder='Ex. Mohamed' type="text" onChange={(event) => {setName(event.target.value)}}/>
            <button onClick={fetchData} className='bg-indigo-600 p-3 rounded-md ml-4 text-white'>Predict age</button>
        </div>
        <div className='ml-[41em] mt-10'>
            <h1 className='text-2xl bg-slate-600 w-[15em] p-3 rounded text-white'>name: {predictedAge?.name}</h1>
            <h1 className='text-2xl bg-slate-600 w-[15em] p-3 rounded text-white'>Predicted age: {predictedAge?.age}</h1>
        </div>
        </>
    )
}

export default Age;