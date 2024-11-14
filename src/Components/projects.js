import Portfolio from '../assets/img/Portfolio.png'
import Scheduler from '../assets/img/Scheduler.png'
import FacialRecognition from '../assets/img/Facial-recognition.png'
import MicroAnalysis from '../assets/img/MicroAnalysis.png'
import MazeGame from '../assets/img/2dMazeGame.png'

const projects = [
    {
        title: "Scheduler",
        description: "My school had their own scheduler with our classes on it, but it was very slow and difficult to read. Therefore, I made my own with React, Html 5, Css 3 and JavaScript.",
        imgUrl: Scheduler,
        source: ""

    }, {
        title: "Personal Portfolio",
        description: "I created a personal website to show my resume in a fancier way with React, Html 5, CSS 3 and JavaScript.",
        imgUrl: Portfolio,
        source: "https://github.com/enzo-dosanjos/enzo-dosanjos.github.io"

    }, {
        title: "Facial recognition",
        description: "I did a facial recognition project in Python with the libraries OpenCV to detect and collect features from faces and Keras for the convolutional neural network. The project is still being improved",
        imgUrl: FacialRecognition,
        source: "https://github.com/enzo-dosanjos/Facial-Recognition"

    }, {
        title: "Microscopic Image Analysis",
        description: "School Project: I have created with a friend a library from scratch in python aiming to analyse microscopic picture by collecting various features. This library allows to analyse metal structures from their microscopic picture.",
        imgUrl: MicroAnalysis,
        source: "https://github.com/enzo-dosanjos/Microscopic-Image-Analysis-with-python"

    }, {
        title: "2D Maze Game",
        description: "School Project: I made a 2D adventure maze game with fellow students in which the objective is to reach a chest placed randomly while being chased by a monster and dodging traps",
        imgUrl: MazeGame,
        source: "https://github.com/enzo-dosanjos/2D-adventure-Maze"

    }];

export default projects;