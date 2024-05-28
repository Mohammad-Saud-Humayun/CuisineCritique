import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const RatingStars = ({ rating }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
        stars.push(
            <BsStarFill key={`full-${i}`} className="w-5 h-5 text-yellow-400" />
        );
    }

    if (hasHalfStar) {
        stars.push(
            <BsStarHalf key="half" className="w-5 h-5 text-yellow-400" />
        );
    }

    for (let i = 0; i < emptyStars; i++) {
        stars.push(
            <BsStar key={`empty-${i}`} className="w-5 h-5 text-yellow-400" />
        );
    }

    return <div className="flex items-center gap-1.5">{stars}</div>;
};

export default RatingStars;
