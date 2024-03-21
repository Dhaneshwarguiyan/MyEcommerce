import './footer.css'
import footer_logo from '../assets/logo_big.png';
import instagram from '../assets/instagram_icon.png';
import pintrest from '../assets/pintester_icon.png';
import whatsapp from '../assets/whatsapp_icon.png'
const Footer = ()=>{
    return(
        <div className='footer'>
            <div className="footer-logo">
                <img className='footer-main-logo' src={footer_logo} alt="" />
                <p>SHOPI</p>
                <ul className="footer-link">
                    <li>Company</li>
                    <li>Products</li>
                    <li>Ofices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="footer-social-icon">
                    <div className="footer-icon-container">
                        <img src={instagram} alt="" />
                    </div>
                    <div className="footer-icon-container">
                        <img src={pintrest} alt="" />
                    </div>
                    <div className="footer-icon-container">
                        <img src={whatsapp} alt="" />
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2023 All Rights Reserved</p>
            </div>
        </div>
    )

}
export default Footer;