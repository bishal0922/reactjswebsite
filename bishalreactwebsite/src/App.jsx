import React from 'react';
import styles from './style';
import {Navbar, Hero, Billing, Business, Carddeal, Client, CTA, Footer} from './components';


const App = () => {
  return (
    /* JSX */
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
           <Stats/> 
           <Business/> 
           <Billing/> 
           <Carddeal/>
           <Testimonials/>
           <Client/> 
           <CTA/> 
           <Footer/>
        </div>
      </div>

    </div>
  )
}

export default App