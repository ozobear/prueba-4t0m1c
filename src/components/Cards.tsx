import "../styles/Cards.scss";
import Fig1 from "../assets/planetas.png";
import Fig2 from "../assets/idea.png";
import Fig3 from "../assets/moon.png";

export default function Cards() {
    return(
        <>
        <section id="cards" className="grid grid-cols-1 lg:grid-cols-3 px-10 lg:px-28 lg:my-20 gap-4 lg:gap-0">
            <div className="card bg-white rounded-xl">
                <img src={Fig1} alt="" />
                <hr />
                <h4>Explora</h4>
                <ul>
                    <li>Innovación y creación tecnológica</li>
                    <li>UI/UX</li>
                    <li>Innovación</li>
                </ul>                        
            </div>
            <div className="card active bg-[#fa4d09] rounded-xl">
                <img src={Fig2} alt="" />
                <hr />
                <h4>Imagina</h4>
                <ul>
                    <li>Estrategia Digital</li>
                    <li>Big Data & Analysis</li>
                    <li>Consultoría Tecnológica</li>
                    <li>Reducción de costos TI</li>
                </ul>            
            </div>
            <div className="card bg-white rounded-xl">
                <img src={Fig3} alt="" />
                <hr />
                <h4>Conquista</h4>
                <ul>
                    <li>Desarrollo Tecnológico a la medida</li>
                    <li>Ciberseguridad</li>
                    <li>Servicios de la Nube</li>
                
                </ul>
            </div>
        </section>
        </>
    )
}