import React from "react";
import Slider from "react-slick";
import Shumaila from "../../assets/people/shumaila.jpeg";
import Aqib from "../../assets/people/aqib.jpeg";
import Khubaib from "../../assets/people/khubaib.png";
import Arham from "../../assets/people/arham.jpeg";
import Junaid from "../../assets/people/junaid.jpg";

const TestimonialData = [
  {
    id: 3,
    name: "Shumaila Siddiqui",
    text: "The coffee at Coffee Palate is excellent, they have a great aesthetic, good service, and it's a cozy place. The place itself is really nice, with good service and delicious food. It's a friendly and comfortable place, even for families.",
    img: Shumaila,
  },
  {
    id: 4,
    name: "Arham Hussain",
    text: "I like HFC because of its reasonable pricing, and this app has made it easier for me to find many similar hotels. So shoutout to its founders hardwork",
    img: Arham,
  },
  {
    id: 1,
    name: "Junaid Ali",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, minus.",
    img: Junaid,
  },
  {
    id: 2,
    name: "Khubaib Ahmad",
    text: "I like Dreams dhaba, because of their fast service and tasty food. Other than this, Mahachai is also really good, due to its fine dining, low prices and several variety of items.",
    img: Khubaib,
  },

  {
    id: 5,
    name: "Mohammad Aqib",
    text: "I like Shahi Kitchen, because of their abiance and tasty food and it is also really good due to its low prices and friendly Staff.",
    img: Aqib,
  },
];

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 600,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  cssEase: "linear",
  pauseOnHover: true,
  pauseOnFocus: true,
  responsive: [
    {
      breakpoint: 10000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <div id="testimonials" className="py-14 mb-10">
      <div className="container">
        {/* header */}
        <div className={`text-center mb-10`}>
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className={`font-cursive2 font-bold text-4xl text-gray-800`}
          >
            Testimonials
          </h1>
        </div>

        {/* Testimonial Card */}
        <div data-aos="zoom-in" data-aos-delay="200">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6" key={data.id}>
                <div
                  className={`flex flex-col bg-primary/10 py-8 px-6 rounded-xl gap-4 relative mx-4 shadow-lg`}
                >
                  {/* img section  */}
                  <div className="">
                    <img
                      className={`rounded-full w-20 h-20`}
                      src={data.img}
                      alt=""
                    />
                  </div>

                  {/* content section  */}
                  <div className="mt-4 flex flex-col gap-4">
                    <div className={`space-y-3`}>
                      <p
                        className={`text-xs text-gray-500 mb-3 line-clamp-3  `}
                      >
                        {data.text}
                      </p>
                      <h1
                        className={`text-xl font-cursive2 font-bold mt-2 text-black/70`}
                      >
                        {data.name}
                      </h1>
                    </div>
                    <p className="font font-serif text-9xl text-black/20 absolute top-0 right-0">
                      ,,
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
