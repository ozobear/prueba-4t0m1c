import LinkedIn from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";

export default function Footer() {
   
    let year = new Date().getFullYear();

    return(
    <>
    <footer className="grid sm:grid-cols-1 lg:grid-cols-2 p-5 lg:py-5 lg:px-20 bg-black text-white text-xl text-center font-bold">
        <div className="pt-2">
            <span>© {year} AtomicLabs. Todos los derechos reservados.</span>
        </div>
        <div className="mx-auto block lg:flex gap-x-10 sm:flex-col lg:flex-row lg:justify-end">
            <a href="" className="pt-2">Aviso de privacidad</a>
            <a href=""><img src={LinkedIn} alt="Logo Linkedin AtomicLabs"/></a>
            <a href="" className="pt-1"><img src={Twitter} alt="Logo Twitter AtomicLabs" /></a>
        </div>
    </footer>
    </>
   ) 
}