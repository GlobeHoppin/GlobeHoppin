import { useState, useEffect } from "react";
import PageNav from "../components/PageNav";

const ReviewsAndRatings = () => {
  const [reviews, setReviews] = useState([]);
  const [reviewName, setReviewName] = useState("");
  const [reviewPlace, setReviewPlace] = useState("");
  const [reviewDesc, setReviewDesc] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const savedReviews = loadReviewsFromFile();
    setReviews(savedReviews);
  }, []);

  const loadReviewsFromFile = () => {
    try {
      const data = localStorage.getItem("reviews");
      if (data) {
        return JSON.parse(data);
      }
    } catch (error) {
      console.error("Error loading reviews:", error);
    }
    return [];
  };

  const handleAddReview = () => {
    const newReview = {
      name: reviewName,
      place: reviewPlace,
      description: reviewDesc,
      timestamp: new Date().toLocaleString(),
    };
    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    saveReviewsToFile(updatedReviews);
    setReviewName("");
    setReviewPlace("");
    setReviewDesc("");
    setShowForm(false);
  };

  const saveReviewsToFile = (reviews) => {
    try {
      localStorage.setItem("reviews", JSON.stringify(reviews));
    } catch (error) {
      console.error("Error saving reviews:", error);
    }
  };

  return (
    <>
      <PageNav></PageNav>
      <div className="p-6 bg-gray-100 text-black rounded-lg shadow-md max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Reviews and Ratings
        </h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="mb-6 p-2 bg-black text-white rounded"
        >
          {showForm ? "Hide Review Form" : "Write a Review"}
        </button>
        {showForm && (
          <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Name:</label>
              <input
                type="text"
                value={reviewName}
                onChange={(e) => setReviewName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your name"
              />
              <label className="block mt-4 mb-2 text-sm font-medium">
                Place:
              </label>
              <input
                type="text"
                value={reviewPlace}
                onChange={(e) => setReviewPlace(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter place"
              />
              <label className="block mt-4 mb-2 text-sm font-medium">
                Description:
              </label>
              <textarea
                value={reviewDesc}
                onChange={(e) => setReviewDesc(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Write your review"
              />
              <button
                onClick={handleAddReview}
                className="mt-4 p-2 bg-black text-white rounded"
              >
                Submit Review
              </button>
            </div>
          </div>
        )}
        <div className="mt-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-4 mb-4 border border-gray-300 rounded bg-gray-50 flex justify-between items-center"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">
                  {review.place}
                </div>
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.timestamp}</p>
                  <p className="mt-2 text-gray-700">{review.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ReviewsAndRatings;
