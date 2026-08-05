<<<<<<< HEAD

# college-campus-navigation
A smart campus navigation platform for students and visitors using geolocation, interactive maps, and real-time routing.

# 🎓 College Navigator

A **real-time college campus navigation web application** that helps students, faculty, and visitors easily navigate large campus environments using live location tracking and interactive maps.

---

## 📌 Project Overview

Navigating a large college campus can be challenging, especially for newcomers. **College Navigator** provides an intuitive, real-time navigation solution that allows users to locate departments, hostels, libraries, and other important facilities with ease.

The system integrates **real-time geolocation**, **interactive maps**, and **route optimization** to deliver accurate directions, distance, and estimated time of arrival (ETA).

---

## 🚀 Features

- 🗺️ Interactive campus maps using OpenStreetMap  
- 📍 Real-time user location tracking  
- 🧭 Optimized walking route generation  
- ⏱️ Distance and ETA calculation  
- 🏫 Predefined campus locations  
- 📱 Responsive design (desktop & mobile)  
- ♿ Accessibility-focused navigation  
- 🌐 Offline static map support  

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---------|--------|
| React.js | Frontend UI development |
| Leaflet.js | Interactive map rendering |
| OpenStreetMap | Map tile provider |
| OpenRouteService API | Route calculation & distance |
| HTML5 Geolocation API | Live location tracking |
| React Router DOM | Client-side routing |

---

## 📂 Project Structure

college-navigator/
│
├── public/
│ ├── static_maps/
│ ├── college_building.png
│ └── college_logo.png
│
├── src/
│ ├── components/
│ │ ├── MainPage.js
│ │ ├── SelectDepartment.js
│ │ ├── MapView.js
│ │ └── StaticMap.js
│ ├── styles/
│ │ └── styles.css
│ ├── App.js
│ └── index.js
│
└── README.md

---

## ⚙️ How It Works

1. User opens the application
2. Selects a department or location
3. System fetches the user's real-time location
4. Route is calculated using OpenRouteService API
5. Map displays:
   - Current location
   - Destination marker
   - Optimal walking route
   - Distance and ETA

---

## 🖥️ Installation & Setup

### Prerequisites
- Node.js (v16 or above)
- npm or yarn
- Internet connection (for live routing)

### Steps

```bash
# Clone the repository
git clone https://github.com/your-username/college-navigator.git

# Navigate to project directory
cd college-navigator

# Install dependencies
npm install

# Start the development server
npm start

Open your browser and visit:
👉 http://localhost:3000

🔐 API Configuration

This project uses OpenRouteService API for navigation.

Create an account at OpenRouteService

Generate an API key

Replace the API key in MapView.js

const ors = new OpenRouteService.Directions({
  api_key: "YOUR_API_KEY"
});

✅ Advantages

Simplifies campus navigation

Real-time updates and routing

Cost-effective using open-source tools

Cross-platform compatibility

Inclusive and accessibility-focused

Easily scalable for larger campuses

⚠️ Limitations

GPS accuracy may reduce indoors

Requires internet for real-time routing

Dependent on device location permissions

🔮 Future Enhancements

Indoor navigation using Wi-Fi / Bluetooth beacons

Full offline navigation support

Augmented Reality (AR) navigation

Voice-guided directions

Multi-campus support

👨‍🎓 Project done by :

Mr.Sarthak Chopde

👨‍🏫 Project Guide

Prof. S. G. Shikalpure
Department of Computer Science & Engineering
Government College of Engineering, Chhatrapati Sambhajinagar

📜 License

This project is developed for academic purposes.
You are free to modify and extend it with proper attribution.

>>>>>>> e62ea243a1743f35b923c4624096e8b294648465
