import React, { useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import RatingStars from "./RatingStar";
import { useAuth0 } from "@auth0/auth0-react";

const ReviewRating = ({ params }) => {
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();
  const username = user?.nickname;
  const userimage = user?.picture;
  const [ratings, setRatings] = useState({
    foodQuality: 0,
    ambiance: 0,
    comfort: 0,
    services: 0,
    valueForMoney: 0,
  });
  const [review, setReview] = useState("");
  const [name, setName] = useState(username || "");
  const [image, setImage] = useState(userimage || "");
  const [submittedData, setSubmittedData] = useState([]);
  const [restaurantId, setRestaurantId] = useState(params);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem(restaurantId)) || [];
    setSubmittedData(storedData);
  }, [restaurantId]);

  const handleRatingChange = (category, value) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [category]: value,
    }));
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const averageRating =
      Object.values(ratings).reduce((sum, rating) => sum + rating, 0) / 5;
    const data = {
      averageRating,
      review,
      name,
      restaurantId,
      submittedAt: new Date().toLocaleDateString(),
      image:
        image && (image instanceof File || image instanceof Blob)
          ? URL.createObjectURL(image)
          : null,
    };

    const storedData = JSON.parse(localStorage.getItem(restaurantId)) || [];
    storedData.push(data);
    localStorage.setItem(restaurantId, JSON.stringify(storedData));

    setSubmittedData((prevData) => [...prevData, data]);
    // Reset the form after submission
    setRatings({
      foodQuality: 0,
      ambiance: 0,
      comfort: 0,
      services: 0,
      valueForMoney: 0,
    });
    setReview("");
    setName("");
    setImage(null);
  };

  return (
    <div className=" w-full mx-auto ">
      <h2 className="text-xl font-medium mb-4">Review and Rating</h2>
      {isAuthenticated ? (
        <form onSubmit={handleReviewSubmit} className="space-y-4">
          <div className="p-2.5 mb-4 rounded-lg  bg-pink-200 flex flex-col justify-center items-center">
            <h3 className=" pt-7 text-xl font-bold text-center">
              Rate Your Experience
            </h3>
            <div className=" py-10 w-full flex flex-col justify-center items-center gap-2.5">
              <div className="flex justify-between items-center w-full max-w-lg">
                <span className="text-xl font-medium capitalize">
                  Food Quality:
                </span>
                <StarRating
                  value={ratings.foodQuality}
                  onChange={(value) => handleRatingChange("foodQuality", value)}
                />
              </div>
              <div className="flex justify-between items-center w-full max-w-lg">
                <span className="text-xl font-medium capitalize">
                  Ambiance:
                </span>
                <StarRating
                  value={ratings.ambiance}
                  onChange={(value) => handleRatingChange("ambiance", value)}
                />
              </div>
              <div className="flex justify-between items-center w-full max-w-lg">
                <span className="text-xl font-medium capitalize">Comfort:</span>
                <StarRating
                  value={ratings.comfort}
                  onChange={(value) => handleRatingChange("comfort", value)}
                />
              </div>
              <div className="flex justify-between items-center w-full max-w-lg ">
                <span className="text-xl font-medium capitalize">
                  Services:
                </span>
                <StarRating
                  value={ratings.services}
                  onChange={(value) => handleRatingChange("services", value)}
                />
              </div>
              <div className="flex justify-between items-center w-full max-w-lg">
                <span className="text-xl font-medium capitalize">
                  Value for Money:
                </span>
                <StarRating
                  value={ratings.valueForMoney}
                  onChange={(value) =>
                    handleRatingChange("valueForMoney", value)
                  }
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-2.5">
            <div className="w-full">
              <textarea
                id="review"
                placeholder="Please write your review"
                className="w-full border border-pink-400 rounded-md p-2 focus:outline-pink-600 resize-none"
                rows="4"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className=" bg-primary text-white px-4 py-2 rounded-full  disabled:bg-gray-400"
              disabled={
                Object.values(ratings).some((rating) => rating === 0) &&
                review.trim() === ""
              }
            >
              Submit Review
            </button>
          </div>
        </form>
      ) : (
        <div className="w-full flex flex-col justify-center items-center gap-2.5">
          <div className="w-full">
            <textarea
              id="review"
              placeholder="Please write your review"
              className="w-full border border-pink-400 rounded-md p-2 focus:outline-pink-600 resize-none"
              rows="4"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
          </div>
          <button
            onClick={() => loginWithRedirect()}
            className=" bg-primary text-white px-4 py-2 rounded-full disabled:bg-gray-400"
          >
            Login to Submit Review
          </button>
        </div>
      )}
      {submittedData.length > 0 ? (
        <div className=" space-y-8 py-10">
          <h3 className="text-xl font-medium mb-4">Customer Reviews</h3>
          {submittedData.map((data, index) => (
            <div key={index} className="p-4  bg-pink-100 rounded-md  space-y-2">
              <div className="w-full flex justify-between gap-2.5">
                <div className="flex items-center ">
                  <img
                    src={
                      data.image ||
                      "https://cdn-icons-png.freepik.com/512/10709/10709674.png"
                    }
                    alt="Review Image"
                    className="w-10 h-10 rounded-full mr-4 bg-black object-cover object-center"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{data.name}</h3>
                    <p className="text-gray-600">{data.submittedAt}</p>
                  </div>
                </div>
                <div className=" flex justify-center items-center gap-2.5">
                  <span className=" py-1 px-3 bg-primary font-medium rounded-full text-sm">
                    {data.averageRating} out of 5
                  </span>
                  <RatingStars rating={data.averageRating} />
                </div>
              </div>
              <div className=" pl-14">
                <p>{data.review}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className=" w-full flex justify-center py-10 ">
          <p>No reviews submitted yet.</p>
        </div>
      )}
    </div>
  );
};

const StarRating = ({ value, onChange }) => {
  const handleStarClick = (starValue) => {
    onChange(starValue);
  };

  return (
    <div className="flex items-center gap-x-2">
      {[1, 2, 3, 4, 5].map((starValue) => (
        <span
          key={starValue}
          className={`text-2xl cursor-pointer ${
            starValue <= value ? "text-yellow-400" : " text-black/50"
          }`}
          onClick={() => handleStarClick(starValue)}
        >
          <BsStarFill />
        </span>
      ))}
    </div>
  );
};

export default ReviewRating;
