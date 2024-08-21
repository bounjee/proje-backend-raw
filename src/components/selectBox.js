import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'gaziantep', label: 'Gaziantep' },
  { value: 'antalya', label: 'Antalya' },
  { value: 'istanbul', label: 'İstanbul' },
  { value: 'izmir', label: 'İzmir' },
];

const CustomSelectBox = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: '4px',
      padding: '4px',
      boxShadow: 'none',
      border: '1px solid #020f3f',
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: '4px',
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#ffffff' : '#020f3f',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#020f3f',
      fontWeight: '500',
    }),
  };

  return (
    <Select
      value={selectedOption}
      onChange={setSelectedOption}
      options={options}
      styles={customStyles}
      placeholder="Bir şehir seçiniz."
    />
  );
};

export default CustomSelectBox;
