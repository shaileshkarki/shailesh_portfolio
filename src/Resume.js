import React from 'react';
import ResumeSection from './ResumeSection';
import './Resume.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedIn } from '@fortawesome/free-solid-svg-icons';

class Resume extends React.Component {
    render() {
        return(
            <div className="resume">
                <div className="resume-header">
                    <span>Shailesh Karki</span>
                    <address>Melbourne, Victoria</address>
                    <a href="tel:+61415786186">0415 786 186</a><br/>
                    <a href="mailto:karkishailesh@hotmail.com">karkishailesh@hotmail.com</a><br/>
                    <a href="https://www.linkedin.com/in/shaileshkarki/" target="_blank">www.linkedin.com/in/shaileshkarki</a><br/>
                    <a href="https://github.com/shaileshkarki" target="_blank">https://github.com/shaileshkarki</a><br/>
                    <a href="https://docs.google.com/document/d/1zHviCpC0U_zG6WnnkChdavpnbtPS9nzNxhasJC_dmzY/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View resume in Google Docs</a>
                </div>
                <ResumeSection heading={<strong>Professional Summary</strong>} content={<p>User-oriented Website Developer  offering skills and knowledge needed for creating user-friendly websites.</p>}/>
                <ResumeSection heading={<strong>Key Skill Summary</strong>} content={<p><ul><li>Excellent mathematical and problem solving skills, and ability to tackle any urgent situations</li> <li>Enthusiastic, motivating and ability to pay attention towards the details</li> <li>Ability to multitask, and use creative and innovative skills Good understanding of programming roles</li></ul></p>}
/>
                <ResumeSection heading={<strong>General Assembly</strong>} content={<p>Software Engineering Immersive (06/2020)</p>}/>
                <ResumeSection heading={<strong>Projects</strong>} content=
                {
                    <p>
                        <h4>Tic Tac Toe</h4>
                        <span>Technology Used:</span> HTML, Javascript and CSS<br/>
                        <span>Lesson Learnt:</span> Creating and designing websites and handling different events caused by user interactions to the website 
                        <h4>Subscription Information Tracker</h4>
                        <span>Technology Used:</span> HTML, Ruby, PostgreSQL, Javascript and CSS<br/>
                        <span>Lesson Learnt:</span> Creating and designing websites where contents are loaded dynamically to and from the database, validating user inputs and handling different events caused by user interactions to the website
                        <h4>Beer Buddy</h4>
                        <span>Technology Used:</span> HTML, CSS, Node.js, NPM Packages (express, pg, pg-escape, body-parser, ejs, axios, nodemon), PostgreSQL, Bing Map API<br/>
                        <span>Lesson Learnt:</span> Learnt to build a dynamic website in a team. The content of the website was got to and from the database and based on the user’s interaction with the website front end view was updated accordingly.
                        <h4>Search Recipe</h4>
                        <span>Technology Used:</span> HTML, CSS, Node.js, React, PostgreSQL, Spoonacular API<br/>
                        <span>Lesson Learnt:</span> Learnt to build a single page application using React
                    </p>
                }/>
                <ResumeSection heading={<strong>Work History</strong>}content=
                {
                    <p>
                        <h4>Sandwich Artist, Subway – Essendon 07/2019 to Current</h4>
                            <ul>
                                <li>Reduced customer wait times by quickly and efficiently operating customer window and sales register</li>
                                <li>Efficiently prepared sandwiches and other menu items for guests</li>
                                <li>Organized work areas to foster efficiency and model exceptional kitchen etiquette</li>                                
                            </ul>
                        <h4>Back Bar, The Carlton Hotel – Melbourne CBD, 11/2015 to 11/2019</h4>
                            <ul>                           
                                <li>Trained team members to efficiently work during busy times</li>
                                <li>Communicated menu item information and offered suggestions to promote featured products</li>
                                <li>Performed serving, cleaning, and stocking to high standards and provided excellent customer satisfaction</li>                               
                            </ul>
                        <h4>Sandwich Artist, Subway, Dockland – Melbourne, 10/2013 to 04/2016</h4>
                            <ul>
                                <li>Checked completed orders for accuracy and bagged meals for easy carrying</li>
                                <li>Consistently met sales targets by encouraging customers to buy extra food items such as drinks, cookies and chips</li>
                                <li>Trained team members to prepare sandwiches and other items according to instructions</li>                               
                            </ul>       
                    </p>
                }
                />
                <ResumeSection heading={<strong>Certification</strong>} content={<p>Robotic Process Automation Developer Foundation Training</p>}/>
                <ResumeSection heading={<strong>Reference</strong>} content={<p>Can be provided on request</p>}/>
            </div>
        )
    }
}

export default Resume;