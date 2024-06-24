import React from 'react'
import logo from '../assets/domel_logo_inv_1.png'

export default function Home() {
  return (
    <>
    <div class="cover">
    <img style={{background: '#FFFFFF', borderRadius: '80px 20px 80px 20px'}} class="mb-1" src={logo} alt="logo"/>
    <h1 className='text-2 mt-2'>Domenico Library<span style={{marginLeft: '8px', fontSize:'1.8rem', color:'#333333', background:'#F8C80B', padding:'2px 10px', borderRadius:'20px 5px 20px 5px'}}>v1.0</span></h1>
    <p className='mt-0 pt-0'>© 2024 Domenico Licciardello - Personal Framework</p>
    <a href="/components" className="button button--yellow mt-2">ENTER</a>
    </div>
    </>
  )
}
