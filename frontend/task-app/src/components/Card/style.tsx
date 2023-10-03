import styled from "styled-components";




export const CardStyle = styled.div`
    padding: 15px;
    background: #fff;
    border-radius: 10px;
    box-sizing: 0 8px 30px rgba(0,0,0,0.3);
    transition: all 100ms ease-in-out;
    width: 250px;
    text-align: left;

    &:hover{
        transform: translateY(-5px);
    }
`

export const CardHeader = styled.div`
    padding: 5px 0;
    border-bottom: solid 1px #ddd;
`
