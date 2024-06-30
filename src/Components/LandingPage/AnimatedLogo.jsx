import React, { useEffect, useState } from 'react'
import { motion, useAnimate, useMotionValueEvent, useScroll } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';

const AnimatedLogo = () => {

    const { loading } = useOutletContext()


    const [scope, animate] = useAnimate()


    const { scrollYProgress } = useScroll()

    const [scrollValue, setScrollValue] = useState(scrollYProgress.current)

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setScrollValue(latest)
    })


    let topValue = (scrollValue > 0 && !loading) ? -150 : 0


    const animateAll = async () => {
        await animate('.pathSB',
            {
                pathLength: 1
            },
            {
                duration: 2.5,
                ease: "easeInOut",
            }
        )
        await animate('.svgAirEng',
            {
                opacity: 1
            },
            {
                duration: 1,
                ease: "easeInOut",
            }
        )


        await animate("#targetDiv",
            {
                height: 'auto', width: "auto",
            },
            {
                duration: 1, ease: "easeInOut"
            }
        )
    }
    const animateScroll = async () => {
        await animate("#targetDiv",
            {
                y: `${topValue}px`,
            },
            {
                duration: .5, ease: "easeInOut"
            }
        )
    }


    useEffect(() => {
        animateAll()
    }, [])

    useEffect(() => {
        animateScroll()
    }, [scrollValue, loading])

    return (
        <div ref={scope}>


            <div
                className='fixed z-50 opacity-100 w-full h-[100vh] flex items-center justify-center bg-[#f8f8f80a] backdrop-blur-lg'
                id="targetDiv"
            >
                <svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg"
                    width="150.000000" height="100.000000" viewBox="0 0 300.000000 253.000000"
                >
                    <path className='pathSB stroke-[#eae1e1ac]' fill="#222121" pathLength={0} d="M298 2163 c1 -164 7 -342 13 -395 42 -394 249 -607 634 -654 193 -24
244 -44 271 -110 31 -75 56 -70 -343 -73 -197 -1 -359 -4 -361 -6 -2 -2 -6
-127 -9 -279 l-6 -276 661 0 662 0 0 423 c0 462 -4 496 -59 605 -45 87 -86
138 -151 187 -88 64 -143 81 -325 100 -186 19 -235 29 -290 60 -52 30 -84 91
-70 135 6 19 15 20 126 20 l120 0 -3 280 -3 280 -435 0 -435 0 3 -297z"
                    />
                    <path className='pathSB stroke-[#eae1e1ac]' fill="grey" pathLength={0} d="M1303 2318 c4 -79 7 -203 7 -275 l0 -133 415 0 415 0 32 -29 c28 -25
33 -36 33 -76 0 -40 -5 -51 -33 -76 l-32 -29 -237 0 -236 0 23 -25 c13 -14 51
-46 85 -70 103 -76 149 -168 182 -365 l17 -99 72 1 c75 0 126 -18 138 -47 13
-35 6 -102 -13 -119 -20 -18 -109 -36 -180 -36 l-44 0 6 -137 c4 -75 7 -203 7
-286 l0 -149 93 6 c291 21 419 65 537 185 102 104 162 255 163 406 0 139 -47
253 -162 390 l-50 60 63 65 c35 36 73 79 85 97 61 90 87 273 57 413 -37 172
-138 312 -271 375 -160 75 -320 94 -809 95 l-369 0 6 -142z"
                    />
                    <path className="svgAirEng stroke-[#eae1e1ac]" opacity={0} pathLength={0} d="M350 170 l0 -110 25 0 26 0 -3 107 c-3 101 -4 106 -25 109 -23 4 -23
2 -23 -106z"
                    />
                    <path className="svgAirEng stroke-[#eae1e1ac]" opacity={0} pathLength={0} d="M420 168 c0 -107 0 -108 24 -108 24 0 24 1 18 85 l-5 86 84 -3 c78
-3 84 -4 87 -25 3 -22 0 -23 -68 -23 l-72 0 53 -59 c46 -50 59 -60 88 -60 l35
-1 -32 33 c-35 36 -41 50 -17 41 20 -8 65 40 65 68 0 13 -7 33 -15 45 -14 20
-26 22 -130 25 l-115 3 0 -107z"
                    />
                    <path className="svgAirEng stroke-[#eae1e1ac]" opacity={0} pathLength={0} d="M900 168 l0 -108 110 0 110 0 0 25 c0 25 -1 25 -85 25 -76 0 -85 2
-85 18 0 17 7 18 80 14 l80 -5 0 27 c0 26 0 26 -80 26 -74 0 -80 1 -80 21 0
19 5 20 85 17 85 -3 85 -3 85 22 l0 25 -110 0 -110 0 0 -107z"
                    />
                    <path className="svgAirEng stroke-[#eae1e1ac]" opacity={0} pathLength={0} d="M1140 169 l0 -109 25 0 c24 0 25 2 25 76 l0 75 63 -75 c43 -53 69
-76 85 -76 21 0 22 3 22 110 l0 110 -26 0 -26 0 7 -77 c4 -51 3 -75 -3 -68 -5
6 -35 39 -65 74 -38 43 -64 65 -81 67 l-26 3 0 -110z"
                    />
                    <path className="svgAirEng stroke-[#eae1e1ac]" opacity={0} pathLength={0} d="M1515 272 c-115 -4 -125 -11 -125 -102 0 -93 13 -104 134 -108 l93
-4 -1 66 -1 66 -57 0 c-56 0 -58 -1 -58 -26 0 -25 2 -26 35 -20 31 6 35 4 35
-14 0 -18 -6 -20 -65 -20 -36 0 -65 4 -66 10 0 6 -1 28 -1 50 0 22 1 45 1 50
1 6 38 10 91 10 82 0 90 2 90 19 0 26 -1 26 -105 23z"
                    />
                    <path className="svgAirEng stroke-[#eae1e1ac]" opacity={0} pathLength={0} d="M1639 270 c0 -3 -1 -50 -1 -105 1 -93 2 -100 21 -103 20 -3 21 1 21
105 0 102 -1 109 -20 109 -11 0 -20 -3 -21 -6z"
                    />
                    <path className="svgAirEng stroke-[#eae1e1ac]" opacity={0} pathLength={0} d="M1710 273 c-1 -2 -1 -49 -1 -105 -1 -100 0 -103 22 -103 21 0 22 3
20 75 -1 41 -1 73 2 70 2 -3 32 -38 67 -78 44 -52 68 -72 82 -70 18 3 20 11
20 108 0 102 -1 105 -23 105 -21 0 -22 -3 -20 -75 1 -41 1 -73 -2 -70 -2 3
-31 37 -64 75 -40 47 -68 71 -82 71 -11 0 -21 -2 -21 -3z"
                    />
                    <path className="svgAirEng stroke-[#eae1e1ac]" opacity={0} pathLength={0} d="M1950 168 l0 -108 110 0 110 0 0 25 c0 25 -1 25 -91 25 -81 0 -90 2
-87 18 3 15 14 17 86 13 l82 -3 0 26 c0 26 0 26 -86 26 -76 0 -85 2 -82 18 3
14 16 17 88 18 80 2 85 3 85 24 0 21 -4 22 -108 23 l-107 2 0 -107z"
                    />
                    <path className="svgAirEng stroke-[#eae1e1ac]" opacity={0} pathLength={0} d="M2190 168 l0 -108 110 0 110 0 0 25 c0 25 -1 25 -85 25 -76 0 -85 2
-85 18 0 17 7 18 80 14 l80 -5 0 27 c0 26 0 26 -80 26 -73 0 -80 2 -80 20 0
18 7 20 85 20 81 0 85 1 85 23 0 21 -3 22 -110 22 l-110 0 0 -107z"
                    />
                    <path className="svgAirEng stroke-[#eae1e1ac]" opacity={0} pathLength={0} d="M2430 168 l0 -108 25 0 c25 0 25 1 25 85 l0 85 79 0 c54 0 80 -4 83
-12 11 -30 -4 -38 -69 -38 l-65 0 52 -60 c41 -48 58 -60 81 -60 37 0 37 12 -2
44 -17 14 -29 26 -27 27 2 0 14 2 27 3 31 4 51 32 51 70 0 57 -8 61 -140 66
l-120 5 0 -107z"
                    />
                    <path className="svgAirEng stroke-[#eae1e1ac]" opacity={0} pathLength={0} d="M2835 271 c-96 -6 -100 -7 -113 -33 -15 -32 -3 -72 29 -89 14 -7 48
-10 91 -7 61 5 68 4 68 -13 0 -17 -9 -19 -95 -19 -95 0 -95 0 -95 -25 0 -25 1
-25 91 -25 116 0 149 15 149 71 0 45 -27 59 -118 59 -77 0 -82 1 -82 21 0 20
4 21 95 17 l95 -3 0 28 c0 15 -3 26 -7 25 -5 -1 -53 -4 -108 -7z"
                    />
                    <path className="svgAirEng stroke-[#eae1e1ac]" opacity={0} pathLength={0} d="M86 248 c-11 -16 -16 -46 -16 -105 0 -82 0 -83 25 -83 25 0 25 1 25
85 l0 85 80 0 c79 0 80 0 80 -25 0 -24 -2 -25 -65 -25 -63 0 -65 -1 -65 -25 0
-24 2 -25 65 -25 l65 0 0 -35 c0 -31 3 -35 26 -35 l26 0 -4 88 c-4 120 -6 122
-129 122 -90 0 -99 -2 -113 -22z"
                    />

                </svg>
            </div>

        </div>
    )
}

