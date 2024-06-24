import React from 'react'
import logo from '../assets/domel_logo_inv_1.png'

export default function Header() {
  return (
    <>
    <div class="header">

    <a href="/" class="header__logo"><img src={logo} alt="logo"/></a>

    <ul class="header__menu">
      <li><a href="/components">Components</a></li>
      <li><a href="/">Grid</a></li>
      <li><a href="/">Helpers</a></li>
      <li><a href="/">Reset</a></li>
    </ul>

    </div>
    </>
  )
}
