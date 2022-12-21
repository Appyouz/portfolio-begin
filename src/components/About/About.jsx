import React from 'react';
import '../style/style.css' 
import {FaInstagram} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'




const About = () => {
  return (
  <>
   <main className="main-section about-main-section">
      <div className="center">
        <div className="bottom-section">
        <div className="social-links">
          <a href=""><FaInstagram className="ok" /></a>
          <a href=""><FaFacebook /></a>
          <a href=""><FaLinkedin /></a>
        </div>
      </div>
      </div>


     <section className="mid-section">
        <div className="about-section split-section">
            <div className="image-container">
              <img src="/assets/profile.jpg" alt="" className="about-pic" />
            </div>
           <div className="introduction">
                  <p>begin Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Iusto nostrum reiciendis quaerat ipsam dicta enim autem sapiente 
                quo pariatur ipsum non, provident placeat maxime velit alias fugit 
                sint totam dolorum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eius!
               Modi dolores hic nulla sit blanditiis aliquid id autem ex, eum fugiat aliquam inventore qui accusantium rem earum magnam nemo.</p>
               <br /> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Iusto nostrum reiciendis quaerat ipsam dicta enim autem sapiente 
                quo pariatur ipsum non, provident placeat maxime velit alias fugit 
                sint totam dolorum. end</p>
           </div>
        </div>   

          <div className="right-section split-section prio">
            <div className="text-content right-section-text prio">
                <div className="bold">want to see</div>
                <div className="big">my works?</div>
            </div>
            <button className="button right-section-btn prio">click</button>
          </div>


     </section>
   </main>
  </>
  )
}


export default About;
