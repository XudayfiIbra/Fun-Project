import Axios from 'axios'
import { useState } from 'react'


const Excuse = () => {
    
    const [generateExcuse, setGenerateExcuse] = useState('')
    function fetchExcuse(excuse) {
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`)
        .then((response) => {
            setGenerateExcuse(response.data[0].excuse)
        })
    }

    return (
        <>
        <div className='flex justify-center items-center mt-[10em]'>
           <h1 className='text-4xl'>Generate an Excuse</h1>
           <button onClick={() => fetchExcuse('party')} className='bg-indigo-600 p-3 rounded-md ml-4 text-white'>Party</button>
           <button onClick={() => fetchExcuse('family')} className='bg-indigo-600 p-3 rounded-md ml-4 text-white'>Family</button>
           <button onClick={() => fetchExcuse('office')} className='bg-indigo-600 p-3 rounded-md ml-4 text-white'>Office</button>
        </div>
        <div className='ml-[43em] mt-7 '>
            <h1 className='bg-indigo-500 p-4 text-white text-2xl w-[15em] rounded-lg'>{generateExcuse}</h1>
        </div>
        </>
    )
}

export default Excuse