import { useState } from "react";
import PageNav from "../components/PageNav";

const TripBudgetCalculator = () => {
  const [destination, setDestination] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [days, setDays] = useState(1);
  const [accommodation, setAccommodation] = useState(50);
  const [food, setFood] = useState(20);
  const [transport, setTransport] = useState(30);
  const [activities, setActivities] = useState(0);

  const calculateTotalCost = () => {
    const accommodationCost = days * accommodation;
    const foodCost = days * food;
    const transportCost = transport;
    const activitiesCost = activities;

    return accommodationCost + foodCost + transportCost + activitiesCost;
  };

  const chartData = [
    { name: "Accommodation", value: days * accommodation },
    { name: "Food", value: days * food },
    { name: "Transport", value: transport },
    { name: "Activities", value: activities },
  ];

  return (
    <>
      <PageNav />
      <div>
        <div className="p-6 bg-gray-100 text-black rounded-lg shadow-md max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Trip Budget Calculator Dashboard
          </h2>
          <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Destination:
                </label>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter destination"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Currency:
                </label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="INR">INR (₹)</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Number of Days:
                </label>
                <input
                  type="number"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  min="1"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Accommodation Cost per Day:
                </label>
                <input
                  type="number"
                  value={accommodation}
                  onChange={(e) => setAccommodation(Number(e.target.value))}
                  min="0"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Food Cost per Day:
                </label>
                <input
                  type="number"
                  value={food}
                  onChange={(e) => setFood(Number(e.target.value))}
                  min="0"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Transport Cost:
                </label>
                <input
                  type="number"
                  value={transport}
                  onChange={(e) => setTransport(Number(e.target.value))}
                  min="0"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Activities Cost:
                </label>
                <input
                  type="number"
                  value={activities}
                  onChange={(e) => setActivities(Number(e.target.value))}
                  min="0"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
          </div>

          <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">
              Total Estimated Cost: {currency} {calculateTotalCost()}
            </h3>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Cost Breakdown</h3>
            <div className="grid grid-cols-2 gap-4">
              {chartData.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between p-2 border-b border-gray-200"
                >
                  <span>{item.name}</span>
                  <span>
                    {currency} {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TripBudgetCalculator;
