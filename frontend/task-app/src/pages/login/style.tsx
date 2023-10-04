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
    position: relative;

`

export const ImageSide = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background: url("https://res.cloudinary.com/ddl2pf4qh/image/upload/v1696346124/tasky/h72ta1cub0omzg98niqy.jpg");
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


interface InfoProps {
    primary?: boolean
}


export const InfoMsg = styled.div<InfoProps>`
    position: absolute;
    top: 30px;
    border-radius: 10px;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px 15px;
    background: ${(props) => (props.primary ? "#00E5CC" : "#ffb5b5")}  ;

    small{
        color: ${(props) => (props.primary ? "#00574E" : "#4a0606")}  ;;
    }
`


export const Btn = styled.button`
    background-color: #060640;
    color: #fff;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin: 5px;

    &:hover {
        transform: scale(1.05);
    }
`
