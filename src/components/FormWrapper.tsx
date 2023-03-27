import { ReactNode } from "react";

type FormWrapperProps = {
    icon: string
    title: string
    children: ReactNode
}

export default function FormWrapper({ icon, title, children }: FormWrapperProps) {
    return(
        <>
        <h2 className="text-xl lg:text-4xl uppercase font-bold"><img className="inline" src={icon} alt="" /> {title}</h2>
        <div>{children}</div>
        </>
    )
}