import { useState } from "react"; 
import PageNav from "../components/PageNav"; 
const mockHotels = {
      'Andhra Pradesh': [
        { id: 101, name: 'Taj Banjara', address: 'Hyderabad, Andhra Pradesh' },
        { id: 102, name: 'The Park', address: 'Visakhapatnam, Andhra Pradesh' },
        { id: 103, name: 'Novotel', address: 'Vijayawada, Andhra Pradesh' },
        { id: 104, name: 'Fortune Murali Park', address: 'Vijayawada, Andhra Pradesh' },
        { id: 105, name: 'The Gateway Hotel', address: 'Visakhapatnam, Andhra Pradesh' },
        { id: 106, name: 'Lemon Tree Premier', address: 'Vijayawada, Andhra Pradesh' },
        { id: 107, name: 'Grand Kakinada', address: 'Kakinada, Andhra Pradesh' },
        { id: 108, name: 'Daspalla Hotel', address: 'Visakhapatnam, Andhra Pradesh' },
        { id: 109, name: 'Sree Vijaya Hotel', address: 'Guntur, Andhra Pradesh' },
        { id: 110, name: 'Hotel Bliss', address: 'Tirupati, Andhra Pradesh' },
      ],
      'Arunachal Pradesh': [
        { id: 111, name: 'Hotel Pybss', address: 'Itanagar, Arunachal Pradesh' },
        { id: 112, name: 'Arun Subansiri Hotel', address: 'Naharlagun, Arunachal Pradesh' },
        { id: 113, name: 'Donyi Polo Ashok', address: 'Itanagar, Arunachal Pradesh' },
        { id: 114, name: 'Hotel Ziro View', address: 'Ziro, Arunachal Pradesh' },
        { id: 115, name: 'Hotel Bomdila', address: 'Bomdila, Arunachal Pradesh' },
        { id: 116, name: 'Hotel Yangzom', address: 'Tawang, Arunachal Pradesh' },
        { id: 117, name: 'Hotel Aane', address: 'Pasighat, Arunachal Pradesh' },
        { id: 118, name: 'Hotel North Hill', address: 'Itanagar, Arunachal Pradesh' },
        { id: 119, name: 'Hotel Gypsy', address: 'Tawang, Arunachal Pradesh' },
        { id: 120, name: 'Hotel Kameng', address: 'Bhalukpong, Arunachal Pradesh' },
      ],
      'Assam': [
        { id: 121, name: 'Radisson Blu', address: 'Guwahati, Assam' },
        { id: 122, name: 'Vivanta', address: 'Guwahati, Assam' },
        { id: 123, name: 'Hotel Dynasty', address: 'Guwahati, Assam' },
        { id: 124, name: 'Brahmaputra Jungle Resort', address: 'Guwahati, Assam' },
        { id: 125, name: 'Hotel Lilawati Grand', address: 'Guwahati, Assam' },
        { id: 126, name: 'The Guwahati Address', address: 'Guwahati, Assam' },
        { id: 127, name: 'Landmark Hotel', address: 'Guwahati, Assam' },
        { id: 128, name: 'Hotel Gateway Grandeur', address: 'Guwahati, Assam' },
        { id: 129, name: 'Mayflower Hotel', address: 'Guwahati, Assam' },
        { id: 130, name: 'Hotel Rajmahal', address: 'Guwahati, Assam' },
      ],
      'Bihar': [
        { id: 131, name: 'Lemon Tree Premier', address: 'Patna, Bihar' },
        { id: 132, name: 'Hotel Maurya', address: 'Patna, Bihar' },
        { id: 133, name: 'Hotel Chanakya', address: 'Patna, Bihar' },
        { id: 134, name: 'The Panache Hotel', address: 'Patna, Bihar' },
        { id: 135, name: 'OYO Hotel Harisons Continental', address: 'Gaya, Bihar' },
        { id: 136, name: 'Hotel Galaxy Intercontinental', address: 'Bodhgaya, Bihar' },
        { id: 137, name: 'Hotel Patliputra Exotica', address: 'Patna, Bihar' },
        { id: 138, name: 'Hotel Samrat International', address: 'Patna, Bihar' },
        { id: 139, name: 'OYO Bodhgaya Regency', address: 'Bodhgaya, Bihar' },
        { id: 140, name: 'Hotel Republic', address: 'Muzaffarpur, Bihar' },
      ],
      'Chhattisgarh': [
        { id: 141, name: 'Courtyard by Marriott', address: 'Raipur, Chhattisgarh' },
        { id: 142, name: 'Hotel Babylon Inn', address: 'Raipur, Chhattisgarh' },
        { id: 143, name: 'Hyatt Raipur', address: 'Raipur, Chhattisgarh' },
        { id: 144, name: 'VW Canyon', address: 'Raipur, Chhattisgarh' },
        { id: 145, name: 'Hotel Aditya', address: 'Bilaspur, Chhattisgarh' },
        { id: 146, name: 'Hotel Shamrock Greens', address: 'Raipur, Chhattisgarh' },
        { id: 147, name: 'Hotel Grand International', address: 'Raipur, Chhattisgarh' },
        { id: 148, name: 'Hotel Simran Heritage', address: 'Raipur, Chhattisgarh' },
        { id: 149, name: 'Hotel Meera', address: 'Raipur, Chhattisgarh' },
        { id: 150, name: 'The Aman', address: 'Raipur, Chhattisgarh' },
      ],
      'Goa': [
        { id: 151, name: 'The Leela Goa', address: 'Cavelossim, Goa' },
        { id: 152, name: 'Taj Exotica', address: 'Benaulim, Goa' },
        { id: 153, name: 'Alila Diwa Goa', address: 'Majorda, Goa' },
        { id: 154, name: 'Goa Marriott Resort', address: 'Panaji, Goa' },
        { id: 155, name: 'The Lalit Golf & Spa Resort', address: 'Canacona, Goa' },
        { id: 156, name: 'Taj Fort Aguada Resort', address: 'Candolim, Goa' },
        { id: 157, name: 'ITC Grand Goa Resort', address: 'Arossim, Goa' },
        { id: 158, name: 'Radisson Blu Resort', address: 'Cavelossim, Goa' },
        { id: 159, name: 'W Goa', address: 'Vagator, Goa' },
        { id: 160, name: 'Sofitel Goa', address: 'Benaulim, Goa' },
      ],
      'Gujarat': [
        { id: 161, name: 'Taj Gateway Hotel', address: 'Ahmedabad, Gujarat' },
        { id: 162, name: 'ITC Narmada', address: 'Ahmedabad, Gujarat' },
        { id: 163, name: 'Radisson Blu', address: 'Ahmedabad, Gujarat' },
        { id: 164, name: 'Hyatt Regency', address: 'Ahmedabad, Gujarat' },
        { id: 165, name: 'Courtyard by Marriott', address: 'Ahmedabad, Gujarat' },
        { id: 166, name: 'Novotel', address: 'Ahmedabad, Gujarat' },
        { id: 167, name: 'The Leela', address: 'Bharuch, Gujarat' },
        { id: 168, name: 'Hotel Hilltop', address: 'Saputara, Gujarat' },
        { id: 169, name: 'Hotel Regenta', address: 'Rajkot, Gujarat' },
        { id: 170, name: 'Hotel Krishna Park', address: 'Surat, Gujarat' },
      ],
      'Haryana': [
        { id: 171, name: 'Taj Gateway Resort', address: 'Gurugram, Haryana' },
        { id: 172, name: 'Le Meridien', address: 'Gurugram, Haryana' },
        { id: 173, name: 'Radisson Gurugram', address: 'Gurugram, Haryana' },
        { id: 174, name: 'DoubleTree by Hilton', address: 'Gurugram, Haryana' },
        { id: 175, name: 'The Westin', address: 'Gurugram, Haryana' },
        { id: 176, name: 'Hyatt Regency', address: 'Gurugram, Haryana' },
        { id: 177, name: 'Park Plaza', address: 'Gurugram, Haryana' },
        { id: 178, name: 'Raddison Blu', address: 'Gurugram, Haryana' },
        { id: 179, name: 'The Oberoi', address: 'Gurugram, Haryana' },
        { id: 180, name: 'Hotel Hilltop', address: 'Manesar, Haryana' },
      ],
      'Himachal Pradesh': [
        { id: 181, name: 'Taj Theog Resort', address: 'Shimla, Himachal Pradesh' },
        { id: 182, name: 'Wildflower Hall', address: 'Mashobra, Himachal Pradesh' },
        { id: 183, name: 'The Oberoi Cecil', address: 'Shimla, Himachal Pradesh' },
        { id: 184, name: 'Radisson Hotel', address: 'Shimla, Himachal Pradesh' },
        { id: 185, name: 'Club Mahindra', address: 'Kufri, Himachal Pradesh' },
        { id: 186, name: 'Sukhmantra Resort', address: 'Manali, Himachal Pradesh' },
        { id: 187, name: 'Himalayan Resort', address: 'Manali, Himachal Pradesh' },
        { id: 188, name: 'The Himalayan', address: 'Manali, Himachal Pradesh' },
        { id: 189, name: 'Hotel Pine Grove', address: 'Shimla, Himachal Pradesh' },
        { id: 190, name: 'Hotel Hilltop', address: 'Kasauli, Himachal Pradesh' },
      ],
      'Jammu and Kashmir': [
        { id: 191, name: 'Khyber Himalayan Resort', address: 'Gulmarg, Jammu and Kashmir' },
        { id: 192, name: 'Hotel Hilltop', address: 'Gulmarg, Jammu and Kashmir' },
        { id: 193, name: 'Hotel Grand Mumtaz', address: 'Srinagar, Jammu and Kashmir' },
        { id: 194, name: 'Hotel Centaur', address: 'Srinagar, Jammu and Kashmir' },
        { id: 195, name: 'The Lalit Grand Palace', address: 'Srinagar, Jammu and Kashmir' },
        { id: 196, name: 'Hotel Hilltop', address: 'Pahalgam, Jammu and Kashmir' },
        { id: 197, name: 'The Grand Mamta', address: 'Srinagar, Jammu and Kashmir' },
        { id: 198, name: 'Hotel Akbar', address: 'Srinagar, Jammu and Kashmir' },
        { id: 199, name: 'Hotel Noor Mahal', address: 'Srinagar, Jammu and Kashmir' },
        { id: 200, name: 'Hotel Sonamarg', address: 'Sonamarg, Jammu and Kashmir' },
      ],
      'Jharkhand': [
        { id: 201, name: 'Radisson Blu', address: 'Ranchi, Jharkhand' },
        { id: 202, name: 'Hotel Le Lac', address: 'Ranchi, Jharkhand' },
        { id: 203, name: 'Capitol Hill', address: 'Ranchi, Jharkhand' },
        { id: 204, name: 'The Bison', address: 'Ranchi, Jharkhand' },
        { id: 205, name: 'The Radisson', address: 'Ranchi, Jharkhand' },
        { id: 206, name: 'Green Acres', address: 'Jamshedpur, Jharkhand' },
        { id: 207, name: 'Hotel Ashoka', address: 'Jamshedpur, Jharkhand' },
        { id: 208, name: 'Hotel Satyajit', address: 'Jamshedpur, Jharkhand' },
        { id: 209, name: 'Hotel Ruchita', address: 'Jamshedpur, Jharkhand' },
        { id: 210, name: 'Hotel Ganga', address: 'Dhanbad, Jharkhand' },
      ],
      'Karnataka': [
        { id: 211, name: 'Taj West End', address: 'Bengaluru, Karnataka' },
        { id: 212, name: 'ITC Gardenia', address: 'Bengaluru, Karnataka' },
        { id: 213, name: 'JW Marriott', address: 'Bengaluru, Karnataka' },
        { id: 214, name: 'The Leela Palace', address: 'Bengaluru, Karnataka' },
        { id: 215, name: 'Radisson Blu', address: 'Bengaluru, Karnataka' },
        { id: 216, name: 'The Chancery Pavilion', address: 'Bengaluru, Karnataka' },
        { id: 217, name: 'Royal Orchid Resort', address: 'Bengaluru, Karnataka' },
        { id: 218, name: 'Lemon Tree Premier', address: 'Bengaluru, Karnataka' },
        { id: 219, name: 'Holiday Inn', address: 'Bengaluru, Karnataka' },
        { id: 220, name: 'Mövenpick Hotel', address: 'Bengaluru, Karnataka' },
      ],
      'Kerala': [
        { id: 221, name: 'Taj Green Cove', address: 'Kumarakom, Kerala' },
        { id: 222, name: 'The Leela', address: 'Kovalam, Kerala' },
        { id: 223, name: 'Kumarakom Lake Resort', address: 'Kumarakom, Kerala' },
        { id: 224, name: 'Vivanta', address: 'Kochi, Kerala' },
        { id: 225, name: 'Radisson Blu', address: 'Kochi, Kerala' },
        { id: 226, name: 'Fort Kochi', address: 'Kochi, Kerala' },
        { id: 227, name: 'The Gateway Hotel', address: 'Kochi, Kerala' },
        { id: 228, name: 'Swan Tours', address: 'Kochi, Kerala' },
        { id: 229, name: 'Munnar Tea Country Resort', address: 'Munnar, Kerala' },
        { id: 230, name: 'Le Meridien', address: 'Kochi, Kerala' },
      ],
      'Madhya Pradesh': [
        { id: 231, name: 'Taj Lake Palace', address: 'Udaipur, Madhya Pradesh' },
        { id: 232, name: 'Radisson Jass', address: 'Khajuraho, Madhya Pradesh' },
        { id: 233, name: 'Madhubhan Resort', address: 'Gandhinagar, Madhya Pradesh' },
        { id: 234, name: 'Hotel Noor Us Sabah', address: 'Bhopal, Madhya Pradesh' },
        { id: 235, name: 'Hotel Lake View Ashok', address: 'Bhopal, Madhya Pradesh' },
        { id: 236, name: 'ITC Narmada', address: 'Indore, Madhya Pradesh' },
        { id: 237, name: 'Radisson Blu', address: 'Indore, Madhya Pradesh' },
        { id: 238, name: 'The Leela Palace', address: 'Udaipur, Madhya Pradesh' },
        { id: 239, name: 'Madhuban Resort', address: 'Madhya Pradesh' },
        { id: 240, name: 'Hotel Gulmohar', address: 'Gwalior, Madhya Pradesh' },
      ],
      'Maharashtra': [
        { id: 241, name: 'Taj Mahal Palace', address: 'Mumbai, Maharashtra' },
        { id: 242, name: 'The Oberoi', address: 'Mumbai, Maharashtra' },
        { id: 243, name: 'ITC Maratha', address: 'Mumbai, Maharashtra' },
        { id: 244, name: 'JW Marriott', address: 'Mumbai, Maharashtra' },
        { id: 245, name: 'Radisson Blu', address: 'Mumbai, Maharashtra' },
        { id: 246, name: 'Taj Lands End', address: 'Mumbai, Maharashtra' },
        { id: 247, name: 'The Leela', address: 'Mumbai, Maharashtra' },
        { id: 248, name: 'Four Seasons Hotel', address: 'Mumbai, Maharashtra' },
        { id: 249, name: 'The St. Regis', address: 'Mumbai, Maharashtra' },
        { id: 250, name: 'Trident, Nariman Point', address: 'Mumbai, Maharashtra' },
      ],
      'Manipur': [
        { id: 251, name: 'Classic Grande', address: 'Imphal, Manipur' },
        { id: 252, name: 'Hotel Imphal', address: 'Imphal, Manipur' },
        { id: 253, name: 'Hotel Yaiphaba', address: 'Imphal, Manipur' },
        { id: 254, name: 'Hotel Anand', address: 'Imphal, Manipur' },
        { id: 255, name: 'Hotel Nirmal', address: 'Imphal, Manipur' },
        { id: 256, name: 'Hotel Chingkhei', address: 'Imphal, Manipur' },
        { id: 257, name: 'Hotel City Palace', address: 'Imphal, Manipur' },
        { id: 258, name: 'Hotel Sangai Continental', address: 'Imphal, Manipur' },
        { id: 259, name: 'Hotel Royal', address: 'Imphal, Manipur' },
        { id: 260, name: 'Hotel Khongnang', address: 'Imphal, Manipur' },
      ],
      'Meghalaya': [
        { id: 261, name: 'Hotel Hilltop', address: 'Shillong, Meghalaya' },
        { id: 262, name: 'Ri Kynjai', address: 'Shillong, Meghalaya' },
        { id: 263, name: 'The Heritage Club', address: 'Shillong, Meghalaya' },
        { id: 264, name: 'Hotel Pine Crest', address: 'Shillong, Meghalaya' },
        { id: 265, name: 'Hotel Silver Oak', address: 'Shillong, Meghalaya' },
        { id: 266, name: 'Hotel Gateway', address: 'Shillong, Meghalaya' },
        { id: 267, name: 'Hotel Hill View', address: 'Shillong, Meghalaya' },
        { id: 268, name: 'Hotel Travellers Nest', address: 'Shillong, Meghalaya' },
        { id: 269, name: 'Hotel Chura', address: 'Shillong, Meghalaya' },
        { id: 270, name: 'Hotel Moksha', address: 'Shillong, Meghalaya' },
      ],
      'Mizoram': [
        { id: 271, name: 'Hotel Chhangte', address: 'Aizawl, Mizoram' },
        { id: 272, name: 'Hotel Kanan', address: 'Aizawl, Mizoram' },
        { id: 273, name: 'Hotel Tawng', address: 'Aizawl, Mizoram' },
        { id: 274, name: 'Hotel Zion', address: 'Aizawl, Mizoram' },
        { id: 275, name: 'Hotel Kawnpui', address: 'Aizawl, Mizoram' },
        { id: 276, name: 'Hotel Sihphir', address: 'Aizawl, Mizoram' },
        { id: 277, name: 'Hotel Vanglaini', address: 'Aizawl, Mizoram' },
        { id: 278, name: 'Hotel Kachai', address: 'Aizawl, Mizoram' },
        { id: 279, name: 'Hotel New Mizoram', address: 'Aizawl, Mizoram' },
        { id: 280, name: 'Hotel Huaihnah', address: 'Aizawl, Mizoram' },
      ],
      'Nagaland': [
        { id: 281, name: 'Hotel Saramati', address: 'Kohima, Nagaland' },
        { id: 282, name: 'Hotel Hilltop', address: 'Kohima, Nagaland' },
        { id: 283, name: 'Hotel Nagaland', address: 'Kohima, Nagaland' },
        { id: 284, name: 'Hotel Grand', address: 'Dimapur, Nagaland' },
        { id: 285, name: 'Hotel Rani', address: 'Dimapur, Nagaland' },
        { id: 286, name: 'Hotel Blue Ridge', address: 'Dimapur, Nagaland' },
        { id: 287, name: 'Hotel Shalom', address: 'Dimapur, Nagaland' },
        { id: 288, name: 'Hotel Doyang', address: 'Dimapur, Nagaland' },
        { id: 289, name: 'Hotel Heritage', address: 'Dimapur, Nagaland' },
        { id: 290, name: 'Hotel New Nagaland', address: 'Dimapur, Nagaland' },
      ],
      'Odisha': [
        { id: 291, name: 'Mayfair Lagoon', address: 'Bhubaneswar, Odisha' },
        { id: 292, name: 'Hotel Grand Central', address: 'Bhubaneswar, Odisha' },
        { id: 293, name: 'Hotel Swosti', address: 'Bhubaneswar, Odisha' },
        { id: 294, name: 'Hotel Crown', address: 'Bhubaneswar, Odisha' },
        { id: 295, name: 'Hotel Trident', address: 'Bhubaneswar, Odisha' },
        { id: 296, name: 'Hotel Swosti Premium', address: 'Puri, Odisha' },
        { id: 297, name: 'Hotel Golden Palace', address: 'Bhubaneswar, Odisha' },
        { id: 298, name: 'Hotel Sarathi', address: 'Puri, Odisha' },
        { id: 299, name: 'Hotel Sea Beach', address: 'Puri, Odisha' },
        { id: 300, name: 'Hotel Leela', address: 'Puri, Odisha' },
      ],
      'Puducherry': [
        { id: 301, name: 'The Promenade', address: 'Puducherry' },
        { id: 302, name: 'Hotel Atithi', address: 'Puducherry' },
        { id: 303, name: 'Hotel Le Royal', address: 'Puducherry' },
        { id: 304, name: 'Hotel De L\'Orient', address: 'Puducherry' },
        { id: 305, name: 'Hotel Kottam', address: 'Puducherry' },
        { id: 306, name: 'Hotel Anandha Inn', address: 'Puducherry' },
        { id: 307, name: 'Hotel Heritage', address: 'Puducherry' },
        { id: 308, name: 'Hotel Palais de Mahe', address: 'Puducherry' },
        { id: 309, name: 'Hotel Sea View', address: 'Puducherry' },
        { id: 310, name: 'Hotel Neelam', address: 'Puducherry' },
      ],
      'Punjab': [
        { id: 311, name: 'Taj Swarna', address: 'Amritsar, Punjab' },
        { id: 312, name: 'Radisson Blu', address: 'Amritsar, Punjab' },
        { id: 313, name: 'Hyatt Regency', address: 'Chandigarh, Punjab' },
        { id: 314, name: 'JW Marriott', address: 'Chandigarh, Punjab' },
        { id: 315, name: 'Hotel Golden Tulip', address: 'Ludhiana, Punjab' },
        { id: 316, name: 'Hotel Park Plaza', address: 'Jalandhar, Punjab' },
        { id: 317, name: 'Hotel Ramada', address: 'Ludhiana, Punjab' },
        { id: 318, name: 'Hotel Mountview', address: 'Chandigarh, Punjab' },
        { id: 319, name: 'Hotel Maharaja', address: 'Amritsar, Punjab' },
        { id: 320, name: 'Hotel Indus', address: 'Amritsar, Punjab' },
      ],
      'Rajasthan': [
        { id: 321, name: 'Rambagh Palace', address: 'Jaipur, Rajasthan' },
        { id: 322, name: 'The Oberoi Udaivilas', address: 'Udaipur, Rajasthan' },
        { id: 323, name: 'Taj Lake Palace', address: 'Udaipur, Rajasthan' },
        { id: 324, name: 'ITC Rajputana', address: 'Jaipur, Rajasthan' },
        { id: 325, name: 'The Leela Palace', address: 'Udaipur, Rajasthan' },
        { id: 326, name: 'JW Marriott', address: 'Jaipur, Rajasthan' },
        { id: 327, name: 'Hilton', address: 'Jaipur, Rajasthan' },
        { id: 328, name: 'The Lalit', address: 'Jaipur, Rajasthan' },
        { id: 329, name: 'Radisson Blu', address: 'Jaipur, Rajasthan' },
        { id: 330, name: 'Fairmont', address: 'Jaipur, Rajasthan' },
      ],
      'Sikkim': [
        { id: 331, name: 'The Elgin', address: 'Gangtok, Sikkim' },
        { id: 332, name: 'Hotel Royal Denzong', address: 'Gangtok, Sikkim' },
        { id: 333, name: 'Hotel Tashi Delek', address: 'Gangtok, Sikkim' },
        { id: 334, name: 'Hotel Golden Pagoda', address: 'Gangtok, Sikkim' },
        { id: 335, name: 'The Himalayan', address: 'Gangtok, Sikkim' },
        { id: 336, name: 'Hotel Mayfair', address: 'Gangtok, Sikkim' },
        { id: 337, name: 'Hotel Hilltop', address: 'Gangtok, Sikkim' },
        { id: 338, name: 'Hotel Summit', address: 'Gangtok, Sikkim' },
        { id: 339, name: 'Hotel White Palace', address: 'Gangtok, Sikkim' },
        { id: 340, name: 'Hotel Denzong Regency', address: 'Gangtok, Sikkim' },
      ],
      'Tamil Nadu': [
        { id: 341, name: 'The Leela Palace', address: 'Chennai, Tamil Nadu' },
        { id: 342, name: 'Taj Connemara', address: 'Chennai, Tamil Nadu' },
        { id: 343, name: 'ITC Grand Chola', address: 'Chennai, Tamil Nadu' },
        { id: 344, name: 'Radisson Blu', address: 'Chennai, Tamil Nadu' },
        { id: 345, name: 'JW Marriott', address: 'Chennai, Tamil Nadu' },
        { id: 346, name: 'The Park', address: 'Chennai, Tamil Nadu' },
        { id: 347, name: 'The Raintree', address: 'Chennai, Tamil Nadu' },
        { id: 348, name: 'Taj Fisherman\'s Cove', address: 'Chennai, Tamil Nadu' },
        { id: 349, name: 'Hyatt Regency', address: 'Chennai, Tamil Nadu' },
        { id: 350, name: 'Sheraton Grand', address: 'Chennai, Tamil Nadu' },
      ],
      'Telangana': [
        { id: 351, name: 'Taj Deccan', address: 'Hyderabad, Telangana' },
        { id: 352, name: 'The Westin', address: 'Hyderabad, Telangana' },
        { id: 353, name: 'Radisson Blu', address: 'Hyderabad, Telangana' },
        { id: 354, name: 'JW Marriott', address: 'Hyderabad, Telangana' },
        { id: 355, name: 'Hyatt', address: 'Hyderabad, Telangana' },
        { id: 356, name: 'Sheraton', address: 'Hyderabad, Telangana' },
        { id: 357, name: 'Marriott', address: 'Hyderabad, Telangana' },
        { id: 358, name: 'ITC Kohenur', address: 'Hyderabad, Telangana' },
        { id: 359, name: 'Fairfield by Marriott', address: 'Hyderabad, Telangana' },
        { id: 360, name: 'Novotel', address: 'Hyderabad, Telangana' },
      ],
      'Tripura': [
        { id: 361, name: 'Hotel Agartala', address: 'Agartala, Tripura' },
        { id: 362, name: 'Hotel Niharika', address: 'Agartala, Tripura' },
        { id: 363, name: 'Hotel Nivedita', address: 'Agartala, Tripura' },
        { id: 364, name: 'Hotel Ankur', address: 'Agartala, Tripura' },
        { id: 365, name: 'Hotel Ambrosia', address: 'Agartala, Tripura' },
        { id: 366, name: 'Hotel City Center', address: 'Agartala, Tripura' },
        { id: 367, name: 'Hotel Bhanulal', address: 'Agartala, Tripura' },
        { id: 368, name: 'Hotel Rose Valley', address: 'Agartala, Tripura' },
        { id: 369, name: 'Hotel Royal', address: 'Agartala, Tripura' },
        { id: 370, name: 'Hotel Silver Crown', address: 'Agartala, Tripura' },
      ],
      'Uttar Pradesh': [
        { id: 371, name: 'Taj Mahal Hotel', address: 'Agra, Uttar Pradesh' },
        { id: 372, name: 'JW Marriott', address: 'Agra, Uttar Pradesh' },
        { id: 373, name: 'ITC Mughal', address: 'Agra, Uttar Pradesh' },
        { id: 374, name: 'Radisson Hotel', address: 'Agra, Uttar Pradesh' },
        { id: 375, name: 'Holiday Inn', address: 'Agra, Uttar Pradesh' },
        { id: 376, name: 'The Oberoi', address: 'Agra, Uttar Pradesh' },
        { id: 377, name: 'Hotel Samrat', address: 'Delhi, Uttar Pradesh' },
        { id: 378, name: 'Hotel Clarks Shiraz', address: 'Agra, Uttar Pradesh' },
        { id: 379, name: 'Hotel Karan Vilas', address: 'Agra, Uttar Pradesh' },
        { id: 380, name: 'Hotel Pushp Villa', address: 'Agra, Uttar Pradesh' },
      ],
      'Uttarakhand': [
        { id: 381, name: 'Aloha on the Ganges', address: 'Rishikesh, Uttarakhand' },
        { id: 382, name: 'Ananda in the Himalayas', address: 'Narendra Nagar, Uttarakhand' },
        { id: 383, name: 'The Naini Retreat', address: 'Nainital, Uttarakhand' },
        { id: 384, name: 'The Himalayan', address: 'Auli, Uttarakhand' },
        { id: 385, name: 'Hotel Savoy', address: 'Mussoorie, Uttarakhand' },
        { id: 386, name: 'Hotel Taj Rishikesh Resort & Spa', address: 'Rishikesh, Uttarakhand' },
        { id: 387, name: 'JW Marriott', address: 'Mussoorie, Uttarakhand' },
        { id: 388, name: 'The Palace Belvedere', address: 'Nainital, Uttarakhand' },
        { id: 389, name: 'The Savoy', address: 'Mussoorie, Uttarakhand' },
        { id: 390, name: 'Taj Corbett Resort & Spa', address: 'Jim Corbett, Uttarakhand' },
      ],
      'West Bengal': [
        { id: 391, name: 'The Oberoi Grand', address: 'Kolkata, West Bengal' },
        { id: 392, name: 'ITC Sonar', address: 'Kolkata, West Bengal' },
        { id: 393, name: 'Taj Bengal', address: 'Kolkata, West Bengal' },
        { id: 394, name: 'JW Marriott', address: 'Kolkata, West Bengal' },
        { id: 395, name: 'Radisson Blu', address: 'Kolkata, West Bengal' },
        { id: 396, name: 'The Park', address: 'Kolkata, West Bengal' },
        { id: 397, name: 'Hyatt Regency', address: 'Kolkata, West Bengal' },
        { id: 398, name: 'The Taj Gateway Hotel', address: 'Kolkata, West Bengal' },
        { id: 399, name: 'The Lalit Great Eastern', address: 'Kolkata, West Bengal' },
        { id: 400, name: 'Novotel', address: 'Kolkata, West Bengal' },
      ],
   
    
};
function BookingPage() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [hotelOptions, setHotelOptions] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [numGuests, setNumGuests] = useState(1);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleLocationChange = (event) => {
    const location = event.target.value;
    setSelectedLocation(location);
    setHotelOptions(mockHotels[location] || []);
    setCheckInDate("");
    setCheckOutDate("");
    setNumGuests(1);
  };

  const handleHotelChange = (event) => {
    const hotel = hotelOptions.find((hotel) => hotel.name === event.target.value);
    setSelectedHotel(hotel);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedHotel || !checkInDate || !checkOutDate) {
      alert("Please fill all the fields!");
      return;
    }

    const bookingDetails = {
      id: Date.now(),
      location: selectedLocation,
      hotel: selectedHotel.name,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      guests: numGuests,
    };

    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    localStorage.setItem("bookings", JSON.stringify([...existingBookings, bookingDetails]));

    setBookingDetails(bookingDetails);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <PageNav />
      <div className="mx-auto py-12 text-gray-200 sm:py-48 lg:py-12">
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-blue-600">
              Booking System
            </h2>

            <div className="bg-pink-200 border border-gray-300 rounded-lg shadow-lg p-6"> {/* Pink background */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="location" className="block text-black text-lg font-semibold">
                    Select Location:
                  </label>
                  <select
                    id="location"
                    value={selectedLocation}
                    onChange={handleLocationChange}
                    className="block w-full p-2 border border-gray-300 rounded text-black"
                  >
                    <option value="">--Choose a location--</option>
                    {Object.keys(mockHotels).map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>

                {hotelOptions.length > 0 && (
                  <div>
                    <label htmlFor="hotel" className="block text-black text-lg font-semibold">
                      Select Hotel:
                    </label>
                    <select
                      id="hotel"
                      onChange={handleHotelChange}
                      className="block w-full p-2 border border-gray-300 rounded text-black"
                    >
                      {hotelOptions.map((hotel, index) => (
                        <option key={index} value={hotel.name}>
                          {hotel.name} - {hotel.address}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <label htmlFor="checkin" className="block text-black text-lg font-semibold">
                    Check-In Date:
                  </label>
                  <input
                    type="date"
                    id="checkin"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="block w-full p-2 border border-gray-300 rounded text-black"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="checkout" className="block text-black text-lg font-semibold">
                    Check-Out Date:
                  </label>
                  <input
                    type="date"
                    id="checkout"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="block w-full p-2 border border-gray-300 rounded text-black"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="guests" className="block text-black text-lg font-semibold">
                    Number of Guests:
                  </label>
                  <input
                    type="number"
                    id="guests"
                    value={numGuests}
                    onChange={(e) => setNumGuests(Math.max(1, e.target.value))}
                    className="block w-full p-2 border border-gray-300 rounded text-black"
                    min="1"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Popup for booking confirmation */}
        {isPopupOpen && bookingDetails && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-pink-200 border border-gray-300 rounded-lg shadow-lg p-6"> {/* Pink background */}
              <h2 className="text-xl font-bold text-black">Booking Confirmation</h2>
              <p className="text-black">Location: {bookingDetails.location}</p>
              <p className="text-black">Hotel: {bookingDetails.hotel}</p>
              <p className="text-black">Check-In: {bookingDetails.checkIn}</p>
              <p className="text-black">Check-Out: {bookingDetails.checkOut}</p>
              <p className="text-black">Guests: {bookingDetails.guests}</p>
              <div className="mt-4">
                <button
                  onClick={closePopup}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingPage;