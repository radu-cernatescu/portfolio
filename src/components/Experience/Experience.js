import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {SiGooglescholar, SiSelenium, SiGooglecloud } from  "react-icons/si";

function Experience() {
    return (
        <Container fluid className="project-section">
            <Particle />

            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="September 2018 - April 2023"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<SiGooglescholar />}
                >
                    <h3 className="vertical-timeline-element-title">Software Development Student</h3>
                    <h4 className="vertical-timeline-element-title">Seneca College</h4>
                    <h5 className="vertical-timeline-element-subtitle">Toronto, ON</h5>
                    <p>
                        Bachelor of Technology in Software Development
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    dateClassName="vertical-timeline-dates"
                    date="May 2018 - December 2018"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<SiSelenium />}
                >
                    <h3 className="vertical-timeline-element-title">Junior Developer Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle">Newtopia Health Inc</h4>
                    <h5 className="vertical-timeline-element-subtitle">Toronto, ON</h5>
                    <p>
                        Mobile Test Automation, DevOps Pipelines, Jenkins
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    dateClassName="vertical-timeline-dates"
                    date="May 2022 - August 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<SiGooglecloud />}
                >
                    <h3 className="vertical-timeline-element-title">Automation Developer Co-Op</h3>
                    <h4 className="vertical-timeline-element-subtitle">Government of Ontario</h4>
                    <h5 className="vertical-timeline-element-subtitle">Toronto, ON</h5>
                    <p>
                        Azure Cloud, VM/Infrastructure troubleshooting, scripting to gather telemetry data for PowerBI reports
                    </p>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </Container>
    );
}

export default Experience;