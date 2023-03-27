import { useState } from "react";
import { useMultiStepForm } from "../customHooks/useMultiStepForm";
import Astronaut from "../assets/astronaut-moon.png";
import FormWrapper from "./FormWrapper";
import Icon from "../assets/Group 4023.png"
import "../styles/ContactForm.scss";

type PhoneData = {
    phoneNumber: string;
};

type PhoneFormProps = PhoneData & {
    updateFields: (fields: Partial<PhoneData>) => void;
};

export default function PhoneForm({
    phoneNumber,
    updateFields,
}: PhoneFormProps) {
    const [error, setError] = useState('');
    const { isLastStep } = useMultiStepForm([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phoneNumber)) {
            setError("Tu número de teléfono debe tener 10 digitos");
        } else {
            setError('');
        }
        updateFields({ phoneNumber: value });
    };

    return (
        <FormWrapper icon={Icon} title="Valida tu Celular">
        <div className="form-control grid grid-cols-1 lg:grid-cols-3">
        <div className="grid col-span-2">
            <p className="mt-10">Necesitamos validar tu número para continuar</p>
            <small>Ingresa tu número a 10 digitos y te enviaremos un código SMS.</small>
            <label>Número de Celular</label>
            <input
            autoFocus
            required
            type="text"
            value={phoneNumber}
            onChange={handleInputChange}
            pattern="[0-9]{1,12}"
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit">{isLastStep ? "Enviar" : "Continuar"}</button>
        </div>
        <div>
            <img src={Astronaut} alt="Astronaut floating over moon" className="lg:-mt-28" />
        </div>
        </div>
        </FormWrapper>
    );
}