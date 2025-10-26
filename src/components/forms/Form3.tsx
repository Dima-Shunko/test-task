import {useFormContext} from "../../context/FormContext";
import {CustomForm} from "../customs/CustomForm";
import {CustomSliderInput} from "../customs/CustomSliderInput";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

type Props = {
    onBack: () => void,
}

export const Form3 = ({onBack}: Props) => {
    const {data, errors, updateField, resetForm} = useFormContext();
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        updateField(e.target.name as any, e.target.value);
    };

    const handleBack = (e: React.FormEvent) => {
        e.preventDefault();
        onBack();
    };

    const handleConfirm = () => {
        setShowModal(false);
        resetForm();
        navigate('/form1');
    };

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('https://dummyjson.com/products/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: `${data.firstName} ${data.lastName}`,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit application');
            }

            setShowModal(true);
        } catch (err) {
            alert('Ошибка при отправке заявки. Попробуйте позже.');
        }
    };

    return (
        <>
            <CustomForm title={"Параметры займа"}>
                <CustomSliderInput
                    type={"range"}
                    label={"Сумма займа"}
                    name={"loanAmount"}
                    onChange={handleChange}
                    value={data.loanAmount}
                    isError={errors.loanAmount?.isError}
                    errorMessage={errors.loanAmount?.message}
                    isRequired
                    min="200"
                    max="1000"
                    step="100"
                />

                <CustomSliderInput
                    type={"range"}
                    label={"Срок займа"}
                    name={"loanTerm"}
                    onChange={handleChange}
                    value={data.loanTerm}
                    isError={errors.loanTerm?.isError}
                    errorMessage={errors.loanTerm?.message}
                    isRequired
                    min="10"
                    max="30"
                    step="1"
                />

                <div className="form-button-container">
                    <button type="submit" onClick={handleBack} className="form-button">
                        Назад
                    </button>
                    <button type="submit" onClick={handleSend} className="form-button">
                        Отправить
                    </button>
                </div>
            </CustomForm>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <p>
                            Поздравляем, {data.lastName} {data.firstName}. Вам одобрена ${data.loanAmount} на {data.loanTerm} дней.
                        </p>
                        <button
                            className="form-button"
                            onClick={handleConfirm}
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}