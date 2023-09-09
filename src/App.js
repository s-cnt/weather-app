// import React from "react";
// import Search from "./components/search/serch";
// import CurrentWeather from "./components/search/current-weather/current-weather";
// import Forecast from "./components/forecast/forecast";
// import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
// import { useState } from 'react';
// import "./App.css";

// function App() {

//   const [currentWeather, setCurrentWeather] = useState(null);
//   const [forecast, setForecast] = useState(null);

//   const handleOnSearchChange = (searchData) => {
//     const [lat, lon] = searchData.value.split(" ");
//     const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
//     const forecastFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

//     Promise.all([currentWeatherFetch, forecastFetch])
//       .then(async (response) => {
//         const weatherResponse = await response[0].json();
//         const forecastResponse = await response[1].json();
//         setCurrentWeather({ city: searchData.label, ...weatherResponse });
//         setForecast({ city: searchData.label, ...forecastResponse });

//       })
//     // .catch(console.log)
//   }

//   console.log(currentWeather)
//   console.log(forecast)
//   return (
//     <div className="container">

//       <Search onSearchChange={handleOnSearchChange} />

//       {currentWeather && <CurrentWeather data={currentWeather} />}

//       {forecast && <Forecast data={forecast} />}

//     </div>

//   );
// };

// export default App;

//////////////////////////////////////////////////////////////////////////////////////////////////


// import { useState } from "react";
// import Search from "./components/search/search";
// import CurrentWeather from "./components/search/current-weather/current-weather";
// import Forecast from "./components/forecast/forecast";
// import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
// import "./App.css";

// function App() {
//   const [currentWeather, setCurrentWeather] = useState(null);
//   const [forecast, setForecast] = useState(null);



//   const handleOnSearchChange = (searchData) => {
//     const [lat, lon] = searchData.value.split(" ");

//     const currentWeatherFetch = fetch(
//       `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
//     );
//     const forecastFetch = fetch(
//       `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
//     );

//     Promise.all([currentWeatherFetch, forecastFetch])
//       .then(async (response) => {
//         const weatherResponse = await response[0].json();
//         const forcastResponse = await response[1].json();

//         setCurrentWeather({ city: searchData.label, ...weatherResponse });
//         setForecast({ city: searchData.label, ...forcastResponse });
//       })
//       .catch(console.log);
//   };

//   return (
//     <div className="container">
//       <Search onSearchChange={handleOnSearchChange} />
//       {currentWeather && <CurrentWeather data={currentWeather} />}
//       {forecast && <Forecast data={forecast} />}
//     </div>
//   );
// }

// export default App;

///////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import Search from "./components/search/search";
// import CurrentWeather from "./components/search/current-weather/current-weather";
// import Forecast from "./components/forecast/forecast";
// import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
// import "./App.css";

// function App() {
//   const [currentWeather, setCurrentWeather] = useState(null);
//   const [forecast, setForecast] = useState(null);

//   useEffect(() => {
//     // Get current GPS location
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           fetchWeatherData(latitude, longitude);
//         },
//         (error) => {
//           console.log(error);
//         }
//       );
//     } else {
//       console.log("Geolocation is not supported by this browser.");
//     }
//   }, []);

//   const fetchWeatherData = (latitude, longitude) => {
//     const currentWeatherFetch = fetch(
//       `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
//     );
//     const forecastFetch = fetch(
//       `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
//     );

//     Promise.all([currentWeatherFetch, forecastFetch])
//       .then(async (response) => {
//         const weatherResponse = await response[0].json();
//         const forecastResponse = await response[1].json();

//         setCurrentWeather({ city: weatherResponse.name, ...weatherResponse });
//         setForecast({ city: weatherResponse.name, ...forecastResponse });
//       })
//       .catch(console.log);
//   };

//   const handleOnSearchChange = (searchData) => {
//     const [lat, lon] = searchData.value.split(" ");
//     fetchWeatherData(lat, lon);
//   };

//   return (
//     <div className="container">
//       <Search onSearchChange={handleOnSearchChange} />
//       {currentWeather && <CurrentWeather data={currentWeather} />}
//       {forecast && <Forecast data={forecast} />}
//     </div>
//   );
// }

// export default App;


import { useState, useEffect } from "react";
import Search from "./components/search/search";
import CurrentWeather from "./components/search/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import "./App.css";
import { toBeEnabled } from "@testing-library/jest-dom/matchers";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [backgroundClass, setBackgroundClass] = useState("");


  useEffect(() => {
    // Get current GPS location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherData(latitude, longitude);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  const fetchWeatherData = (latitude, longitude) => {
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: weatherResponse.name, ...weatherResponse });
        setForecast({ city: weatherResponse.name, ...forecastResponse });

        // Check for temperature increase
        const currentTemperature = weatherResponse.main.temp;
        const previousTemperature = currentWeather?.main.temp;

        if (previousTemperature && currentTemperature > previousTemperature) {
          playNotificationSound();
          showNotification("Temperature is increasing!");
        }

        // Check for high temperature warning
        const warningTemperature = 40;

        if (currentTemperature >= warningTemperature) {

          if (document.visibilityState === "visible") {
            playNotificationSound();
            showNotification("High temperature warning!");
          } else {

            const visibilityChangeListener = () => {
              if (document.visibilityState === "visible") {
                playNotificationSound();
                showNotification("High temperature warning!");
                document.removeEventListener(
                  "visibilitychange",
                  visibilityChangeListener
                );
              }
            };
            document.addEventListener(
              "visibilitychange",
              visibilityChangeListener
            );
          }
        }

        // Check for wind speed increase
        const currentWindSpeed = weatherResponse.wind.speed;
        const previousWindSpeed = currentWeather?.wind.speed;

        if (previousWindSpeed && currentWindSpeed > previousWindSpeed) {
          playNotificationSound();
          showNotification("Wind speed is increasing!");
        }

        // Check for rain
        const rain = weatherResponse.weather.find(
          (condition) => condition.main === "Rain"
        );

        if (rain) {
          playNotificationSound();
          showNotification("It's raining!");
        }
      })
      .catch(console.log);
  };

  const playNotificationSound = () => {
    const audio = new Audio("./Notification.mp3");
    audio.play().catch((error) => {
      console.log("Failed to play notification sound:", error);
    });
  };

  const showNotification = (message) => {
    if (Notification.permission === "granted") {
      console.log("Permission granted. Showing notification:", message);
      new Notification(message);
    } else if (Notification.permission !== "denied") {
      console.log("Permission not granted. Requesting permission...");
      Notification.requestPermission().then((permission) => {
        console.log("Notification permission:", permission);
        if (permission === "granted") {
          console.log("Permission granted. Showing notification:", message);
          new Notification(message);
        }
      });
    }
  };


  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    fetchWeatherData(lat, lon);
  };

  // pentov iv pulse
  // anafortsn ampule muscles
  // unizyme tablet / aristozyme syrup
  //   -----
  //     dynapar ampule


  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
