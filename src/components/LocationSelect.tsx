import React from "react";
import { MenuItem, FormControl, InputLabel } from "@mui/material";
import { LocationData } from "@/interfaces/LocationData";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface LocationSelectProps {
  locationData: LocationData[] | null;
  handleSelectChange: (event: SelectChangeEvent) => void;
  isLoading: boolean;
}

export const LocationSelect: React.FC<LocationSelectProps> = ({
  locationData,
  isLoading,
  handleSelectChange,
}) => {
  return (
    <div className="flex flex-col items-center">
      <FormControl sx={{ m: 1, minWidth: 300, maxWidth: 400 }}>
        <InputLabel id="select-location">
          {`Location ${isLoading ? "Loading..." : ""}`}
        </InputLabel>
        <Select
          labelId="select-location"
          defaultValue=""
          label="Location"
          onChange={handleSelectChange}
          renderValue={(value) =>
            value.slice(0, 30) + (value.length > 30 ? "..." : "")
          }
          disabled={isLoading}
        >
          {locationData ? (
            locationData?.map((data) => {
              const name = data.cameraLocation || data.formatted;
              return (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              );
            })
          ) : (
            <MenuItem disabled>No Location Found</MenuItem>
          )}
        </Select>
      </FormControl>
    </div>
  );
};
