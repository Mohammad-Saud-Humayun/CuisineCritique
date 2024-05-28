import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import saud from "../../assets/people/saud.jpeg"
import hannan from "../../assets/people/hannan.jpeg"
import khalid from "../../assets/people/khalid.jpeg"
import aboutBg from "../../assets/logos/aboutBg.jpg"
import user from "../../assets/logos/user.jpg"
import Popup from '../../components/Popup/Popup'

const About = () => {
  const [showPopup, setShowPopup] = React.useState(false);
  const handlePopup = () => {
    setShowPopup(true);
  };
  return (
    <div>
      <Navbar handlePopup={handlePopup} />
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />

      
      <div  className='relative z-[-1]' >
        <img data-aos="fade" className={`w-full md:h-[500px] h-[200px]`} src={aboutBg} alt="" />
      </div>

      <div className={`md:px-24 md:py-12 px-6 py-6 mx-auto bg-aboutBg `}>
        {/* Description */}
        <div >
          <h1 data-aos="fade-up" data-aos-delay="300" className={`font-cursive md:text-6xl text-5xl font-bold mb-2`}>CuisineCritique</h1>
          <p data-aos="fade-up" data-aos-delay="500" className={`py-3 text-black/75 md:text-lg  `}>The "CuisineCritique" web application, crafted specifically for college freshers, serves as a vital resource for accessing comprehensive information about Cuisine amenities near university campuses. Utilizing cutting-edge web development technologies like HTML, CSS, Tailwind CSS, Material UI, JavaScript and React.js, its primary objective remains unchanged: simplifying access to essential details about local restaurants, Juice Corners, dhaba , mess facilities and more. This user-friendly platform remains dedicated to streamlining navigation, ensuring newcomers can effortlessly discover and utilize campus services effectively.</p>
          <p data-aos="fade-up" data-aos-delay="700" className={`py-3 text-black/75 md:text-lg  `}>
            <span className={`font-bold `}>Purpose: </span>
            The "CuisineCritique" project is all about making university life simpler for students. Navigating a new campus can be tough, especially when you're trying to find places like restaurants, hostels, mess halls, and shops. That's where "CuisineCritique" comes in. We've created a single, easy-to-use platform where students can quickly find all the information they need about local Cuisine amenities. So, no more wasting time or getting frustrated . With "CuisineCritique," everything you need is right at your fingertips.</p>
        </div>

        {/* About us */}
        <div>
          <div data-aos="zoom-in" data-aos-delay="200" className={`w-full border-b-2 border-gray-700 my-10 rounded-2xl `}></div>

          {/* Nida Maam */}
          <div className={`md:px-32 px:4 flex md:flex-row  flex-col my-5`}>

            <div className={`flex md:flex-row `}>
              <div data-aos="fade-left" className={`text-xl space-y-3 px-6 py-32 mdd:mr-4 text-gray-800 `}>
                <FaTwitter className={`cursor-pointer hover:scale-110 duration-150`} />
                <FaLinkedin className={`cursor-pointer hover:scale-110 duration-150`} />
                <FaInstagram className={`cursor-pointer hover:scale-110 duration-150`} />

              </div>
              <img data-aos="zoom-in" className={`rounded-full h-[250px] w-[500px] my-8`} src={user} alt="" />
            </div>

            <div className={`md:mx-24 md:py-9  tracking-tighter`}>
              <h2 data-aos="fade-left" data-aos-delay="300" className={`pb-2 text-3xl text-gray-800 tracking-tighter font-roboto`}>Nida Hasan Khan</h2>
              <h4 data-aos="fade-left" data-aos-delay="500" className={`py-5 text-lg text-black/65`}>Project Supervisor </h4>
              <p data-aos="fade-left" data-aos-delay="600">
                <a className={`py-5 underline font-roboto `} href="workwith@gmail.com">nidaintegral01@gmail.com</a>
              </p>

              <p data-aos="fade-left" data-aos-delay="700" className={`py-5  text-black/65`}>Meet Nida Ma'am, our project supervisor. With a Master's in Technology and currently pursuing a Ph.D. in Computer Science, she brings invaluable expertise to "CuisineCritique." Her guidance inspires innovation and excellence in our team.</p>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-delay="200" className={`w-full border-b-2 border-gray-700 my-10 rounded-2xl `}></div>

          {/* Saud */}
          <div className={`md:px-32 px:4 flex md:flex-row  flex-col `}>
            <div className={`md:mx-16 md:py-9  tracking-tighter text-right`}>
              <h2 data-aos="fade-right" data-aos-delay="300" className={`pb-2 text-3xl text-gray-800 tracking-tighter font-roboto`}>Mohammad Saud Humayun</h2>
              <h4 data-aos="fade-right" data-aos-delay="500" className={`py-5 text-lg text-black/65`}>Founder | Tech Lead | MERN Developer</h4>
              <p data-aos="fade-right" data-aos-delay="600">
                <a className={`py-5 underline font-roboto `} href="workwithsaudhumayunh@gmail.com">workwithsaudhumayunh@gmail.com</a>
              </p>
              <p data-aos="fade-right" data-aos-delay="700" className={`py-5  text-black/65`}>
                Meet Saud, founder and Tech lead of "CuisineCritique". With two years of MERN stack experience, Saud's effective leadership steers CuisineCritique's operations and resource management, guiding its journey to excellence. Always open to collaboration and eager to assist.</p>
            </div>
            <div className={`flex md:flex-row `}>

              <img data-aos="zoom-in" className={`rounded-full h-[250px] w-[500px] my-8`} src={saud} alt="" />
              <div data-aos="fade-right" className={`text-xl space-y-3 px-6 py-32 mr-20 text-gray-800 `}>
                <FaTwitter className={`cursor-pointer hover:scale-110 duration-150`} />
                <FaLinkedin className={`cursor-pointer hover:scale-110 duration-150`} />
                <FaInstagram className={`cursor-pointer hover:scale-110 duration-150`} />
              </div>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-delay="200" className={`w-full border-b-2 border-gray-700 my-10 rounded-2xl `}></div>

          {/* Hannan */}
          <div className={`md:px-32 px:4 flex md:flex-row  flex-col my-5`}>

            <div className={`flex md:flex-row `}>
              <div data-aos="fade-left" className={`text-xl space-y-3 px-6 py-32 mdd:mr-4 text-gray-800 `}>
                <FaTwitter className={`cursor-pointer hover:scale-110 duration-150`} />
                <FaLinkedin className={`cursor-pointer hover:scale-110 duration-150`} />
                <FaInstagram className={`cursor-pointer hover:scale-110 duration-150`} />

              </div>
              <img data-aos="zoom-in" className={`rounded-full h-[250px] w-[500px] my-8`} src={hannan} alt="" />
            </div>
            <div className={`md:mx-24 md:py-9  tracking-tighter`}>
              <h2 data-aos="fade-left" data-aos-delay="300" className={`pb-2 text-3xl text-gray-800 tracking-tighter font-roboto`}>Syed Mugees Ahmad Kirmani</h2>
              <h4 data-aos="fade-left" data-aos-delay="500" className={`py-5 text-lg text-black/65`}>Frontend Developer </h4>
              <p data-aos="fade-left" data-aos-delay="600">
                <a className={`py-5 underline font-roboto `} href="mugeesKirmani555h@gmail.com">mugeeskirmani555@gmail.com</a>
              </p>
              <p data-aos="fade-left" data-aos-delay="700" className={`py-5  text-black/65`}>Meet Mugees, our talented frontend developer from Lucknow, UP, shaping the "CuisineCritique" project. With a flair for crafting captivating user experiences, Mugees is dedicated to growth, collaboration, and transforming designs into reality.</p>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-delay="200" className={`w-full border-b-2 border-gray-700 my-10 rounded-2xl `}></div>

          {/* khalid */}
          <div className={`md:px-32 px:4 flex md:flex-row  flex-col `}>
            <div className={`md:mx-16 md:py-9  tracking-tighter text-right`}>
              <h2 data-aos="fade-right" data-aos-delay="300" className={`pb-2 text-3xl text-gray-800 tracking-tighter font-roboto`}>Khalid Ansari</h2>
              <h4 data-aos="fade-right" data-aos-delay="500" className={`py-5 text-lg text-black/65`}>Co-Founder | Management</h4>
              <p data-aos="fade-right" data-aos-delay="600">
                <a className={`py-5 underline font-roboto `} href="ka8680236@gmail.com">ka8680236@gmail.com</a>
              </p>
              <p data-aos="fade-right" data-aos-delay="700" className={`py-5  text-black/65`}>Meet Khalid, co-founder and management lead of "CuisineCritique". With strategic skills and a passion for innovation, Khalid guides our project to success. He  ensures smooth operations and resource management, shaping CuisineCritique's journey to excellence.</p>
            </div>
            <div className={`flex md:flex-row `}>

              <img data-aos="zoom-in" className={`rounded-full h-[250px] w-[500px] my-8`} src={khalid} alt="" />
              <div data-aos="fade-right" className={`text-xl space-y-3 px-6 py-32 mr-4 text-gray-800 `}>
                <FaTwitter className={`cursor-pointer hover:scale-110 duration-150`} />
                <FaLinkedin className={`cursor-pointer hover:scale-110 duration-150`} />
                <FaInstagram className={`cursor-pointer hover:scale-110 duration-150`} />
              </div>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-delay="200" className={`w-full border-b-2 border-gray-700 my-10 rounded-2xl `}></div>

        </div>




      </div>

      <Footer />
    </div>
  )
}

export default About