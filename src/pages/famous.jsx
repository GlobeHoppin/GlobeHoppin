import { useState } from "react"; 

import PageNav from "../components/PageNav"; 
const famousPlaces = {
    'Andhra Pradesh': [
        { name: "Tirupati Temple", cuisine: "Pulihora", culture: "Famous pilgrimage site.", location: "Tirupati" },
        { name: "Ramakrishna Beach", cuisine: "Biryani", culture: "Popular beach in Visakhapatnam.", location: "Visakhapatnam" },
        { name: "Amaravati Stupa", cuisine: "Gongura Pickle", culture: "Historical Buddhist site.", location: "Amaravati" },
        { name: "Hampi Temples", cuisine: "Ragi Mudde", culture: "UNESCO World Heritage site.", location: "Hampi" },
        { name: "Krishna River", cuisine: "Pesarattu", culture: "Beautiful river valley.", location: "Krishna District" },
        { name: "Ananthagiri Hills", cuisine: "Chicken Curry", culture: "Scenic hill station.", location: "Vikarabad" },
        { name: "Nallamala Forest", cuisine: "Biriyani", culture: "Rich biodiversity.", location: "Nallamala" },
        { name: "Araku Valley", cuisine: "Araku Coffee", culture: "Famous for coffee plantations.", location: "Visakhapatnam" },
        { name: "Srikalahasti Temple", cuisine: "Puliyodarai", culture: "Known for its Vayu Linga.", location: "Srikalahasti" },
        { name: "Kolleru Lake", cuisine: "Prawn Curry", culture: "Wetland ecosystem.", location: "West Godavari" },
      ],
      'Arunachal Pradesh': [
        { name: "Tawang Monastery", cuisine: "Thukpa", culture: "Largest Buddhist monastery.", location: "Tawang" },
        { name: "Itanagar Fort", cuisine: "Khar", culture: "Historical significance.", location: "Itanagar" },
        { name: "Ziro Valley", cuisine: "Apong", culture: "Cultural richness.", location: "Ziro" },
        { name: "Bomdila Monastery", cuisine: "Momos", culture: "Serene landscapes.", location: "Bomdila" },
        { name: "Pasighat", cuisine: "Fish Curry", culture: "Rich cultural heritage.", location: "Pasighat" },
        { name: "Namdapha National Park", cuisine: "Tibetan Cuisine", culture: "Biodiversity hotspot.", location: "Changlang" },
        { name: "Mechuka", cuisine: "Yak Meat", culture: "Stunning landscapes.", location: "Shi Yomi" },
        { name: "Sela Pass", cuisine: "Pork Curry", culture: "Scenic mountain pass.", location: "West Kameng" },
        { name: "Dirang Valley", cuisine: "Thukpa", culture: "Picturesque valley.", location: "Dirang" },
        { name: "Bhalukpong", cuisine: "Khura", culture: "Gateway to Arunachal Pradesh.", location: "West Kameng" },
      ],
      'Assam': [
        { name: "Kaziranga National Park", cuisine: "Assamese Thali", culture: "Famous for rhinos.", location: "Golaghat" },
        { name: "Umananda Temple", cuisine: "Khar", culture: "Located on an island.", location: "Guwahati" },
        { name: "Majuli Island", cuisine: "Fish Curry", culture: "Largest river island.", location: "Majuli" },
        { name: "Sivasagar", cuisine: "Masor Tenga", culture: "Historical significance.", location: "Sivasagar" },
        { name: "Hajo", cuisine: "Pitha", culture: "Pilgrimage site.", location: "Hajo" },
        { name: "Tea Gardens of Assam", cuisine: "Chai", culture: "Famous tea-producing region.", location: "Jorhat" },
        { name: "Nameri National Park", cuisine: "Duck Curry", culture: "Biodiversity hotspot.", location: "Sonitpur" },
        { name: "Kamakhya Temple", cuisine: "Mutton Curry", culture: "Shakti Peetha.", location: "Guwahati" },
        { name: "Barpeta Satra", cuisine: "Khar", culture: "Cultural and religious significance.", location: "Barpeta" },
        { name: "Dibrugarh", cuisine: "Aloo Pitika", culture: "Tea capital of Assam.", location: "Dibrugarh" },
      ],
      'Bihar': [
        { name: "Bodh Gaya", cuisine: "Litti Chokha", culture: "Buddhist pilgrimage.", location: "Bodh Gaya" },
        { name: "Mahabodhi Temple", cuisine: "Samosa", culture: "UNESCO site.", location: "Bodh Gaya" },
        { name: "Nalanda University", cuisine: "Dal Puri", culture: "Ancient educational hub.", location: "Nalanda" },
        { name: "Vaishali Stupa", cuisine: "Kadhi", culture: "Historical significance.", location: "Vaishali" },
        { name: "Darbhanga Fort", cuisine: "Thekua", culture: "Historical heritage.", location: "Darbhanga" },
        { name: "Rajgir", cuisine: "Sattu", culture: "Ancient city with hot springs.", location: "Rajgir" },
        { name: "Sonepur Mela", cuisine: "Chura", culture: "Famous cattle fair.", location: "Sonepur" },
        { name: "Patna Sahib Gurudwara", cuisine: "Paratha", culture: "Sacred site for Sikhs.", location: "Patna" },
        { name: "Kakolat Waterfall", cuisine: "Chura Dahi", culture: "Beautiful waterfall.", location: "Kakolat" },
        { name: "Bihar Museum", cuisine: "Bihari Thali", culture: "Cultural heritage.", location: "Patna" },
      ],
      'Chhattisgarh': [
        { name: "Bastar Dussehra", cuisine: "Chana Samosa", culture: "Unique tribal festival.", location: "Bastar" },
        { name: "Kanker Palace", cuisine: "Kodo Millet", culture: "Royal heritage.", location: "Kanker" },
        { name: "Chitrakote Waterfalls", cuisine: "Bafauri", culture: "Natural beauty.", location: "Jagdalpur" },
        { name: "Kailash Gahr", cuisine: "Daal Bafla", culture: "Cultural significance.", location: "Kanker" },
        { name: "Buddha Amarnath Temple", cuisine: "Chana Dal", culture: "Sacred site.", location: "Dantewada" },
        { name: "Sirpur", cuisine: "Pitha", culture: "Archaeological site.", location: "Mahasamund" },
        { name: "Amarkantak", cuisine: "Ghar ki Sabji", culture: "Religious significance.", location: "Anuppur" },
        { name: "Kanger Valley National Park", cuisine: "Fish Curry", culture: "Biodiversity hotspot.", location: "Jagdalpur" },
        { name: "Dudhadhari Monastery", cuisine: "Puran Poli", culture: "Historic significance.", location: "Raipur" },
        { name: "Tamor Pingla Wildlife Sanctuary", cuisine: "Masoor Dal", culture: "Rich flora and fauna.", location: "Durg" },
      ],
      'Goa': [
        { name: "Baga Beach", cuisine: "Fish Curry", culture: "Famous beach destination.", location: "Baga" },
        { name: "Basilica of Bom Jesus", cuisine: "Vindaloo", culture: "UNESCO World Heritage site.", location: "Old Goa" },
        { name: "Dudhsagar Waterfalls", cuisine: "Xacuti", culture: "Spectacular waterfall.", location: "Sanguem" },
        { name: "Anjuna Beach", cuisine: "Prawn Curry", culture: "Known for nightlife.", location: "Anjuna" },
        { name: "Fort Aguada", cuisine: "Sol Kadhi", culture: "Historical fort.", location: "Sinquerim" },
        { name: "Palolem Beach", cuisine: "Seafood", culture: "Beautiful beach.", location: "Canacona" },
        { name: "Chapora Fort", cuisine: "Bebinca", culture: "Scenic views.", location: "Chapora" },
        { name: "Se Cathedral", cuisine: "Feni", culture: "Historic cathedral.", location: "Old Goa" },
        { name: "Miramar Beach", cuisine: "Sannas", culture: "Popular beach.", location: "Panaji" },
        { name: "Spice Plantations", cuisine: "Traditional Goan Cuisine", culture: "Nature tourism.", location: "Ponda" },
      ],
      'Gujarat': [
        { name: "Gir National Park", cuisine: "Dhokla", culture: "Home of Asiatic lions.", location: "Gir Somnath" },
        { name: "Rann of Kutch", cuisine: "Kutchhi Dabeli", culture: "White salt desert.", location: "Kutch" },
        { name: "Somnath Temple", cuisine: "Thali", culture: "Famous pilgrimage site.", location: "Prabhas Patan" },
        { name: "Sabarmati Ashram", cuisine: "Fafda", culture: "Gandhi's residence.", location: "Ahmedabad" },
        { name: "Akshardham Temple", cuisine: "Pani Puri", culture: "Modern temple architecture.", location: "Gandhinagar" },
        { name: "Dwarka", cuisine: "Khichdi", culture: "Mythological significance.", location: "Dwarka" },
        { name: "Kankaria Lake", cuisine: "Bhel Puri", culture: "Popular recreational spot.", location: "Ahmedabad" },
        { name: "Champaner-Pavagadh Archaeological Park", cuisine: "Gujarathi Thali", culture: "UNESCO site.", location: "Pavagadh" },
        { name: "Lakhota Lake", cuisine: "Pav Bhaji", culture: "Scenic beauty.", location: "Jamnagar" },
        { name: "Surat", cuisine: "Surti Undhiyu", culture: "Cultural and economic hub.", location: "Surat" },
      ],
      'Haryana': [
        { name: "Sohna", cuisine: "Bajra Khichdi", culture: "Known for hot springs.", location: "Gurgaon" },
        { name: "Kurukshetra", cuisine: "Biryani", culture: "Land of Mahabharata.", location: "Kurukshetra" },
        { name: "Pinjore Gardens", cuisine: "Chole Bhature", culture: "Historical gardens.", location: "Pinjore" },
        { name: "Mahatma Gandhi Memorial", cuisine: "Aloo Paratha", culture: "Historical significance.", location: "Karnal" },
        { name: "Tilyar Lake", cuisine: "Raita", culture: "Natural beauty.", location: "Rohtak" },
        { name: "Badkhal Lake", cuisine: "Paneer Tikka", culture: "Recreational spot.", location: "Faridabad" },
        { name: "Rani ki Vav", cuisine: "Haryanvi Thali", culture: "Architectural marvel.", location: "Dharamshala" },
        { name: "Heritage Village Resort", cuisine: "Dahi Bhalla", culture: "Cultural experience.", location: "Manesar" },
        { name: "Sultanpur National Park", cuisine: "Dal Makhani", culture: "Bird watching site.", location: "Gurgaon" },
        { name: "Fatehgarh Sahib", cuisine: "Tandoori Roti", culture: "Historical site.", location: "Fatehgarh" },
      ],
      'Himachal Pradesh': [
        { name: "Shimla", cuisine: "Chana Madra", culture: "Summer capital.", location: "Shimla" },
        { name: "Manali", cuisine: "Siddu", culture: "Popular hill station.", location: "Kullu" },
        { name: "Dharamshala", cuisine: "Tibetan Cuisine", culture: "Home to the Dalai Lama.", location: "Kangra" },
        { name: "Kullu Valley", cuisine: "Sidu", culture: "Famous for festivals.", location: "Kullu" },
        { name: "Kinnaur", cuisine: "Chana Dal", culture: "Known for apples.", location: "Kinnaur" },
        { name: "Spiti Valley", cuisine: "Thukpa", culture: "Stunning landscapes.", location: "Lahaul and Spiti" },
        { name: "Khajjiar", cuisine: "Momos", culture: "Mini Switzerland of India.", location: "Chamba" },
        { name: "Rohtang Pass", cuisine: "Roti", culture: "Scenic mountain pass.", location: "Kullu" },
        { name: "Chail", cuisine: "Chole Bhature", culture: "Home to the highest cricket ground.", location: "Solan" },
        { name: "Bhakra Nangal Dam", cuisine: "Puri", culture: "Largest dam in India.", location: "Bilaspur" },
      ],
      'Jharkhand': [
        { name: "Ranchi", cuisine: "Pitha", culture: "Capital city with waterfalls.", location: "Ranchi" },
        { name: "Netarhat", cuisine: "Gondhoraj Lebur", culture: "Queen of Chotanagpur.", location: "Netarhat" },
        { name: "Jamshedpur", cuisine: "Samosa", culture: "Industrial city.", location: "Jamshedpur" },
        { name: "Deoghar", cuisine: "Bhaat", culture: "Famous for Baba Baidyanath Temple.", location: "Deoghar" },
        { name: "Dhanbad", cuisine: "Chura", culture: "Coal capital of India.", location: "Dhanbad" },
        { name: "Hazaribagh", cuisine: "Chicken Curry", culture: "Known for national park.", location: "Hazaribagh" },
        { name: "Betla National Park", cuisine: "Mutton Curry", culture: "Biodiversity hotspot.", location: "Latehar" },
        { name: "Ulihatu", cuisine: "Dal", culture: "Historical significance.", location: "Khunti" },
        { name: "Dalma Wildlife Sanctuary", cuisine: "Fish Curry", culture: "Rich flora and fauna.", location: "East Singhbhum" },
        { name: "Sariya", cuisine: "Baida Roti", culture: "Cultural richness.", location: "Giridih" },
      ],
      'Karnataka': [
        { name: "Mysore Palace", cuisine: "Mysore Pak", culture: "Historical significance.", location: "Mysuru" },
        { name: "Hampi", cuisine: "Ragi Mudde", culture: "UNESCO World Heritage site.", location: "Hampi" },
        { name: "Coorg", cuisine: "Pandi Curry", culture: "Known for coffee plantations.", location: "Kodagu" },
        { name: "Bangalore Palace", cuisine: "Bisibelebath", culture: "Royal heritage.", location: "Bengaluru" },
        { name: "Badami Caves", cuisine: "Daal", culture: "Historical rock-cut temples.", location: "Badami" },
        { name: "Jog Falls", cuisine: "Bisi Bele Bath", culture: "Famous waterfall.", location: "Sagara" },
        { name: "Nandi Hills", cuisine: "Akki Roti", culture: "Popular hill station.", location: "Nandi Hills" },
        { name: "Chikmagalur", cuisine: "Coffee", culture: "Famous for coffee estates.", location: "Chikmagalur" },
        { name: "Siddhar Betta", cuisine: "Khichdi", culture: "Scenic hilltop.", location: "Ramanagara" },
        { name: "Kudremukh National Park", cuisine: "Wild Boar Curry", culture: "Rich biodiversity.", location: "Chikmagalur" },
      ],
      'Kerala': [
        { name: "Alleppey Backwaters", cuisine: "Appam", culture: "Famous for houseboats.", location: "Alleppey" },
        { name: "Munnar", cuisine: "Spices", culture: "Famous hill station.", location: "Idukki" },
        { name: "Kochi Fort", cuisine: "Fish Curry", culture: "Historical significance.", location: "Kochi" },
        { name: "Wayanad", cuisine: "Puttu", culture: "Known for wildlife.", location: "Wayanad" },
        { name: "Varkala Beach", cuisine: "Karimeen Pollichathu", culture: "Popular beach.", location: "Varkala" },
        { name: "Sabarimala", cuisine: "Pongal", culture: "Famous pilgrimage site.", location: "Pathanamthitta" },
        { name: "Athirappilly Falls", cuisine: "Banana Chips", culture: "Largest waterfall in Kerala.", location: "Thrissur" },
        { name: "Kumarakom", cuisine: "Nadan Chicken Curry", culture: "Famous for backwaters.", location: "Kottayam" },
        { name: "Thiruvananthapuram", cuisine: "Sadhya", culture: "Capital city.", location: "Thiruvananthapuram" },
        { name: "Padmanabhaswamy Temple", cuisine: "Vegetarian Cuisine", culture: "Famous temple.", location: "Thiruvananthapuram" },
      ],
      'Madhya Pradesh': [
        { name: "Khajuraho", cuisine: "Dal Bafla", culture: "Famous for temples.", location: "Chhatarpur" },
        { name: "Sanchi Stupa", cuisine: "Poha", culture: "UNESCO World Heritage site.", location: "Sanchi" },
        { name: "Mandav", cuisine: "Bhutte Ka Kees", culture: "Historical site.", location: "Mandav" },
        { name: "Bhopal", cuisine: "Biryani", culture: "Capital city with rich history.", location: "Bhopal" },
        { name: "Ujjain", cuisine: "Kachori", culture: "Famous pilgrimage site.", location: "Ujjain" },
        { name: "Panchmarhi", cuisine: "Chhole Bhature", culture: "Hill station.", location: "Panchmarhi" },
        { name: "Orchha", cuisine: "Samosa", culture: "Known for palaces.", location: "Orchha" },
        { name: "Maheshwar", cuisine: "Thali", culture: "Historical significance.", location: "Maheshwar" },
        { name: "Rani Durgavati Museum", cuisine: "Madhya Pradesh Thali", culture: "Cultural heritage.", location: "Jabalpur" },
        { name: "Tawang", cuisine: "Paneer Tikka", culture: "Known for monasteries.", location: "Tawang" },
      ],
      'Maharashtra': [
        { name: "Gateway of India", cuisine: "Vada Pav", culture: "Iconic landmark in Mumbai.", location: "Mumbai" },
        { name: "Ajanta and Ellora Caves", cuisine: "Puran Poli", culture: "UNESCO World Heritage site.", location: "Aurangabad" },
        { name: "Marine Drive", cuisine: "Bombay Sandwich", culture: "Famous promenade.", location: "Mumbai" },
        { name: "Shivaji Maharaj Terminus", cuisine: "Thali", culture: "Heritage railway station.", location: "Mumbai" },
        { name: "Lonavala", cuisine: "Chikki", culture: "Hill station.", location: "Lonavala" },
        { name: "Mahabaleshwar", cuisine: "Strawberry", culture: "Known for strawberries.", location: "Mahabaleshwar" },
        { name: "Panchgani", cuisine: "Kanda Bhaji", culture: "Scenic hill station.", location: "Panchgani" },
        { name: "Kolhapur", cuisine: "Kolhapuri Thali", culture: "Famous for traditional food.", location: "Kolhapur" },
        { name: "Nasik", cuisine: "Misal Pav", culture: "Known for vineyards.", location: "Nasik" },
        { name: "Dajipur Wildlife Sanctuary", cuisine: "Biryani", culture: "Rich biodiversity.", location: "Bamboo Forest" },
      ],
      'Manipur': [
        { name: "Loktak Lake", cuisine: "Eromba", culture: "Largest freshwater lake.", location: "Bishnupur" },
        { name: "Imphal", cuisine: "Ngari", culture: "Capital city with rich history.", location: "Imphal" },
        { name: "Kangla Fort", cuisine: "Kangshoi", culture: "Historical fort.", location: "Imphal" },
        { name: "Keibul Lamjao National Park", cuisine: "Singju", culture: "Floating national park.", location: "Bishnupur" },
        { name: "Shree Govindajee Temple", cuisine: "Kangshoi", culture: "Famous temple.", location: "Imphal" },
        { name: "Sana Konung", cuisine: "Mangshang", culture: "Cultural site.", location: "Imphal" },
        { name: "Rani Gaidinliu Park", cuisine: "Chakhao Kheer", culture: "Dedicated to a freedom fighter.", location: "Tamenglong" },
        { name: "Andro Village", cuisine: "Chakhao Rice", culture: "Traditional village.", location: "Imphal" },
        { name: "Kangla", cuisine: "Pakora", culture: "Historic palace site.", location: "Imphal" },
        { name: "Moirang", cuisine: "Iromba", culture: "Historical significance.", location: "Moira" },
      ],
      'Meghalaya': [
        { name: "Shillong", cuisine: "Jadoh", culture: "Capital city known for music.", location: "Shillong" },
        { name: "Living Root Bridges", cuisine: "Pukhlein", culture: "Unique bioengineering marvels.", location: "Cherrapunji" },
        { name: "Nohkalikai Falls", cuisine: "Pukhlein", culture: "Tallest waterfall in India.", location: "Cherrapunji" },
        { name: "Mawlynnong", cuisine: "Dohneiih", culture: "Cleanest village in Asia.", location: "Mawlynnong" },
        { name: "Cherapunji", cuisine: "Khar", culture: "Heavy rainfall area.", location: "Cherrapunji" },
        { name: "Dawki", cuisine: "Pukhlein", culture: "Famous for clear waters.", location: "Dawki" },
        { name: "Umiam Lake", cuisine: "Jadoh", culture: "Popular tourist spot.", location: "Umiam" },
        { name: "Elephant Falls", cuisine: "Momos", culture: "Scenic waterfall.", location: "Shillong" },
        { name: "Laitlum Canyons", cuisine: "Dohneiih", culture: "Breathtaking views.", location: "Shillong" },
        { name: "Wahkhen", cuisine: "Pukhlein", culture: "Traditional village.", location: "East Khasi Hills" },
      ],
      'Mizoram': [
        { name: "Aizawl", cuisine: "Bai", culture: "Capital city with hills.", location: "Aizawl" },
        { name: "Champhai", cuisine: "Vawkthli", culture: "Famous for rice wine.", location: "Champhai" },
        { name: "Lunglei", cuisine: "Bai", culture: "Known for lush landscapes.", location: "Lunglei" },
        { name: "Serchhip", cuisine: "Paan", culture: "Rich cultural heritage.", location: "Serchhip" },
        { name: "Sihphir", cuisine: "Bai", culture: "Traditional village life.", location: "Sihphir" },
        { name: "Mamit", cuisine: "Vawkthli", culture: "Known for bamboo products.", location: "Mamit" },
        { name: "Lunglei", cuisine: "Bai", culture: "Scenic beauty.", location: "Lunglei" },
        { name: "Zohunghat", cuisine: "Bai", culture: "Beautiful landscapes.", location: "Mizoram" },
        { name: "Tlabung", cuisine: "Bai", culture: "Rural life experience.", location: "Lunglei" },
        { name: "Mizoram State Museum", cuisine: "Mizo Thali", culture: "Cultural heritage site.", location: "Aizawl" },
      ],
      'Nagaland': [
        { name: "Kohima", cuisine: "Smoked Meat", culture: "Capital city with rich culture.", location: "Kohima" },
        { name: "Dimapur", cuisine: "Bamboo Shoot", culture: "Largest city in Nagaland.", location: "Dimapur" },
        { name: "Dzukou Valley", cuisine: "Rice", culture: "Known for stunning landscapes.", location: "Kohima" },
        { name: "Khonoma Village", cuisine: "Local Vegetable", culture: "First green village in India.", location: "Kohima" },
        { name: "Mokokchung", cuisine: "Pork", culture: "Cultural center.", location: "Mokokchung" },
        { name: "Tuophema Village", cuisine: "Local Delicacies", culture: "Traditional village experience.", location: "Kohima" },
        { name: "Wokha", cuisine: "Vegetable Curry", culture: "Known for festivals.", location: "Wokha" },
        { name: "Zunheboto", cuisine: "Naga Thali", culture: "Cultural richness.", location: "Zunheboto" },
        { name: "Phek", cuisine: "Chicken", culture: "Beautiful landscapes.", location: "Phek" },
        { name: "Mon", cuisine: "Pork", culture: "Known for Aoleang festival.", location: "Mon" },
      ],
      'Odisha': [
        { name: "Puri", cuisine: "Rasagola", culture: "Famous for Jagannath Temple.", location: "Puri" },
        { name: "Bhubaneswar", cuisine: "Dalma", culture: "Temple city.", location: "Bhubaneswar" },
        { name: "Konark", cuisine: "Chhena Poda", culture: "Famous for Sun Temple.", location: "Konark" },
        { name: "Cuttack", cuisine: "Chhena Jhili", culture: "Known for silver filigree work.", location: "Cuttack" },
        { name: "Chilka Lake", cuisine: "Macha Jhol", culture: "Largest coastal lagoon in India.", location: "Ganjam" },
        { name: "Udayagiri", cuisine: "Kora Badi", culture: "Known for caves.", location: "Udayagiri" },
        { name: "Khandagiri", cuisine: "Sambar", culture: "Historical significance.", location: "Khandagiri" },
        { name: "Dhauli", cuisine: "Chhena Poda", culture: "Peace Pagoda.", location: "Dhauli" },
        { name: "Bhitarkanika National Park", cuisine: "Macha Jhol", culture: "Biodiversity hotspot.", location: "Kendrapara" },
        { name: "Balasore", cuisine: "Chhena Poda", culture: "Known for fishery resources.", location: "Balasore" },
      ],
      'Punjab': [
        { name: "Amritsar", cuisine: "Amritsari Kulcha", culture: "Home to Golden Temple.", location: "Amritsar" },
        { name: "Chandigarh", cuisine: "Chole Bhature", culture: "Planned city.", location: "Chandigarh" },
        { name: "Ludhiana", cuisine: "Butter Chicken", culture: "Industrial hub.", location: "Ludhiana" },
        { name: "Patiala", cuisine: "Patiala Peg", culture: "Known for Punjabi culture.", location: "Patiala" },
        { name: "Jalandhar", cuisine: "Bhaiji Da Chula", culture: "Known for sports industry.", location: "Jalandhar" },
        { name: "Bathinda", cuisine: "Baida Roti", culture: "Known for forts and palaces.", location: "Bathinda" },
        { name: "Rupnagar", cuisine: "Paneer Tikka", culture: "Known for temples.", location: "Rupnagar" },
        { name: "Fatehgarh Sahib", cuisine: "Tandoori Roti", culture: "Historical significance.", location: "Fatehgarh Sahib" },
        { name: "Sangrur", cuisine: "Sarson Da Saag", culture: "Agricultural region.", location: "Sangrur" },
        { name: "Moga", cuisine: "Lassi", culture: "Known for dairy farming.", location: "Moga" },
      ],
      'Rajasthan': [
        { name: "Jaipur", cuisine: "Dal Baati Churma", culture: "Pink city known for palaces.", location: "Jaipur" },
        { name: "Udaipur", cuisine: "Gatte Ki Sabzi", culture: "City of lakes.", location: "Udaipur" },
        { name: "Jaisalmer", cuisine: "Ker Sangri", culture: "Golden city with deserts.", location: "Jaisalmer" },
        { name: "Jodhpur", cuisine: "Mirchi Vada", culture: "Blue city known for forts.", location: "Jodhpur" },
        { name: "Pushkar", cuisine: "Malpua", culture: "Holy city with a lake.", location: "Pushkar" },
        { name: "Ajmer", cuisine: "Kachori", culture: "Famous for Ajmer Sharif Dargah.", location: "Ajmer" },
        { name: "Bikaner", cuisine: "Bikaneri Bhujia", culture: "Known for snacks.", location: "Bikaner" },
        { name: "Chittorgarh", cuisine: "Dal Baati Churma", culture: "Historical fort city.", location: "Chittorgarh" },
        { name: "Alwar", cuisine: "Gajar ka Halwa", culture: "Known for wildlife.", location: "Alwar" },
        { name: "Sawai Madhopur", cuisine: "Kadi", culture: "Famous for Ranthambore.", location: "Sawai Madhopur" },
      ],
      'Sikkim': [
        { name: "Gangtok", cuisine: "Momo", culture: "Capital city with stunning views.", location: "Gangtok" },
        { name: "Pelling", cuisine: "Thukpa", culture: "Known for monasteries.", location: "Pelling" },
        { name: "Nathula Pass", cuisine: "Chowmein", culture: "Famous mountain pass.", location: "Nathula" },
        { name: "Yuksom", cuisine: "Dhaido", culture: "Historical significance.", location: "Yuksom" },
        { name: "Lachung", cuisine: "Momo", culture: "Scenic beauty.", location: "Lachung" },
        { name: "Zuluk", cuisine: "Sikkimese Thali", culture: "Beautiful landscapes.", location: "Zuluk" },
        { name: "Namchi", cuisine: "Thukpa", culture: "Known for cultural heritage.", location: "Namchi" },
        { name: "Sikkim Himalayan Zoo", cuisine: "Momo", culture: "Biodiversity hotspot.", location: "Gangtok" },
        { name: "Tashi View Point", cuisine: "Sikkimese Cuisine", culture: "Stunning views.", location: "Gangtok" },
        { name: "Khangchendzonga National Park", cuisine: "Bamboo Rice", culture: "Biodiversity hotspot.", location: "Yuksom" },
      ],
      'Tamil Nadu': [
        { name: "Chennai", cuisine: "Idli", culture: "Capital city known for temples.", location: "Chennai" },
        { name: "Madurai", cuisine: "Jigarthanda", culture: "Famous for Meenakshi Temple.", location: "Madurai" },
        { name: "Ooty", cuisine: "Biryani", culture: "Hill station.", location: "Ooty" },
        { name: "Kanyakumari", cuisine: "Dosa", culture: "Southernmost tip of India.", location: "Kanyakumari" },
        { name: "Coimbatore", cuisine: "Pongal", culture: "Known for textiles.", location: "Coimbatore" },
        { name: "Thanjavur", cuisine: "Venn Pongal", culture: "Known for art and culture.", location: "Thanjavur" },
        { name: "Tiruchirappalli", cuisine: "Parotta", culture: "Historical significance.", location: "Tiruchirappalli" },
        { name: "Rameswaram", cuisine: "Seafood", culture: "Famous pilgrimage site.", location: "Rameswaram" },
        { name: "Mahabalipuram", cuisine: "Seafood", culture: "Famous for temples.", location: "Mahabalipuram" },
        { name: "Kodaikanal", cuisine: "Pongal", culture: "Scenic hill station.", location: "Kodaikanal" },
      ],
      'Telangana': [
        { name: "Hyderabad", cuisine: "Biryani", culture: "Capital city known for history.", location: "Hyderabad" },
        { name: "Warangal", cuisine: "Pulao", culture: "Known for historical sites.", location: "Warangal" },
        { name: "Khammam", cuisine: "Mutton Curry", culture: "Rich in agriculture.", location: "Khammam" },
        { name: "Nalgonda", cuisine: "Gongura Pachadi", culture: "Known for vineyards.", location: "Nalgonda" },
        { name: "Nizamabad", cuisine: "Chicken Biryani", culture: "Known for temples.", location: "Nizamabad" },
        { name: "Suryapet", cuisine: "Gongura Pulao", culture: "Known for agriculture.", location: "Suryapet" },
        { name: "Mahbubnagar", cuisine: "Pongal", culture: "Rich in history.", location: "Mahbubnagar" },
        { name: "Ranga Reddy", cuisine: "Paya", culture: "Known for its landscape.", location: "Ranga Reddy" },
        { name: "Adilabad", cuisine: "Biryani", culture: "Known for its forests.", location: "Adilabad" },
        { name: "Medak", cuisine: "Chicken Fry", culture: "Known for temples.", location: "Medak" },
      ],
      'Tripura': [
        { name: "Agartala", cuisine: "Mui Borok", culture: "Capital city with rich heritage.", location: "Agartala" },
        { name: "Unakoti", cuisine: "Panch Phoran", culture: "Known for rock carvings.", location: "Unakoti" },
        { name: "Udaipur", cuisine: "Macher Jhol", culture: "Known for its lakes.", location: "Udaipur" },
        { name: "Sepahijala", cuisine: "Bamboo Shoot", culture: "Biodiversity hotspot.", location: "Sepahijala" },
        { name: "Dhalai", cuisine: "Rui Mach", culture: "Known for culture.", location: "Dhalai" },
        { name: "Khowai", cuisine: "Khar", culture: "Known for festivals.", location: "Khowai" },
        { name: "Kailashahar", cuisine: "Fish Curry", culture: "Rich in biodiversity.", location: "Kailashahar" },
        { name: "Jirania", cuisine: "Bamboo Rice", culture: "Rich in agriculture.", location: "Jirania" },
        { name: "Mohuripur", cuisine: "Chicken Curry", culture: "Known for culture.", location: "Mohuripur" },
        { name: "Teliamura", cuisine: "Masor Tenga", culture: "Known for lakes.", location: "Teliamura" },
      ],
      'Uttar Pradesh': [
        { name: "Agra", cuisine: "Petha", culture: "Home to the Taj Mahal.", location: "Agra" },
        { name: "Varanasi", cuisine: "Kachori", culture: "Spiritual capital of India.", location: "Varanasi" },
        { name: "Lucknow", cuisine: "Tunday Kababi", culture: "Known for Awadhi cuisine.", location: "Lucknow" },
        { name: "Kanpur", cuisine: "Biryani", culture: "Industrial hub.", location: "Kanpur" },
        { name: "Bareilly", cuisine: "Bajra Khichdi", culture: "Known for its rich heritage.", location: "Bareilly" },
        { name: "Agra", cuisine: "Dalmoth", culture: "Known for sweets.", location: "Agra" },
        { name: "Aligarh", cuisine: "Samosa", culture: "Known for locks.", location: "Aligarh" },
        { name: "Firozabad", cuisine: "Glass Bangles", culture: "Known for glass work.", location: "Firozabad" },
        { name: "Moradabad", cuisine: "Mutton Biryani", culture: "Known for brass work.", location: "Moradabad" },
        { name: "Ghaziabad", cuisine: "Chole Bhature", culture: "Urban area near Delhi.", location: "Ghaziabad" },
      ],
      'Uttarakhand': [
        { name: "Dehradun", cuisine: "Aloo Ke Gutke", culture: "Capital city with scenic beauty.", location: "Dehradun" },
        { name: "Mussoorie", cuisine: "Momos", culture: "Known as Queen of Hills.", location: "Mussoorie" },
        { name: "Rishikesh", cuisine: "Aloo Puri", culture: "Yoga capital of the world.", location: "Rishikesh" },
        { name: "Nainital", cuisine: "Bhatwani", culture: "Famous for its lake.", location: "Nainital" },
        { name: "Haridwar", cuisine: "Chole Bhature", culture: "Spiritual significance.", location: "Haridwar" },
        { name: "Almora", cuisine: "Kheer", culture: "Rich in culture.", location: "Almora" },
        { name: "Kausani", cuisine: "Gahat Ka Atta", culture: "Scenic hill station.", location: "Kausani" },
        { name: "Pithoragarh", cuisine: "Sidhi", culture: "Rich in culture.", location: "Pithoragarh" },
        { name: "Rudraprayag", cuisine: "Methi Paratha", culture: "Known for temples.", location: "Rudraprayag" },
        { name: "Tehri", cuisine: "Kachori", culture: "Known for its lake.", location: "Tehri" },
      ],
      'West Bengal': [
        { name: "Kolkata", cuisine: "Macher Jhol", culture: "Cultural capital of India.", location: "Kolkata" },
        { name: "Darjeeling", cuisine: "Tea", culture: "Known for its tea gardens.", location: "Darjeeling" },
        { name: "Siliguri", cuisine: "Momo", culture: "Gateway to North East India.", location: "Siliguri" },
        { name: "Durgapur", cuisine: "Pulao", culture: "Industrial city.", location: "Durgapur" },
        { name: "Asansol", cuisine: "Biryani", culture: "Known for coal mining.", location: "Asansol" },
        { name: "Malda", cuisine: "Kacha Mango", culture: "Known for mangoes.", location: "Malda" },
        { name: "Kalyani", cuisine: "Fish Curry", culture: "Known for its fishery.", location: "Kalyani" },
        { name: "Hooghly", cuisine: "Fish Curry", culture: "Rich in culture.", location: "Hooghly" },
        { name: "Bankura", cuisine: "Pitha", culture: "Known for rural culture.", location: "Bankura" },
        { name: "Birbhum", cuisine: "Sweets", culture: "Known for Santhal culture.", location: "Birbhum" },
      ],
   
    
  };
  




  function Famous() {
    const [selectedLocation, setSelectedLocation] = useState("");
    const [placeOptions, setPlaceOptions] = useState([]);
    const [expandedCard, setExpandedCard] = useState(null);
  
    const handleLocationChange = (event) => {
      const location = event.target.value;
      setSelectedLocation(location);
      setPlaceOptions(famousPlaces[location] || []);
      setExpandedCard(null); // Reset expanded card
    };
  
    const handleCardClick = (place) => {
      setExpandedCard(expandedCard === place ? null : place); // Toggle the expanded card
    };
  
    return (
      <div className="relative isolate px-6 pt-14 lg:px-8">
         <PageNav />
        <div className="mx-auto py-12 text-gray-200 sm:py-48 lg:py-12">
          <section className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-blue-600">
                Famous Places
              </h2>
  
              <div className="bg-pink-200 border border-gray-300 rounded-lg shadow-lg p-6">
                <label htmlFor="location" className="block text-black text-lg font-semibold mb-4">
                  Select Location:
                </label>
                <select
                  id="location"
                  value={selectedLocation}
                  onChange={handleLocationChange}
                  className="block w-full p-2 border border-gray-300 rounded text-black mb-4"
                >
                  <option value="">--Choose a location--</option>
                  {Object.keys(famousPlaces).map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
  
                {placeOptions.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {placeOptions.map((place) => (
                      <div
                        key={place.id}
                        onClick={() => handleCardClick(place)}
                        className={`relative perspective cursor-pointer transition-transform duration-300`}
                      >
                        <div className={`card ${expandedCard === place ? 'flip-card' : ''}`}>
                          <div className="front bg-gradient-to-r from-yellow-400 to-orange-400 text-black p-4 rounded border border-gray-300">
                            <h3 className={`font-bold text-lg ${expandedCard === place ? 'text-2xl' : 'text-lg'}`}>
                              {place.name}
                            </h3>
                          </div>
                          <div className="back bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 rounded border border-gray-300">
                            <h3 className="font-bold text-lg">{place.name}</h3>
                            <p>Cuisine: {place.cuisine}</p>
                            <p>Culture: {place.culture}</p>
                            <p>Location: {place.location}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
  
  export default Famous;







