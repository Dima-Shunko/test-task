import {BrowserRouter, Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import {useApplicationForm} from './hooks/useApplicationForm';
import {FormContext} from './context/FormContext';
import {Form1} from "./components/forms/Form1";
import './App.css';
import {Form2} from "./components/forms/Form2";
import {Form3} from "./components/forms/Form3";

const StepWrapper = () => {
    const form = useApplicationForm();
    const navigate = useNavigate();

    const goToStep = (step: number) => {
        if (step === 1) return '/form1';
        if (step === 2) return form.validateStep(1) ? '/form2' : '/form1';
        if (step === 3) return form.validateStep(2) ? '/form3' : '/form2';
        return '/';
    };

    return (
        <FormContext.Provider value={{...form, ...form}}>
            <Routes>
                <Route path="/form1" element={<Form1 onNext={() => navigate(goToStep(2))}/>}/>
                <Route path="/form2" element={<Form2 onBack={() => navigate('/form1')} onNext={() => navigate(goToStep(3))} />} />
                <Route path="/form3" element={<Form3 onBack={() => navigate('/form2')} />} />
                <Route path="*" element={<Navigate to="/form1"/>}/>
            </Routes>
        </FormContext.Provider>
    );
};

export const App = () => (
    <BrowserRouter>
        <StepWrapper/>
    </BrowserRouter>
);