import Astronaut from "../assets/astronaut-moon.png";
import FormWrapper from "./FormWrapper";
import Icon from "../assets/Group 4024.png";
import { useMultiStepForm } from "../customHooks/useMultiStepForm";
import "../styles/ContactForm.scss";

type CodeData = {
    codeVerification: string
}

type CodeFormProps = CodeData & {
    updateFields: (fields: Partial<CodeData>) => void
}

export default function CodeVerificationForm({
    codeVerification,
    updateFields,
}: CodeFormProps) {
    const {step, isLastStep} = useMultiStepForm([]);

    return(
        <FormWrapper icon={Icon} title="Código de Verificación">
        <div className="form-control grid grid-cols-1 lg:grid-cols-3">
            <div className="grid col-span-2">
                <p className="mt-10">Te enviamos un SMS al número:</p>
                <small>Ingresa el código de verificación:</small>
                <label>Código de verificación</label>
                <input 
                    autoFocus 
                    required 
                    type="text"
                    value={codeVerification}
                    onChange={e => updateFields({ codeVerification: e.target.value })}
                />
                <button type="submit">{isLastStep ? "Enviar" : "Continuar"}</button>
                <p className="mt-10 text-base">¿No recibiste el código? <strong>Reenviar código</strong></p>
            </div>
            <div>
                <img src={Astronaut} alt="Astronaut floating over moon" className="lg:-mt-28" />
            </div>
        </div>
        </FormWrapper>
    )
}