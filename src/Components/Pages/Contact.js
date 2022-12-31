import React, { useRef, useState } from "react"
import { Container } from "react-bootstrap";
import Typewriter from "typewriter-effect"
import TrackVisibility from "react-on-screen"
import emailjs from '@emailjs/browser'
import AOS from 'aos';
import 'aos/dist/aos.css'

import AddLocationAltOutlined from '@mui/icons-material/AddLocationAltOutlined';
import PhoneIphone from '@mui/icons-material/PhoneIphone';
import EmailOutlined from '@mui/icons-material/EmailOutlined';


const SectionTitle = (props) => {

    return props.isVisible ?
        <h1>
            <Typewriter
                options={{
                    strings: 'Contact me',
                    autoStart: true,
                    delay: 70
                }}
            />
            <li className="underline"/>
        </h1>

        : '';
}

const Contact = () => {

    const [buttonText, setButtonText] = useState('Send');
    
    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault()
        setButtonText("Sending...");

        emailjs
            .sendForm(
                "yahoo",
                "contact-form",
                refForm.current,
                "J_jtgLwnH20ZbXmrP"
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    setButtonText("Send");
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                    setButtonText("Send");
                }
            )
    }
    
    AOS.init();
    
    return (
        <section className="contact" id="contact">
            <Container>
                <TrackVisibility once>
                    <SectionTitle/>
                </TrackVisibility>
                <div className="contact-content">
                    <div className="contact-form">
                        <form ref={refForm}
                              onSubmit={sendEmail}
                        >
                            <ul>
                                <li className='half'>
                                    <input type="text"
                                           name="name"
                                           data-aos='flip-left'
                                           data-aos-delay="300"
                                           data-aos-once="true"
                                           placeholder="Name"
                                           required
                                    />
                                </li>
                                <li className='half'>
                                    <input type="email"
                                           name="email"
                                           data-aos='flip-right'
                                           data-aos-delay="300"
                                           data-aos-once="true"
                                           placeholder="Email"
                                           required
                                    />
                                </li>
                                <li>
                                    <input type="text"
                                           name="subject"
                                           data-aos='flip-up'
                                           data-aos-delay="300"
                                           data-aos-once="true"
                                           placeholder="Subject"
                                           required
                                    />
                                </li>
                                <li>
                                    <textarea name="message"
                                              data-aos='flip-down'
                                              data-aos-delay="300"
                                              data-aos-once="true"
                                              placeholder="Message"
                                              required
                                    />
                                </li>
                                <li>
                                    <button type="submit"
                                            className="send-button"
                                            data-aos='zoom-in-up'
                                            data-aos-delay="300"
                                            data-aos-once="true"
                                    >
                                        {buttonText}
                                    </button>
                                </li>
                            </ul>
                        </form>
                    </div>
                    <div className="contact-info">
                        <div className="location"
                             data-aos="zoom-in-down"
                             data-aos-delay="300"
                             data-aos-once="true"
                        >
                            <AddLocationAltOutlined/>
                            <p>1245 chemin du champ de lière mi1</p>
                            <p>69140, Rillieux-la-Pape, France</p>
                        </div>
                        <div className="phone"
                             data-aos="zoom-in-down"
                             data-aos-delay="300"
                             data-aos-once="true"
                        >
                            <PhoneIphone/>
                            <p>+33 6 38 23 75 32</p>
                        </div>
                        <div className="email"
                             data-aos="zoom-in-down"
                             data-aos-delay="300"
                             data-aos-once="true"
                        >
                            <EmailOutlined/>
                            <p>enzo.dosanjos@yahoo.com</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Contact