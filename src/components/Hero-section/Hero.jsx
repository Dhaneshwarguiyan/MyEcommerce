import arrow from '../assets/arrow.png';
import hero from '../assets/hero_image.png';
import hand from '../assets/hand_icon.png';
import './hero.css'
const Hero = ()=>{
    return(
        <div className='hero'>
            <div className="hero-left">
                <h2>
                    NEW ARRIVALS ONLY
                </h2>
                <div>
                <div className='hero-hand'>
                    <p className='hero-text'>new</p> <img src={hand} alt="hand" width='105px'/> 
                </div>
                <p className='hero-text'>collections</p> 
                <p className='hero-text'>for everyone</p>
                
                </div>
                
                <div className='hero-latest-btn'> 
                    <div>Latest Collection</div>
                     <img src={arrow} alt="arrow" />
                </div>
            
            </div>
            <div className="hero-right">
                <img src={hero} alt="" />
            </div>
        </div>
    )

}

export default Hero;