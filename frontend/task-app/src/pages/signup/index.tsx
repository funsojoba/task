import { Wrapper, ImageSide, FormSide, MainVid, InputTag, FormWrapper } from "./style"

import { H3Tag } from "../../components/H3"

import { Button } from "../../components/Button"
import { NavBar } from "../../components/NavBar"


export const SignUnPage = ()=>{
    return <Wrapper>
        <NavBar />

        <MainVid>
            <ImageSide></ImageSide>
            <FormSide>
                <FormWrapper >
                    <H3Tag text="Sign Up"/>
                    <InputTag type="text" placeholder="username" />
                    <InputTag type="password" placeholder="password"/>
                    <Button primary btnText="Sign Up" />
                </FormWrapper>
            </FormSide>
        </MainVid>
    </Wrapper>
}
