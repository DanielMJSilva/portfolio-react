import React from "react";
import classes from "./Contact.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub , faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = ({ reff }) => {
    return <div className={classes.contact_body} ref={reff}>
    <footer>
        <div> 
            <a href="mailto:danielmjs609@gmail.com" ><FontAwesomeIcon icon={faEnvelope} className={classes.icons} /></a>  
            <a href="https://github.com/DanielMJSilva" ><FontAwesomeIcon icon={faGithub} className={classes.icons} /></a>
            <a href='https://www.linkedin.com/in/danielmjsilva777/'><FontAwesomeIcon icon={faLinkedin} className={classes.icons} /> </a>      
        </div>
         
    <p> Created by Daniel Silva @ 2022 </p>
    </footer>
        
    </div>
};

export default Contact;
