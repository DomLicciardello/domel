import React from 'react'
import Header from '../components/Header'

export default function Components() {
    const htmlCode = `
<body>
    <h1>Benvenuto in Domel!</h1>
    <p>Mi chiamo Domenico e questo è il mio framework personale.</p>
</body>
    `;
    const cssCode = `
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
}
    `;

  return (
    <>
    <div className='components'>
      <Header/>
        <div className="grid" style={{maxWidth:'100%'}}>
            <div className="navbar col-15">
              <ul className="navbar__list">
                <li className="navbar__item">Accordion</li>
                <li className="navbar__item">Button</li>
                <li className="navbar__item">Card</li>
                <li className="navbar__item">Cover</li>
                <li className="navbar__item">Cover Image</li>
                <li className="navbar__item">Footer</li>
                <li className="navbar__item">Media Text</li>
                <li className="navbar__item">Navbar</li>
                <li className="navbar__item">Tiles</li>
              </ul>
            </div>
            <div className="components__content col-85">

              <div className="grid grid--small">

              <div className="col-100">  
              <h2 className='components__content__title text-center'>Components</h2>
              </div>

              <div className="col-100">
              <h3>HTML:</h3>
              <pre><code>
                {htmlCode}
              </code></pre>
              </div>

              <div className="col-100">
              <h3>CSS:</h3>
              <pre><code>
                {cssCode}
              </code></pre>
              </div>

              </div>

            </div>
        </div>
    </div>
    </>
  )
}
