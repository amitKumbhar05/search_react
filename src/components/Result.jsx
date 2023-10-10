import React from 'react'
import { useResultcontext } from '../context/Resultcontextprovider'
import ReactPlayer from 'react-player'
import Loading from './Loading'
import { useLocation } from 'react-router-dom'

function Result() {
    const { result, searchterm, setSearchterm, isloading, getresult } =useResultcontext();
    const location = useLocation();
    if(isloading) return <Loading/>

    // function serch ()
    // {
    //     getresult();
    // }
    

    switch (location.pathname) {
        case '/':
            return ( 
                <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
                    {/* <button className='bg-purple-400 text-white p-2 font-bold mt-2 rounded-lg' onClick={serch}>btn</button> */}
                    {result?.results?.map(({url, title,description},index) =>(
                        <div key={index} className='md:w-2/5 w-full '>
                            <a href={url} target='_blank' rel='noreferrer'>
                                <p className='text-sm'>
                                    {url.length>30 ? url.substring(0,30) : url}
                                </p>
                                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                                    {title}
                                </p>
                            </a>
                            <p className='text-sm'>
                                {description}
                            </p>

                        </div>
                    ))}
                    
                </div>
            )
            break;
        default:
            return (
                <div> Error! route not available.</div>
            )
            
    }


}

export default Result
