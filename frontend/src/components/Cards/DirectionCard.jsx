import React from "react";

const RestaurantLocationCard = ({ phone, address }) => {
    return (
        <div className="w-full h-full  p-5  space-y-5 rounded-xl shadow-[0_0px_43px_-2.5px_rgba(0,0,0,0.1)] ">
            {/* CONTACT DETAILS CONTAINER  */}
            <div className=" space-y-2.5">
                <h5 className="font-roboto font-normal text-xl">Call</h5>
                <ul className=" space-y-2">
                    {Array.isArray(phone) && phone.length > 0 ? (
                        phone.map((value, i) => (
                            <li key={i}>
                                <a href={`tel:+${value}`}>
                                    <p className="text-red-500 font-light font-roboto">
                                        +{value}
                                    </p>
                                </a>
                            </li>
                        ))
                    ) : (
                        <p>No phone numbers available.</p>
                    )}
                </ul>
            </div>
            {/* LOCATION / DIRECTION WITH ADDRESS CONTAINER  */}
            <div className=" h-full w-full space-y-2.5 ">
                <h5 className="font-roboto font-normal text-xl">Direction</h5>
                <div className=" w-full h-60 rounded-lg  overflow-hidden">
                    <iframe
                        title="Map Directions"
                        className="w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d56899.705184088496!2d80.999827!3d26.959565!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDU3JzM0LjQiTiA4MMKwNTknNTkuNCJF!5e0!3m2!1sen!2sus!4v1712285344789!5m2!1sen!2sus"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
                <address>{address}</address>
            </div>
        </div>
    );
};

export default RestaurantLocationCard;
