import React from "react"
import { H1 } from "./style"


interface H1Props{
    text: string
}


export const H1Tag: React.FC<H1Props> = ({text}) => {
    return <H1>{text}</H1>
}
