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


     <section className="mid-section about-page">

       <div className="about-image-section split-section">
       <div className="image-container">
              <img src="/assets/pro.jpg" alt="" />
      </div>
       <div className="details-container">
          <h3 className="name-title"><span>Mrs.</span>Random Name</h3>
          <span>B.Arch (2020)</span>
          <br />
          <br />
          <p className="quote">“We need houses as we need clothes, 
            architecture stimulates fashion.<br/> 
            It’s like hunger and thirst — you need them both.”
                <br/>―<span> Karl Lagerfeld</span> </p>
                <br />
       </div>
        </div>
          <div className="about-text-section split-section prio">
            <h3 className="about-me-title">About me</h3>
            <p>I'm an award-winning content writer who has eight years 
              of experience creating compelling articles and short stories.
              I'm continuously searching for new topics and stories to capture 
              the attention of new readers. With my knowledge and experience, 
              I can help you fulfill your content creation goals.</p>
          </div>



     </section>
   </main>
  </>
  )
}


export default About;
