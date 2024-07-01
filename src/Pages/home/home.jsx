import React from 'react'
import './home.css'
import Me from '../../assets/home/me.png'
import About from '../about/about'

function home() {
  return (
    <>
    <div className="mainhome container-fluid">
      <div className="row mt-5">
        <div className="col-6 left">
        <h1>Hello, I am <br />
          Alan V John</h1>
          <p>
          A passionate software engineer based in Kerala. <br />
          I create bespoke software solutions elevate your online presence and drive success!. <br /> 
          Eager to join a dynamic team and grow whilecontributing to impactful projects! <br />
          </p>
        </div>
        <div className="col right">
        <img src={Me} alt="Me" className="img-fluid profileimage" />
        <div className="circle"></div>
        <div className="bluecircle">
        <svg xmlns="http://www.w3.org/2000/svg" width="324" height="324" viewBox="0 0 324 324" fill="none">
  <g filter="url(#filter0_f_8_7)">
    <circle cx="162" cy="162" r="120" fill="url(#paint0_radial_8_7)"/>
  </g>
  <defs>
    <filter id="filter0_f_8_7" x="0" y="0" width="324" height="324" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="21" result="effect1_foregroundBlur_8_7"/>
    </filter>
    <radialGradient id="paint0_radial_8_7" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(44.1587 49.1405) rotate(44.0741) scale(325.926 521.273)">
      <stop stop-color="#0038FF" stop-opacity="0.4"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
    </radialGradient>
  </defs>
  </svg>
        </div>
        <div className="redcircle">
        <svg xmlns="http://www.w3.org/2000/svg" width="188" height="321" viewBox="0 0 188 321" fill="none">
  <g filter="url(#filter0_f_8_15)">
    <circle cx="160.5" cy="160.5" r="118.5" fill="url(#paint0_radial_8_15)"/>
  </g>
  <defs>
    <filter id="filter0_f_8_15" x="0" y="0" width="321" height="321" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="21" result="effect1_foregroundBlur_8_15"/>
    </filter>
    <radialGradient id="paint0_radial_8_15" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(44.1318 49.0512) rotate(44.0741) scale(321.852 514.757)">
      <stop stop-color="white" stop-opacity="0"/>
      <stop offset="1" stop-color="#FF0000" stop-opacity="0.4"/>
    </radialGradient>
  </defs>
</svg>
        </div>
        </div>
      </div>
      </div>
      <div>
        <About />
      </div>
    </>
  )
}

export default home