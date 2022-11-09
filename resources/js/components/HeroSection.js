import React from 'react'
import { Boutton } from './Boutton'
import './HeroSection.css'
/* === page d acceuil  ====== */
function HeroSection() {
    return (<div className='heros-container'>
            <h1>ACHETEZ VOTRE AUTO </h1>
            <strong> 100% EN LIGNE</strong>
             <p>LE PROCESSUS EST SIMPLE, SANS CONTACT ET À VOTRE ENTIÈRE SATISFACTION.</p>
            <div className='btns-hero'>
                <Boutton lien="/OccazAuto/vehicule-usager" className='btns btns_bg' buttonStyle='btn--outline'
                buttonSize='btn--large'>Trouver votre Auto</Boutton>
                 <Boutton lien="/OccazAuto/A-vendre" className='btns' buttonStyle='btns--bg'
                buttonSize='btn--large'>Vendre votre Auto</Boutton>
            </div>  
        </div>
    )
}
export default HeroSection
