import { useState, useEffect } from "react";
import PageNav from "../components/PageNav";

function YourBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch bookings from local storage
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

  const handleCancelBooking = (id) => {
    // Confirm cancellation
    const confirmCancel = window.confirm("Are you sure you want to cancel this booking?");
    if (confirmCancel) {
      // Filter out the booking to be canceled
      const updatedBookings = bookings.filter((booking) => booking.id !== id);
      
      // Update local storage
      localStorage.setItem("bookings", JSON.stringify(updatedBookings));
      setBookings(updatedBookings); // Update state to re-render
      alert("Booking canceled successfully!"); // Show confirmation message
    }
  };

  const getBackgroundColor = (confirmed) => {
    return confirmed ? "bg-pink-200" : "bg-sky-200"; // Pink for confirmed, Sky Blue for others
  };

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 min-h-screen">
      <PageNav />
      <div className="mx-auto py-12 text-gray-200 sm:py-48 lg:py-12">
        <section className="bg-white dark:bg-gray-900 rounded-lg shadow-lg">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-aquamarine-500">
              Your Bookings
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              Review your confirmed bookings below.
            </p>

            {/* Display the bookings */}
            <div className="space-y-4">
              {bookings.length > 0 ? (
                bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className={`p-4 ${getBackgroundColor(booking.confirmed)} border border-gray-300 rounded-lg shadow-lg flex flex-col items-start mb-4`}
                  >
                    <h3 className="text-lg font-bold text-black ">
                      Booking ID: {booking.id}
                    </h3>
                    <p className="text-black ">
                      Location: {booking.location}
                    </p>
                    <p className="text-black ">
                      Hotel: {booking.hotel}
                    </p>
                    <p className="text-black">
                      Check-in Date: {booking.checkIn}
                    </p>
                    <p className="text-black">
                      Check-out Date: {booking.checkOut}
                    </p>
                    
                    {booking.confirmed && (
                      <p className="text-black">Booking confirmed!</p>
                    )}

                    {/* Cancel Booking Button */}
                    <button
                      onClick={() => handleCancelBooking(booking.id)}
                      className="mt-2 p-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                    >
                      Cancel Booking
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-center text-black dark:text-gray-400">
                  No bookings found.
                </p>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default YourBookings;
