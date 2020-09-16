import React from 'react';

import image from './shailesh.png';
import './Home.css';

class Home extends React.Component {
    // constructor() {
    //     super();
    // }

    render() {
        return(
            <div className="home">
                <img src={image} alt=""/>
                <h2>Hello! I am Shailesh Karki.</h2>
                <h3>Web Developer</h3>
                <p>Welcome to my portfolio website. I am a website developer. I have recently completed Software Engineering Immersive course from General Assembly. During this course, I learnt to create responsive and dynamic data-driven websites using HTML, CSS, JavaScript, Ruby, Node.js, React.js, PostgreSQL, and so on. I am a person who has passion in developing dynamic websites. During, my free time I like to learn about new technologies and programming language.</p>
                <p>Other than developing websites, I like to play and watch soccer. Hiking and travelling to new places are my other favourite pass time.</p>
                {/* <p>I am a hard-working and reliable person who likes to get things done. I have studied IT and worked in a variety of jobs. During my free time, I am always keen on learning new technologies.</p> */}
               {/* <p>I am a web developer/designer based in Melbourne. <br/>I am looking for a position as a junior or entry level web developer.</p> */}
            </div>
        )
    }
}
export default Home;