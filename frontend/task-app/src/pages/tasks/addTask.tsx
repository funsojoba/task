import {
    DashNav, Arrow,
    DashBody, FormWrapper,
    InputTag, Form, Label,
    InputWrapper, TextArea, Select  } from "./style"
import { InfoMsg } from "../login/style"

import { useNavigate } from "react-router-dom"


import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector"
import { useState } from "react"
import { Btn } from "../login/style"
import { Link } from "react-router-dom"

import { addTaskAction } from "../../store/features/tasks/addTask"



export const AddTaskPage = ()=>{
    const dispatch = useAppDispatch();

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("")
    const [status, setStatus] = useState("")
    const [expiry_date, seteExpiryDate] = useState("")

    const {data, error, loading } = useAppSelector(state => state.addTask)

    const postData = { title, description, priority, status, expiry_date }


    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addTaskAction(postData));
      };

      console.log("dada: ", data)

      const navigate = useNavigate()

    return <div>
        <DashNav>
            <div>
                <Link to="/">
                    <img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1696273159/tasky/f1dzlfilnza7zgxhqkf6.svg" alt="tasky" />
                </Link>

            </div>
                <Arrow onClick={()=> navigate(-1)}>
                    <img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1696468193/tasky/idqtt1oarlylzxn7qa1f.svg" />
                </Arrow>
        </DashNav>

        <DashBody>
            <FormWrapper>
                {error && <InfoMsg><small>{error}</small></InfoMsg>}
                {data && <InfoMsg primary><small>{data.message}</small></InfoMsg>}
                <Form onSubmit={handleLogin}>
                    <InputWrapper>
                        <Label>Title</Label>
                        <InputTag
                            placeholder="title"
                            type="text"
                            value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    </InputWrapper>

                    <InputWrapper>
                        <Label>Description</Label>
                        <TextArea
                            placeholder="description"
                            value={description} onChange={(e)=>setDescription(e.target.value)}
                        />
                    </InputWrapper>

                    <InputWrapper>
                        <Label>Priority</Label>
                        <Select name="priority" onChange={(e)=>setPriority(e.target.value)}>
                            <option value="high">high</option>
                            <option value="mid">mid</option>
                            <option value="low">low</option>
                        </Select>
                    </InputWrapper>

                    <InputWrapper>
                        <Label>Status</Label>
                        <Select name="status" onChange={(e)=>setStatus(e.target.value)}>
                            <option value="todo">todo</option>
                            <option value="in_progress">in progress</option>
                            <option value="none">done</option>
                        </Select>

                    </InputWrapper>
                    <InputWrapper>
                        <Label>Due date</Label>
                        <InputTag
                            type="date"
                            value={expiry_date} onChange={(e)=>seteExpiryDate(e.target.value)}  />
                    </InputWrapper>
                    <Btn type="submit">Submit</Btn>
                </Form>
            </FormWrapper>

        </DashBody>

    </div>
}
