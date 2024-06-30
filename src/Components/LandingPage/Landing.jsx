import React from 'react'
import { useOutletContext } from 'react-router-dom'
import AutoSlider from './AutoSlider'
import Hero from './Hero'

const Landing = () => {
    return (
        <>
            <div id='home' className='scroll-snap relative h-[100vh] min-h-[500px] pt-28 pb-2'>
                <AutoSlider />
                <div className="absolute inset-0 opacity-80 bg-black"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div></div>
                {/* <div className='absolute inset-0 bg-black opacity-55'></div> */}
                {/* <div className='relative z-10 h-[100%] '> */}
                <Hero />
                {/* </div> */}
            </div>
        </>
    )
}

export default Landing






{/* <svg
                    className='absolute top-0 left-0 w-full h-full'
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    fill="none"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,96L120,122.7C240,149,480,203,720,192C960,181,1200,107,1320,69.3L1440,32V320H1320C1200,320,960,320,720,320C480,320,240,320,120,320H0V96Z"
                        fill="#dcdfcd"
                        fillOpacity="0.6"
                    />
                    <path
                        d="M0,192L60,197.3C120,203,240,213,360,197.3C480,181,600,139,720,144C840,149,960,203,1080,192C1200,181,1320,107,1380,69.3L1440,32V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0V192Z"
                        fill="#e2e2c3"
                        fillOpacity="0.7"
                    />
                </svg> */}

{/* SVG Curvy Lines in Background */ }
{/* <svg
                    className='absolute top-30 left-0 w-full h-full pointer-events-none'
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,32 C120,120 240,40 360,96 C480,152 600,64 720,128 C840,192 960,96 1080,160 C1200,224 1320,128 1440,192"
                        stroke="#FFD54F"
                        strokeWidth="4"
                        fill="none"
                    />
                    <path
                        d="M0,64 C140,150 280,70 420,120 C560,170 700,90 840,140 C980,190 1120,110 1260,160 C1400,210 1540,130 1680,180"
                        stroke="#FFD54F"
                        strokeWidth="4"
                        fill="none"
                    />
                    <path
                        d="M0,96 C160,180 320,100 480,144 C640,188 800,108 960,152 C1120,196 1280,116 1440,160"
                        stroke="#FFD54F"
                        strokeWidth="4"
                        fill="none"
                    />
                </svg> */}