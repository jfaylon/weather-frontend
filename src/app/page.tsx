"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { SelectChangeEvent } from "@mui/material/Select";
import CssBaseline from "@mui/material/CssBaseline";

const lightTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

import { Moment } from "moment";
import moment from "moment";
import { TrafficDisplay } from "@/components/TrafficDisplay";
import { WeatherDisplay } from "@/components/WeatherDisplay";
import { LocationSelect } from "@/components/LocationSelect";
import { DateTimePicker } from "@/components/DateTimePicker";
import { LocationData } from "../interfaces/LocationData";
import { WeatherData } from "@/interfaces/WeatherData";

const dateTimeFormat = "YYYY-MM-DDTHH:mm:ss";

export default function Home() {
  const [dateTime, setDateTime] = useState<Moment | null>(moment());
  const [locationData, setLocationData] = useState<LocationData[] | null>(null);
  const [location, setLocation] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [trafficTimestamp, setTrafficTimestamp] = useState<string | null>(null);

  const handleDateTimeChange = (date: Moment | null) => {
    if (date) {
      setDateTime(date);
    }
  };

  const handleDateTimeClose = async () => {
    if (dateTime) {
      const formattedDateTime = dateTime?.format(dateTimeFormat);
      try {
        const data = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/locations?dateTime=${formattedDateTime}`
        );
        setLocationData(data.data.data);
      } catch (error) {
        setLocationData(null);
      }
    }
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value);
  };

  useEffect(() => {
    const formattedDateTime = moment()?.format(dateTimeFormat);
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/locations?dateTime=${formattedDateTime}`
      )
      .then((response) => {
        setLocationData(response.data.data);
      })
      .catch((error) => {
        setLocationData(null);
      });
  }, []);

  useEffect(() => {
    if (location && locationData) {
      const locationInformation = locationData?.find(
        (loc) => loc.cameraLocation === location
      );
      if (locationInformation) {
        setImage(locationInformation.image);
        setTrafficTimestamp(locationInformation.timestamp);
      }
    }
  }, [location, locationData]);

  useEffect(() => {
    if (location && dateTime) {
      const formattedDateTime = dateTime?.format(dateTimeFormat);
      const locationInformation = locationData?.find(
        (loc) => loc.cameraLocation === location
      );
      if (locationInformation) {
        axios
          .get(
            `${process.env.NEXT_PUBLIC_API_URL}/weather?location=${locationInformation.nearest.name}&dateTime=${formattedDateTime}`
          )
          .then((response) => {
            setWeather(response.data);
          });
      }
    }
  }, [location, dateTime, locationData]);

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <main className="flex min-h-screen flex-col justify-evenly items-center p-24">
          <p className="text-lg">SG Traffic and Weather</p>
          <DateTimePicker
            dateTime={dateTime}
            handleDateTimeChange={handleDateTimeChange}
            handleDateTimeClose={handleDateTimeClose}
          />
          <LocationSelect
            locationData={locationData}
            handleSelectChange={handleSelectChange}
          />
          <TrafficDisplay
            timestamp={trafficTimestamp}
            image={image}
            location={location}
          />
          <WeatherDisplay weather={weather} />
        </main>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
