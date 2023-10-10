import React from 'react'
import { Routes, Route, Navigate  } from 'react-router-dom'
import Result from './Result'


function Router() {

  return (
    <div>

      
      <Routes>
        <Route path='/' element={<Result/>} />
      </Routes>
      

    </div>

  )
}

export default Router
