import './Content.css';
import aboutUs from './AboutUs.png';
import { useEffect, useState } from 'react';

function Content() {

    const [isVisible, setIsVisible] = useState(false);  

    const handleScroll = () => {  
        const element = document.getElementById('aboutus');  
        const position = element.getBoundingClientRect();

        //Kiểm tra nếu phần tử nằm trong viewport  
        if (position.top < window.innerHeight && position.bottom >= 0) {  
            setIsVisible(true);  
        }  
    };  

    useEffect(() => {  
        window.addEventListener('scroll', handleScroll);  
        return () => {  
            window.removeEventListener('scroll', handleScroll);  
        };  
    }, []);  

    console.log(isVisible);
    

    return (
        <div className={`Content ${isVisible ? 'visible' : ''}`}>
            <section id='aboutus'>
                <img src={aboutUs}></img>
                <div className={`aboutus-content`}>
                    <h1>About us</h1>
                    <p>
                        As the leading unit in the vaccination service industry in Vietnam, the VNVC vaccination system has made continuous efforts and achieved numerous outstanding accomplishments in vaccination activities and disease prevention during nearly a decade of establishment and development. It has gained the trust and affection of tens of millions of people across the country. For many consecutive years, VNVC has been honored as the number one company in the top 10 prestigious pharmaceutical companies in Vietnam (2023, 2024) in the field of pharmaceutical distribution and medical equipment trade, and has been privileged to receive a Certificate of Merit from the Prime Minister for its outstanding contributions to disease prevention efforts.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Content;