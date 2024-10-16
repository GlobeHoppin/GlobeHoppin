import PageNav from "../components/PageNav";

function BookingPage() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <PageNav />
      <div className="mx-auto py-12 text-gray-200 sm:py-48 lg:py-12">
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              Booking System
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              Make your reservations easily for hotels and flights.
            </p>

            {/* Hotel Reservation Section */}
            <div className="booking-section mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Hotel Reservations</h3>
              <form className="space-y-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Location:
                  </label>
                  <select id="hotel-location" className="block w-full p-2.5 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500">
                    <option value="">Select Location</option>
                    
    <optgroup label="United States (North America)">
        <option value="california">California</option>
        <option value="florida">Florida</option>
        <option value="new-york">New York</option>
        <option value="texas">Texas</option>
        <option value="nevada">Nevada</option>
    </optgroup>

    <optgroup label="Mexico (North America)">
        <option value="quintana-roo">Quintana Roo</option>
        <option value="jalisco">Jalisco</option>
        <option value="mexico-city">Mexico City</option>
        <option value="yucatan">Yucatán</option>
        <option value="baja-california">Baja California</option>
    </optgroup>

    <optgroup label="Canada (North America)">
        <option value="ontario">Ontario</option>
        <option value="british-columbia">British Columbia</option>
        <option value="quebec">Quebec</option>
        <option value="alberta">Alberta</option>
        <option value="nova-scotia">Nova Scotia</option>
    </optgroup>

    <optgroup label="Dominican Republic (North America)">
        <option value="punta-cana">Punta Cana</option>
        <option value="santo-domingo">Santo Domingo</option>
        <option value="puerto-plata">Puerto Plata</option>
        <option value="samana">Samaná</option>
        <option value="la-romana">La Romana</option>
    </optgroup>

    <optgroup label="Cuba (North America)">
        <option value="havana">Havana</option>
        <option value="varadero">Varadero</option>
        <option value="santiago-de-cuba">Santiago de Cuba</option>
        <option value="camaguey">Camagüey</option>
        <option value="holguin">Holguín</option>
    </optgroup>

   
    <optgroup label="Brazil (South America)">
        <option value="rio-de-janeiro">Rio de Janeiro</option>
        <option value="sao-paulo">São Paulo</option>
        <option value="bahia">Bahia</option>
        <option value="ceara">Ceará</option>
        <option value="minas-gerais">Minas Gerais</option>
    </optgroup>

    <optgroup label="Argentina (South America)">
        <option value="buenos-aires">Buenos Aires</option>
        <option value="mendoza">Mendoza</option>
        <option value="cordoba">Córdoba</option>
        <option value="patagonia">Patagonia</option>
        <option value="salta">Salta</option>
    </optgroup>

    <optgroup label="Colombia (South America)">
        <option value="bogota">Bogotá</option>
        <option value="cartagena">Cartagena</option>
        <option value="medellin">Medellín</option>
        <option value="cali">Cali</option>
        <option value="santa-marta">Santa Marta</option>
    </optgroup>

    <optgroup label="Chile (South America)">
        <option value="santiago">Santiago</option>
        <option value="valparaiso">Valparaíso</option>
        <option value="puerto-varas">Puerto Varas</option>
        <option value="easter-island">Easter Island</option>
        <option value="atacama-desert">Atacama Desert</option>
    </optgroup>

    <optgroup label="Peru (South America)">
        <option value="cusco">Cusco</option>
        <option value="lima">Lima</option>
        <option value="arequipa">Arequipa</option>
        <option value="machu-picchu">Machu Picchu</option>
        <option value="puno">Puno</option>
    </optgroup>

    
    <optgroup label="France (Europe)">
        <option value="paris">Paris</option>
        <option value="nice">Nice</option>
        <option value="marseille">Marseille</option>
        <option value="lyon">Lyon</option>
        <option value="bordeaux">Bordeaux</option>
    </optgroup>

    <optgroup label="Spain (Europe)">
        <option value="barcelona">Barcelona</option>
        <option value="madrid">Madrid</option>
        <option value="seville">Seville</option>
        <option value="valencia">Valencia</option>
        <option value="granada">Granada</option>
    </optgroup>

    <optgroup label="Italy (Europe)">
        <option value="rome">Rome</option>
        <option value="venice">Venice</option>
        <option value="florence">Florence</option>
        <option value="milan">Milan</option>
        <option value="naples">Naples</option>
    </optgroup>

    <optgroup label="Turkey (Europe)">
        <option value="istanbul">Istanbul</option>
        <option value="antalya">Antalya</option>
        <option value="cappadocia">Cappadocia</option>
        <option value="izmir">Izmir</option>
        <option value="bodrum">Bodrum</option>
    </optgroup>

    <optgroup label="Germany (Europe)">
        <option value="berlin">Berlin</option>
        <option value="munich">Munich</option>
        <option value="hamburg">Hamburg</option>
        <option value="frankfurt">Frankfurt</option>
        <option value="cologne">Cologne</option>
    </optgroup>

   
    <optgroup label="China (Asia)">
        <option value="beijing">Beijing</option>
        <option value="shanghai">Shanghai</option>
        <option value="guangzhou">Guangzhou</option>
        <option value="xian">Xian</option>
        <option value="chengdu">Chengdu</option>
    </optgroup>

    <optgroup label="Thailand (Asia)">
        <option value="bangkok">Bangkok</option>
        <option value="phuket">Phuket</option>
        <option value="chiang-mai">Chiang Mai</option>
        <option value="pattaya">Pattaya</option>
        <option value="krabi">Krabi</option>
    </optgroup>

    <optgroup label="Japan (Asia)">
        <option value="tokyo">Tokyo</option>
        <option value="osaka">Osaka</option>
        <option value="kyoto">Kyoto</option>
        <option value="hokkaido">Hokkaido</option>
        <option value="okinawa">Okinawa</option>
    </optgroup>

    <optgroup label="Malaysia (Asia)">
        <option value="kuala-lumpur">Kuala Lumpur</option>
        <option value="penang">Penang</option>
        <option value="langkawi">Langkawi</option>
        <option value="sabah">Sabah</option>
        <option value="sarawak">Sarawak</option>
    </optgroup>

    <optgroup label="India (Asia)">
        <option value="rajasthan">Rajasthan</option>
        <option value="goa">Goa</option>
        <option value="kerala">Kerala</option>
        <option value="uttar-pradesh">Uttar Pradesh</option>
        <option value="maharashtra">Maharashtra</option>
    </optgroup>

    <optgroup label="Egypt (Africa)">
        <option value="cairo">Cairo</option>
        <option value="luxor">Luxor</option>
        <option value="giza">Giza</option>
        <option value="aswan">Aswan</option>
        <option value="alexandria">Alexandria</option>
    </optgroup>

    <optgroup label="South Africa (Africa)">
        <option value="cape-town">Cape Town</option>
        <option value="johannesburg">Johannesburg</option>
        <option value="durban">Durban</option>
        <option value="pretoria">Pretoria</option>
        <option value="kruger-national-park">Kruger National Park</option>
    </optgroup>

    <optgroup label="Morocco (Africa)">
        <option value="marrakesh">Marrakesh</option>
        <option value="casablanca">Casablanca</option>
        <option value="fes">Fes</option>
        <option value="rabat">Rabat</option>
        <option value="tangier">Tangier</option>
    </optgroup>

                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Check-in Date:
                  </label>
                  <input type="date" id="check-in-date" className="block w-full p-2.5 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" required />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Check-out Date:
                  </label>
                  <input type="date" id="check-out-date" className="block w-full p-2.5 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" required />
                </div>
                <button type="button" onClick={bookHotel} className="py-2 px-4 text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                  Book Hotel
                </button>
              </form>
            </div>

            {/* Flight Booking Section */}
            <div className="booking-section">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Flight Bookings</h3>
              <form className="space-y-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Origin:
                  </label>
                  <select id="flight-origin" className="block w-full p-2.5 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500">
                    <option value="">Select Origin</option>
                    <optgroup label="United States (North America)">
        <option value="california">California</option>
        <option value="florida">Florida</option>
        <option value="new-york">New York</option>
        <option value="texas">Texas</option>
        <option value="nevada">Nevada</option>
    </optgroup>

    <optgroup label="Mexico (North America)">
        <option value="quintana-roo">Quintana Roo</option>
        <option value="jalisco">Jalisco</option>
        <option value="mexico-city">Mexico City</option>
        <option value="yucatan">Yucatán</option>
        <option value="baja-california">Baja California</option>
    </optgroup>

    <optgroup label="Canada (North America)">
        <option value="ontario">Ontario</option>
        <option value="british-columbia">British Columbia</option>
        <option value="quebec">Quebec</option>
        <option value="alberta">Alberta</option>
        <option value="nova-scotia">Nova Scotia</option>
    </optgroup>

    <optgroup label="Dominican Republic (North America)">
        <option value="punta-cana">Punta Cana</option>
        <option value="santo-domingo">Santo Domingo</option>
        <option value="puerto-plata">Puerto Plata</option>
        <option value="samana">Samaná</option>
        <option value="la-romana">La Romana</option>
    </optgroup>

    <optgroup label="Cuba (North America)">
        <option value="havana">Havana</option>
        <option value="varadero">Varadero</option>
        <option value="santiago-de-cuba">Santiago de Cuba</option>
        <option value="camaguey">Camagüey</option>
        <option value="holguin">Holguín</option>
    </optgroup>

   
    <optgroup label="Brazil (South America)">
        <option value="rio-de-janeiro">Rio de Janeiro</option>
        <option value="sao-paulo">São Paulo</option>
        <option value="bahia">Bahia</option>
        <option value="ceara">Ceará</option>
        <option value="minas-gerais">Minas Gerais</option>
    </optgroup>

    <optgroup label="Argentina (South America)">
        <option value="buenos-aires">Buenos Aires</option>
        <option value="mendoza">Mendoza</option>
        <option value="cordoba">Córdoba</option>
        <option value="patagonia">Patagonia</option>
        <option value="salta">Salta</option>
    </optgroup>

    <optgroup label="Colombia (South America)">
        <option value="bogota">Bogotá</option>
        <option value="cartagena">Cartagena</option>
        <option value="medellin">Medellín</option>
        <option value="cali">Cali</option>
        <option value="santa-marta">Santa Marta</option>
    </optgroup>

    <optgroup label="Chile (South America)">
        <option value="santiago">Santiago</option>
        <option value="valparaiso">Valparaíso</option>
        <option value="puerto-varas">Puerto Varas</option>
        <option value="easter-island">Easter Island</option>
        <option value="atacama-desert">Atacama Desert</option>
    </optgroup>

    <optgroup label="Peru (South America)">
        <option value="cusco">Cusco</option>
        <option value="lima">Lima</option>
        <option value="arequipa">Arequipa</option>
        <option value="machu-picchu">Machu Picchu</option>
        <option value="puno">Puno</option>
    </optgroup>

    
    <optgroup label="France (Europe)">
        <option value="paris">Paris</option>
        <option value="nice">Nice</option>
        <option value="marseille">Marseille</option>
        <option value="lyon">Lyon</option>
        <option value="bordeaux">Bordeaux</option>
    </optgroup>

    <optgroup label="Spain (Europe)">
        <option value="barcelona">Barcelona</option>
        <option value="madrid">Madrid</option>
        <option value="seville">Seville</option>
        <option value="valencia">Valencia</option>
        <option value="granada">Granada</option>
    </optgroup>

    <optgroup label="Italy (Europe)">
        <option value="rome">Rome</option>
        <option value="venice">Venice</option>
        <option value="florence">Florence</option>
        <option value="milan">Milan</option>
        <option value="naples">Naples</option>
    </optgroup>

    <optgroup label="Turkey (Europe)">
        <option value="istanbul">Istanbul</option>
        <option value="antalya">Antalya</option>
        <option value="cappadocia">Cappadocia</option>
        <option value="izmir">Izmir</option>
        <option value="bodrum">Bodrum</option>
    </optgroup>

    <optgroup label="Germany (Europe)">
        <option value="berlin">Berlin</option>
        <option value="munich">Munich</option>
        <option value="hamburg">Hamburg</option>
        <option value="frankfurt">Frankfurt</option>
        <option value="cologne">Cologne</option>
    </optgroup>

   
    <optgroup label="China (Asia)">
        <option value="beijing">Beijing</option>
        <option value="shanghai">Shanghai</option>
        <option value="guangzhou">Guangzhou</option>
        <option value="xian">Xian</option>
        <option value="chengdu">Chengdu</option>
    </optgroup>

    <optgroup label="Thailand (Asia)">
        <option value="bangkok">Bangkok</option>
        <option value="phuket">Phuket</option>
        <option value="chiang-mai">Chiang Mai</option>
        <option value="pattaya">Pattaya</option>
        <option value="krabi">Krabi</option>
    </optgroup>

    <optgroup label="Japan (Asia)">
        <option value="tokyo">Tokyo</option>
        <option value="osaka">Osaka</option>
        <option value="kyoto">Kyoto</option>
        <option value="hokkaido">Hokkaido</option>
        <option value="okinawa">Okinawa</option>
    </optgroup>

    <optgroup label="Malaysia (Asia)">
        <option value="kuala-lumpur">Kuala Lumpur</option>
        <option value="penang">Penang</option>
        <option value="langkawi">Langkawi</option>
        <option value="sabah">Sabah</option>
        <option value="sarawak">Sarawak</option>
    </optgroup>

    <optgroup label="India (Asia)">
        <option value="rajasthan">Rajasthan</option>
        <option value="goa">Goa</option>
        <option value="kerala">Kerala</option>
        <option value="uttar-pradesh">Uttar Pradesh</option>
        <option value="maharashtra">Maharashtra</option>
    </optgroup>

    <optgroup label="Egypt (Africa)">
        <option value="cairo">Cairo</option>
        <option value="luxor">Luxor</option>
        <option value="giza">Giza</option>
        <option value="aswan">Aswan</option>
        <option value="alexandria">Alexandria</option>
    </optgroup>

    <optgroup label="South Africa (Africa)">
        <option value="cape-town">Cape Town</option>
        <option value="johannesburg">Johannesburg</option>
        <option value="durban">Durban</option>
        <option value="pretoria">Pretoria</option>
        <option value="kruger-national-park">Kruger National Park</option>
    </optgroup>

    <optgroup label="Morocco (Africa)">
        <option value="marrakesh">Marrakesh</option>
        <option value="casablanca">Casablanca</option>
        <option value="fes">Fes</option>
        <option value="rabat">Rabat</option>
        <option value="tangier">Tangier</option>
    </optgroup>

           
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Destination:
                  </label>
                  <select id="flight-destination" className="block w-full p-2.5 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500">
                    <option value="">Select Destination</option>
                    <optgroup label="United States (North America)">
        <option value="california">California</option>
        <option value="florida">Florida</option>
        <option value="new-york">New York</option>
        <option value="texas">Texas</option>
        <option value="nevada">Nevada</option>
    </optgroup>

    <optgroup label="Mexico (North America)">
        <option value="quintana-roo">Quintana Roo</option>
        <option value="jalisco">Jalisco</option>
        <option value="mexico-city">Mexico City</option>
        <option value="yucatan">Yucatán</option>
        <option value="baja-california">Baja California</option>
    </optgroup>

    <optgroup label="Canada (North America)">
        <option value="ontario">Ontario</option>
        <option value="british-columbia">British Columbia</option>
        <option value="quebec">Quebec</option>
        <option value="alberta">Alberta</option>
        <option value="nova-scotia">Nova Scotia</option>
    </optgroup>

    <optgroup label="Dominican Republic (North America)">
        <option value="punta-cana">Punta Cana</option>
        <option value="santo-domingo">Santo Domingo</option>
        <option value="puerto-plata">Puerto Plata</option>
        <option value="samana">Samaná</option>
        <option value="la-romana">La Romana</option>
    </optgroup>

    <optgroup label="Cuba (North America)">
        <option value="havana">Havana</option>
        <option value="varadero">Varadero</option>
        <option value="santiago-de-cuba">Santiago de Cuba</option>
        <option value="camaguey">Camagüey</option>
        <option value="holguin">Holguín</option>
    </optgroup>

   
    <optgroup label="Brazil (South America)">
        <option value="rio-de-janeiro">Rio de Janeiro</option>
        <option value="sao-paulo">São Paulo</option>
        <option value="bahia">Bahia</option>
        <option value="ceara">Ceará</option>
        <option value="minas-gerais">Minas Gerais</option>
    </optgroup>

    <optgroup label="Argentina (South America)">
        <option value="buenos-aires">Buenos Aires</option>
        <option value="mendoza">Mendoza</option>
        <option value="cordoba">Córdoba</option>
        <option value="patagonia">Patagonia</option>
        <option value="salta">Salta</option>
    </optgroup>

    <optgroup label="Colombia (South America)">
        <option value="bogota">Bogotá</option>
        <option value="cartagena">Cartagena</option>
        <option value="medellin">Medellín</option>
        <option value="cali">Cali</option>
        <option value="santa-marta">Santa Marta</option>
    </optgroup>

    <optgroup label="Chile (South America)">
        <option value="santiago">Santiago</option>
        <option value="valparaiso">Valparaíso</option>
        <option value="puerto-varas">Puerto Varas</option>
        <option value="easter-island">Easter Island</option>
        <option value="atacama-desert">Atacama Desert</option>
    </optgroup>

    <optgroup label="Peru (South America)">
        <option value="cusco">Cusco</option>
        <option value="lima">Lima</option>
        <option value="arequipa">Arequipa</option>
        <option value="machu-picchu">Machu Picchu</option>
        <option value="puno">Puno</option>
    </optgroup>

    
    <optgroup label="France (Europe)">
        <option value="paris">Paris</option>
        <option value="nice">Nice</option>
        <option value="marseille">Marseille</option>
        <option value="lyon">Lyon</option>
        <option value="bordeaux">Bordeaux</option>
    </optgroup>

    <optgroup label="Spain (Europe)">
        <option value="barcelona">Barcelona</option>
        <option value="madrid">Madrid</option>
        <option value="seville">Seville</option>
        <option value="valencia">Valencia</option>
        <option value="granada">Granada</option>
    </optgroup>

    <optgroup label="Italy (Europe)">
        <option value="rome">Rome</option>
        <option value="venice">Venice</option>
        <option value="florence">Florence</option>
        <option value="milan">Milan</option>
        <option value="naples">Naples</option>
    </optgroup>

    <optgroup label="Turkey (Europe)">
        <option value="istanbul">Istanbul</option>
        <option value="antalya">Antalya</option>
        <option value="cappadocia">Cappadocia</option>
        <option value="izmir">Izmir</option>
        <option value="bodrum">Bodrum</option>
    </optgroup>

    <optgroup label="Germany (Europe)">
        <option value="berlin">Berlin</option>
        <option value="munich">Munich</option>
        <option value="hamburg">Hamburg</option>
        <option value="frankfurt">Frankfurt</option>
        <option value="cologne">Cologne</option>
    </optgroup>

   
    <optgroup label="China (Asia)">
        <option value="beijing">Beijing</option>
        <option value="shanghai">Shanghai</option>
        <option value="guangzhou">Guangzhou</option>
        <option value="xian">Xian</option>
        <option value="chengdu">Chengdu</option>
    </optgroup>

    <optgroup label="Thailand (Asia)">
        <option value="bangkok">Bangkok</option>
        <option value="phuket">Phuket</option>
        <option value="chiang-mai">Chiang Mai</option>
        <option value="pattaya">Pattaya</option>
        <option value="krabi">Krabi</option>
    </optgroup>

    <optgroup label="Japan (Asia)">
        <option value="tokyo">Tokyo</option>
        <option value="osaka">Osaka</option>
        <option value="kyoto">Kyoto</option>
        <option value="hokkaido">Hokkaido</option>
        <option value="okinawa">Okinawa</option>
    </optgroup>

    <optgroup label="Malaysia (Asia)">
        <option value="kuala-lumpur">Kuala Lumpur</option>
        <option value="penang">Penang</option>
        <option value="langkawi">Langkawi</option>
        <option value="sabah">Sabah</option>
        <option value="sarawak">Sarawak</option>
    </optgroup>

    <optgroup label="India (Asia)">
        <option value="rajasthan">Rajasthan</option>
        <option value="goa">Goa</option>
        <option value="kerala">Kerala</option>
        <option value="uttar-pradesh">Uttar Pradesh</option>
        <option value="maharashtra">Maharashtra</option>
    </optgroup>

    <optgroup label="Egypt (Africa)">
        <option value="cairo">Cairo</option>
        <option value="luxor">Luxor</option>
        <option value="giza">Giza</option>
        <option value="aswan">Aswan</option>
        <option value="alexandria">Alexandria</option>
    </optgroup>

    <optgroup label="South Africa (Africa)">
        <option value="cape-town">Cape Town</option>
        <option value="johannesburg">Johannesburg</option>
        <option value="durban">Durban</option>
        <option value="pretoria">Pretoria</option>
        <option value="kruger-national-park">Kruger National Park</option>
    </optgroup>

    <optgroup label="Morocco (Africa)">
        <option value="marrakesh">Marrakesh</option>
        <option value="casablanca">Casablanca</option>
        <option value="fes">Fes</option>
        <option value="rabat">Rabat</option>
        <option value="tangier">Tangier</option>
    </optgroup>

           
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Flight Date:
                  </label>
                  <input type="date" id="flight-date" className="block w-full p-2.5 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" required />
                </div>
                <button type="button" onClick={bookFlight} className="py-2 px-4 text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                  Book Flight
                </button>
              </form>
            </div>

            {/* Results Section */}
            <div id="results" className="mt-8 text-gray-900 dark:text-white"></div>
          </div>
        </section>
      </div>
    </div>
  );

  // Function to handle hotel booking
  function bookHotel() {
    const location = document.getElementById('hotel-location').value;
    const checkInDate = document.getElementById('check-in-date').value;
    const checkOutDate = document.getElementById('check-out-date').value;

    if (location && checkInDate && checkOutDate) {
      const result = `Hotel booked in ${location.charAt(0).toUpperCase() + location.slice(1)} from ${checkInDate} to ${checkOutDate}.`;
      document.getElementById('results').innerHTML += `<p>${result}</p>`;
    } else {
      alert('Please fill all hotel reservation fields.');
    }
  }

  // Function to handle flight booking
  function bookFlight() {
    const origin = document.getElementById('flight-origin').value;
    const destination = document.getElementById('flight-destination').value;
    const flightDate = document.getElementById('flight-date').value;

    if (origin && destination && flightDate) {
      const result = `Flight booked from ${origin.charAt(0).toUpperCase() + origin.slice(1)} to ${destination.charAt(0).toUpperCase() + destination.slice(1)} on ${flightDate}.`;
      document.getElementById('results').innerHTML += `<p>${result}</p>`;
    } else {
      alert('Please fill all flight booking fields.');
    }
  }
}

export default BookingPage;
