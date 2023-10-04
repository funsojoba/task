import { Wrapper, ImageSide, FormSide, MainVid, InputTag, FormWrapper } from "./style"
import { H3Tag } from "../../components/H3"
import { Button } from "../../components/Button"
import { NavBar } from "../../components/NavBar"

import { useState } from "react"


export const LogInPage = ()=>{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    console.log(username, password)
    return <Wrapper>
        <NavBar />

        <MainVid>
            <ImageSide></ImageSide>
            <FormSide>
                <FormWrapper >
                    <H3Tag text="Log in"/>
                    <InputTag type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)} />
                    <InputTag type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <Button primary btnText="Log in"/>
                </FormWrapper>

            </FormSide>
        </MainVid>
    </Wrapper>
}
