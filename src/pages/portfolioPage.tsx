import portfolio1 from '../assets/portfolio1.jpg';
import portfolio2 from '../assets/portfolio2.jpg';
import portfolio3 from '../assets/portfolio3.jpg';
import portfolio4 from '../assets/portfolio4.jpg';
import portfolio5 from '../assets/portfolio5.jpg';
import portfolio6 from '../assets/portfolio6.jpg';
import portfolio7 from '../assets/portfolio7.jpg';
import portfolio8 from '../assets/portfolio8.jpg';
import portfolio9 from '../assets/portfolio9.jpg';
import portfolio10 from '../assets/portfolio10.jpg';
import portfolio11 from '../assets/portfolio11.jpg';
import portfolio12 from '../assets/portfolio12.jpg';
import portfolio13 from '../assets/portfolio13.jpg';
import portfolio14 from '../assets/portfolio14.jpg';
import portfolio15 from '../assets/portfolio15.jpg';
import portfolio16 from '../assets/portfolio16.jpg';
import portfolio17 from '../assets/portfolio17.jpg';
import portfolio18 from '../assets/portfolio18.jpg';
import portfolio19 from '../assets/portfolio19.jpg';
import portfolio20 from '../assets/portfolio20.jpg';
import portfolio21 from '../assets/portfolio21.jpg';
import portfolio22 from '../assets/portfolio22.jpg';
import portfolio23 from '../assets/portfolio23.jpg';
import portfolio24 from '../assets/portfolio24.jpg';
import portfolio25 from '../assets/portfolio25.jpg';
import portfolio26 from '../assets/portfolio26.jpg';
import portfolio27 from '../assets/portfolio27.jpg';
import portfolio28 from '../assets/portfolio28.jpg';


const portfolioImages = [
    portfolio1,
    portfolio2,
    portfolio3,
    portfolio4,
    portfolio5,
    portfolio6,
    portfolio7,
    portfolio8,
    portfolio9,
    portfolio10,
    portfolio11,
    portfolio12,
    portfolio13,
    portfolio14,
    portfolio15,
    portfolio16,
    portfolio17,
    portfolio18,
    portfolio19,
    portfolio20,
    portfolio21,
    portfolio22,
    portfolio23,
    portfolio24,
    portfolio25,
    portfolio26,
    portfolio27,
    portfolio28
];

export default function PortfolioPage() {
    return (
        <div className="portfolio-page">
            <div className="portfolio-gallery">
                {portfolioImages.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`PortfolioPage image ${index + 1}`}
                        className="portfolio-image"
                    />
                ))}
            </div>
        </div>
    );
}