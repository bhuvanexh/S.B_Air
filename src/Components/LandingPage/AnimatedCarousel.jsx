import React, { useState, useEffect } from 'react';
import { animate, easeInOut, motion, useMotionValue } from 'framer-motion';
import useMeasure from 'react-use-measure';

import bl from '../../assets/Team/bl.png';
import kamal from '../../assets/Team/kamal.png';
import manish from '../../assets/Team/manish.png';
import pradeep from '../../assets/Team/pradeep.png';
import pramod from '../../assets/Team/pramod.png';
import sandeep from '../../assets/Team/sandeep.png';
import umesh from '../../assets/Team/umesh.png';
import anand from '../../assets/Team/anand.png';

const AnimatedCarousel = () => {
    let [ref, { width }] = useMeasure();

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const xTranslation = useMotionValue(0);
    const [controls, setControls] = useState(null);

    useEffect(() => {
        let finalPosn = -width / 2 - 8;
        let temp = animate(xTranslation, [0, finalPosn], {
            ease: 'linear',
            duration: 25,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0
        });
        setControls(temp);
        return temp.stop;
    }, [xTranslation, width]);

    useEffect(() => {
        if (controls) {
            if (hoveredIndex !== null) {
                controls.pause();
            } else {
                controls.play();
            }
        }
    }, [hoveredIndex, controls]);

    useEffect(() => {
        if (hoveredIndex !== null) {
            animate(`.eventCardFilm${hoveredIndex}`, {
                bottom: 0
            })
        } else {
            animate(`.eventCardFilm`, {
                bottom: "-500px"
            }, { duration: 1.5 })
        }
    }, [hoveredIndex]);

    const images = [
        { src: bl, name: 'B.L SAINI', position: 'FOUNDER', phone: '9414240322' },
        { src: sandeep, name: 'SANDEEP KUMAR', position: 'FOUNDER', phone: '978532585' },
        { src: pramod, name: 'PRAMOD SAINI', position: 'SENIOR SALES MANAGER', phone: '992838502' },
        { src: kamal, name: 'KAMAL', position: 'SERVICE ENGINEER', phone: '7425837400' },
        { src: pradeep, name: 'SERVICE ENGINEER', position: 'PRADEEP', phone: '6350527106' },
        { src: manish, name: 'MANISH', position: 'SERVICE ENGINEER', phone: '7976084001' },
        { src: umesh, name: 'UMESH KUMAR', position: 'ACCOUNTANT', phone: '9460361469' },
        { src: anand, name: 'ANAND', position: 'SERVICE ENGINEER', phone: '9887369524' },
        { src: bl, name: 'B.L SAINI', position: 'FOUNDER', phone: '9414240322' },
        { src: sandeep, name: 'SANDEEP KUMAR', position: 'FOUNDER', phone: '978532585' },
        { src: pramod, name: 'PRAMOD SAINI', position: 'SENIOR SALES MANAGER', phone: '992838502' },
        { src: kamal, name: 'KAMAL', position: 'SERVICE ENGINEER', phone: '7425837400' },
        { src: pradeep, name: 'SERVICE ENGINEER', position: 'PRADEEP', phone: '6350527106' },
        { src: manish, name: 'MANISH', position: 'SERVICE ENGINEER', phone: '7976084001' },
        { src: umesh, name: 'UMESH KUMAR', position: 'ACCOUNTANT', phone: '9460361469' },
        { src: anand, name: 'ANAND', position: 'SERVICE ENGINEER', phone: '9887369524' },
    ];

    return (
        <>
            <motion.div
                className="absolute left-0 flex text-white items-center gap-4 h-full"
                ref={ref}
                style={{ x: xTranslation }}
            >
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className={`w-[300px] h-[400px] rounded-md shadow-md overflow-hidden relative ${hoveredIndex == index ? "grayscale-0" : "grayscale"} `}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <img className="block max-h-full w-full" src={image.src} alt="" />
                        <motion.div className={`eventCardFilm${index} eventCardFilm flex items-end absolute bottom-[-500px] w-full h-full`}
                        >
                            <div className='flex flex-col justify-end gap-3 w-full p-5 bg-[#191818d4]'>
                                <h3 className='text-2xl'>{image.name}</h3>
                                <span>{image.position}</span>
                                <span>{image.phone}</span>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </>
    );
};

export default AnimatedCarousel;
