import Portfolio from '../assets/img/Portfolio.png'
import Scheduler from '../assets/img/Scheduler.png'
import VirtualAssistant from '../assets/img/virtual-assistant.png'
import FacialRecognition from '../assets/img/Facial-recognition.png'
import MicroAnalysis from '../assets/img/MicroAnalysis.png'

const projects = [
    {
        title: "Virtual Assistant",
        description: "Like any child who has watched iron man, I always wanted to have my own virtual assistant. Hence, I coded one in Python.",
        imgUrl: VirtualAssistant,
        source: "https://github.com/enzo-dosanjos/Virtual-Assistant"

    }, {
        title: "Scheduler",
        description: "My school had their own scheduler with our classes on it, but it was very slow and difficult to read. Therefore, I made my own with React, Html 5, Css 3 and JavaScript.",
        imgUrl: Scheduler,
        source: ""

    }, {
        title: "Personal Portfolio",
        description: "I created my own personal website to show my resume in a fancier way with React, Html 5, CSS 3 and JavaScript.",
        imgUrl: Portfolio,
        source: "https://github.com/enzo-dosanjos/enzo-dosanjos.github.io"

    }, {
        title: "Facial recognition",
        description: "I did a facial recognition project in Python with the libraries OpenCV and TensorFlow. The project is still being improved",
        imgUrl: FacialRecognition,
        source: "https://github.com/enzo-dosanjos/Facial-Recognition"

    }, {
        title: "Microscopic Image Analysis",
        description: "I have created a library in python for microscopic analysis from scratch. This library allows to analyse metal structures.",
        imgUrl: MicroAnalysis,
        source: "https://github.com/enzo-dosanjos/Microscopic-Image-Analysis-with-python"

    }];

export default projects;