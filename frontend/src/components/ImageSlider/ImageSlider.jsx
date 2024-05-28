import { LuChevronLeftCircle, LuChevronRightCircle } from "react-icons/lu";
import React, { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";

const ImageSlider = ({ imageData }) => {
    const [imageIndex, setImageIndex] = useState(null);

    if (!imageData || imageData.length === 0) {
        return <div>Please provide a valid imageData prop.</div>;
    }

    const handleImageClick = (index) => {
        document.body.style.overflow = "hidden";
        setImageIndex(index);
    };

    const handleCloseClick = () => {
        document.body.style.overflow = "auto";
        setImageIndex(null);
    };

    const handlePrevClick = () => {
        setImageIndex((prevIndex) => {
            if (prevIndex === null || prevIndex === 0) {
                return imageData.length - 1;
            } else {
                return prevIndex - 1;
            }
        });
    };

    const handleNextClick = () => {
        setImageIndex((prevIndex) => {
            if (prevIndex === null || prevIndex === imageData.length - 1) {
                return 0;
            } else {
                return prevIndex + 1;
            }
        });
    };

    return (
        <div className="w-full space-y-5">
            {/* IMAGE CONTAINER TO DISPLAY THE IMAGES WITH PERTICULAR STRUCTURE  */}

            <div className=" w-full h-96 flex gap-3">
                <div className=" w-full basis-2/3 overflow-hidden shadow-md">
                    <img
                        src={imageData[0]}
                        alt="image[1]"
                        className="w-full h-full  object-center object-cover  transition-all ease-in-out  duration-500 hover:scale-105 hover:cursor-pointer"
                        onClick={() => handleImageClick(0)}
                    />
                </div>
                <div className=" flex flex-col gap-3 basis-[20%] ">
                    <div className=" w-full h-full overflow-hidden shadow-md">
                        <img
                            src={imageData[1]}
                            alt="image[3]"
                            className="w-full h-full  object-center object-cover transition-all ease-in-out  duration-500 hover:scale-105 hover:cursor-pointer"
                            onClick={() => handleImageClick(1)}
                        />
                    </div>
                    <div className=" w-full h-full overflow-hidden shadow-md">
                        <img
                            src={imageData[2]}
                            alt="image[2]"
                            className="w-full h-full  object-center object-cover transition-all ease-in-out  duration-500 hover:scale-105 hover:cursor-pointer"
                            onClick={() => handleImageClick(2)}
                        />
                    </div>
                </div>
                <div className=" w-full  basis-[20%] overflow-hidden shadow-md">
                    <img
                        src={imageData[3]}
                        alt="image[4]"
                        className="w-full h-full  object-center object-cover transition-all ease-in-out  duration-500 hover:scale-105 hover:cursor-pointer"
                        onClick={() => handleImageClick(3)}
                    />
                </div>
            </div>

            {/* FULL SLIDER IMAGE CONTAINER */}
            {imageIndex !== null && (
                <div className=" flex justify-between  items-center w-full h-screen min-h-screen  fixed -top-5 left-0 bg-black/90 z-[100] overflow-hidden px-5">
                    <div>
                        <LuChevronLeftCircle
                            onClick={handlePrevClick}
                            size={50}
                            className=" cursor-pointer text-primary ml-10  hover:text-white duration-200"
                        />
                    </div>
                    <div className=" relative">
                        <img
                            src={imageData[imageIndex]}
                            alt=""
                            className=" w-full h-full object-cover object-center"
                        />
                    </div>
                    <div className="relative flex justify-center items-center h-full ">
                        <RxCrossCircled
                            onClick={handleCloseClick}
                            size={50}
                            className=" absolute top-[2%] right-[5%]  cursor-pointer text-primary hover:text-white duration-200"
                        />
                        <LuChevronRightCircle
                            onClick={handleNextClick}
                            size={50}
                            className=" cursor-pointer text-primary mr-10  hover:text-white duration-200"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageSlider;
