import React from "react"; // Keep this if you need React hooks or context
import PageNav from "../components/PageNav";

function YourBookings() {
  // Sample bookings data - replace this with real data from your state management or API
  const [bookings, setBookings] = React.useState([
    { id: 1, details: "Hotel booked in New York from 2023-10-01 to 2023-10-05." },
    { id: 2, details: "Flight booked from Los Angeles to Chicago on 2023-10-10." },
  ]);

  const cancelBooking = (id) => {
    // Show confirmation dialog
    const confirmCancel = window.confirm("Are you sure you want to cancel this booking?");
    if (confirmCancel) {
      // If confirmed, filter out the canceled booking
      setBookings(bookings.filter((booking) => booking.id !== id));
    }
  };

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <PageNav /> {/* Navigation Bar */}
      <div className="mx-auto py-12 text-gray-200 sm:py-48 lg:py-12">
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              Your Bookings
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              Review your hotel and flight reservations below.
            </p>

            {/* Bookings List */}
            <div className="space-y-4">
              {bookings.length > 0 ? (
                bookings.map((booking) => (
                  <div key={booking.id} className="p-4 border border-gray-300 rounded-lg shadow-lg flex justify-between items-center">
                    <span>{booking.details}</span>
                    <button
                      onClick={() => cancelBooking(booking.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Cancel
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 dark:text-gray-400">No bookings found.</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default YourBookings;
