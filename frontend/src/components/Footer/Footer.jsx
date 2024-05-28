import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import {
  scrollToServices,
  scrollToTestimonials,
} from "../../Helper/scrollHelp";

const FooterLinks = [
  {
    key: "1",
    title: "Home",
    link: "/",
  },
  {
    key: "2",
    title: "About",
    link: "/about",
  },
  {
    key: "3",
    title: "Services",
    link: "#services",
  },
  {
    key: "4",
    title: "Testimonials",
    link: "#testimonials",
  },
];

const ContactUs = [
  {
    icon: <FaInstagram />,
    title: "Instagram",
    link: "https://www.instagram.com/saud_humayun/?r=nametag",
  },
  {
    icon: <FaFacebook />,
    title: "Facebook",
    link: "facebook.com",
  },
  {
    icon: <FaLinkedin />,
    title: "Linkdin",
    link: "https://in.linkedin.com/in/mohammad-saud-humayun",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    link: "mailto:workwithsaudhumayunh@gmail.com",
  },
];

const Footer = () => {
  return (
    <div>
      <div
        className={`min-h-[400px] bg-primary rounded-t-3xl text-white text-xl `}
      >
        <div className={`container grid md:grid-cols-3 pb-20 pt-5`}>
          {/* CuisineCritique Information */}
          <div className={`px-4 py-10`}>
            <a href="#" className={`text-6xl font-cursive font-bold`}>
              <h1 data-aos="fade" data-aos-delay="700">
                CuisineCritique
              </h1>
            </a>
            <p data-aos="fade" data-aos-delay="700" className={`pt-6`}>
              CuisineCritique is a web application that help users discover
              information about various Cusine amenities and services in the
              local area around Integral university campus. Whether you're a
              freshman looking for the best places to eat or a first-year
              student in search of nearby Mess/Dhaba, CuisineCritique provides
              you with a single platform to access essential Cusine information.
            </p>
          </div>

          {/* Footer Links */}
          <div
            className={` col-span-2 grid grid-col-2 sm:grid-cols-3 md:pl-11`}
          >
            {/* Quick Links */}
            <div className={`px-4 py-12`}>
              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                className={`font-bold text-2xl mb-5 `}
              >
                Quick Links
              </h1>
              <ul data-aos="fade-up" data-aos-delay="100">
                {FooterLinks.map((data, i) => (
                  <li key={i} className={`pb-3`}>
                    {data.link.startsWith("#") ? (
                      <a
                        href={data.link}
                        onClick={scrollToServices}
                        className={`inline-block hover:scale-105 duration-200`}
                      >
                        {data.title}
                      </a>
                    ) : (
                      <Link
                        to={data.link}
                        className={`inline-block hover:scale-105 duration-200`}
                      >
                        {data.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Links */}
            <div className={`px-4 py-12 `}>
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className={`font-bold text-2xl pb-5`}
              >
                Contact Us
              </h1>
              <ul data-aos="fade-up" data-aos-delay="300">
                {ContactUs.map((data) => (
                  <li key={data.key} className={`pb-5 flex items-center`}>
                    <span className={`text-2xl mr-2`}>{data.icon}</span>
                    <Link
                      to={data.link}
                      className={` inline-block hover:scale-105 duration-200 `}
                    >
                      {data.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Address */}
            <div className={`px-4 py-12 col-span-2 sm:col-auto`}>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className={`font-bold text-2xl pb-5`}
              >
                Address
              </h1>
              <div data-aos="fade-up" data-aos-delay="500">
                <p className={`mb-3`}>
                  Balaganj Lucknow,<br></br> UttarPradesh
                </p>
                <p>+91 7860845418</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
