import React from 'react'
import Footer from './Footer'
import Newsletter from './Newsletter'
import Hero from './HeroSection'
import Header from './Header'

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

      <Newsletter />
      <Footer />
    </section>
  )
}

export default Section404
