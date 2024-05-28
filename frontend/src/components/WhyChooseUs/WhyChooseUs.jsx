import React from 'react'
import { FaBusAlt } from 'react-icons/fa'

const WhyChooseUs = () => {
    return (
        <>
            <div className={`mt-6 py-14 md:py-28 bg-gray-50 `}>
                <div>
                    <h1 data-aos="fade"
                        className={`pb-16 text-2xl text-dark font-semibold text-center tracking-wider`}>Why Choose Us</h1>
                </div>
                <div data-aos="fade-up"
                    data-aos-delay="300">
                    <div className={`grid grid-cols-2 md:grid-cols-4 gap-14 md:gap-4`}>

                        <div className={`flex flex-col items-center justify-center text-center gap-1 px-2`}>
                            <p className={`font-semibold text-gray-500`}>Effortless discovery of top-rated eateries for freshers
                            </p>

                            <p className={`text-5xl rotate-90 text-secondary text-center translate-x-4`}>....</p>

                            <FaBusAlt className={`text-5xl text-secondary`} />
                        </div>

                        <div className={`flex flex-col items-center justify-center text-center gap-1 px-2`}>

                            <FaBusAlt className={`text-5xl text-primary`} />

                            <p className={`text-5xl rotate-90 text-primary text-center translate-x-4`}>....</p>

                            <p className={`font-semibold text-gray-500`}>Discover nearby dining gems conveniently and effortlessly with our app
                            </p>
                        </div>

                        <div className={`flex flex-col items-center justify-center text-center gap-1 px-2`}>
                            <p className={`font-semibold text-gray-500`}>
                                Save time by quickly locating top-rated restaurants for every craving
                            </p>

                            <p className={`text-5xl rotate-90 text-secondary text-center translate-x-4`}>....</p>

                            <FaBusAlt className={`text-5xl text-secondary`} />
                        </div>

                        <div className={`flex flex-col items-center justify-center text-center gap-1 px-2`}>

                            <FaBusAlt className={`text-5xl text-primary`} />

                            <p className={`text-5xl rotate-90 text-primary text-center translate-x-4`}>....</p>

                            <p className={`font-semibold text-gray-500`}>Plan group outings or special occasions with ease through our app
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChooseUs