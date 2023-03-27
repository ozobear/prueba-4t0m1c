import Astronaut from "../assets/astronaut-moon.png"
import { useMultiStepForm } from "../customHooks/useMultiStepForm"
import FormWrapper from "./FormWrapper"
import "../styles/ContactForm.scss";

type CodeData = {
    code: string
}

type CodeFormProps = CodeData & {
    updateFields: (fields: Partial<CodeData>) => void
}

export default function CodeVerificationForm({
    code,
    updateFields
}: CodeFormProps) {
    const { isLastStep } = useMultiStepForm([])

    return(
        <FormWrapper title="Código de Verificación">
        <div className="form-control grid grid-cols-1 lg:grid-cols-3">
            <div className="grid col-span-2">
                <p>Te enviamos un SMS al número:</p>
                <small>Ingresa el código de verificación:</small>
                <label>Código de verificación</label>
                <input 
                    autoFocus 
                    required 
                    type="text"
                    value={code}
                    onChange={e => updateFields({ code: e.target.value })}
                />
                <button type="submit">{isLastStep ? "Enviar" : "Continuar"}</button>
                <p>¿No recibiste el código? <strong>Reenviar código</strong></p>
            </div>
            <div>
                <img src={Astronaut} alt="Astronaut floating over moon" className="lg:-mt-28" />
            </div>
        </div>
        </FormWrapper>
    )
}