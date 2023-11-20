import React from 'react';

export interface TextInputTypes {
  placeholder: string;
  datatestid?: string;
  onChange: (args: any) => void;
  value: string;
  className?: string;
}

export const TextInput  = ({
  placeholder,
  datatestid,
  onChange,
  value,
  className,
}: TextInputTypes) => {
  return (
    <input
      name="input"
      type="text"
      placeholder={placeholder}
      data-testid={datatestid}
      onChange={onChange}
      value={value}
      className={className}
    />
  );
};

export default TextInput;
