import React from "react";
import { Container } from "react-bootstrap";
import Typewriter from "typewriter-effect"
import TrackVisibility from "react-on-screen"
import '../../style.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';

const SectionTitle = (props) => {
    return props.isVisible ?
        <h1>
            <Typewriter
                options={{
                    strings: 'Qualifications',
                    autoStart: true,
                    delay: 70
                }}
            />
            <li className="underline"/>
        </h1>

        : '';
}

const Line = (props) => {
    return props.isVisible ?
        <li className="line"/> : '';
}

const Line2 = (props) => {
    return props.isVisible ?
        <li className="line-2"/> : '';
}

const UnderLine = (props) => {
    return props.isVisible ?
        <li className="underline"/> : '';
}

AOS.init();

const Qualification = () => (
    <section className="qualification" id="qualification">
        <Container>
            <TrackVisibility once>
                <SectionTitle/>
            </TrackVisibility>
            <div className="work-exp">
                <h3> Experience </h3>
                <div className="item1">
                    <TrackVisibility once>
                        <Line/>
                    </TrackVisibility>
                    <div className="icon"
                         data-aos="zoom-in"
                         data-aos-once="true"
                    >
                        <BusinessCenterRoundedIcon/>
                    </div>
                    <div className="text">
                            <span data-aos="zoom-in"
                                  data-aos-delay="100"
                                  data-aos-once="true"
                            >
                                June 2023 - 1 month and a half
                            </span>
                        <h2 data-aos="zoom-in"
                            data-aos-delay="300"
                            data-aos-once="true"
                        >
                            Operator Internship at Virobotic
                        </h2>
                        <p data-aos="zoom-in"
                           data-aos-delay="750"
                           data-aos-once="true"
                        >
                            Developed a detection system of important elements on a picture to crop around it and a system designed to get all the important features on a picture, such as a depth map using stereo vision, used to train and use an AI model …
                        </p>
                        <h4 className="skills"
                            data-aos="zoom-in"
                            data-aos-delay="1750"
                            data-aos-once="true"
                        >
                            Computer Vision, Artificial Intelligence
                        </h4>
                    </div>
                </div>

                <div className="item1">
                    <TrackVisibility once>
                        <Line/>
                    </TrackVisibility>
                    <div className="icon"
                         data-aos="zoom-in"
                         data-aos-delay="1850"
                         data-aos-once="true"
                    >
                        <BusinessCenterRoundedIcon/>
                    </div>
                    <div className="text">
                            <span data-aos="zoom-in"
                                  data-aos-delay="1900"
                                  data-aos-once="true"
                            >
                                June 2019 - 1 week
                            </span>
                        <h2 data-aos="zoom-in"
                            data-aos-delay="2050"
                            data-aos-once="true"
                        >
                            Observation Internship at Clubic
                        </h2>
                        <p data-aos="zoom-in"
                           data-aos-delay="2400"
                           data-aos-once="true"
                        >
                            Assist in the maintenance of a high-tech and digital news website (Mandatory internship)
                        </p>
                        <h4 className="skills"
                            data-aos="zoom-in"
                            data-aos-delay="3000"
                            data-aos-once="true"
                        >
                            Cloud Computing and Web development
                        </h4>
                    </div>
                </div>
            </div>
            <div className="education">
                <h3> Education </h3>

                <div className="item2">
                    <TrackVisibility once>
                        <Line/>
                    </TrackVisibility>
                    <div className="icon"
                         data-aos="zoom-in"
                         data-aos-once="true"
                    >
                        <SchoolRoundedIcon/>
                    </div>
                    <div className="text">
                        <span data-aos="zoom-in"
                              data-aos-delay="100"
                              data-aos-once="true"
                        >
                            September 2024 - Present
                        </span>
                        <h2 data-aos="zoom-in"
                            data-aos-delay="400"
                            data-aos-once="true"
                        >
                            Computer Science department
                        </h2>
                        <p data-aos="zoom-in"
                           data-aos-delay="800"
                           data-aos-once="true"
                        >
                            3rd year engineering undergraduate in a syllabus focusing on the acquisition of fundamental concepts of computer science and the mastery of the main IT techniques.
                        </p>
                        <h4 className="school"
                            data-aos="zoom-in"
                            data-aos-delay="1800"
                            data-aos-once="true"
                        >
                            INSA Lyon
                        </h4>
                    </div>
                </div>

                <div className="item2">
                    <TrackVisibility once>
                        <Line/>
                    </TrackVisibility>
                    <div className="icon"
                         data-aos="zoom-in"
                         data-aos-delay="1900"
                         data-aos-once="true"
                    >
                        <SchoolRoundedIcon/>
                    </div>
                    <div className="text">
                        <span data-aos="zoom-in"
                              data-aos-delay="1950"
                              data-aos-once="true"
                        >
                            September 2022 - June 2024
                        </span>
                        <h2 data-aos="zoom-in"
                            data-aos-delay="2300"
                            data-aos-once="true"
                        >
                            Initial training for engineering jobs (FIMI)
                        </h2>
                        <p data-aos="zoom-in"
                           data-aos-delay="2700"
                           data-aos-once="true"
                        >
                            2 year common-core syllabus centered on Mathematics, Sciences, Technical subjects and Humanities. Student in the international English-speaking section SCAN.
                        </p>
                        <h4 className="school"
                            data-aos="zoom-in"
                            data-aos-delay="3700"
                            data-aos-once="true"
                        >
                            INSA Lyon
                        </h4>
                    </div>
                </div>

                <div className="item2">
                    <TrackVisibility once>
                        <Line2 />
                    </TrackVisibility>
                    <div className="icon"
                         data-aos="zoom-in"
                         data-aos-delay="3800"
                         data-aos-once="true"
                    >
                        <SchoolRoundedIcon/>
                    </div>
                    <div className="text">
                        <span data-aos="zoom-in"
                              data-aos-delay="3850"
                              data-aos-once="true"
                        >
                            September 2019 – July 2022
                        </span>
                        <h2 data-aos="zoom-in"
                            data-aos-delay="4200"
                            data-aos-once="true"
                        >
                            Baccalaureate with distinction | graduated with honors
                        </h2>
                        <p data-aos="zoom-in"
                           data-aos-delay="4600"
                           data-aos-once="true"
                        >
                            Majored in Mathematics, Physics and Informatics.
                        </p>
                        <h4 data-aos="zoom-in"
                            data-aos-delay="5000"
                            data-aos-once="true"
                            className="school"
                        >
                            St-Charles High School
                        </h4>
                    </div>
                </div>
            </div>
        </Container>
    </section>
)


export default Qualification;