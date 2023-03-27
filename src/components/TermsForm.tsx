import Astronaut from "../assets/astronaut-rubik.png";
import FormWrapper from "./FormWrapper";
import "../styles/ContactForm.scss";
import { useMultiStepForm } from "../customHooks/useMultiStepForm";

export default function TermsForm() {
    const { isLastStep } = useMultiStepForm([])

    return(
        <FormWrapper title="Términos y Condiciones">
        <div className="form-control grid grid-cols-1 lg:grid-cols-3">
            <div className="grid col-span-2">
                <p>Por favor revisa nuestros términos y condiciones para este servicio:</p>
                <small>Consulta Términos y Condiciones</small>
                <button type="submit">{isLastStep ? "Continuar" : "Enviar"}</button>
            </div>
            <div>
                <img src={Astronaut} alt="Astronaut with a rubik's cube in his head" className="lg:-mt-28" />
            </div>
        </div>
        </FormWrapper>
    )
}