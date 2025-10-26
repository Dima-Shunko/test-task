import {useFormContext} from "../../context/FormContext";
import {CustomForm} from "../customs/CustomForm";
import {CustomSelect} from "../customs/CustomSelect";
import {CustomInput} from "../customs/CustomInput";
type Props = {
    onBack: () => void,
    onNext: () => void,
}

export const Form2 = ({onBack, onNext}: Props) => {
    const {data, errors, updateField, workplaceOptions} = useFormContext();
    const options = workplaceOptions.map((option) => ({value: option, label: option}));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        updateField(e.target.name as any, e.target.value);
    };

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    const handleBack = (e: React.FormEvent) => {
        e.preventDefault();
        onBack();
    };

    return (
        <CustomForm title={"Адрес и место работы"}>
            <CustomSelect
                label={"Место работы"}
                value={data.workplace}
                name={"workplace"}
                onChange={handleChange}
                options={options}
                isRequired
                placeholder={"Выберите местро работы"}
                errorMessage={errors.workplace?.message}
                isError={errors.workplace?.isError}
            />

            <CustomInput
                type={"text"}
                name={"address"}
                value={data.address}
                onChange={handleChange}
                placeholder={"Введите адрес"}
                label={"Адрес проживания"}
                errorMessage={errors.address?.message}
                isError={errors.address?.isError}
                isRequired
            />

            <div className="form-button-container">
                <button type="submit" onClick={handleBack} className="form-button">
                    Назад
                </button>
                <button type="submit" onClick={handleNext} className="form-button">
                    Далее
                </button>
            </div>
        </CustomForm>
    );
}