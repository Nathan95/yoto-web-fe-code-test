import React from 'react';

interface options {
  label: string;
  value: string;
}

type Select = {
  options: options[];
  datatestid: string;
  onChange: () => void;
  defaultOption: string;
  label?: string;
  id: string;
};

export const Select = ({
  options,
  onChange,
  id,
  datatestid,
  defaultOption,
  label,
}: Select) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select
      id={id}
        defaultValue=""
        data-testid={datatestid}
        onChange={onChange}>
        <option value="" disabled hidden>
          {defaultOption}
        </option>
        {options.map((option: any) => (
          <option
            key={option.label}
            data-testid="type-option"
            value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
