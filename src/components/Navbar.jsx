import React from 'react'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar';

function Navbar({darkTheme,setDarkTheme}) {

  const changemode = () => setDarkTheme(!darkTheme);

  return (
    <div className='flex flex-wrap p-4 pb-0 border-gray-200 dark:border-gray-700 justify-center sm:justify-between border-b items-center' >
      <div className='flex flex-wrap justify-between items-center space-x-5 w-screen'>
        <Link to='/' className='pb-1'>
            <p className='bg-blue-600 px-2 py-1 text-2xl dark:text-gray-900 font-bold text-white rounded-md'>
                Search 🔎
            </p>
        </Link>
        <Searchbar/>
        <button onClick={changemode} className='bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-2 py-1 rounded-lg font-bold ' >{darkTheme? 'Light 💡' : 'Dark 🌙'}</button>
      </div>
    </div>
  )
}

export default Navbar
