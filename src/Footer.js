import React from 'react';
import './Footer.css';

export default function footer(props) {
    var d = new Date();
    var n = d.getFullYear();
        
    
    return(
        <div className="footer">
            <div className="social-contacts">
            <p>
                <a href="mailto:karkishailesh@hotmail.com"><i class="fa fa-envelope"></i></a>
                <a href="https://www.linkedin.com/in/shaileshkarki/" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/shaileshkarki" target="_blank"><i class="fab fa-github"></i></a>
                <a href="https://docs.google.com/document/d/1zHviCpC0U_zG6WnnkChdavpnbtPS9nzNxhasJC_dmzY/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fab fa-google"></i></a>
               <br/>&copy; {n} {props.name}</p>
            </div>
        </div>
    )
}