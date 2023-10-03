import React from "react"
import { H3 } from "./style"


interface H3Props{
    text: string
}


export const H3Tag: React.FC<H3Props> = ({text}) => {
    return <H3>{text}</H3>
}
