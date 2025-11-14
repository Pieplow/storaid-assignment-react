import React from 'react'
import Hero from './HeroSection'


const Section404 = () => {
  return (
    <section className="PageNotFound">
      <Header />

      <Hero
        title="Page Not Found"
        text="Oops! The page you’re looking for doesn’t exist or has been moved."
        buttonLabel="Go Back Home"
        buttonLink="/"
      />

  
    </section>
  )
}

export default Section404
