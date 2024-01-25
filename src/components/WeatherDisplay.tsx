import React from "react";
import { WeatherData } from "@/interfaces/WeatherData";

export const WeatherDisplay: React.FC<{ weather: WeatherData | null }> = ({
  weather,
}) => {
  return (
    <>
      {weather &&
      weather.locationDateTimeWeatherDetails &&
      Object.keys(weather.locationDateTimeWeatherDetails).length ? (
        <div className="flex flex-col items-center">
          <p className="text-xl">Weather</p>
          <p>
            <span className="font-bold">Area:</span>{" "}
            {`${weather.locationDateTimeWeatherDetails.area}`}
          </p>
          <p>
            <span className="font-bold">Forecast:</span>{" "}
            {`${weather.locationDateTimeWeatherDetails.forecast}`}
          </p>
          <p>
            <span className="font-bold">Date:</span>{" "}
            {` ${
              weather.locationDateTimeWeatherDetails.timestamp.split("T")[0]
            }`}
          </p>
          <p>
            <span className="font-bold">Time:</span>{" "}
            {`${
              weather.locationDateTimeWeatherDetails.timestamp.split("T")[1]
            }`}
          </p>
        </div>
      ) : !weather ? (
        ""
      ) : (
        <p>Weather Information Not Found</p>
      )}
    </>
  );
};
