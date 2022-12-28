import React from "react"
import { Container } from "react-bootstrap";
import Typewriter from "typewriter-effect"
import TrackVisibility from "react-on-screen"

const ComponentToTrack = (props) => {

    return props.isVisible ?
        <h1>
            <Typewriter
                options={{
                    strings: 'Skills',
                    autoStart: true,
                    delay: 70
                }}
            />
        </h1>

        : '';
}

const Skills = () => (
        <section className="skills" id="skills">
            <Container>
                <TrackVisibility once>
                    <ComponentToTrack/>
                </TrackVisibility>
            </Container>
        </section>
    )


export default Skills