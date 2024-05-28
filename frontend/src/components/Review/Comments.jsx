
import './review.css';
import { FaStar } from 'react-icons/fa';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const RestaurantReview = () => {
  // State for managing ratings
  const [ratings, setRatings] = useState({
    foodQuality: 0,
    ambiance: 0,
    comfort: 0,
    service: 0,
    valueForMoney: 0,
  });

  // State for managing user reviews
  const [review, setReview] = useState('');

  // Handler for updating ratings
  const handleRatingChange = (category, rating) => {
    setRatings((prevRatings) => ({
     ...prevRatings,
      [category]: rating,
    }));
  };

  // Handler for submitting a review
  const handleSubmitReview = async () => {
    // Perform actions with the review data, e.g., send it to a server
    console.log('Review:', review);
    console.log('Ratings:', ratings);
    // Reset the review input
    setReview('');
  };

  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <div className='inner-restro-base'>
      <div className='inner-restro-ratings'>
        <div className='ratings-category'>
          <p>Food Quality</p>
          {/* Component for star ratings */}
          <StarRating
            value={ratings.foodQuality}
            onRatingChange={(rating) =>
              handleRatingChange('foodQuality', rating)
            }
          />
          <p>Ambiance</p>
          {/* Component for star ratings */}
          <StarRating
            value={ratings.ambiance}
            onRatingChange={(rating) =>
              handleRatingChange('ambiance', rating)
            }
          />
          <p>Comfort</p>
          {/* Component for star ratings */}
          <StarRating
            value={ratings.comfort}
            onRatingChange={(rating) =>
              handleRatingChange('comfort', rating)
            }
          />
          <p>Service</p>
          {/* Component for star ratings */}
          <StarRating
            value={ratings.service}
            onRatingChange={(rating) =>
              handleRatingChange('service', rating)
            }
          />
          <p>Value For Money</p>
          {/*Component for star ratings */}
          <StarRating
            value={ratings.valueForMoney}
            onRatingChange={(rating) =>
              handleRatingChange('valueForMoney', rating)
            }
          />
        </div>

        <form
          className='inner-restro-review'
          onSubmit={handleSubmit(handleSubmitReview)}
        >
          <label>Your Review</label>
          <textarea
            {...register('review', { required: 'Please enter a review' })}
            value={review}
            onChange={(e) => setReview(e.target.value)}
            maxLength="500"
          />
          {errors.review && <p>{errors.review.message}</p>}
          <button type='submit' disabled={!review}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const StarRating = ({ value, onRatingChange }) => {
  const handleClick = (rating) => {
    onRatingChange(rating);
  };

  return (
    <div className='star-rating'>
      {[...Array(5)].map((_, i) => {
        const starValue = i + 1;
        return (
          <FaStar
            key={i}
            className={`star-icon ${starValue <= value ? 'active' : ''}`}
            onClick={() => handleClick(starValue)}
            role="button"
            aria-label={`Rate ${starValue} stars`}
          />
        );
      })}
    </div>
  );
};

const Comments = () => {
  return (
    <div>
      
      <RestaurantReview />
    </div>
  );
};

export default Comments;