import React from 'react'
import './certificates.css';

import  JavaB  from '../../assets/certificates/java.jpg';
import  python  from '../../assets/certificates/python.jpg';
import  JavaI  from '../../assets/certificates/java-Intermediate.jpg';
import  WebD  from '../../assets/certificates/Web.jpg';
import  html  from '../../assets/certificates/html.jpg';
import  angular  from '../../assets/certificates/angular.png';
// import  SpringB  from '../../assets/certificates/springboot.png';
//import  JavaI  from '../../assets/certificates/ji.png';
//import  ReactB  from '../../assets/certificates/rb.png';

//import  JiraFund  from '../../assets/certificates/jiraf.png';


const Certificates = () => {
  return (
    <section className="certificates section" id="certificates">
        <h2 className="section__title">Certificates</h2>
        <span className="section__subtitle">What i archived</span>

        <div className="certificates__backgroundeffect"></div>

        <div className="certificates__container container">
            <div className="certificates__content  grid">

                <div className="certificate__item">
                    <img src={JavaB} alt="Java Beginner" />
                    <span>Java Introduction</span>
                </div>

                <div className="certificate__item">
                    <img src={python} alt="Moratuwa Web Development" />
                    <span>Python Basics</span>
                </div>
               
                <div className="certificate__item">
                    <img src={JavaI} alt="Java Intermediate" />
                    <span>Java Intermediate</span>
                </div>

                <div className="certificate__item">
                    <img src={angular} alt="Angular Development" />
                    <span>Angular Web Development</span>
                </div>

                <div className="certificate__item">
                    <img src={html} alt="HTML Development" />
                    <span>HTML Development</span>
                </div>

                <div className="certificate__item">
                    <img src={WebD} alt="Web Development" />
                    <span>Web Development</span>
                </div>

                

            </div>
        </div>
    </section>    
  )
}

export default Certificates