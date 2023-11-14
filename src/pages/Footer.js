import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="top">
        <aside>
          <ul>
            <li><NavLink to={'/'}><img src="./img/footerlogo.png" alt="" className="logo" /></NavLink></li>
            <li><NavLink to={'https://maps.google.com'}>Address: 60-49 Road 11378 New York</NavLink></li>
            <li>Phone: +65 11.188.888</li>
            <li><NavLink to={'https://mail.google.com/mail'}> Email: hello@colorlib.com</NavLink></li>
          </ul>

          <ul>
            <li><h1>Useful link</h1></li>
            <li><Link>About Us</Link></li>
            <li><Link>About Our Shop</Link></li>
            <li><Link>Delivery infomation</Link></li>
            <li><Link>Privacy Policy</Link></li>
            <li><Link>Our Sitemap</Link></li>
          </ul>

          <ul>
            <li>
              <Link to={'/'}>HOME</Link>
            </li>
            <li>
              <Link to={'product'}>PRODUCT</Link>
            </li>
            <li>
              <Link to={'contact'}>CONTACT</Link>
            </li>
            <li>
              <Link to={'stores'}>STORES</Link>
            </li>
          </ul>
        </aside>

        <aside>
          <div className="download_app">
            <h1>DOWNLOAD APP</h1>
            <figure>
              <Link to={'https://app.store.com'}><img src="./img/Group.png" alt="app store" /></Link>
              <Link to={'https://google.playe.store'}><img src="./img/g10.png" alt="google play" /></Link>
            </figure>
          </div>

          <div className="newsletter">
            <h1>Sign Up for Our Newsletter</h1>
            <div className="block">
              <input type="email" name="email" id="email" placeholder='enter email address' />
              <button>SUBSCRIBE</button>
            </div>
          </div>

          <div className="payment_method">
            <h1>Payment Method</h1>
            <div className="method_group">
              <Link><img src="./img/Visa-light.png" alt="visa" /></Link>
              <Link><img src="./img/MasterCard-light.png" alt="mastercard" /></Link>
              <Link><img src="./img/Maestro-light.png" alt="maestro" /></Link>
              <Link><img src="./img/Cirrus-light.png" alt="cirrus" /></Link>
              <Link><img src="./img/AmericanExpress-light.png" alt="american express" /></Link>
            </div>
          </div>
        </aside>
      </div>

      <div className="copyright">
        Copyright ©<span>{new Date().getFullYear()}</span> All rights reserved | This template is made with 💚 by <b>LOGO</b>
      </div>
    </footer>
  )
}

export default Footer