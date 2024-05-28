
export const postReview = async (reviewData) => {
  console.log(reviewData)
    try {
        const url ="http://localhost:8000/api/postreview"
        const response = await fetch( url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData),
          });
    
          console.log("Here's Post resposne data",response)
          if (response.ok) {
            console.log("response")
            const newReview = await response.json();
            console.log('Review submitted successfully:', newReview);
          } else {
            console.error('Failed to submit review');
          }

    } catch (error) {
        console.error("Error submitting review:", error);
    }
};