export default AnimatedLogo














{/* 

 const pathVariants = {
        hidden: {
            // opacity: 0,
            pathLength: 0,
        },
        visible: {
            // opacity: 1,
            pathLength: 1,
            transition: {
                duration: 3,
                ease: "easeInOut",
            }
        }
    };


            <motion.div
                className='absolute z-50 h-[100vh] w-full flex items-center justify-center bg-[#F8F8F8  ]'
                initial={{ opacity: 1, height: "100vh", width: "100%", }}
                animate={{
                    height: 'auto', width: "auto", opacity: scrollValue > 0 ? 0 : 1, y: scrollValue > 0 ? -50 : 0,
                }}
                transition={{
                    duration: 3,
                    opacity: {
                        duration: 0.5
                    },
                    y: {
                        duration: 0.5
                    }
                }}
                ref={scope}
            >
                <motion.svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg"
                    width="150.000000" height="100.000000" viewBox="0 0 300.000000 253.000000"
                    initial="hidden"
                    animate="visible"
                >
                    <motion.path  d="M298 2163 c1 -164 7 -342 13 -395 42 -394 249 -607 634 -654 193 -24
244 -44 271 -110 31 -75 56 -70 -343 -73 -197 -1 -359 -4 -361 -6 -2 -2 -6
-127 -9 -279 l-6 -276 661 0 662 0 0 423 c0 462 -4 496 -59 605 -45 87 -86
138 -151 187 -88 64 -143 81 -325 100 -186 19 -235 29 -290 60 -52 30 -84 91
-70 135 6 19 15 20 126 20 l120 0 -3 280 -3 280 -435 0 -435 0 3 -297z"
                        variants={pathVariants} />
                    <motion.path fill="none" d="M1303 2318 c4 -79 7 -203 7 -275 l0 -133 415 0 415 0 32 -29 c28 -25
33 -36 33 -76 0 -40 -5 -51 -33 -76 l-32 -29 -237 0 -236 0 23 -25 c13 -14 51
-46 85 -70 103 -76 149 -168 182 -365 l17 -99 72 1 c75 0 126 -18 138 -47 13
-35 6 -102 -13 -119 -20 -18 -109 -36 -180 -36 l-44 0 6 -137 c4 -75 7 -203 7
-286 l0 -149 93 6 c291 21 419 65 537 185 102 104 162 255 163 406 0 139 -47
253 -162 390 l-50 60 63 65 c35 36 73 79 85 97 61 90 87 273 57 413 -37 172
-138 312 -271 375 -160 75 -320 94 -809 95 l-369 0 6 -142z"
                        variants={pathVariants} />
                    <motion.path className="svgAirEng" fill="none" d="M350 170 l0 -110 25 0 26 0 -3 107 c-3 101 -4 106 -25 109 -23 4 -23
2 -23 -106z" variants={pathVariants} />
                    <motion.path className="svgAirEng" fill="none" d="M420 168 c0 -107 0 -108 24 -108 24 0 24 1 18 85 l-5 86 84 -3 c78
-3 84 -4 87 -25 3 -22 0 -23 -68 -23 l-72 0 53 -59 c46 -50 59 -60 88 -60 l35
-1 -32 33 c-35 36 -41 50 -17 41 20 -8 65 40 65 68 0 13 -7 33 -15 45 -14 20
-26 22 -130 25 l-115 3 0 -107z" variants={pathVariants} />
                    <motion.path className="svgAirEng" fill="none" d="M900 168 l0 -108 110 0 110 0 0 25 c0 25 -1 25 -85 25 -76 0 -85 2
-85 18 0 17 7 18 80 14 l80 -5 0 27 c0 26 0 26 -80 26 -74 0 -80 1 -80 21 0
19 5 20 85 17 85 -3 85 -3 85 22 l0 25 -110 0 -110 0 0 -107z" variants={pathVariants} />
                    <motion.path className="svgAirEng" fill="none" d="M1140 169 l0 -109 25 0 c24 0 25 2 25 76 l0 75 63 -75 c43 -53 69
-76 85 -76 21 0 22 3 22 110 l0 110 -26 0 -26 0 7 -77 c4 -51 3 -75 -3 -68 -5
6 -35 39 -65 74 -38 43 -64 65 -81 67 l-26 3 0 -110z" variants={pathVariants} />
                    <motion.path className="svgAirEng" fill="none" d="M1515 272 c-115 -4 -125 -11 -125 -102 0 -93 13 -104 134 -108 l93
-4 -1 66 -1 66 -57 0 c-56 0 -58 -1 -58 -26 0 -25 2 -26 35 -20 31 6 35 4 35
-14 0 -18 -6 -20 -65 -20 -36 0 -65 4 -66 10 0 6 -1 28 -1 50 0 22 1 45 1 50
1 6 38 10 91 10 82 0 90 2 90 19 0 26 -1 26 -105 23z" variants={pathVariants} />
                    <motion.path className="svgAirEng" fill="none" d="M1639 270 c0 -3 -1 -50 -1 -105 1 -93 2 -100 21 -103 20 -3 21 1 21
105 0 102 -1 109 -20 109 -11 0 -20 -3 -21 -6z" variants={pathVariants} />
                    <motion.path className="svgAirEng" fill="none" d="M1710 273 c-1 -2 -1 -49 -1 -105 -1 -100 0 -103 22 -103 21 0 22 3
20 75 -1 41 -1 73 2 70 2 -3 32 -38 67 -78 44 -52 68 -72 82 -70 18 3 20 11
20 108 0 102 -1 105 -23 105 -21 0 -22 -3 -20 -75 1 -41 1 -73 -2 -70 -2 3
-31 37 -64 75 -40 47 -68 71 -82 71 -11 0 -21 -2 -21 -3z" variants={pathVariants} />
                    <motion.path className="svgAirEng" fill="none" d="M1950 168 l0 -108 110 0 110 0 0 25 c0 25 -1 25 -91 25 -81 0 -90 2
-87 18 3 15 14 17 86 13 l82 -3 0 26 c0 26 0 26 -86 26 -76 0 -85 2 -82 18 3
14 16 17 88 18 80 2 85 3 85 24 0 21 -4 22 -108 23 l-107 2 0 -107z" variants={pathVariants} />
                    <motion.path className="svgAirEng" fill="none" d="M2190 168 l0 -108 110 0 110 0 0 25 c0 25 -1 25 -85 25 -76 0 -85 2
-85 18 0 17 7 18 80 14 l80 -5 0 27 c0 26 0 26 -80 26 -73 0 -80 2 -80 20 0
18 7 20 85 20 81 0 85 1 85 23 0 21 -3 22 -110 22 l-110 0 0 -107z" variants={pathVariants} />
                    <motion.path className="svgAirEng" fill="none" d="M2430 168 l0 -108 25 0 c25 0 25 1 25 85 l0 85 79 0 c54 0 80 -4 83
-12 11 -30 -4 -38 -69 -38 l-65 0 52 -60 c41 -48 58 -60 81 -60 37 0 37 12 -2
44 -17 14 -29 26 -27 27 2 0 14 2 27 3 31 4 51 32 51 70 0 57 -8 61 -140 66
l-120 5 0 -107z" variants={pathVariants} />
                    <motion.path className="svgAirEng" fill="none" d="M2835 271 c-96 -6 -100 -7 -113 -33 -15 -32 -3 -72 29 -89 14 -7 48
-10 91 -7 61 5 68 4 68 -13 0 -17 -9 -19 -95 -19 -95 0 -95 0 -95 -25 0 -25 1
-25 91 -25 116 0 149 15 149 71 0 45 -27 59 -118 59 -77 0 -82 1 -82 21 0 20
4 21 95 17 l95 -3 0 28 c0 15 -3 26 -7 25 -5 -1 -53 -4 -108 -7z" variants={pathVariants} />
                    <motion.path className="svgAirEng" fill="none" d="M86 248 c-11 -16 -16 -46 -16 -105 0 -82 0 -83 25 -83 25 0 25 1 25
85 l0 85 80 0 c79 0 80 0 80 -25 0 -24 -2 -25 -65 -25 -63 0 -65 -1 -65 -25 0
-24 2 -25 65 -25 l65 0 0 -35 c0 -31 3 -35 26 -35 l26 0 -4 88 c-4 120 -6 122
-129 122 -90 0 -99 -2 -113 -22z" variants={pathVariants} />
                </motion.svg>
            </motion.div> */}