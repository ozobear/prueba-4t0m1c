import { useState } from "react";
import { useMultiStepForm } from "../customHooks/useMultiStepForm";
import Astronaut from "../assets/astronaut-ramen.png";
import Icon from "../assets/Group 4014.png";
import FormWrapper from "./FormWrapper";
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
    const { isLastStep } = useMultiStepForm([])
    const [nameError, setNameError] = useState('')
    const [lastNameError, setLastNameError] = useState('')

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        if (value.length < 5) {
        setNameError('El nombre deberá tener mínimo 5 caracteres')
        } else {
        setNameError('')
        }
        updateFields({ name: value })
    }

    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        if (value.length < 5) {
        setLastNameError('Los apellidos deberán tener mínimo 5 caracteres')
        } else {
        setLastNameError('')
        }
        updateFields({ lastName: value })
    }

    return (
        <FormWrapper icon={Icon} title="Te queremos conocer">
        <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="form-control grid col-span-2">
            <p className="mt-10">Queremos saber que eres tú, por favor ingresa los siguientes datos:</p>
            <label>Nombre (s)</label>
            <input
            autoFocus
            required
            type="text"
            value={name}
            onChange={handleNameChange}
            />
            {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
            <label>Apellidos</label>
            <input
            required
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            />
            {lastNameError && <p style={{ color: 'red' }}>{lastNameError}</p>}
            <button type="submit">{isLastStep ? 'Enviar' : 'Continuar'}</button>
        </div>
        <div>
            <img src={Astronaut} alt="Astronaut eating ramen" className="lg:-mt-28" />
        </div>
        </div>
        </FormWrapper>
    )
}