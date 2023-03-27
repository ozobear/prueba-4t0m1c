import Astronaut from "../assets/astronaut-moon.png";
import { useMultiStepForm } from "../customHooks/useMultiStepForm";
import FormWrapper from "./FormWrapper";
import "../styles/ContactForm.scss";

type PhoneData = {
    phoneNumber: string
}

type PhoneFormProps = PhoneData & {
    updateFields: (fields: Partial<PhoneData>) => void
}

export default function PhoneForm({
    phoneNumber,
    updateFields
}: PhoneFormProps) {
    const {isLastStep} = useMultiStepForm([]);

    return(
        <FormWrapper title="Valida tu Celular">
        <div className="form-control grid grid-cols-1 lg:grid-cols-3">
            <div className="grid col-span-2">
                <p>Necesitamos validar tu número para continuar</p>
                <small>Ingresa tu número a 10 digitos y te enviaremos un código SMS.</small>
                <label>Número de Celular</label>
                <input 
                    autoFocus 
                    required 
                    type="tel"
                    value={phoneNumber}
                    onChange={e => updateFields({ phoneNumber: e.target.value })}
                />
                <button type="submit">{isLastStep ? "Enviar" : "Continuar"}</button>
            </div>
            <div>
                <img src={Astronaut} alt="Astronaut floating over moon" className="lg:-mt-28"/>
            </div>
        </div>
        </FormWrapper>
    )
}