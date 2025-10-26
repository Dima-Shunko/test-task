import {useFormContext} from "../../context/FormContext";
import {CustomInput} from "../customs/CustomInput";
import {CustomSelect} from "../customs/CustomSelect";
import {CustomForm} from "../customs/CustomForm";

type Props = {
    onNext: () => void,
}

const options = [
    {
        value: "male",
        label: "Мужской"
    },
    {
        value: "female",
        label: "Женский"
    }
];

export const Form1 = ({onNext}: Props) => {
    const {data, errors, updateField} = useFormContext();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        updateField(e.target.name as any, e.target.value);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 10) value = value.slice(0, 10);
        if (value.length === 1 && value !== '0') value = '0' + value;
        if (value.length > 0) value = '0' + value.slice(1);
        if (value.length > 4) value = value.slice(0, 4) + ' ' + value.slice(4);
        if (value.length > 8) value = value.slice(0, 8) + ' ' + value.slice(8);

        updateField('phone', value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <CustomForm onSubmit={handleSubmit} title="Личные данные">
            <CustomInput
                type={"tel"}
                errorMessage={errors.phone?.message}
                isError={errors.phone?.isError}
                label={"Телефон"}
                onChange={handlePhoneChange}
                placeholder={"0XXX XXX XXX"}
                value={data.phone}
                isRequired
            />

            <CustomInput
                type={"text"}
                name={"firstName"}
                errorMessage={errors.firstName?.message}
                isError={errors.firstName?.isError}
                label={"Имя"}
                onChange={handleChange}
                placeholder={"Введите имя"}
                value={data.firstName}
                isRequired
            />

            <CustomInput
                type={"text"}
                name={"lastName"}
                errorMessage={errors.lastName?.message}
                isError={errors.lastName?.isError}
                label={"Фамилия"}
                onChange={handleChange}
                placeholder={"Введите фамилию"}
                value={data.lastName}
                isRequired
            />

            <CustomSelect
                label={"Пол"}
                name={"gender"}
                errorMessage={errors.gender?.message}
                isError={errors.gender?.isError}
                onChange={handleChange}
                options={options}
                value={data.gender}
                placeholder={"Выберите пол"}
                isRequired
            />

            <div className="form-button--align-right">
                <button type="submit" className="form-button">
                    Далее
                </button>
            </div>
        </CustomForm>
    );
};