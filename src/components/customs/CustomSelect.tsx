import React from "react";

type Props = {
    label: string;
    value: string;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string; label: string }[];
    placeholder?: string;
    isError?: boolean;
    errorMessage?: string;
    isRequired?: boolean;
}

export const CustomSelect = ({label, value, name, onChange, options, placeholder, isError, errorMessage, isRequired}: Props) => (
    <div className="input-wrapper">
        <label className="input-label">
            {label}
            {isRequired && <span className="required-indicator">*</span>}
        </label>
        <select
            value={value}
            name={name}
            onChange={onChange}
            aria-required={isRequired}
            className={`input-field input-field-select ${!value && "input-field-select-placeholder"} ${isError && 'input-field--error'}`}
        >
            {!value && <option value="" hidden disabled>{placeholder}</option>}
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
        <div className="input-error">
            {isError && errorMessage}
        </div>
    </div>
);
