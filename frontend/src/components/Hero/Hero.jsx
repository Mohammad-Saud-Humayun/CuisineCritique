import React from 'react'
import HeroImg from "../../assets/hero.png"
import HeroBg from "../../assets/heroBg.png"
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn'


const BgStyle = {
    backgroundImage: `url(${HeroBg})`,
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"

}
const Hero = () => {
    return (

        <div style={BgStyle} className='relative z-[-1]'>
            <div className='container py-16 sm:py-0'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px] '>
                    {/* Text content Section */}
                    <div className='space-y-7 text-dark  order-2 sm:order-1'>
                        <h1 data-aos="fade-up" className="text-5xl">We Provide The Best {" "} <span className='text-secondary font-cursive text-7xl'>Dining</span>{" "} Around IUL</h1>
                        <p data-aos="fade-up" data-aos-delay="300" className='lg:pr-64'>
                            Eating At A Restaurant Is An Enjoyable And Convenient Occational Treat
                        </p>

                        <div data-aos='fade-up' data-aos-delay='500'>
                            <PrimaryBtn />
                        </div>

                    </div>
                    {/* Text content Section */}

                    {/* image Section */}
                    <div data-aos="zoom-in" data-aos-delay="500" className='relative z-30 order:1 sm:order-2'>
                        <img src={HeroImg} alt="" className='flex w-full sm:scale-125 sm:translate-y-16' />
                    </div>
                    {/* image Section */}



                </div>
            </div>
        </div>

    )
}

export default Hero