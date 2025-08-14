import homeImage from '../assets/home1.jpg';

const instagramLink = "https://www.instagram.com/killjoynails/";

export default function HomePage() {
    return (
        <div className="home-page">
            <div className="home-image-container">
                <img src={homeImage} alt="Home" className="home-image"/>
            </div>
            <div className="home-content-container">
                <h4 className="home-description">
                    Copenhagen based nail artist, specializing in 3D nail art, fabulous designs, and custom press-ons.
                </h4>
                <div className="home-links">
                    <ul className="home-list">
                        <li>Check out my work on my <a href="/portfolio" className="home-link">PORTFOLIO</a></li>
                        <li>See my <a href="/book" className="home-link">SERVICES and PRICES</a></li>
                        <li>Book an <a href="/book" className="home-link">APPOINTMENT</a></li>
                        <li>Get in <a href="/contact" className="home-link">CONTACT</a></li>
                    </ul>
                </div>
                <div className="home-socials">
                    <a href={instagramLink} className="instagram-link" target="_blank"
                       rel="noopener noreferrer">
                        <svg className="instagram-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="6" ry="6"></rect>
                            <circle cx="12" cy="12" r="4"></circle>
                            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"></circle>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}