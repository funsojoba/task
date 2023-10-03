import styled from "styled-components";

interface PriorityTagProps {
    priority?: string;
}

export const PriorityTag = styled.div<PriorityTagProps>`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: ${(props)=> props.priority === 'high' ? '#FF4755' : props.priority === 'mid' ? '#FD8900' : '#00CAE5'};
`
