import Logo from "../assets/LogotipoAtomic32_Blco.webp"
import { Link } from "react-router-dom"

export default function Header() {
    return(
        <>
        <div className="py-10 px-20">
            <Link to="/">
                <img src={Logo} alt="Logo Atomic32" />
            </Link>
        </div>
        </>
    )
}