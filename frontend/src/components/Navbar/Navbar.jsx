import React, { useState } from "react";
import { FaCaretDown, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { scrollToServices } from "../../Helper/scrollHelp";
import { useAuth0 } from "@auth0/auth0-react";

const NavLinks = [
    {
        id: 1,
        name: "Home",
        link: "/",
    },
    {
        id: 2,
        name: "About",
        link: "/about",
    },
    {
        id: 3,
        name: "Services",
        link: "#services",
    },
];

const DropdownLinks = [
    {
        id: 1,
        name: "Restaurants",
        link: "/restaurant",
    },
    {
        id: 2,
        name: "JuiceCorners",
        link: "/restaurant/14568",
    },
    {
        id: 3,
        name: "Mess/Dhaba",
        link: "/messdhaba",
    },
];
const Navbar = ({ image }) => {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    return (
        <>
            <span id="home "></span>
            <div data-aos="fade" className=" bg-white shadow-md">
                <div className="container flex items-center justify-between  py-4 sm:py-3">
                    {/* Logo section */}
                    <div className="flex items-center gap-2 font-bold text-5xl  font-cursive">
                        {/* <img src={Logo} alt="" className='w-14 '/> */}
                        CuisineCritique
                    </div>

                    {/* Navbar Section starts */}
                    <div>
                        <ul className="flex items-center  gap-10  ">
                            {NavLinks.map(({ id, name, link }) => (
                                <li key={id} className="hidden md:block">
                                    {link.startsWith("#") ? (
                                        <Link
                                            to={link}
                                            onClick={scrollToServices}
                                            className=" inline-block hover:text-primary text-xl font-semibold"
                                        >
                                            {name}
                                        </Link>
                                    ) : (
                                        <Link
                                            to={link}
                                            className=" inline-block hover:text-primary text-xl font-semibold"
                                        >
                                            {name}
                                        </Link>
                                    )}
                                </li>
                            ))}

                            {/* dropdown start */}
                            <li className="cursor-pointer group hidden md:block  ">
                                <Link
                                    to={"/"}
                                    className=" inline-block hover:text-primary text-xl font-semibold"
                                >
                                    <div className="flex items-center gap-[2px]py-2">
                                        Categories
                                        <span className="group-hover:rotate-180 duration-300">
                                            <FaCaretDown />
                                        </span>
                                    </div>
                                </Link>

                                {/* dropdown Section start */}
                                <div className="absolute !z-[9999] hidden group-hover:block w-[200px] bg-white text-black shadow-md p-2 ">
                                    {DropdownLinks.map(({ id, name, link }) => (
                                        <li key={id}>
                                            <Link
                                                to={link}
                                                className="text-xl inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                                            >
                                                {name}
                                            </Link>
                                        </li>
                                    ))}
                                </div>
                                {/* dropdown Section end */}
                            </li>
                            {/* dropdown end */}

                            {/* Login btn start */}

                            {isAuthenticated ? (
                                <>
                                    <li>
                                        {/* User profile  */}

                                        {/* <button
                                            className={`bg-secondary text-white p-2 text-2xl rounded-full hover:scale-110 transition duration-300 `}
                                        >
                                            <img src={image} className="w-10 h-10 rounded-full " />
                                        </button> */}

                                        <button
                                            onClick={() =>
                                                logout({
                                                    logoutParams: {
                                                        returnTo:
                                                            window.location
                                                                .origin,
                                                    },
                                                })
                                            }
                                            className="flex justify-center items-center gap-2 bg-secondary px-2 py-3  
                 text-white text-xl h-[40px] rounded hover:scale-105 transition duration-300"
                                        >
                                            Log Out
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className=" md:block hidden">
                                        <button
                                            onClick={() => loginWithRedirect()}
                                            className="flex justify-center items-center gap-2 bg-secondary px-2 py-3  
                 text-white text-xl h-[40px] rounded hover:scale-105 transition duration-300"
                                        >
                                            <FaUser /> Login/Signup
                                        </button>
                                    </li>
                                    <li className="md:hidden sm:block">
                                        <button
                                            onClick={() => loginWithRedirect()}
                                            className={`bg-secondary text-white p-2 text-2xl rounded-full hover:scale-110 transition duration-300 `}
                                        >
                                            <FaUser />
                                        </button>
                                    </li>
                                </>
                            )}

                            {/* Login btn end */}
                        </ul>
                    </div>
                    {/* Navbar Section ends */}
                </div>
            </div>
        </>
    );
};

export default Navbar;
