import React from 'react'
import Img1 from "../../assets/hero.png"
import Img2 from "../../assets/juice-img.png"
import Img3 from "../../assets/coffee2.png"
import { Link } from 'react-router-dom'


const ServicesData = [
    {
        id: 1,
        img: Img1,
        name: "Restaurants",
        link: "/restaurant",
        description: "Indulge in culinary symphony at Restaurants, where every dish is a masterpiece.",
        aosDelay: "100"
    },
    {
        id: 2,
        img: Img2,
        name: "Juice Corners",
        link: "/juicecorner",
        description: "Juices are Nature's elixirs, bursting with vitality and flavor, to quench both thirst and soul.",
        aosDelay: "300"
    },
    {
        id: 3,
        img: Img3,
        name: "Mess/Dhaba",
        link: "/messdhaba",
        description: "Immerse in authentic local cuisine at vibrant Messes and Dhabas, where tradition reigns supreme.",
        aosDelay: "500"
    }
]
const Services = () => {
    return (
        <>
            <span id="services"></span>
            <div className={`py-10`}>
                <div className="container">

                    {/* Heading Section */}
                    <div className={`text-center mb-20`}>
                        <h1 data-aos="fade-up"
                            data-aos-delay="100"
                            className={`text-4xl font-cursive2 font-bold text-gray-800 pb-6`}>What We Have</h1>
                    </div>

                    {/* Card Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center cursor-pointer ">
                        {
                            ServicesData.map((service) => (
                                <Link
                                    to={service.link}
                                    key={service.id}
                                    data-aos="fade-up"
                                    data-aos-delay={service.aosDelay}

                                    className={`rounded-2xl bg-white shadow-xl hover:bg-yellow-200 relative duration-high group max-w-[300px]`}>


                                    <div className='h-[122px]'>
                                        <img src={service.img} alt="" className={`max-w-[200px] max-h-[180px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-500  `} />
                                    </div>

                                    <div className={`p-4 text-center`}>
                                        <div className='w-full'></div>
                                        <h1 className={`text-2xl font-bold`}>{service.name}</h1>
                                        <p className={`text-slate-500 duration-high text-sm line-clamp-3 mt-2`}>{service.description}</p>
                                    </div>


                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services