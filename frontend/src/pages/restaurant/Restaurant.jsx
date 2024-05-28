import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import RestroBanner from "./RestroBanner";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getData } from "../../../actions/getdata";

// const Information = [
//     {
//         id: 1,
//         name: "Talk n Taste",
//         img: tastentalk1,
//         link: "/talkntaste",
//         desc: "made with our homemade basil pine nuts pesto sauce. Gluten free pasta available upon request",
//         time: "Opens at 9am",
//         aosDelay: "300",
//     },
//     {
//         id: 2,
//         name: "Swaad Ganj",
//         img: khalid,
//         link: "/swadganj",
//         desc: "made with our homemade basil pine nuts pesto sauce. Gluten free pasta available upon request",
//         time: "Opens at 9am",
//         aosDelay: "500",
//     },

//     {
//         id: 3,
//         name: "Gilla",
//         img: khalid,
//         link: "/gilla",
//         desc: "made with our homemade basil pine nuts pesto sauce. Gluten free pasta available upon request",
//         time: "Opens at 1pm",
//         aosDelay: "700",
//     },
//     {
//         id: 4,
//         name: "Bismilla Hotel",
//         img: aqib,
//         link: "/bismilla",
//         desc: "made with our homemade basil pine nuts pesto sauce. Gluten free pasta available upon request",
//         time: "Opens at 1pm",
//         aosDelay: "900",
//     },
//     {
//         id: 5,
//         name: "Pizza Room",
//         img: khalid,
//         link: "/pizzaroom",
//         desc: "made with our homemade basil pine nuts pesto sauce. Gluten free pasta available upon request",
//         time: "Opens at 1pm",
//         aosDelay: "300",
//     },
// ];

const Restaurant = () => {
  const [resaturant, setResaturant] = useState();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setResaturant(await data);
    };
    fetchData();
  });

  useEffect(() => {
    const currDate = new Date();
    const currTime = currDate.getHours();
    setIsOpen(currTime >= 10 && currTime <= 23);
  }, []);

  return (
    <div>
      <Navbar />
      <RestroBanner />

      <div className={`bg-whiteSmoke md:py-10 md:px-16 px-4 py-8`}>
        <div
          className={`grid md:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-10 md:gap-7 md:gap-y-10 place-items-center cursor-pointer  `}
        >
          {resaturant ? (
            resaturant.map((data, i) => (
              <Link
                to={`/restaurant/${data.id}`}
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 200}
                className={`bg-whiteSmoke  md:hover:shadow-2xl hover:shadow-2xl rounded-2xl  space-y-2 px-2.5 py-2.5`}
              >
                <div className={`items-center`}>
                  <img
                    className={`h-[248px] w-full rounded-2xl`}
                    src={data.image[0]}
                    alt=""
                  />
                </div>

                <div className={`space-y-1 `}>
                  <h4
                    className={`text-m font-roboto font-semibold tracking-wide`}
                  >
                    {data.name}
                  </h4>
                  <p className={` text-black/50 line-clamp-2 text-xs py-1`}>
                    {data.description}
                  </p>
                  {isOpen ? (
                    <p className={`text-dark text-sm font-light font-roboto`}>
                      <span className={`text-green-600 font-semibold`}>
                        Open Now
                      </span>
                      &nbsp; - &nbsp; Closes at {data.close}
                    </p>
                  ) : (
                    <p className={`text-dark text-sm font-light font-roboto`}>
                      <span className={`text-red-500 font-semibold `}>
                        Closed
                      </span>{" "}
                      &nbsp; - &nbsp; Opens at {data.open}
                    </p>
                  )}
                </div>
              </Link>
            ))
          ) : (
            <div>No Data</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
