import React, { useState, useEffect } from 'react';
import { motion, useAnimationControls, useMotionValueEvent, useScroll, useSpring } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import { FaArrowAltCircleDown } from 'react-icons/fa';

function Navbar({ loading }) {

    const { scrollYProgress } = useScroll()

    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 15 })


    const [scrollValue, setScrollValue] = useState(scrollYProgress.current)

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setScrollValue(latest)
    })



    const controls = useAnimationControls()
    useEffect(() => {
        if (!loading) {
            controls.start('move')
        }
    }, [loading])



    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    const handleScrollToNextSection = () => {
        const sections = ["home", "aboutUs", "about", "howWeWork", "product", "team", "event", "services", "impression", "contact"];
        const currentYOffset = window.pageYOffset;

        for (let i = 0; i < sections.length; i++) {
            const section = document.getElementById(sections[i]);
            if ((section) && (section.offsetTop > currentYOffset + 1)) {
                console.log(currentYOffset, 'offset', section.offsetTop, (section.offsetTop >= currentYOffset), section);
                section.scrollIntoView({ behavior: 'smooth' });
                break;
            }
        }
    };




    return (
        <>
            < motion.div className='fixed flex z-20 w-full'
                variants={{
                    initial: { y: -50 },
                    move: { y: 0 }
                }}

                initial="initial"
                animate={controls}
                transition={{
                    duration: .5, ease: "easeInOut"
                }}
            >

                <motion.ul className='flex w-[700px] text-yellow-50 backdrop-blur-[10px] h-[70px] ml-auto gap-6 text-xl items-center justify-center poppins-regular'
                    initial={{ width: '700px' }}
                    animate={{
                        backgroundColor: scrollValue > 0 ? '#030a21b9' : 'transparent',
                        width: scrollValue > 0 ? '100%' : '700px'
                    }}
                    transition={{
                        duration: .5, ease: "easeInOut"
                    }}
                >
                    <motion.li whileHover={{ scale: 1.1 }} style={{ cursor: "pointer" }} onClick={() => scrollToSection("home")}>Home</motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} style={{ cursor: "pointer" }} onClick={() => scrollToSection("about")}>About Us</motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} style={{ cursor: "pointer" }} onClick={() => scrollToSection("services")}>Services</motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} style={{ cursor: "pointer" }} onClick={() => scrollToSection("products")}>Products</motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} style={{ cursor: "pointer" }} onClick={() => scrollToSection("events")}>Events</motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} style={{ cursor: "pointer" }} onClick={() => scrollToSection("contact")}>Contact Us</motion.li>
                </motion.ul>
                <motion.div className='origin-left bg-[#2158aa] absolute bottom-[-4px] w-full h-1 z-30 scale-x-0'
                    style={{ scaleX }}
                />
            </motion.div>
            {scrollValue < 1 && <motion.div
                className="fixed bottom-8 right-8 z-50 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleScrollToNextSection}
                key="down-arrow-button"
            >
                <motion.div style={{ display: 'inline-block' }}
                    animate={{ y: [0, 10, 0], rotate: [-360, 0, 0, 0, 0, 0, 0, 0] }}
                    transition={{
                        repeat: Infinity, duration: 1.5, ease: "easeInOut",
                        rotate: {
                            duration: 5, repeat: Infinity, ease: "easeInOut"
                        }
                    }}

                >
                    <FaArrowAltCircleDown size={48} color="#f0a500" />
                </motion.div>
            </motion.div>}
            <Outlet context={{ loading }} />
        </>
    );
}

export default Navbar;
