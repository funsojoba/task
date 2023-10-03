import styled from "styled-components";



interface SideBarProps {
    active: boolean;
}


export const SideBarStyle = styled.div<SideBarProps>`
    background: #060640;
    height: 100vh;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transform: translateX(${(props) => props.active ? '0' : '-100%'});
`
