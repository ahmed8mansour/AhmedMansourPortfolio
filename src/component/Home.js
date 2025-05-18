import React, { Fragment } from "react";
import { useParams , useLocation, Outlet , Link ,  NavLink, useNavigate} from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';

import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home(){
const typedRef = React.useRef(null);
const contactRef = React.useRef(null);
const aboutRef = React.useRef(null);

const [windowDimensions, setWindowDimensions] = React.useState({
            width: window.innerWidth,
            height: window.innerHeight,
        });
React.useEffect(() => {
    const handleResize = () => {
    setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
}, []);


const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
};



React.useEffect(() => {
    AOS.init({ duration: 1000 });

    var typed = new Typed('.home_title', {
        strings: ["React and Django Developer", "Problem Solver" , "Full Stack Web Developer"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true 
    });

    // if (windowDimensions.width > 992){
    //     document.querySelector('.home_image_bottom')?.setAttribute('data-aos', 'zoom-in-down');
    //     document.querySelector('.home_image_bottom')?.setAttribute('data-aos-duration', '2500');

    // }
    // Ensure Bootstrap is available globally
    if (window.bootstrap) {
        const tooltipTriggerList = document.querySelectorAll('.socials_link');
        tooltipTriggerList.forEach(el => {
            const tooltip = new window.bootstrap.Tooltip(el, {
                // Set custom class to control z-index
                customClass: 'custom-tooltip-z'
            });
        });
    }

    // Close offcanvas and scroll smoothly to section when a nav-link is clicked
    const offcanvasLinks = document.querySelectorAll('.offcanvas-link');
    function handleOffcanvasLinkClick(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                // Close offcanvas first
                const offcanvasEl = document.getElementById('offcanvasNavbar');
                if (window.bootstrap && offcanvasEl) {
                    const offcanvas = window.bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
                    offcanvas.hide();
                }
                // Wait for offcanvas to close, then scroll
                setTimeout(() => {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 350); // Bootstrap offcanvas close animation duration
            }
        }
    }
    offcanvasLinks.forEach(link => {
        link.addEventListener('click', handleOffcanvasLinkClick);
    });
    return () => {
        offcanvasLinks.forEach(link => {
            link.removeEventListener('click', handleOffcanvasLinkClick);
        });
    };
}, []);

console.log(windowDimensions.width)

    return  (
        <div className="Landing_page">
            <div className="socials_side" data-aos="slide-right" data-aos-duration="1000">
                <a href="https://www.facebook.com/ahmad.mouin.5?mibextid=ZbWKwL" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Connect with me on Facebook" className="socials_link"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://wa.me/972598186423" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Message me on WhatsApp" className="socials_link"><i className="fa-brands fa-whatsapp"></i></a>
                <a href="https://github.com/ahmed8mansour" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Explore my projects on GitHub" className="socials_link"><i className="fa-brands fa-github"></i></a>
                <a href="mailto:ahmedmansourforwork@gmail.com" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Email me directly" className="socials_link"><i className="fa-regular fa-envelope"></i></a>

            </div>
            
            <div className="home_page my_section">
                    <div className="nav_container container">

                        <nav class="navbar navbar-expand-md " > 
                            {/* <a class="navbar-brand landing_name" href="/">
                                    <img src="./images/Logo name.png" alt="logo"/>
                            </a> */}
                            <button class="navbar-toggler" style={{color:"white" , border:"1px solid white"}} data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span class="fas fa-bars navbar_toggler"></span>
                            </button>
                            <div class="offcanvas offcanvas-end " tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" style={{color: "var(--color4)"}} id="offcanvasNavbarLabel">Ahmed Mansour</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                                    <i class="fa-solid fa-xmark"></i>
                                </button>
                            </div>
                                <div class="offcanvas-body">
                            
                                    <ul class="navbar-nav mb-2 mb-lg-0 d-flex justify-content-between align-items-center">

                                        <li class="nav-item">
                                        <a class="nav-link offcanvas-link active" aria-current="page" href="/">HOME</a>
                                        </li>

                                        <li class="nav-item">
                                        <a class="nav-link offcanvas-link" aria-current="page" href="#about">About me</a>
                                        </li> 
                                        <li class="nav-item logo_item">
                                        <a class="nav-link offcanvas-link" aria-current="page" href="/">
                                            <img src={process.env.PUBLIC_URL + "/images/Home/ahmed_logo (2).png"} width={60} height={60} alt="logo"/>

                                        </a>
                                        </li> 
                                        <li class="nav-item">
                                        <a class="nav-link offcanvas-link" aria-current="page" href="#projects">Projects</a>
                                        </li>   
                                        <li class="nav-item">
                                        <a class="nav-link offcanvas-link" aria-current="page" href="#contact">Contact</a>
                                        </li>
                                    </ul>
                            
                                </div>
                            </div>
                            
                            
                        </nav>
                    </div>
                    <div className="home_content" >
                        <h1 data-aos="fade-up" data-aos-duration="2000">
                            <span className="home_title">Full Stack web Developer</span><br/>
                            <span className="nowrap_home" style={{color: "var(--color4)"}}>Ahmed Mansour</span><br/>
                            <span className="nowrap_home">Based in Gaza Strip</span>
                        </h1>
                        {windowDimensions.width < 992 &&
                        <p className="home_pretext" data-aos="fade-up" data-aos-duration="2000">I am a passionate web developer with experience in building dynamic and responsive web applications.</p>
                        }
                        <div className="home_buttons" data-aos="fade-up" data-aos-duration="2000" >
                            <button type="button" className="btn hire_btn" onClick={scrollToContact}>
                                Hire me
                            </button>
                            <button type="button" className="btn cv_btn">Download CV</button>
                        </div>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/images/Home/Illustration top.png"} alt="hero" className="home_image_top" data-aos="zoom-in-up" data-aos-duration="2500"/>
                    <img src={ windowDimensions.width > 992 ? process.env.PUBLIC_URL + "/images/Home/Ilustration bottom.png" : process.env.PUBLIC_URL + "/images/Home/Component 1.png"} alt="hero" className="home_image_bottom" />

            </div>
            <div className="about_section my_section" id="about" ref={aboutRef}>
                <div className="about_container container">
                    <div className="row about_content">
                        <div className="col-md-6 col-12 about_img_container" data-aos="fade-up" data-aos-duration="3000" >
                            <div className="about_img_container2">
                            <img src={process.env.PUBLIC_URL + "/images/about/photo_5271890631934996703_y.jpg"} className="about_img" width={"100%"} height={"100%"}/>
                            </div>

                        </div>
                        <div className="col-md-6 col-12 about_content_left" data-aos="slide-left" data-aos-duration="1000">
                            <h1 className="about_title section_title">About <span style={{color:"var(--color4)"}}>Me</span></h1>
                            <p className="about_text">I am a full-stack web developer with a passion for creating dynamic and responsive web applications. I have experience in both front-end and back-end development, and I am proficient in a variety of programming languages and frameworks. I am always eager to learn new technologies and improve my skills.</p>
                            <button type="button" className="btn about_btn " onClick={scrollToContact}>Contact me</button>
                        </div>
                    </div>

                </div>
            </div>

            <div className="skills_section " >
                <div className="skills_container container">
                    <div data-aos="slide-left" data-aos-duration="1000">
                    <h1 className="skills_title section_title ">My <span style={{color:"var(--color4)"}}>Skills</span></h1>
                    <p className="skills_pretext section_pretext text-center">I've worked with a variety of technologies in the web development world. Here's an overview of my technical skills and expertise.</p>

                    </div>
                    <div className=" skills_content" data-aos="fade-up" data-aos-duration="2000" > 
                        <div className="skill_card  " >
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" style={{color:"#E34F26"}} height="36" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path></svg>
                            <h4>Html5</h4>
                        </div>
                        <div className="skill_card " >
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" style={{color:"#1572B6"}} height="36" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"></path></svg>
                            <h4>CSS3</h4>
                        </div>
                        <div className="skill_card  " >
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" style={{color:"#F7DF1E"}} height="36" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"></path></svg>
                            <h4>JavaScript</h4>
                        </div>
                        <div className="skill_card  " >
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" style={{color:"#61DAFB"}} height="36" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path></svg>
                            <h4>React</h4>
                        </div>
                        <div className="skill_card  " >
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" style={{color:"#764ABC"}} height="36" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z"></path></svg>
                            <h4>Redux Toolkit</h4>
                        </div>
                        <div className="skill_card  " >
                            <i class="fa-brands fa-bootstrap" style={{color:"rgb(116, 48, 249)" ,fontSize:"24px"}}></i>
                            <h4>Bootstrap</h4>
                        </div>
                        <div className="skill_card " >
                            <img
                                src={process.env.PUBLIC_URL + "/images/skills/python.png"}
                                alt="Python Logo"
                                height="36"
                                width="36"
                            />
                            <h4>Python</h4>
                        </div>
                        <div className="skill_card " >
                            <img src={process.env.PUBLIC_URL + "/images/skills/django_transparent__1_-removebg-preview.png"} width={36} height={36}/>
                            <h4>Django</h4>
                        </div>
                        <div className="skill_card " >
                            <img src={process.env.PUBLIC_URL + "/images/skills/django.png"} width={36} height={36}/>
                            <h4>Django Rest Framework</h4>
                        </div>
                    </div>

                </div>
            </div>
            <div className="projects_section" id="projects">
                <div className="projects_container container">
                    <div data-aos="slide-left" data-aos-duration="1000">
                    <h1 className="projects_title section_title text-center"  >My Best <span className="animate__animated animate__shakeY" style={{color:"var(--color4)"}}>Projects</span></h1>
                    <p className="projects_pretext section_pretext text-center" >Here are some of my recent projects. Each project showcases different skills and technologies I've worked with.</p>
                    </div>
                    <div className="projects_content" style={{marginTop:"50px" , gap:"20px"}}>

                        <div className="project_card card" data-aos="fade-up" data-aos-duration="1500">
                            <div className="card-img-top">
                            <img src={process.env.PUBLIC_URL + "/images/projects/prescripto.png"} className="card-img-top" />
                            </div>
                            <div className="card-body">
                            <h4>Prescripto</h4>
                            <p className="card-text">A full-stack prescription management system that streamlines doctor-patient interactions, allowing doctors manage appointments efficiently</p>
                            <div className="card_techs">
                                <p>
                                    {/* <span className="">html</span> */}
                                    {/* <span className="">css</span> */}
                                    <span className="">js</span>
                                    <span className="">react</span>
                                    <span className="">Bootstrap</span>
                                    <span className="">redux</span>
                                    <span className="">python</span>
                                    <span className="">Django</span>
                                    <span className="">Django Rest Framework</span>
                                </p>
                            </div>
                            <a href="https://github.com/ahmed8mansour/Full-Stack-Prescripto-Project" target="_blank" style={{ color: "var(--color4)", textDecoration: "none", marginTop: "10px", display: "inline-block"}}>
                                <i className="fab fa-github"></i> Source Code
                            </a>
                            </div>
                        </div>

                        <div className="project_card card " data-aos="fade-up" data-aos-duration="1500">
                            <img src={process.env.PUBLIC_URL + "/images/projects/mntn.png"} className="card-img-top" />
                            <div className="card-body">
                            <h4>MNTN</h4>
                            <p className="card-text">An interactive platform for outdoor enthusiasts to discover new hiking trails, book guided tours, and plan adventures.</p>
                            <div className="card_techs">
                                <p>
                                    <span className="">html</span>
                                    <span className="">css</span>
                                    <span className="">js</span>
                                    <span className="">react</span>
                                    <span className="">Bootstrap</span>
                                    <span className="">redux</span>
                                </p>
                            </div>
                            <a href="https://github.com/ahmed8mansour/React-MNTN-Project" target="_blank" style={{ color: "var(--color4)", textDecoration: "none", marginTop: "10px", display: "inline-block"}}>
                                <i className="fab fa-github"></i> Source Code
                            </a>
                            </div>
                        </div>

                        <div className="project_card card" data-aos="fade-up" data-aos-duration="1500">
                            <img src={process.env.PUBLIC_URL + "/images/projects/Rock.png"} className="card-img-top" />
                            <div className="card-body">
                            <h4>Rock</h4>
                            <p className="card-text">Engage students with immersive VR learning experiences, making education more interactive and dynamic.</p>
                            <div className="card_techs">
                                <p>
                                    <span className="">html</span>
                                    <span className="">css</span>
                                    <span className="">js</span>
                                    <span className="">react</span>
                                    <span className="">Bootstrap</span>
                                    <span className="">redux</span>
                                </p>
                            </div>
                            <a href="https://github.com/ahmed8mansour/React-Rock-Project" target="_blank" style={{ color: "var(--color4)", textDecoration: "none", marginTop: "10px", display: "inline-block"}}>
                                <i className="fab fa-github"></i> Source Code
                            </a>
                            </div>
                        </div>

                        <div className="project_card card" data-aos="fade-up" data-aos-duration="1500">
                            <img src={process.env.PUBLIC_URL + "/images/projects/india.png"} className="card-img-top"/>
                            <div className="card-body">
                            <h4>Indian Portfolio</h4>
                            <p className="card-text">Showcasing creative projects that blend innovation and cultural inspiration with modern design approaches.</p>
                            <div className="card_techs">
                                <p>
                                    <span className="">html</span>
                                    <span className="">css</span>
                                    <span className="">js</span>
                                    <span className="">react</span>
                                    <span className="">Bootstrap</span>
                                    <span className="">redux</span>
                                </p>
                            </div>
                            <a href="https://github.com/ahmed8mansour/React-Portfolio-Project" target="_blank" style={{ color: "var(--color4)", textDecoration: "none", marginTop: "10px", display: "inline-block"}}>
                                <i className="fab fa-github"></i> Source Code
                            </a>
                            </div>
                        </div>
                        
                    </div>

                </div>

            </div>

            <div className="contact_section my_section" id="contact" ref={contactRef}>
                <div className="contact_container container">
                    <div data-aos="slide-left" data-aos-duration="1000">
                    <h1 className="contact_title section_title text-center" >Contact <span style={{color:"var(--color4)"}}>Me</span></h1>
                    <p className="contact_pretext section_pretext text-center" >I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>

                    </div>
                    <div className="contact_content_container" data-aos="fade-up" data-aos-duration="2500">
                    <div className="contact_content row">
                        <div className="contact_left col-md-6 col-12">
                            <div className="contact_left_top">
                                <h4 className="contact_left_title"> Get in touch </h4>
                                <p className="contact_left_text section_pretext">I’m very approachable and would love to speak to you. Feel free to call, send me an email . Follow me in social media or simply complete the enquiry form.</p>
                            </div>
                            <div className="contact_left_bottom">
                                <div className="contact_card">
                                    <i class="fa-solid fa-envelope"></i>
                                    <a href="mailto:ahmedmansourforwork@gmail.com" className="contact_card_link">ahmedmansourforwork@gmail.com</a>
                                </div>
                                <div className="contact_card">
                                    <i class="fa-brands fa-github"></i>
                                    <a href="https://github.com/ahmed8mansour" className="contact_card_link">GitHub</a>
                                </div>
                                <div className="contact_card">
                                    <i class="fa-solid fa-phone"></i>
                                    <a href="https://wa.me/972598186423" className="contact_card_link">+972598186423</a>
                                </div>
                            </div>
                        </div>
                        <div className="contact_right col-md-6 col-12">
                            <h4 className="contact_right_title"> Send me a message </h4>
                            <form className="contact_form">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" autocomplete="off" required id="floatingName" placeholder="Name"/>
                                    <label htmlFor="floatingName">Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" autocomplete="off" required id="floatingInput" placeholder="name@example.com"/>
                                    <label htmlFor="floatingInput">Email Address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" autocomplete="off" required id="floatingSubject" placeholder="Subject"/>
                                    <label htmlFor="floatingSubject">Subject</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea className="form-control" autocomplete="off" required placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                                    <label htmlFor="floatingTextarea2">Message</label>
                                </div>
                                <button type="submit" className="btn contact_btn">Send</button>
                            </form>

                        </div>  
                    </div>

                    </div>
                <img src={process.env.PUBLIC_URL + "/images/Illustration.png"} alt="Illustration" data-aos="fade-up" data-aos-duration="2500" />
                </div>
            
            <div className="footer_section" style={{marginTop:"120px"}}>
                <hr/>
                <div className="footer_container container">
                    <div className="footer_content">
                        <div className="footer_socials text-center" >
                            <a href="https://www.facebook.com/ahmad.mouin.5?mibextid=ZbWKwL" className="footer_social_link"><i className="fa-brands fa-facebook"></i></a>
                            <a href="https://wa.me/972598186423" className="footer_social_link"><i className="fa-brands fa-whatsapp"></i></a>
                            <a href="https://github.com/ahmed8mansour" className="footer_social_link"><i className="fa-brands fa-github"></i></a>
                        </div>
                        <p className="text-center footer_copy">© 2025 Ahmed Mansour. All rights reserved.</p>
                    </div>
                </div>
            </div>
            </div>


        </div>

    )
}