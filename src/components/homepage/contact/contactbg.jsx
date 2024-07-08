"use client"

import Particles from '@tsparticles/react'
import React from 'react'
import { particlesConfig } from './particles-config';

const ContactBG = () => {
    return (
        <div className="relative h-screen">
            <Particles
                className="absolute inset-0 z-"

                params={particlesConfig}

            />
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white text-4xl font-bold">Your Text Here</h1>
            </div>
        </div>
    );
}

export default ContactBG;



