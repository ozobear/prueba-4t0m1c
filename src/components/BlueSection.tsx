import "../styles/global.scss"
import "../styles/Table.module.css"
import Perk1 from "../assets/perk1.png"
import Perk2 from "../assets/perk2.png"
import Perk3 from "../assets/perk3.png"
import ButtonContact from "./ButtonContact"
import Table from "./Table"

export default function BlueSection() {
    return(
        <>
        <section className="blue-section grid grid-cols-1 lg:grid-cols-3 gap-x-28 bg-[#00609c] min-h-[80vh] lg:min-h-[50vh] px-16 lg:px-48 mt-44">
            <div className="perks">
                <img src={Perk1} alt="Astronaut designin" />
                <ul>
                    <li>Usamos las tecnologías más modernas</li>
                    <li>Innovamos y creamos proyectos retadores.</li>
                </ul>
            </div>
            <div className="perks">
                <img src={Perk2} alt="One guy using his pc" />
                <ul>
                    <li>¡Trabajamos en equipo rumbo al éxito!</li>
                    <li>No tenemos código de vestimenta.</li>
                </ul>
            </div>
            <div className="perks">
                <img src={Perk3} alt="Astronaut dancing" />
                <ul>
                    <li>Realizamos actividades para tu bienestar.</li>
                    <li>¡Tenemos un parque frente a la oficina!</li>
                </ul>
            </div>
        </section>
        <Table />
        <div className="py-12 mx-auto bg-[#00609c]">
        <ButtonContact />
        </div>
        </>
    )
}