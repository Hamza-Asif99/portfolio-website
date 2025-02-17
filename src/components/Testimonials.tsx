import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Testimonials() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Testimonials</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date=""
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Freelance Client - "rival51"</h3>
            <h4 className="vertical-timeline-element-subtitle">🌟 🌟 🌟 🌟 🌟 </h4>
            <p>
            Outstanding Progress-Driven Developer – Perfect for Phased Projects! I hired Hamza from devdesignfusion to develop a semi-finished backend application using NestJS with SSO integration, and he delivered exactly what I needed! The project was structured as a progress-based milestone (not a fully completed app), and Hamza handled this arrangement flawlessly. His expertise in Node.js, NestJS, and SSO implementation shone through as he built a clean, scalable foundation for future development. What impressed me most was his ability to adapt to the project’s phased nature. He maintained clear communication throughout, provided regular updates, and ensured every aspect of the agreed scope was executed meticulously. His code was well-organized, documented, and optimized for scalability, making it easy for my team to take over and build further. Though the project isn’t fully complete (as intended), Hamza’s work exceeded my expectations for this phase. He respected the budget and timeline, delivered a robust modular foundation, and even offered guidance on next steps. If you need a flexible, skilled backend developer for partial builds, iterative work, or progress-driven collaborations, Hamza is a top-tier choice. 5/5 stars – Transparent, professional, and highly competent. Will hire again for future phases!            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Freelance Client - "stoOller"</h3>
            <h4 className="vertical-timeline-element-subtitle">🌟 🌟 🌟 🌟 🌟</h4>
            <p>
            Hamza was excellent, communicated clearly and understood the problem almost immediately. Clean work delivered in the due time. Would definitely recommend.
            </p>
          </VerticalTimelineElement>

          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Staff Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Laie, HI</h4>
            <p>
              Full-stack Development, API Development, User Experience
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Tokyo, Japan</h4>
            <p>
              Automation, Data Governance, Statistical Analysis
            </p>
          </VerticalTimelineElement> */}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Testimonials;