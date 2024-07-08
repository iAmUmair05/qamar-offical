import AboutSection from '@/src/components/homepage/about'
import Skills from '@/src/components/homepage/skills'
import React from 'react'

export const metadata = {

    title: "About me"
}

const AboutPage = () => {


    return (


        <div className='sm:my-34 my-16'>

            <AboutSection />
            <Skills />

        </div>


    )
}

export default AboutPage