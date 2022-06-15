import "./styles.css";
import React, { useEffect, useState } from "react";
import Weathercard from "./Weathercard";
export default function App() {
  const [searchval, setsearchval] = useState("pune");
  const [tempInfo, setTempInfo] = useState({});
  async function getwetherinfo() {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchval}&units=metric&appid=7a58f753ae8e13d5b3e5c2b0143e1dbe`;

      let res = await fetch(url);
      let data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset
      };

      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getwetherinfo();
  }, []);
  return (
    <>
      <div className="title">
        <h2> Weather App</h2>
      </div>
      <div className="searchdiv">
        <div className="search">
          <input
            type="text"
            placeholder="Search here.."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchval}
            onChange={function accessval(event) {
              setsearchval(event.target.value);
            }}
          />
          <button
            className="searchButton"
            type="button"
            onClick={getwetherinfo}
          >
            search
          </button>
        </div>
      </div>
      <Weathercard tempInfo={tempInfo} />
    </>
  );
}
