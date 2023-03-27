import "../styles/global.scss"
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import People from "../assets/people.png";
import Arrow from "../assets/right-arrow.png";
import ButtonContact from "../components/ButtonContact";
import BlueSection from "../components/BlueSection";

export default function Home() {
    return(
        <>
        <Hero />
        <h1 className="px-5 lg:px-0 text-center text-white uppercase my-28 text-3xl lg:text-6xl font-bold">
        Somos el brazo derecho<br />
        <span className="text-[#fa4d09]">de la tecnología</span>
        </h1>
        <Cards />
        <p className="text-center text-white uppercase mt-32 mb-14 text-3xl lg:text-6xl font-bold">
        Te encantará<br />
        <span className="text-[#fa4d09]">trabajar con nosotros</span>
        </p>
        <div className="process px-5 lg:px-14 my-20">
            <img className="w-full" src={People} alt="" />
            <div className="grid mx-auto px-20">
                <p>Contratación remota</p>
                <img src={Arrow} alt="" />
                <p>Entrevista con el área de RH</p>
                <img src={Arrow} alt="" />
                <p>Prueba práctica</p>
                <img src={Arrow} alt="" />
                <p>Entrevista técnica</p>
            </div>
        </div>
        <ButtonContact />
        <p className="px-10 lg:px-0 text-center text-white uppercase mt-32 mb-14 text-5xl lg:text-6xl font-bold">
        ¿Por qué <span className="text-[#fa4d09]">atomic?</span>
        </p>
        <BlueSection />
        </>
    )
}