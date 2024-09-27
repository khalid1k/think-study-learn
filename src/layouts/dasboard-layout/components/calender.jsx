import * as React from "react";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { styled } from "@mui/system";
//giving style to the calendar to set the required width and height
const StyledDateCalendar = styled(DateCalendar)({
  "&.MuiDateCalendar-root": {
    height: "400px",
    width: "240px",
  },
});
export default function DateCalendarValue() {
  const [value, setValue] = useState(dayjs("2022-04-17"));

  return (
    <div className="pt-8">
      {/* it is MUI component */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StyledDateCalendar />
      </LocalizationProvider>
    </div>
  );
}
