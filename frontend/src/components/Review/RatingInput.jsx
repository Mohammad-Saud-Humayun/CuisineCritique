
import React from "react";

const emojiLookup = [
  { value: 1, emoji: "😡" },
  { value: 2, emoji: "😠" },
  { value: 3, emoji: "😐" },
  { value: 4, emoji: "🙂" },
  { value: 5, emoji: "😃" },
];

const RatingInput = ({ option, rating, handleRatingChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2">{option}:</label>
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((value) => (
          <div
            key={value}
            className={`mr-2 cursor-pointer grayscale hover:grayscale-0 ${
              rating === value ? "grayscale-0" : ""
            }`}
            onClick={() => handleRatingChange(option, value)}
          >
            {emojiLookup.map((entry) => entry.value === value && entry.emoji)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingInput;

