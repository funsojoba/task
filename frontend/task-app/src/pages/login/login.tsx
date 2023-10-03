import { Wrapper, ImageSide, FormSide, MainVid, InputTag, FormWrapper } from "./style"

import { H3Tag } from "../../components/H3"

import { Button } from "../../components/Button"
import { NavBar } from "../../components/NavBar"


export const LogInPage = ()=>{
    return <Wrapper>
        <NavBar />

        <MainVid>
            <ImageSide></ImageSide>
            <FormSide>
                <FormWrapper >
                    <H3Tag text="Log in"/>
                    <InputTag type="text" placeholder="username" />
                    <InputTag type="password" placeholder="password"/>
                    <Button primary btnText="Log in" />
                </FormWrapper>
            </FormSide>
        </MainVid>
    </Wrapper>
}
