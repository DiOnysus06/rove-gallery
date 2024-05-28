import React from 'react'
import gsap from 'gsap'

const Loader = () => {
  return (
    <div className='loader'>
        <div className='loader-clip clip-top'>
            <div className='marquee'>
                <div className='marquee-container'>
                    <span>Rove {''}</span>
                    <span>Rove {''}</span>
                    Rove {''}
                    <span>Rove {''}</span>
                    <span>Rove {''}</span>
                </div>
            </div>
        </div>
        <div className='loader-clip clip-bottom'>
            <div className='marquee'>
                <div className='marquee-container'>
                    <span>Rove {''}</span>
                    <span>Rove {''}</span>
                    Rove {''}
                    <span>Rove {''}</span>
                    <span>Rove {''}</span>
                </div>
            </div>
        </div>
        <div className='clip-center'>
            <div className='marquee'>
                <div className='marquee-container'>
                    <span>Rove {''}</span>
                    <span>Rove {''}</span>
                    Rove ®  {''}
                    <span>Rove {''}</span>
                    <span>Rove {''}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Loader
