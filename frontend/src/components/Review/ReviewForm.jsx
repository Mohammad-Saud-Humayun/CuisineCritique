import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsStarFill, BsStar } from "react-icons/bs";
import { postReview } from "../../../actions/postReview";

const ReviewForm = ({ params }) => {
  const { user, isAuthenticated } = useAuth0();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({ mode: "all" });

  const onSubmit = async (data) => {
    // Calculate the average rating

    const ratings = [
      data.foodQuality,
      data.ambiance,
      data.comfort,
      data.service,
      data.valueForMoney,
    ];
    const sum = ratings.reduce((acc, current) => acc + current, 0);
    const averageRating = sum / ratings.length;
    const restaurantId = params;
    const userId = user?.sub;
    const username = user?.nickname;
    const useremail = user?.email;
    const userimage = user?.picture;

    // Create the final data object
    const reviewData = {
      ...data,
      averageRating,
      restaurantId,
      userId,
      username,
      useremail,
      userimage,
    };
    postReview(await reviewData);
    reset();
  };

  return (
    <div className="max-w-full mx-auto">
      <h2 className="text-2xl font-bold mb-4">Leave a Review</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className=" p-2.5 bg-purple-300 rounded-lg">
          <h3 className="text-xl font-bold mb-2 text-center">Ratings</h3>
          <div className="flex flex-col justify-center items-center gap-2.5">
            <div className="flex justify-between items-center w-full max-w-lg">
              <label
                htmlFor="foodQuality"
                className="text-xl font-medium capitalize"
              >
                Food Quality
              </label>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <label
                    key={`foodQuality-${rating}`}
                    htmlFor={`foodQuality-${rating}`}
                  >
                    <input
                      className="hidden"
                      type="radio"
                      id={`foodQuality-${rating}`}
                      value={rating}
                      {...register("foodQuality", {
                        required: true,
                      })}
                    />

                    <BsStarFill className="cursor-pointer" />
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center w-full max-w-lg">
              <label
                htmlFor="ambiance"
                className="text-xl font-medium capitalize"
              >
                Ambiance
              </label>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <label
                    key={`ambiance-${rating}`}
                    htmlFor={`ambiance-${rating}`}
                  >
                    <input
                      type="radio"
                      id={`ambiance-${rating}`}
                      value={rating}
                      {...register("ambiance", {
                        required: true,
                      })}
                      className="hidden"
                    />
                    <BsStarFill className="cursor-pointer" />
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center w-full max-w-lg">
              <label
                htmlFor="comfort"
                className="text-xl font-medium capitalize"
              >
                Comfort
              </label>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <label
                    key={`comfort-${rating}`}
                    htmlFor={`comfort-${rating}`}
                  >
                    <input
                      type="radio"
                      id={`comfort-${rating}`}
                      value={rating}
                      {...register("comfort", {
                        required: true,
                      })}
                      className="hidden"
                    />
                    <BsStarFill className="cursor-pointer" />
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center w-full max-w-lg">
              <label
                htmlFor="service"
                className="text-xl font-medium capitalize"
              >
                Service
              </label>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <label
                    key={`service-${rating}`}
                    htmlFor={`service-${rating}`}
                  >
                    <input
                      type="radio"
                      id={`service-${rating}`}
                      value={rating}
                      {...register("service", {
                        required: true,
                      })}
                      className="hidden"
                    />
                    <BsStarFill className="cursor-pointer" />
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center w-full max-w-lg">
              <label
                htmlFor="valueForMoney"
                className="text-xl font-medium capitalize"
              >
                Value for Money
              </label>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <label
                    key={`valueForMoney-${rating}`}
                    htmlFor={`valueForMoney-${rating}`}
                  >
                    <input
                      type="radio"
                      id={`valueForMoney-${rating}`}
                      value={rating}
                      {...register("valueForMoney", {
                        required: true,
                      })}
                      className="hidden"
                    />

                    <BsStarFill className="cursor-pointer" />
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-2.5">
          <div className="w-full">
            <textarea
              id="review"
              rows={3}
              placeholder="Write your reviews"
              className="w-full px-3 py-2  bg-purple-50 resize-none rounded-md border  focus:outline-purple-200"
              {...register("reviewText", { required: true })}
            />
          </div>
          <button
            type="submit"
            className=" bg-purple-400 text-white px-4 py-2 rounded-full disabled:bg-gray-400"
            disabled={!isValid}
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
