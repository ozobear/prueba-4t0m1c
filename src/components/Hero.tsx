import Astronaut from "../assets/group-4032.png"
import ButtonContact from "./ButtonContact"
import ScrollChevron from "../assets/scroll-to.png"

export default function Hero() {

    const handleClickScroll = () => {
        const element = document.getElementById('cards');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return(
        <>
        <section className="grid grid-cols-1 lg:grid-cols-2 p-10 text-center">
            <div className="mx-auto"><img src={Astronaut} alt="Imagen de Astronauta AtomicLabs" /></div>
            <div className="lg:py-28 lg:pl-20 pt-10 text-white text-3xl lg:text-6xl font-bold leading-15 text-center">Desarrolla todo<br/>
            <span className="text-[#fa4d09]">tu POTENCIAL</span><br />
            <span className="lg:text-5xl">dentro del equipo</span><br/> 
            <span className="text-[#fa4d09]">ATOMIC</span>LABS
            <ButtonContact />
            </div>
        </section>
        <section className="text-center">
            <button className="mx-auto text-white text-base" onClick={handleClickScroll}><img src={ScrollChevron} alt="" className="mx-auto" />Quiero saber más</button>
        </section>
        </>
    )
}