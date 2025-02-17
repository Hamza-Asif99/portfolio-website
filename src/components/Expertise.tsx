import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faNode } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "CI/CD",
    "Gitlab",
];

const labelsThird = [
    "Node.js",
    "Nest.js",
    "SQL",
    "PostgreSQL",
    "Fastify",
    "Express"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <div>
                        <FontAwesomeIcon icon={faReact} size="3x"/>
                        <h3>Front-End Development</h3>
                        <p>
                            I have experience building stylish and user-friendly Web Applications. Leveraging tools such as
                            React & Next.js to create optimal user experiences.
                        </p>
                    </div>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <div>
                        <FontAwesomeIcon icon={faNode} size="3x"/>
                        <h3>Back-End Development</h3>
                        <p>Created high-performing, scalable backends using tools like Node.js, Nest.js, Express & Fastify etc.</p>
                    </div>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <div>
                        <FontAwesomeIcon icon={faDocker} size="3x"/>
                        <h3>DevOps & Automation</h3>
                        <p>Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation.</p>
                    </div>

                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;