import React from 'react'

const Footer = () => {

    const date = new Date()
    const year = date.getFullYear()
    
  return (
    <div>
        <footer className='footercopy'>
                
                <div className='footerlogomail'>
                            <div className='colorall'> 
                                <span className='bulk yr'>Bulk</span>
                                <span className='emaill yg'>Email</span>
                                <span className='app yb'>App</span>
                            </div>
                            <p className='copy'>&copy; {year} All rights reserved</p>
                    </div>
                   
                <p className='desigh'>Designed and created by <span style={{color:'red'}}>Chandru</span></p>
        </footer>
    </div>
  )
}

export default Footer