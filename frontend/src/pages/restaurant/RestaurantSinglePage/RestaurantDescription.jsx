import React, { useEffect, useState } from "react";

const RestaurantDescription = ({ name, cuisine, address, close, open }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const currDate = new Date();
        const currTime = currDate.getHours();
        setIsOpen(currTime >= 7 && currTime <= 23);
    }, []);

    return (
        <div>
            <h1 className="text-4xl font-medium font-roboto text-black pb-1">
                {name}
            </h1>
            <p className="text-dark/80 font-roboto">{cuisine}</p>
            <p className="text-dark/45 text-lg font-roboto">{address}</p>

            {isOpen ? (
                <p className={`text-dark text-sm font-light font-roboto`}>
                    <span className={`text-green-600 font-semibold`}>
                        Open Now
                    </span>
                    &nbsp; - &nbsp; Closes at {close}
                </p>
            ) : (
                <p className={`text-dark text-sm font-light font-roboto`}>
                    <span className={`text-red-500 font-semibold `}>Closed</span>{" "}
                    &nbsp; - &nbsp; Opens at {open}
                </p>
            )}
        </div>
    );
};

export default RestaurantDescription;
