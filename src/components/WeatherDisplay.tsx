import React from "react";
import { WeatherData } from "@/interfaces/WeatherData";
import {
  AREA_FIELD,
  DATE_FIELD,
  STATUS_FIELD,
  TIME_FIELD,
  WEATHER_NOT_FOUND,
  WEATHER_TITLE,
} from "@/app/constants";

export const WeatherDisplay: React.FC<{ weather: WeatherData | null }> = ({
  weather,
}) => {
  return (
    <>
      {weather &&
      weather.locationDateTimeWeatherDetails &&
      Object.keys(weather.locationDateTimeWeatherDetails).length ? (
        <div className="flex flex-col items-center">
          <p className="text-xl">{WEATHER_TITLE}</p>
          <p>
            <span className="font-bold">{AREA_FIELD}</span>{" "}
            {`${weather.locationDateTimeWeatherDetails.area}`}
          </p>
          <p>
            <span className="font-bold">{STATUS_FIELD}</span>{" "}
            {`${weather.locationDateTimeWeatherDetails.forecast}`}
          </p>
          <p>
            <span className="font-bold">{DATE_FIELD}</span>{" "}
            {` ${
              weather.locationDateTimeWeatherDetails.timestamp.split("T")[0]
            }`}
          </p>
          <p>
            <span className="font-bold">{TIME_FIELD}</span>{" "}
            {`${
              weather.locationDateTimeWeatherDetails.timestamp.split("T")[1]
            }`}
          </p>
        </div>
      ) : !weather ? (
        ""
      ) : (
        <p>{WEATHER_NOT_FOUND}</p>
      )}
    </>
  );
};
