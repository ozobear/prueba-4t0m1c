import { Link } from "react-router-dom"

export default function ButtonContact() {
    return(
        <>
        <button className="block text-base bg-white text-blue-900 mt-10 mx-auto py-2 px-10 text-2xl rounded-3xl">
            <Link to="contacto" className="hover:font-semibold hover:subpixel-antialiased font-medium">¡Quiero ser parte!</Link>
        </button>
        </>
    )
}