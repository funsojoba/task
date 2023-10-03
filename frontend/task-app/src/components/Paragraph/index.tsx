import React from "react"
import { Pstyle } from "./style"


interface H1Props{
    text: string
}


export const PTag: React.FC<H1Props> = ({text}) => {
    return <Pstyle>{text}</Pstyle>
}
