import React from 'react'
import './Footer.scss'
export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur
            natus earum sequi libero amet ex quibusdam quae. Exercitationem laboriosam 
            perspiciatis quas, ab eos quos quasi suscipit ducimus debitis maiores?
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur
            natus earum sequi libero amet ex quibusdam quae. Exercitationem laboriosam 
            perspiciatis quas, ab eos quos quasi suscipit ducimus debitis maiores?
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">GGstore</span>
          <span className="copyright">
          ©ALL RIGHT RESERVED 2024-2025
          </span>
        </div>
        <div className="right">
          <img src='https://github.com/safak/youtube2022/blob/ecommerce/client/public/img/payment.png?raw=true' alt='payment'/>
        </div>
      </div>
    </div>
  )
}
