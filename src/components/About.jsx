import React from 'react'
import './style/style.css'
import {FaInstagram} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'


const About = () => {
    return (
    <main className="main-section">

      <div className="top-section">
        <h1 className="title">about</h1>
         <nav>
            <ul className="nav-lists">
              {/* <li className="nav-links"><a href="">about</a></li>
              <li className="nav-links"><a href="">work</a></li> */}
              <a className="nav-links" href="">work</a> 
              <a className="nav-links" href=""> about</a>
            </ul>
          </nav>
      </div>
      
      <section className="mid-section">
        <div className="left-section"></div>
        <div className="right-section"></div>
      </section>


      <div className="bottom-section">
        <div className="social-links">
          <a href=""><FaInstagram className="ok" /></a>
          <a href=""><FaFacebook /></a>
          <a href=""><FaLinkedin /></a>
          <a href=""> get in touch</a>
        </div>
      </div>
    </main>
    )
}


export default About;
