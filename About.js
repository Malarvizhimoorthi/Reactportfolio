import React from 'react'
import photo from './photo.png'

function About()
{
    return(
        <section class="about" id="about">
        <div class="about-img">
            <img src={photo} alt='photo.png'/>
        </div>
        <div class="about-text">
            <h2>About<span class="text-primary">Me</span> </h2>
            <h4>Full Stack <span class="text-warning">Web Developer</span></h4>
            <p>Hello! I'm Malarvizhi, a junior full stack developer with a passion for creating meaningful digital experiences.
                My journey into the world of web development began with a fascination for how technology can empower and connect people.
                I am driven by the opportunity to blend creativity with technical skills to build applications that not only function seamlessly but also delight users. From crafting intuitive user interfaces to architecting scalable backend solutions,
                I enjoy every aspect of the development process.I specialize in frontend technologies like HTML, CSS, JavaScript, and frameworks such as React, alongside backend proficiency with Node.js, Express, and database management systems like MongoDB.
                I'm always eager to learn new technologies and methodologies to stay ahead in this fast-paced industry.</p>

            <a href="#" class="btn-box">More About Me</a>
        </div>
    </section>

    );
}

export default About;
