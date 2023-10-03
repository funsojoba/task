import styled from "styled-components";





export const SectionOne = styled.div`
    display: flex;
    position: relative;

    @media only screen and (max-width:930px){
        height: 80vh;
    }
`

export const SectionOneText = styled.div`
    flex: 1;
    text-align: left;
    padding:50px;
    position: relative;
    @media only screen and (max-width:930px){
        padding: 20px;
    }
`

export const SectionOneImg = styled.div`
    flex: 1;
    padding: 50px;
    @media only screen and (max-width:930px){
        display: none;
    }
`

export const ImageDiv = styled.div`
    width: 500px;
`

export const Img = styled.img`
    width: 100%;
`

export const Quote = styled.div`
    background-color: #fff;
    padding: 2px 20px;
    border-radius: 4px;
    box-shadow: 0 10px 30px rgba(0,0,0,.03);
    position: absolute;
    bottom: 10px;
    left: 10px;
    @media only screen and (max-width:930px){
        bottom: 0;
    }
`


export const DezOne = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;`


export const DezTwo = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`
