import React, { useState } from 'react';
import DatePicker from 'react-date-picker';

export default function DatePickerCalender() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      value={startDate}
      onChange={date => setStartDate(date)}
    />
  );
};