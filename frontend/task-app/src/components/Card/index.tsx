import { CardStyle, CardHeader } from "./style";

import { H3Tag } from "../H3";
import { Priority } from "../PriorityTag";





export const Card = () => {
    return (
        <CardStyle>
                <CardHeader>
                    <Priority priority="mid" />
                    <H3Tag text="Task Title"/>
                </CardHeader>

        </CardStyle>
 )
}
