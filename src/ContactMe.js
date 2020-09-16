import React from 'react';
import './ContactMe.css';

class ContactMe extends React.Component {


    render() {
        return(
            <div className="contact-me">
                <p className="heading">If you have any opportunities for a junior web developer or software engineer, please get in touch with me.</p>
                <p><i class="fa fa-phone"></i><a href="tel:+61415786186"> 0415 786 186</a></p>
                <p><i class="fa fa-envelope"></i> <a href="mailto:karkishailesh@hotmail.com">karkishailesh@hotmail.com</a></p>
               
            </div>
        )
    }
}
export default ContactMe;
