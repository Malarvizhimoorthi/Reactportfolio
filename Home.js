import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import photo from './photo.png'
import gmail from './gmail.png';
import facebook from './facebook.png';
import linkedin from './linkedin.png';
import github from './github.png';


function Home() {
    return (

        <section class="container-fluid">
            <div class="row " >
                <div class="col-8">
                    <h3>Hello, It's Me</h3>
                    <h1><span class="text-danger">Malarvizhi</span> Gopinath</h1>
                    <h3>And I'm a <span> Full Stack Web Developer</span></h3>
                    <p>
                        A passionate junior full stack developer with a knack for crafting innovative solutions.<br />
                        I specialize in creating responsive and user-friendly web applications that combine aesthetics with <br />
                        functionality.My journey in the world of development has been marked by a deep curiosity and a <br />
                        drive to learn and grow continuously.
                    </p>


                    <div class="home-sci">
                        <a href="#" ><img width='20px' src={gmail} alt='gmail.png' /></a>
                        <a href="#" ><img width='25px' src={facebook} alt='facebook.png' /></a>
                        <a href="#"><img width='20px' src={linkedin} alt='linkedin.png' /></a>
                        <a href="#" ><img width='20px' src={github} alt='github.png' /></a>
                    </div>
                    <a href="#" class="btn-box">More About Me</a>
                </div>
                <div class="col-4">
                        <img src={photo} alt='photo.png' />
                </div>


            </div >

        </section>


    );
}
export default Home;