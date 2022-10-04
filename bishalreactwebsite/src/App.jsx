import React from 'react'
import styles from './style'
import { navbar,
  billing,
  carddeal,
  business,
  client,
  cta,
  stats,
  footer,
  testimonials,
  hero,} from './components'

const App = () => {
  return (
    /* JSX */
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          Navbar
        </div>
      </div>

      /* Hero Section */
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Hero  
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Stats
          Business
          Billing 
          CardDeal 
          Testimonial 
          Clients 

        </div>
      </div>

    </div>
  )
}

export default App