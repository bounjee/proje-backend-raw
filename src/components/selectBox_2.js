import React, { useState } from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

const CustomDateRangePicker = ({ onDatesChange }) => {
  const [başlangıçTarihi, setBaşlangıçTarihi] = useState(null);
  const [bitişTarihi, setBitişTarihi] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <div>
      <DateRangePicker
        startDate={başlangıçTarihi}
        startDateId="start_date_id"
        endDate={bitişTarihi}
        endDateId="end_date_id"
        onDatesChange={({ startDate, endDate }) => {
          setBaşlangıçTarihi(startDate);
          setBitişTarihi(endDate);
          onDatesChange({ startDate, endDate });
        }}
        focusedInput={focusedInput}
        onFocusChange={focusedInput => setFocusedInput(focusedInput)}
        displayFormat="DD/MM/YYYY"
        isOutsideRange={day => moment().diff(day, 'days') > 0}
        startDatePlaceholderText="Başlangıç Tarihi"
        endDatePlaceholderText="Bitiş Tarihi"
      />
    </div>
  );
};

export default CustomDateRangePicker;