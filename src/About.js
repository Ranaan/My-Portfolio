import React from "react";
import "./About.css";
import aboutImg from "./img/about2.jpg";
function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me✨</h1>
            <div className="about__meta">
              <p className="about__text p__color">
              I'm an <strong>art </strong>lover, enjoying curating content, mastering the perfumes combining, 
              an amateur for <strong>photography and calligraphy</strong> and sometimes a tennis player.
              </p>
              <p className="about__text p__color">
              I creating innovative designs, contributing the improvements of the digital product’s quality 
              and provide a good and <strong>engaging experiences </strong> that meets a users needs to make the 
              product superior for the growth of the organization and increasing customers loyalty.
              </p>
              {/* <p className="about__text p__color">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered in some form, by injected humour,
              </p> */}
              <div className="about__button d__flex align__items__center">
                <a href="#" download={"./img/Capture.PNG"}>
                  <button className="about btn pointer">Download CV</button>
                </a>
                {/* <h1 className="hire__text" id='#Hire'>Hire Me 🚀</h1> */}
                <a href="#Hire">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
