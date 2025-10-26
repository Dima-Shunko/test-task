import React from "react";

type Props = {
    type: string,
    value: number,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    isError?: boolean,
    errorMessage?: string,
    label: string,
    isRequired?: boolean,
    name?: string,
    min?: string,
    max?: string
    step?: string
}

export const CustomSliderInput = ({type, value, onChange, isError, errorMessage, label, isRequired, name, min, max, step}: Props) => (
    <div className="input-wrapper">
        <label className="input-label">
            {`${label}: ${value}`}{isRequired && <span className="required-indicator">*</span>}
        </label>
        <input
            type={type}
            min={min}
            max={max}
            step={step}
            name={name}
            value={value}
            onChange={onChange}
        />
        <div className="input-error">
            {isError && errorMessage}
        </div>
    </div>
);