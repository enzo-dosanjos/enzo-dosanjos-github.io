import React from "react"
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

AOS.init();

const Qualification = () => (
    <section className="qualification" id="qualification">
        <Container>
            <TrackVisibility once>
                <SectionTitle/>
            </TrackVisibility>
                <div className="work-exp">
                    <div className="item1">
                        <TrackVisibility once>
                            <Line/>
                        </TrackVisibility>
                        <div className="icon" data-aos="zoom-in">
                            <BusinessCenterRoundedIcon/>
                        </div>
                        <div className="text">
                            <span data-aos="zoom-in"
                                  data-aos-delay="100"
                                  data-aos-once="true"
                            >
                                June 2019 - 1 month
                            </span>
                            <h2 data-aos="zoom-in"
                                data-aos-delay="200"
                                data-aos-once="true"
                            >
                                Observation Internship at Clubic
                            </h2>
                            <p data-aos="zoom-in"
                               data-aos-delay="750"
                               data-aos-once="true"
                            >
                                Assist in the maintenance of a high-tech and digital news website. Mandatory internship in the school curriculum at St-Charles
                            </p>
                            <h4 className="skills"
                                data-aos="zoom-in"
                                data-aos-delay="1200"
                                data-aos-once="true"
                            >
                                Cloud Computing and Web development
                            </h4>
                        </div>
                    </div>
                </div>
            <div className="education">
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
                            2022 - currently
                        </span>
                        <h2 data-aos="zoom-in"
                            data-aos-delay="500"
                            data-aos-once="true"
                        >
                            Initial training for engineering jobs (FIMI)
                        </h2>
                        <h4 className="school"
                            data-aos="zoom-in"
                            data-aos-delay="1000"
                            data-aos-once="true"
                        >
                            Insa Lyon
                        </h4>
                    </div>
                </div>
                <div className="item2">
                    <TrackVisibility once>
                        <Line2 />
                    </TrackVisibility>
                    <div className="icon"
                         data-aos="zoom-in"
                         data-aos-delay="1500"
                         data-aos-once="true"
                    >
                        <SchoolRoundedIcon/>
                    </div>
                    <div className="text">
                        <span data-aos="zoom-in"
                              data-aos-delay="1600"
                              data-aos-once="true"
                        >
                            2019 – 2022
                        </span>
                        <h2 data-aos="zoom-in"
                            data-aos-delay="2000"
                            data-aos-once="true"
                        >
                            Baccalaureate with “très bien” distinction
                        </h2>
                        <h4 data-aos="zoom-in"
                            data-aos-delay="2300"
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


export default Qualification