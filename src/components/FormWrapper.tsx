import { ReactNode } from "react";

type FormWrapperProps = {
    title: string
    children: ReactNode
}

export default function FormWrapper({ title, children }: FormWrapperProps) {
    return(
        <>
        <h2 className="text-4xl uppercase font-bold">{title}</h2>
        <div>{children}</div>
        </>
    )
}