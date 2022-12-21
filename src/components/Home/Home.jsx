import React from 'react'
import '../style/style.css'
import {FaInstagram} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'


const Home = () => {
    return (
    <main className="main-section">
      <div className="center">
        <div className="bottom-section">
        <div className="social-links">
          <a href=""><FaInstagram className="ok" /></a>
          <a href=""><FaFacebook /></a>
          <a href=""><FaLinkedin /></a>
        </div>
      </div>
      </div>

      <div className="top-section">
      <section className="mid-section">
        <div className="left-section split-section">
          <div className="text-content left-section-text prio">
              <div className="bold">want to know more</div>
              <div className="big">about me?</div>
          </div>
            <button className="button left-section-btn prio">click</button>
        </div>
          <div className="text-content mid-section-text">
          </div>
        <div className="right-section split-section prio">
          <div className="text-content right-section-text prio">
              <div className="bold">want to see</div>
              <div className="big">my works?</div>
          
          </div>
            <button className="button right-section-btn prio">click</button>
        </div>
      </section>

    </div>

    </main>
    )
}


export default Home;
