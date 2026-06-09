import React from 'react'
import Banner from './Banner'
import About from './About'
import OurInstitution from './OurInstution'
import Testimonial from './Testimonial'
import Quote from './Quote'

export default function Home() {
  return (
    <div>
        <Banner/>
        <About/>
        <OurInstitution/>
        <Testimonial/>
        <Quote/>
    </div>
  )
}
