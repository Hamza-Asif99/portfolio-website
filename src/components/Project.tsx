import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';

import bessersol from '../assets/images/bessersol.png';
import plantDoc from '../assets/images/plantdoc.png';
import bss from '../assets/images/bss.png';
import microservices from '../assets/images/microservices.jpg'
import ecommerce from '../assets/images/ecommerce.png'

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <p><img src={bss} className="zoom" alt="thumbnail" width="100%"/></p>
                <p><h2>Business Support System</h2></p>
                <p>Worked on a Business Support System for an Admin to manage their entire Distribution chain.
                    And also for different Entities in the Business to have their own role-based menus
                    to manage specific workflows.
                </p>
            </div>
            <div className="project">
                <p><img src={microservices} className="zoom" alt="thumbnail" width="100%"/></p>
                <p><h2>MicroServices Backend</h2></p>

                <p>Developed Backend using Microservices Architecture for an Online Money Wallet.
                    Dockerized the services & handled CI/CD pipelines.    
                </p>
            </div>
            <div className="project">
                <p><img src={bessersol} className="zoom" alt="thumbnail" width="100%"/></p>
                <p><h2>BesserSol</h2></p>
                <p>Portfolio website for a Software Startup based in Munich, Germany. Developed with React.js</p>
            </div>
            <div className="project">
                <p><img src={plantDoc} className="zoom" alt="thumbnail" width="100%"/></p>
                <p><h2>In-Hand Botanics</h2></p>
                
                <p>Admin Analytical Dashboard for a Platform called In-Hand Botanics.
                    Admin can look at Sales metrics, manage the Employees working under them & look at
                    new Orders from Customers etc. Made using Next.js.
                </p>
            </div>
            
            <div className="project">
                <p><img src={ecommerce} className="zoom" alt="thumbnail" width="100%"/></p>
                <p><h2>FastCart - Ecommerce Platform</h2></p>

                <p>Online shopping platform created using Laravel & it's built in templating engine.
                    Complete with Admin panel to manage store inventory and look at sales.    
                </p>
            </div>
{/* 
            <div className="project">
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2>COVID-19 Case Management</h2></a>
                <p>Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4. The dashboard served the university's leadership in their decision-making processes.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Multiple Regression Property Analysis</h2></a>
                <p>Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
            </div>
            <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
                <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p>
            </div>
            <div className="project">
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
                <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><h2>Submeowrine</h2></a>
                <p>Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.</p>
            </div> */}
        </div>
    </div>
    );
}

export default Project;