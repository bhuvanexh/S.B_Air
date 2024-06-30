import React from 'react'
import { motion } from 'framer-motion'
import Card from './Card';
const Services = () => {

    const cards = [
        { id: 1, number: '01', title: 'Air compressor installation', description: 'Our professional technicians provide seamless air compressor installation services.' },
        { id: 2, number: '02', title: 'Sales Support', description: 'We offer exceptional sales support to help you select the right air compressor for your needs.' },
        { id: 3, number: '03', title: 'Service Support', description: 'Our dedicated service support team is available to assist you with any technical issues or maintenance needs.' },
        { id: 4, number: '04', title: 'Medical Air System', description: 'We specialize in providing high-quality medical air systems that meet stringent health and safety standards.' },
        { id: 5, number: '05', title: 'Annual Maintenance Contract', description: 'Our AMC services are designed to extend the lifespan of your equipment, reduce the risk of breakdowns, and maintain optimal performance.' },
        { id: 6, number: '06', title: 'Compressor Health Check Ups', description: 'Regular health check-ups are essential for maintaining the efficiency and longevity of your air compressors.' },
    ];




    return (
        <div id='testimonial' className='scroll-snap relative serviceBg min-h-[500px] py-24 flex flex-col gap-16'>
            <div className='absolute inset-0 bg-[#0e031fbc] z-0 backdrop-blur-[2px]'></div>

            <div className='flex items-center justify-center py-5 z-10'>
                <h3 className='text-7xl w-2/3 text-center text-white font-poppins font-bold'>
                    We Provide Best Services For Industries
                </h3>
            </div>

            <div className='grid w-[80%] grid-cols-3 mx-auto gap-y-8 justify-items-center z-10'>
                {cards.map(card => (
                    <Card key={card.id} number={card.number} title={card.title} description={card.description} />
                ))}
            </div>
        </div>
    )
}

export default Services