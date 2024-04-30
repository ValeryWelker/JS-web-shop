import React from 'react'
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer>
        <div className="footer_block">
            <div className="footername">Contact</div>
            <div className="info">
                <div id='phone'>
                  <div>Phone</div>
                  <div id="phone_number">+7 (499) 350-66-04</div>
                </div>
                <div id='socials'>
                  <div>Socials</div>
                  <div>
                    <img id="instagram" src="/images/instagram.png"></img>
                    <img id="whatsup" src="/images/whatsup.png"></img>
                  </div>
                </div>
                <div id='address'>
                  <div>Adress</div>
                  <div id="address_street">Dubininskaya Ulitsa, 96, Moscow,<br/> Russia, 115093</div>
                </div>
                
                <div id='working_hours'>
                  <div>Working hours</div>
                  <div id='working_hours_text'>24 hours a day</div>
                </div>
            </div>
            <div className="map"><img id="company_location" src="/images/map.png"></img></div>
        </div>
    </footer>
  )
}