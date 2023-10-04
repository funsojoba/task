import { Wrapper, ImageSide, FormSide, MainVid, InputTag, FormWrapper } from "./style"

import { H3Tag } from "../../components/H3"

import { Button } from "../../components/Button"
import { NavBar } from "../../components/NavBar"

import { signupAction } from "../../store/features/auth/signup"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector"
import { InfoMsg } from "../login/style"
import { Btn } from "../login/style"


export const SignUnPage = ()=>{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useAppDispatch();


    const {data, error, loading } = useAppSelector(state => state.signup)

    console.log(data, error, loading)

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(signupAction({ username, password }));
      };

    return <Wrapper>
        <NavBar />

        <MainVid>
            <ImageSide></ImageSide>
            {error && <InfoMsg><small>{error}</small></InfoMsg>}
            {data && <InfoMsg primary><small>{data.message}</small></InfoMsg>}

            <FormSide>
                <FormWrapper onSubmit={handleLogin}>
                    <H3Tag text="Sign Up"/>
                    <InputTag type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)} />
                    <InputTag type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <Btn type="submit">Sign Up</Btn>
                </FormWrapper>
            </FormSide>
        </MainVid>
    </Wrapper>
}
