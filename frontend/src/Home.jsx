import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import { useAuth0 } from "@auth0/auth0-react";
import { postUser } from "../actions/postuser";

const Home = () => {
    const { isAuthenticated, user } = useAuth0();

    // if (isAuthenticated) {
    //     const data = {
    //         name: user.nickname,
    //         email: user.email,
    //         image: user.image,
    //     };
    //     console.log(data);
    //     postUser(data);

    // } else {
    //     return console.log("unAuthenticated");
    // }

    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
            easing: "ease-in",
            delay: 100,
        });
    });

    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <Hero />
            <Services />
            <WhyChooseUs />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;
