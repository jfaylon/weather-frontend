import React from "react";
import moment, { Moment } from "moment";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";

interface DateTimePickerProps {
  dateTime: Moment | null;
  handleDateTimeChange: (date: Moment | null) => void;
  handleDateTimeClose: () => void;
}

export const DateTimePicker: React.FC<DateTimePickerProps> = ({
  dateTime,
  handleDateTimeChange,
  handleDateTimeClose,
}) => {
  return (
    <MobileDateTimePicker
      label="Select Date and Time"
      defaultValue={dateTime ? moment(dateTime) : null}
      onChange={handleDateTimeChange}
      onClose={handleDateTimeClose}
      format="YYYY-MM-DD HH:mm:ss"
    />
  );
};