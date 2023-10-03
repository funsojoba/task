import { PriorityTag } from "./style";


interface PriorityProps {
    priority: string
}


export const Priority:React.FC<PriorityProps> = ({priority})=>{
    return <Priority priority={priority}/>
}
