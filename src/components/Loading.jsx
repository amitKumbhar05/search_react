import React from 'react'

import {ProgressBar} from 'react-loader-spinner'

function Loading() {


    return (
        <div className='flex justify-center items-center ' >
            <ProgressBar
                height="80"
                width="80"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass="progress-bar-wrapper"
                borderColor='#F4442E'
                barColor='#51E5FF'
            />
        </div>
    )
}

export default Loading
