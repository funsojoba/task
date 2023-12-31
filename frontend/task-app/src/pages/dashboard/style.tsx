import styled from "styled-components";



interface PriorityProps {
    priority: string
}


// Dashboard styling

export const DashNav = styled.div`
     background-color: #fff;
    padding: 2px 20px;
    border-radius: 4px;
    box-shadow: 0 10px 30px rgba(0,0,0,.03);
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Input = styled.input`
    background: #ECF9FF;
    padding:10px;
    border-radius: 10px;
    margin: 5px;
    border:none;
    box-shadow: inset 5px 5px 20px rgba(0,0,0,.3);
    color: #000;
`

export const Select = styled.select`
    background: #ECF9FF;
    padding:10px;
    border-radius: 10px;
    margin: 5px;
    border:none;
    color: #000;
`

export const DashBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    place-items: flex-start;

    a{
        text-decoration: none;
    }
    /* place-content: center; */
`



export const CardPriority = styled.div<PriorityProps>`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${(props)=> props.priority === 'high' ? '#FF4755' : props.priority === 'mid' ? '#FD8900' : '#00CAE5'};
    position: absolute;
    top: 0;
    left: 0;
`


export const CardStyle = styled.div`
    padding: 15px;
    background: #fff;
    border-radius: 10px;
    box-sizing: 0 8px 30px rgba(0,0,0,0.3);
    transition: all 100ms ease-in-out;
    width: 250px;
    text-align: left;
    margin: 5px;
    position: relative;
    &:hover{
        transform: translateY(-5px);
    }
`

export const CardHeader = styled.div`
    padding: 5px 0;
    border-bottom: solid 1px #ddd;
    display: flex;
    align-items: center;
    position: relative;
`

export const CardHeaderText = styled.div`
    padding:5px;
    flex:3
`


export const TaskTag = styled.small`
    display: inline-block;
    color: #005f92;
    padding: 3.5px 7px;
    background: #c3eaff;
    border-radius: 5px;
`

export const DelBtn = styled.div`
    width: 20px;
    height: 20px;
    border: solid 1px #93000B;
    color: #93000B;
    background-color: #fff;
    position: absolute;
    top: 5px;
    right: 5px;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`


export const TagInfo = styled.div`
    display: flex;
    justify-content: space-between;
`

export const TimeTag = styled.small`
    color: #4b4b66;
`
