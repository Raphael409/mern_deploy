import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import React from 'react';
import "./footer.scss";

export const Footer = () => {
    return (
        <footer class="footer-distributed">

            <div class="footer-left">
                <h3>Trinity<span>Mixes</span></h3>

                <p class="footer-links">
                    <a href="/">Home</a>
                    |
                    <a href="/">About</a>
                    |
                    <a href="/">Contact</a>
                </p>

                <p class="footer-company-name">Copyright © 2023 <strong>Trinity Mixes</strong> All rights reserved</p>
                <p class="footer-links"><a href="https://raphaelmbuya.onrender.com" >Developed by: Raphael Mbuya</a></p>

            </div>

            <div class="footer-center">
                <div className='center'>
                    <PlaceIcon className='icon' />
                    <p><span>Nairobi</span>
                        Kenya</p>
                </div>

                <div className='center'>
                    <CallIcon className='icon' />
                    <p>+254 721 966 301</p>
                </div>
                <div className='center'>
                    <EmailIcon className='icon' />
                    <p><a href="mailto:trntmixes@gmail.com">trntmixes@gmail.com</a></p>
                </div>
            </div>
            <div class="footer-right">
                <p class="footer-company-about">
                    <span>About Trinity Mixes</span>
                    <strong>Trinity Mixes</strong> is Strongly oriented in providing catholic mix songs of the best Swahili catholic songs organized by renowed gospel artsits. Credits to; Benerd Mukasa, Shimanyi F. M, Lawrence Kameja, Ray Ufunguo, A. J Muyonga, Baraka T. M, Paul Musoka, Daddy Rutta, E. F Jissu, Hendry P. Kimario and others. <strong>This is not a commercial site. The compilations have been mixed for free.</strong>
                </p>
                <div class="footer-icons">
                    <a href="https://t.me/trntmixes"><TelegramIcon /></a>
                    <a href="https://www.youtube.com/@trinitymixes8413"><YouTubeIcon /></a>
                </div>
            </div>
        </footer>
    )
}

