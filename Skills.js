import React from 'react';

function Skills()
{
    return(
        <section class="Skills">
        <div class="container1" id="Skills">
            <h1 class="heading1"><span class="text-warning">Technical</span> Skills</h1>
            <div class="Technical-bars">
                <div class="bar"><i  class='bx bxl-html5'></i>
                    <div class="info">
                        <span>HTML</span>
                    </div>
                    <div class="progress-line html">
                        <span></span>
                    </div>
                </div>
                <div class="bar"><i class='bx bxl-css3' ></i>
                    <div class="info">
                        <span>CSS</span>
                    </div>
                    <div class="progress-line css">
                        <span></span>
                    </div>
                </div>
                <div class="bar"><i  class='bx bxl-javascript' ></i>
                    <div class="info">
                        <span>Javascript</span>
                    </div>
                    <div class="progress-line javascript">
                        <span></span>
                    </div>
                </div>
                <div class="bar"><i class='bx bxl-bootstrap' ></i>
                    <div class="info">
                        <span>Bootstrap</span>
                    </div>
                    <div class="progress-line bootstrap">
                        <span></span>
                    </div>
                </div>
                <div class="bar "><i  class='bx bxl-react' ></i>
                    <div class="info">
                        <span>React</span>
                    </div>
                    <div class="progress-line react">
                        <span></span>
                    </div>
                </div>
            </div>
        </div>

        <div class="container1" id="Skills">
            <h1 class=" heading1"><span class="text-success">Professional</span> Skills</h1>
            <div class="radial-bars">
                <div class="radial-bar">
                    <svg x="0px" y="0px" viewBox="0 0 200 200">
                        <circle class="progress-bar" cx="100" cy="100" r="80"></circle>
                        <circle class="path path-1" cx="100" cy="100" r="80"></circle>
                    </svg>
                    <div class="percentage">90%</div>
                    <div class="text">Creativity</div>
                </div>
                <div class="radial-bar">
                    <svg x="0px" y="0px" viewBox="0 0 200 200">
                        <circle class="progress-bar" cx="100" cy="100" r="80"></circle>
                        <circle class="path path-2" cx="100" cy="100" r="80"></circle>
                    </svg>
                    <div class="percentage">65%</div>
                    <div class="text">Communication</div>
                </div>
                <div class="radial-bar">
                    <svg x="0px" y="0px" viewBox="0 0 200 200">
                        <circle class="progress-bar" cx="100" cy="100" r="80"></circle>
                        <circle class="path path-3" cx="100" cy="100" r="80"></circle>
                    </svg>
                    <div class="percentage">75%</div>
                    <div class="text">Problem Solving</div>
                </div>
                <div class="radial-bar">
                    <svg x="0px" y="0px" viewBox="0 0 200 200">
                        <circle class="progress-bar" cx="100" cy="100" r="80"></circle>
                        <circle class="path path-4" cx="100" cy="100" r="80"></circle>
                    </svg>
                    <div class="percentage">85%</div>
                    <div class="text">Team Work</div>
                </div>
             </div>
        </div>
    </section>
    )
}

export default Skills;