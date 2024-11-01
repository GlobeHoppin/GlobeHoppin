import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';
import { REVIEW_GET_POST } from '../ApiEndpoints';

const ReviewCard = ({ review, onOpenModal }) => {
  return (
    <div
      className="rounded-lg hover:shadow-xl p-4 flex flex-col justify-between h-full transition-shadow duration-300 transform hover:scale-105 shadow-[0_2px_10px_rgba(0,0,0,0.3)] bg-white"
      onClick={() => onOpenModal(review)}
    >
      <div>
        <h3 className="font-semibold text-lg text-gray-800 mb-1">{review.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{review.destination}</p>
        <p className="text-lg font-medium mb-3 text-gray-800">
          &quot;{review.reviewDescription.slice(0, 100)}...&quot;
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenModal(review);
          }}
          className="text-blue-500 text-sm"
        >
          Read More
        </button>
      </div>
      <div className="flex items-center mt-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < review.ratings.overallExperience ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.shape({
    name: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    reviewDescription: PropTypes.string.isRequired,
    tripPlannerHelp: PropTypes.string,
    recommendationReason: PropTypes.string,
    ratings: PropTypes.shape({
      planningProcess: PropTypes.number.isRequired,
      activities: PropTypes.number.isRequired,
      overallExperience: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

const ReviewCarousel = () => {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [selectedReview, setSelectedReview] = useState(null);

  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });
  const reviewWidth = isSmallScreen ? 100 : 100 / 3;

  const fetchReviews = useCallback(async () => {
    try {
      const response = await fetch(REVIEW_GET_POST);
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  }, []);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  const nextReview = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  }, []);

  const prevReview = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  }, []);

  useEffect(() => {
    if (currentIndex === reviews.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 500);
    } else if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(reviews.length - 2);
      }, 500);
    }
  }, [currentIndex, reviews.length]);

  useEffect(() => {
    const timer = setInterval(nextReview, 4000);
    return () => clearInterval(timer);
  }, [nextReview]);

  return (
    <section className="py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto overflow-hidden px-5">
        <h2 className="text-4xl font-bold text-center mb-12 text-red-600">
          What Our Community Says
        </h2>
        <div className="relative">
          <div className="overflow-visible">
            <div
              className={`flex transition-transform duration-500 ease-in-out ${!isTransitioning ? 'transition-none' : ''}`}
              style={{
                transform: `translateX(-${(currentIndex - 1) * reviewWidth}%)`,
              }}
            >
              {reviews.map((review, index) => (
                <div key={index} className={`w-full ${isSmallScreen ? 'flex-shrink-0' : 'sm:w-1/3 flex-shrink-0'} px-2`}>
                  <ReviewCard review={review} onOpenModal={setSelectedReview} />
                </div>
              ))}
            </div>
          </div>
          <button onClick={prevReview} className="absolute top-1/2 -left-4 transform -translate-y-1/2 rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200 hover:shadow-lg ml-1 bg-white hover:bg-gray-100">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button onClick={nextReview} className="absolute top-1/2 -right-4 transform -translate-y-1/2 rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200 hover:shadow-lg mr-1 bg-white hover:bg-gray-100">
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>

      <ReviewModal
        isOpen={!!selectedReview}
        onClose={() => setSelectedReview(null)}
        review={selectedReview}
      />
    </section>
  );
};

const ReviewModal = ({ isOpen, onClose, review }) => {
  if (!isOpen || !review) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-11/12 max-w-md mx-auto relative">
        <button
          onClick={onClose}
          className="absolute top-[-6px] right-[-6px] p-1 text-white bg-gray-800 rounded-full hover:bg-gray-500 transition-colors"
          aria-label="Close Modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h3 className="font-semibold text-lg text-gray-800 mb-1">{review.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{review.destination}</p>
        <p className="text-lg font-medium mb-3 text-gray-800">
          &quot;{review.reviewDescription}&quot;
        </p>
        <p className="text-gray-600 text-sm">{review.tripPlannerHelp}</p>
        <p className="italic text-gray-600 mt-2">{review.recommendationReason}</p>
        <div className="flex items-center mt-4">
          Planning Process:
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`ml-2 w-5 h-5 ${i < review.ratings.planningProcess ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <div className="flex items-center mt-4">
          Activities:
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`ml-2 w-5 h-5 ${i < review.ratings.activities ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <div className="flex items-center mt-4">
          Overall Experience:
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`ml-2 w-5 h-5 ${i < review.ratings.overallExperience ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

ReviewModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  review: PropTypes.shape({
    name: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    reviewDescription: PropTypes.string.isRequired,
    tripPlannerHelp: PropTypes.string,
    recommendationReason: PropTypes.string,
    ratings: PropTypes.shape({
      planningProcess: PropTypes.number.isRequired,
      activities: PropTypes.number.isRequired,
      overallExperience: PropTypes.number.isRequired,
    }).isRequired,
  }),
};

export default ReviewCarousel;
