import { FormData, FormErrors } from '../types';

const PHONE_REGEX = /^0\d{3} \d{3} \d{3}$/;

export const validateForm = (data: FormData, step: number): FormErrors => {
    const errors: FormErrors = {};

    if (step === 1) {
        if (!data.phone.trim() || !PHONE_REGEX.test(data.phone)) {
            errors.phone = {isError: true, message: 'Формат: 0XXX XXX XXX'};
        } else {
            errors.phone = {isError: false, message: ''};
        }

        if (!data.firstName.trim()) {
            errors.firstName = {isError: true, message: 'Обязательное поле'};
        } else {
            errors.firstName = {isError: false, message: ''};
        }

        if (!data.lastName.trim()) {
            errors.lastName = {isError: true, message: 'Обязательное поле'};
        } else {
            errors.lastName = {isError: false, message: ''};
        }

        if (!data.gender) {
            errors.gender = {isError: true, message: 'Выберите пол'};
        } else {
            errors.gender = {isError: false, message: ''};
        }
    }

    if (step >= 2) {
        if (!data.workplace.trim()) {
            errors.workplace = {isError: true, message: 'Обязательное поле'};
        } else {
            errors.workplace = {isError: false, message: ''};
        }

        if (!data.address.trim()) {
            errors.address = {isError: true, message: 'Обязательное поле'};
        } else {
            errors.address = {isError: false, message: ''};
        }
    }

    if (step >= 3) {
        if (data.loanAmount < 200 || data.loanAmount > 1000) {
            errors.loanAmount = {isError: true, message: 'От $200 до $1000'};
        } else {
            errors.loanAmount =  {isError: false, message: ''};
        }

        if (data.loanTerm < 10 || data.loanTerm > 30) {
            errors.loanTerm = {isError: true, message: 'От 10 до 30 дней'};
        } else {
            errors.loanTerm = {isError: false, message: ''};
        }
    }

    return errors;
};