import React from 'react';

type Props = {
    type: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder: string,
    isError?: boolean,
    errorMessage?: string,
    label: string,
    isRequired?: boolean,
    name?: string
}

export const CustomInput = ({type, value, onChange, placeholder, isError, errorMessage, label, isRequired, name}: Props) => (
    <div className="input-wrapper">
        <label className="input-label">
            {label}{isRequired && <span className="required-indicator">*</span>}
        </label>
        <input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className={`input-field ${isError ? 'input-field--error' : ''}`}
            name={name}
        />
        <div className="input-error">
            {isError && errorMessage}
        </div>
    </div>
);