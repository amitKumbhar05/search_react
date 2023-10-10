import React, { useState } from 'react'
import { useResultcontext } from '../context/Resultcontextprovider'

function Searchbar() {
    const {result, searchterm, setSearchterm, isloading, getresult} =useResultcontext();
    const [input,setInput] = useState('')
    function onch(e)
    {
        setSearchterm(e.target.value)
    }
    function serch()
    {
        getresult();
    }
  return (
    <div>
      <input type="text" className='bg-gray-900 rounded-md text-white h-10 w-56 text-center dark:bg-gray-200 dark:text-gray-900 font-bold' value={searchterm} onChange={onch} placeholder='SEARCH'/>
      <button className='bg-orange-700 dark:bg-orange-500 dark:text-gray-900 rounded-md h-10 w-20 text-white font-bold text-lg ' onClick={serch}>search</button>
    </div>
  )
}

export default Searchbar
