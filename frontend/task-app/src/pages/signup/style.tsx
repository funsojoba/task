import styled from "styled-components";


export const Wrapper = styled.div`
    height: 80vh;
    `

export const MainVid = styled.div`
    display: flex;
    height: 100%;
    border-radius: 20px;
    background: #fff;
    box-shadow: 10px 10px 30px rgba(0,0,0,.03);
    margin-top: 20px;
    overflow: hidden;

`

export const ImageSide = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background: url("https://res.cloudinary.com/ddl2pf4qh/image/upload/v1696346514/tasky/t1ciuis9lct9cdghnxo5.jpg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom center;
    @media only screen and (max-width:750px){
        display: none;
    }
`

export const FormSide = styled.div`
    box-sizing: border-box;
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 40px;
`

export const FormWrapper = styled.form`
    width: 60%;
    text-align: left;
    @media only screen and (max-width:750px){
        width: 90%;
    }

`

export const InputTag = styled.input`
    padding: 15px;
    background-color: #ECF9FF;
    width: 100%;
    color: #000;
    border:none;
    border-radius: 10px;
    margin: 10px auto;
`
