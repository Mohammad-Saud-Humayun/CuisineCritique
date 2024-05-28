import React from 'react'
import heroBg from "../../assets/heroBg.png"
import restroBg from "../../assets/restroBg2.jpg"
import PrimaryBtn from '../../components/PrimaryBtn/PrimaryBtn'

const BgStyle = {
  backgroundImage: `url(${restroBg})`,
  width: "100%",
  height: "300px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover"
}
const RestroBanner = () => {
  return (
    <div>
      <div style={BgStyle} >
        <div className='container  py-[40px] space-y-5'>

          <h1 data-aos="fade-up" className="md:text-4xl text-3xl text-white ">Explore the {" "} <span className={`font-cursive text-secondary md:text-6xl text-5xl`}>Restaurant</span> {" "} <br /> Categories</h1>

          <h1 data-aos="fade-up" data-aos-delay="300" className={` text-white`}>CHECK OUT OUR LISTINGS</h1>

          <div data-aos="fade-up" data-aos-delay="500" className={`pt-4`}>
            <PrimaryBtn />
          </div>

        </div>
      </div>
    </div>
  )
}

export default RestroBanner