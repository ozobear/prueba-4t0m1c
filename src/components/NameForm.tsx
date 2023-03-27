import Astronaut from "../assets/astronaut-ramen.png";
import FormWrapper from "./FormWrapper";
import { useMultiStepForm } from "../customHooks/useMultiStepForm";
import "../styles/ContactForm.scss";

type NameData = {
    name: string
    lastName: string
}

type NameFormProps = NameData & {
    updateFields: (fields: Partial<NameData>) => void
}

export default function NameForm({
    name,
    lastName,
    updateFields,
}: NameFormProps) {
    const {isLastStep} = useMultiStepForm([])

    return(
        <FormWrapper title="Te queremos conocer">
        <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="form-control grid col-span-2">
                <p>Queremos saber que eres tú, por favor ingresa los siguientes datos:</p>
                <label>Nombre(s)</label>
                <input 
                    autoFocus 
                    required 
                    type="text" 
                    value={name}
                    onChange={e => updateFields({ name: e.target.value })}
                />
                <label>Apellidos</label>
                <input 
                    required 
                    type="text" 
                    value={lastName} 
                    onChange={e => updateFields({ lastName: e.target.value })}
                />
                <button type="submit">{isLastStep ? "Enviar" : "Continuar"}</button>
            </div>
            <div>
                <img src={Astronaut} alt="Astronaut eating ramen" className="lg:-mt-28" />
            </div>
        </div>
        </FormWrapper>
    )
}