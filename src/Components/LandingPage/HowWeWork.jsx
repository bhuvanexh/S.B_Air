import React, { useState } from 'react'
import workers from "../../assets/workers.png"
import playBtn from "../../assets/playButton.png"
import { AnimatePresence, motion } from 'framer-motion'
const HowWeWork = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };



    return (
        <div id='howWeWork' className='relative'>
            <div className="absolute inset-0 z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
            <div id='howWeWork' className='scroll-snap relative z-10 bg-mask flex pb-12 pt-20 h-[100vh] min-h[500px] justify-center'>
                <div className='w-1/3 flex items-center z-20 h-full justify-center relative'>
                    <img className='block max-w-full max-h-full' src={workers} alt="" />
                    <motion.div
                        className='absolute flex items-center justify-center'
                        whileHover={{ scale: 1 }} // Stop animation when hovered
                        style={{ cursor: "pointer" }}
                        onClick={openModal}
                    >
                        <motion.img
                            className='block w-[100px]'
                            src={playBtn}
                            alt=""
                            initial={{ scale: 1, y: 0 }} // Initial scale and position
                            animate={{ scale: [1, 1.1, 1] }} // Animation scale and position
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} // Animation duration and repeat
                        />
                    </motion.div>
                </div>
                <div className='w-[55%] z-20 px-4 py-10 self-center rounded-md shadow-lg h-max flex text-white backdrop-blur-sm bg-[#070a30d0] flex-col justify-center gap-6 items-center'>
                    <h3 className='text-5xl poppins-regular'>How we work towards betterment and helping our clients ?</h3>
                    <p className='text-xl  lato-regular'>we have the clear goal to get laid ASAP and with your help we're gonna get all the pussies out there, our collaboration will be termed as "Unstoppable Force of Sexual Apetite", so let's come together to cum together !!</p>
                </div>

                <AnimatePresence>
                    {modalOpen && (
                        <motion.div
                            className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-[#0c0827c9] backdrop-blur-sm'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                        >
                            <motion.div
                                className='relative w-[90%] h-[90%] max-w-screen-lg max-h-screen'
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.5, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
                            >
                                <iframe
                                    className='video w-full h-full'
                                    title='Youtube player'
                                    sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                                    src={`https://www.youtube.com/embed/zNa1w6h_ZMI?autoplay=0`}
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default HowWeWork