import { useState} from "react";
import PageNav from "../components/PageNav";
import ReviewCarousel from "../components/ReviewCarousel";
import { REVIEW_GET_POST } from "../ApiEndpoints";
const ReviewsAndRatings = () => {
  const [reviewName, setReviewName] = useState("");
  const [reviewPlace, setReviewPlace] = useState("");
  const [reviewDesc, setReviewDesc] = useState("");
  const [reviewPlan, setReviewPlan] = useState("");
  const [reviewRecom, setReviewRecom] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [overallRating, setOverallRating] = useState(0);
  const [planningRating, setPlanningRating] = useState(0);
  const [activitiesRating, setActivitiesRating] = useState(0);
  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false); // State for alert visibility
  const [progress, setProgress] = useState(0); // State for progress bar width
  const [alertTimeout, setAlertTimeout] = useState(null); // State for alert timeout

  const handleAddReview = async() => {
    // Validate form fields
    if (!reviewName || !reviewPlace || !reviewDesc || overallRating === 0 || planningRating === 0 || activitiesRating === 0) {
      setError("Please fill out all fields, including ratings.");
      return;
    }


    const newReview = {
      name: reviewName,
      destination: reviewPlace,
      reviewDescription: reviewDesc,
      tripPlannerHelp: reviewPlan,
      recommendationReason: reviewRecom,
      ratings: {
        overallExperience : overallRating,
        planningProcess: planningRating,
        activities: activitiesRating,
      },
      timestamp: new Date().toLocaleString(),
    };
    
    try {
      const response = await fetch(REVIEW_GET_POST, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      });
  
      if (!response.ok) {
        throw new Error("Failed to submit review");
      }
  
      setReviewName("");
      setReviewPlace("");
      setReviewDesc("");
      setReviewPlan("");
      setReviewRecom("");
      setOverallRating(0);
      setPlanningRating(0);
      setActivitiesRating(0);
      setShowForm(false);
      setError(""); // Clear any previous errors
  
      // Show alert for review submission
      setShowAlert(true);
      startProgress(); // Start the progress for hiding the alert
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error("Error submitting review:", error);
      setError("An error occurred while submitting your review. Please try again.");
    }
  };

  const startProgress = () => {
    setProgress(0); // Reset progress
    if (alertTimeout) clearTimeout(alertTimeout); // Clear any existing timeout
  
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setShowAlert(false);
          return 100;
        }
        return prev + (10 / 12); // Smooth progress over 3 seconds
      });
    }, 10); // Update progress every 100 milliseconds
  
    // Hide the alert after 3 seconds
    setAlertTimeout(setTimeout(() => {
      clearInterval(interval);
      setShowAlert(false);
    }, 3000));
  };

  const renderStarRating = (rating, setRating) => (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          onClick={() => setRating(index + 1)}
          className={`cursor-pointer text-2xl ${
            index < rating ? "text-yellow-500" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );

  return (
    <>
      <PageNav />
      <div className="p-6 bg-gray-100 mt-32 text-black rounded-lg shadow-md max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Reviews and Ratings
        </h2>

        {/* Error message */}
        {error && (
          <div className="mb-4 p-4 bg-red-200 text-red-700 rounded">
            {error}
          </div>
        )}

        {/* If the form is not being shown, display a dialog to prompt for writing a review */}
        {!showForm && (
          <div className="p-6 mb-4 border border-gray-300 rounded-lg bg-white shadow-lg text-center">
            <p className="mt-2 text-gray-600">
              Please share your experience by writing a review.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="mt-4 p-2 bg-black text-white rounded hover:bg-gray-800 transition duration-300"
            >
              Write a Review
            </button>
          </div>
        )}

        {showForm && (
          <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Share Your Experience</h3>
            <p className="mb-4 text-sm text-gray-600">
              We appreciate your feedback! Please fill out the form below to help us improve our services.
            </p>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Your Name:</label>
              <input
                type="text"
                value={reviewName}
                onChange={(e) => setReviewName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your name"
                required
              />
              <label className="block mt-4 mb-2 text-sm font-medium">Destination/Place:</label>
              <input
                type="text"
                value={reviewPlace}
                onChange={(e) => setReviewPlace(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter the place you visited"
                required
              />
              <label className="block mt-4 mb-2 text-sm font-medium">Review Description:</label>
              <textarea
              maxLength={150}
                value={reviewDesc}
                onChange={(e) => setReviewDesc(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Share your thoughts about your experience"
                required
              />

              {/* Questionnaire */}
              <div className="mt-6">
                <p className="font-semibold">Questionnaire:</p>
                <p className="mt-2">1. How did our trip planner help you organize your itinerary?</p>

                <textarea className="w-full p-2 border border-gray-300 rounded mt-2" 
                maxLength={150} 
                placeholder="Your answer" 
                value={reviewPlan}
                onChange={(e) => setReviewPlan(e.target.value)}
                required />
                
                <p className="mt-4">2. Would you recommend this trip to other travelers? Why or why not?</p>
                <textarea className="w-full p-2 border border-gray-300 rounded mt-2" 
                maxLength={150}
                 placeholder="Your answer"
                 value={reviewRecom}
                onChange={(e) => setReviewRecom(e.target.value)}
                  required />
              </div>

              {/* Ratings */}
              <label className="block mt-6 mb-2 text-sm font-medium">
                Rate Your Trip:
              </label>
              <div className="flex flex-col space-y-4">
                <div>
                  <p>Overall Experience:</p>
                  {renderStarRating(overallRating, setOverallRating)}
                </div>
                <div>
                  <p>Planning Process:</p>
                  {renderStarRating(planningRating, setPlanningRating)}
                </div>
                <div>
                  <p>Activities:</p>
                  {renderStarRating(activitiesRating, setActivitiesRating)}
                </div>
              </div>

              <button
                onClick={handleAddReview}
                className="mt-4 p-2 bg-black text-white rounded"
              >
                Submit Review
              </button>
            </div>
          </div>
        )}
      </div>
      <div className=" m-auto">\
        <ReviewCarousel />
      </div>

      {/* Custom Alert */}
      {showAlert && (
        <div className="fixed top-20 right-5 bg-gradient-to-r from-blue-600 to-blue-300 text-white rounded-lg shadow-lg transition duration-300 transform scale-105">
          <div className="px-4 py-2">Thank you for your feedback.</div>
          <div className="relative h-2 w-full bg-transparent">
            <div
              className="absolute h-2 bg-white rounded-b-lg"
              style={{ width: `${progress}%`, transition: 'width 0s' }} // No transition effect on width change
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewsAndRatings;
