import React from 'react'
import logo from '../assets/domel_logo_inv_2.png'

export default function Header() {
  return (
    <>
    <div class="header">

    <div class="header__menu">
    <a href="/" class="header__logo"><img src={logo} alt="logo"/></a>
    <a href="/components" class="header__link">Components</a>
    <a href="/" class="header__link">Grid</a>
    <a href="/" class="header__link">Helpers</a>
    <a href="/" class="header__link">Reset</a>
    </div>

    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
    <input style={{height: '25px', position: 'relative', marginRight: '15px', paddingLeft:'25px'}} type="search" id="search" name="search" placeholder='Search...'/>
    <ion-icon style={{color: '#333333', fontSize: '18px', position: 'absolute', right: '267px'}} name="search-sharp"></ion-icon>

    <button className='button-light-mode'>
      <ion-icon style={{fontSize: '15px', color:'#F8C80B'}} name="contrast-outline"></ion-icon>
    </button>
    <span
    style={{
      marginRight: '15px',
      fontSize:'1rem',
      color:' #333333',
      background:'#F8C80B',
      padding:'2px 10px',
      borderRadius:'15px 3px 15px 3px',
      border: 'solid 1px #333333'
      }}>v1.0</span>
    </div>

    </div>
    </>
  )
}
