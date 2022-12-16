import React from 'react'
import About from './About';
import './style/style.css'
import {FaInstagram} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'


const Home = () => {
    return (
    <main className="main-section">

     {/*  <div className="top-section">
        <h1 className="title">title</h1>
     </div> */}     
      <section className="mid-section">
        <div className="left-section">
          <div className="left-section-text">
            Want to know more about me?
          </div>
        </div>
          <div className="mid-section-text">OR</div>
        <div className="right-section">
          <div className="right-section-text">Want to see my works?
          </div>
        </div>
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


export default Home;
