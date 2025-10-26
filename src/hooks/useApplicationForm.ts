import {useEffect, useState} from 'react';
import {FormData, FormErrors} from '../types';
import {validateForm} from "../utils/utils";


const initialData: FormData = {
    phone: '',
    firstName: '',
    lastName: '',
    gender: '',
    workplace: '',
    address: '',
    loanAmount: 200,
    loanTerm: 10,
};

export const useApplicationForm = () => {
    const [data, setData] = useState<FormData>(initialData);
    const [errors, setErrors] = useState<FormErrors>({});
    const [workplaceOptions, setWorkplaceOptions] = useState<string[]>([]);

    useEffect(() => {
        if (workplaceOptions.length === 0) {
            fetch('https://dummyjson.com/products/category-list')
                .then(res => res.json())
                .then(setWorkplaceOptions)
                .catch(() => alert('Ошибка при получении "Мест работ". Попробуйте позже.'));
        }
    }, [workplaceOptions.length]);

    const updateField = (field: keyof FormData, value: any) => {
        setData(prev => ({...prev, [field]: value}));

        if (errors[field]) {
            setErrors(prev => ({...prev, [field]: {isError: false, message: ''}}));
        }
    };

    const validateStep = (step: number): boolean => {
        const newErrors = validateForm(data, step);
        setErrors(newErrors);

        return !Object.values(newErrors).some(
            (errorInfo) => errorInfo?.isError === true
        );
    };

    const resetForm = () => {
        setData(initialData);
        setErrors({});
    };

    return {
        data,
        errors,
        workplaceOptions,
        updateField,
        validateStep,
        setErrors,
        resetForm,
    };
};