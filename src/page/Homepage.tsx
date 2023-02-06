
import ChartBar from "./data/barchart";
import { createEntry, jobexperience, scrollToElement, scrollToTop } from "./data/Entry";
import Experience from "./data/experience";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Homepage() {
    useEffect(() => {
        AOS.init({duration: 1000})
    })
    return (  
        <div>
            <header className="header">   
                <h1  onClick={() => scrollToTop()}>Sarawoot</h1>
                {/* <img className="logo" src="/public/images/logo.png" alt="logo"  /> */}
                <nav>
                    <ul className="nav__links">
                        <li onClick={() => scrollToElement('.position', 100)}>Information</li>
                        <li onClick={() => scrollToElement('.education', 100)}>Education</li>
                        <li onClick={() => scrollToElement('.experience', 100)}>Experience</li>
                        <li onClick={() => scrollToElement('.skill', 100)}>Skill</li>
                    </ul>
                </nav>
                <a href="#" className="contact-me"><button>Contact Me</button></a>
            </header>

            <section className="position">
                <img id="profile-picture" src="/public/images/profile2.png" alt="profile picture" />
                <div className="frontend">
                    <h1>Frontend Developer</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odio praesentium possimus, ex commodi aliquid aspernatur doloribus molestias earum, sapiente incidunt molestiae iusto. Aliquid porro placeat alias quibusdam dignissimos nisi.</p>
                </div>
            </section>

            <section className="education">
                <h2>Bachelor’s Degree</h2>
                <p>Computer Engineering 2011 - 2014</p>
            </section>

            <section className="contact">
                <h2>Address</h2>
                <p>189/250 Life@Ratchada Huaykwang, Pracharat Bam Phen Road, Huaykwang Bangkok 10310</p>
                <h2>Email</h2>
                <p>isaraphaphun@gmail.com</p>
                <h2>Phone</h2>
                <p>(+66) 918-60-8201</p>
            </section>

            <section className="experience"  data-aos="slide-right">
                <div className="experience-ex">
                    <h2>Experience : {jobexperience()}</h2>
                    <h3>Summary</h3>
                    <p>Innovative and deadline-driven wireless engineer with project of 3G 4G 5G Operation, planning, design,
                       build automate tool to reduce workload, man power and now interest in webdeveloper</p>
                </div>
                {Experience.map(createEntry)}
            </section>

            <section className="skill" data-aos="slide-right">
                <h2>Skill</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>ReactJS</li>
                    <li>NodeJS</li>
                    <li>SQL</li>
                    <li>MongoDB</li>
                    <li>Python</li>
                    <li>Excel Macro</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Illustrator</li>
                    <li>Adobe Premier</li>
                </ul>
            </section>

            <div className="barchart" data-aos="slide-right"><ChartBar /></div>

        </div>
    )   
}

export default Homepage
