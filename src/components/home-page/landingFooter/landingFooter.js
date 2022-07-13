import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {Link} from 'react-router-dom';
import './landingFooter.css';

const landingFooter = () => {
    return(
        <div className='footer-container'>
            <div className='footer-left'>
                <h4>About us</h4>
                <div>Food stuff price compare app which helps people to compare prices from different markets for different products,
                    <br/>
                    Rwanda</div>
            </div>
            <div className='footer-right'>
            <h4>Contact us</h4>
                <p>Tel:+250782234092</p>
                <p>E:diny@gmail.com</p>
                <p>Location:kigali</p>
            </div>
            <div className='footer-social'>
                <div className='facebook'><Link to=''><FontAwesomeIcon icon={faFacebook}/></Link></div>
                <div className='twitter'><Link to=''><FontAwesomeIcon icon={faTwitter}/></Link></div>
                <div className='instagram'><Link to=''><FontAwesomeIcon icon={faInstagram}/></Link></div>
                <hr style={{width:'100%'}}/>
            </div>
            <hr/>
            <div className='footer-copyright'>
                &copy; 2020 FOOD-STUFF. All rights reserved.
            </div>
        </div>  
    )
}

export default landingFooter;