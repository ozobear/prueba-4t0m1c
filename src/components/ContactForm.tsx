import { FormEvent, useState } from "react";
import { useMultiStepForm } from "../customHooks/useMultiStepForm";
import CodeVerificationForm from "./CodeVerificationForm";
import NameForm from "./NameForm";
import PhoneForm from "./PhoneForm";
import TermsForm from "./TermsForm";
import "../styles/ContactForm.scss";

type FormData = {
    name: string
    lastName: string
    phoneNumber: string
    code: string
}

const INITIAL_DATA: FormData = {
    name: "",
    lastName: "",
    phoneNumber: "",
    code: "",
}

export default function ContactForm() {
    const [data, setData] = useState(INITIAL_DATA);
    function updateFields(fields: Partial<FormData>) {
        setData(prev => {
            return { ...prev, ...fields}
        })
    }

    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next} = useMultiStepForm([
        <NameForm {...data} updateFields={updateFields} />,
        <PhoneForm {...data} updateFields={updateFields} />,
        <CodeVerificationForm {...data} updateFields={updateFields} />,
        <TermsForm />
    ])

    function onSubmit(e: FormEvent) {
        e.preventDefault()
        if (!isLastStep) return next()
        alert("Hemos recibido tu solicitud")
    }

    return(
        <>
        <div className="form-container mx-5 lg:mx-44 my-5 min-h-[150vh] lg:min-h-[70vh]">
            <form onSubmit={onSubmit}>
                <div className="back-step">
                    {!isFirstStep && <button onClick={back}>Regresar</button>}
                </div>
                <div className="steps">{step}</div>
            </form>
        </div>
        </>
    )
}