import {
    DashNav, Arrow,
    DashBody, FormWrapper,
    InputTag, Form, Label,
    InputWrapper, TextArea, Select  } from "./style"
import { InfoMsg } from "../login/style"

import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"


import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector"
import { useState } from "react"
import { Btn } from "../login/style"
import { Link } from "react-router-dom"

import { addTaskAction } from "../../store/features/tasks/addTask"

import { getTaskAction } from "../../store/features/tasks/getTaskSlice"



export const EditTaskPage = ()=>{
    const dispatch = useAppDispatch();
    const params = useParams();

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("")
    const [status, setStatus] = useState("")
    const [expiry_date, seteExpiryDate] = useState("")

    const {data, error, loading } = useAppSelector(state => state.getTask)

    const postData = { title, description, priority, status, expiry_date }

    console.log(params.id)
    useEffect(() => {
        dispatch(getTaskAction(params.id));
      }, [dispatch, params.id]);


      console.log("dada: ", data)
      console.log(data?.data)

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
                {/* {data && <InfoMsg primary><small>{data.message}</small></InfoMsg>} */}
                <Form >
                    <InputWrapper>
                        <Label>Title</Label>
                        <InputTag
                            placeholder={data?.data.title || "Title"}
                            type="text"
                            value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    </InputWrapper>

                    <InputWrapper>
                        <Label>Description</Label>
                        <TextArea
                            placeholder={data?.data.description || "Description"}
                            value={description} onChange={(e)=>setDescription(e.target.value)}
                        />
                    </InputWrapper>

                    <InputWrapper>
                        <Label>Priority</Label>
                        <Select name="priority" onChange={(e)=>setPriority(e.target.value)}>
                            <option>---</option>
                            <option selected={ data?.data.priority === "high"} value="high">high</option>
                            <option selected={ data?.data.priority === "mid"}  value="mid">mid</option>
                            <option selected={ data?.data.priority === "low"}  value="low">low</option>
                        </Select>
                    </InputWrapper>

                    <InputWrapper>
                        <Label>Status</Label>
                        <Select name="status" onChange={(e)=>setStatus(e.target.value)}>
                            <option>---</option>
                            <option selected={ data?.data.status === "todo"}  value="todo">todo</option>
                            <option  selected={ data?.data.status === "in_progress"}  >in progress</option>
                            <option  selected={ data?.data.status === "done"}  >done</option>
                        </Select>

                    </InputWrapper>
                    <InputWrapper>
                        <Label>Due date</Label>
                        <InputTag
                            type="date"
                            value={data?.data.expiry_date}
                            onChange={(e)=>seteExpiryDate(e.target.value)}  />
                    </InputWrapper>
                    <Btn type="submit">Submit</Btn>
                </Form>
            </FormWrapper>

        </DashBody>

    </div>
}
