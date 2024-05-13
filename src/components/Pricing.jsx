import React from 'react'
import Section from './Section'

import Heading from './Heading'
import {LeftLine,RightLine} from "../design/Pricing"

import {smallSphere, stars} from '../assets'
import PricingList from './PricingList'
function Pricing() {
  return (
    <Section className="overflow-hidden" id="pricing">

        <div className='container relative z-2'>

            <div className='hidden relative justify-center mb-[6.5rem] lg:flex'>
                <img

                src={smallSphere}
                className='relative z-1'
                width={255}
                height={255}
                alt="smallSphere"
                
                />

                <div className='absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
                    <img src={stars} className='w-full' width={950}
                    height={400}/>
                </div>
            </div>

            <Heading

            tag="Get Started with ASTRA"
            title = "Affordable Prices, for Everyone "
            
            />
            <div className='relative'>
              <PricingList/>
              <LeftLine/>
              <RightLine/>
            </div>

            <div className='text-center mt-10'>
              <a className='text-xs font-code font-bold tracking-wider border-b href="/pricing"'>Explore More</a>
            </div>
        </div>
    </Section>
  )
}

export default Pricing