import React, { useEffect } from "react";
function Weathercard({ tempInfo }) {
  const [weatherState, setWeatheState] = React.useState("");

  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset
  } = tempInfo;
  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatheState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatheState("wi-fog");
          break;
        case "Clear":
          setWeatheState("wi-day-sunny");
          break;
        case "Mist":
          setWeatheState("wi-dust");
          break;

        default:
          setWeatheState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timestr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <div className="wrap">
        <article className="artical">
          <div className="maindiv">
            <div className="subdiv">
              <div className="wether">
                <i className={`wi ${weatherState}`}></i>
              </div>
              <div className="wetherInfo">
                <div className="temp">
                  <span>{temp}&deg</span>
                </div>
                <div className="desc">
                  <div className="wethercond">{weathermood}</div>
                  <div className="place">
                    {name}, {country}
                  </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>
              </div>
              <div className="extra-temp">
                <div className="temp-info-minmax">
                  <div className="two-sided-section">
                    <p>
                      <i className={"wi wi-sunset"}></i>
                    </p>
                    <p className="extra-info-leftside">
                      {timestr} PM <br />
                      sunset
                    </p>
                  </div>

                  <div className="two-sided-section">
                    <p>
                      <i className={"wi wi-humidity"}></i>
                    </p>
                    <p className="extra-info-leftside">
                      {humidity} <br />
                      Humidity
                    </p>
                  </div>
                </div>

                <div className="weather-extra-info">
                  <div className="two-sided-section">
                    <p>
                      <i className={"wi wi-rain"}></i>
                    </p>
                    <p className="extra-info-leftside">
                      {pressure} <br />
                      Pressure
                    </p>
                  </div>

                  <div className="two-sided-section">
                    <p>
                      <i className={"wi wi-strong-wind"}></i>
                    </p>
                    <p className="extra-info-leftside">
                      {speed} <br />
                      Speed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
export default Weathercard;
