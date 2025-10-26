export type Gender = 'male' | 'female';

export interface FormData {
    // Form 1
    phone: string;
    firstName: string;
    lastName: string;
    gender: Gender | '';

    // Form 2
    workplace: string;
    address: string;

    // Form 3
    loanAmount: number;
    loanTerm: number;
}

export type ErrorInfo = {
    isError: boolean,
    message: string
}

export type FormErrors = {
    [K in keyof FormData]?: ErrorInfo;
};