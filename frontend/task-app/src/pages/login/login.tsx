import { Wrapper, ImageSide, FormSide, MainVid, InputTag, FormWrapper, InfoMsg, Btn } from "./style"
import { H3Tag } from "../../components/H3"
import { NavBar } from "../../components/NavBar"

import { useState } from "react"
import { useAppSelector } from "../../hooks/useTypedSelector"
import { useAppDispatch } from "../../hooks/useTypedSelector"
import { loginAction } from "../../store/features/auth/login"

import BarLoader from "react-spinners/ClipLoader";

export const LogInPage = ()=>{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useAppDispatch();


    const {data, error, loading } = useAppSelector(state => state.login)

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(loginAction({ username, password }));
      };

    return <Wrapper>
        <NavBar />

        <MainVid>

            <ImageSide></ImageSide>
            {error && <InfoMsg><small>{error}</small></InfoMsg>}
            {data && <InfoMsg primary><small>{data.message}</small></InfoMsg>}
            <FormSide>
                <FormWrapper onSubmit={handleLogin}>
                    <H3Tag text="Log in"/>
                    <InputTag type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)} />
                    <InputTag type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <Btn type="submit">{loading ? (<BarLoader color="#36d7b7" />) : "Log In"}</Btn>
                </FormWrapper>

            </FormSide>
        </MainVid>
    </Wrapper>
}
