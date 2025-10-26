import React, { createContext, useContext } from 'react';
import { FormData, FormErrors } from '../types';

type FormContextType = {
    data: FormData;
    errors: FormErrors;
    workplaceOptions: string[];
    updateField: (field: keyof FormData, value: any) => void;
    validateStep: (step: number) => boolean;
    setErrors: React.Dispatch<React.SetStateAction<FormErrors>>;
    resetForm: () => void;
};

export const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) throw new Error('useFormContext must be used within FormProvider');
    return context;
};