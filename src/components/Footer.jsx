import React from 'react'
import logo from '../assets/domel_logo_inv_1.png'

export default function Footer() {
  return (
    <>
    <div className="footer">
    <div className="grid grid--small">
      <div className="col-33">
        <a href="/"><img src={logo} alt="" style={{height: '60px'}}/></a>
        <p className='mt-0 pt-0' style={{marginLeft:'14px'}}>© 2024 Licciardello</p>
      </div>
      <div className="col-33">
        <h3>Links</h3>
        <a href=""><p>Components</p></a>
        <a href=""><p>Grid</p></a>
        <a href=""><p>Helpers</p></a>
        <a href=""><p>Reset</p></a>
      </div>
      <div className="col-33">
        <h3>Portfolio</h3>
        <a href=""><p>Domenico</p></a>
        <a href=""><p>Knockout</p></a>
        <a href=""><p>Durag</p></a>
      </div>
    </div>
    </div>
    </>
  )
}
