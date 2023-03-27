import { useMultiStepForm } from "../customHooks/useMultiStepForm";
import { useState } from "react";
import Modal from "react-modal";
import Astronaut from "../assets/astronaut-rubik.png";
import FormWrapper from "./FormWrapper";
import Icon from "../assets/Group 4025.png"
import "../styles/ContactForm.scss";

export default function TermsForm() {
    const { isLastStep } = useMultiStepForm([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [checked, setChecked] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    return(
        <FormWrapper icon={Icon} title="Términos y Condiciones">
            <div className="form-control grid grid-cols-1 lg:grid-cols-3">
                <div className="grid col-span-2">
                    <p className="mt-10">Por favor revisa nuestros términos y condiciones para este servicio:</p>
                    <small onClick={openModal} className="cursor-pointer font-bold mt-5 lg:-mt-12">Consulta Términos y Condiciones</small>
                    <div>
                    <label className="-mt-40">
                        <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} /> Acepto los términos y condiciones
                    </label>
                    </div>
                    <button type="submit">{isLastStep ? "Continuar" : "Enviar"}</button>
                </div>
                <div>
                    <img src={Astronaut} alt="Astronaut with a rubik's cube in his head" className="lg:-mt-28" />
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Términos y Condiciones Modal"
                className="my-40 mx-5 lg:mx-40 bg-slate-50 p-5 rounded-xl"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.75)'
                    }
                }}
            >
                <div className="flex flex-col text-justify mt-5">
                    <h3 className="text-center font-bold">Finalidad del tratamiento de Datos Personales recabados por Atomic32</h3>
                    <p className="mt-10 px-6">Para llevar a cabo las finalidades descritas en el presente Aviso de Privacidad, utilizaremos datos personales de identificación, contacto y laborales.<br />
                    Los datos personales que Atomic32 recaba de usted, serán utilizados para las siguientes finalidades que son necesarias para ofrecer nuestros servicios:<br />
                    Atomic32 requiere utilizar sus datos personales para incluirlo en la base de datos que utilizamos para prestar los servicios de reclutamiento, selección de personal, administración de nómina y prestación de servicios.</p>
                <button className="font-bold text-red-500 text-xl mt-5 text-center" onClick={closeModal}>Cerrar</button>
                </div>
            </Modal>
        </FormWrapper>
    )
}