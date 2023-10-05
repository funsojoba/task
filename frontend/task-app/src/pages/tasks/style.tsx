import styled from "styled-components"


export const DashNav = styled.div`
     background-color: #fff;
    padding: 2px 20px;
    border-radius: 4px;
    box-shadow: 0 10px 30px rgba(0,0,0,.03);
    display: flex;
    justify-content: space-between;
    align-items: center;
`


export const DashBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    position: relative;
`

export const FormWrapper = styled.div`
    min-width: 80%;
    background: #fff;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, .3);
    padding: 20px;
    border-radius: 20px;
    box-sizing: border-box;
    position: relative;
    `

export const Form = styled.form`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    `

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

export const InputTag = styled.input`
    box-sizing: border-box;
    padding: 15px;
    background-color: #ECF9FF;
    width: 100%;
    color: #000;
    border:none;
    border-radius: 10px;
    margin: 10px auto;
`

export const Label = styled.label`
    color: #ababab;
    text-align: left;
`

export const TextArea = styled.textarea`
    box-sizing: border-box;
    padding: 15px;
    background-color: #ECF9FF;
    width: 100%;
    color: #000;
    border:none;
    border-radius: 10px;
    margin: 10px auto;
`

export const Select = styled.select`
    box-sizing: border-box;
    padding: 15px;
    background-color: #ECF9FF;
    width: 100%;
    color: #000;
    border:none;
    border-radius: 10px;
    margin: 10px auto;
`

export const Arrow = styled.div`
    background: #060640;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

`

export const DeleteIcon = styled.div`
    background: #6A1219;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 10px;
    position: absolute;
    top: -10px;
    right: -10px;
    cursor: pointer;
    transition: all ease-in-out 300ms;
    &:hover {
        transform: scale(1.05);
    }
`
