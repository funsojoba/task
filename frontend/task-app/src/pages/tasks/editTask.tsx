import {
    DashNav, Arrow,
    DashBody, FormWrapper,
    InputTag, Form, Label, DeleteIcon,
    InputWrapper, TextArea, Select  } from "./style"
import { InfoMsg } from "../login/style"

import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"


import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector"
import { useState } from "react"
import { Btn } from "../login/style"
import { Link } from "react-router-dom"

import { deleteTaskAction } from "../../store/features/tasks/deleteTaskSlice"
import { editTaskAction } from "../../store/features/tasks/editTaskSlice"

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
    const id = params.id;
    const taskData = {title, description, priority, status, expiry_date }


    useEffect(()=>{
        dispatch(getTaskAction(id))
    }, [dispatch, id])

    const navigate = useNavigate();

    const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(editTaskAction({id, taskData}))
        navigate(-1)
    }

    const handleDelete = ()=>{
        dispatch(deleteTaskAction(id))
    }

    return (
        <div>
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
                <DeleteIcon onClick={handleDelete}>
                    <img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1696498751/tasky/theyd0taoazbijng8wri.svg"/>
                </DeleteIcon>
                {error && <InfoMsg><small>{error}</small></InfoMsg>}
                {/* {data && <InfoMsg primary><small>{data.message}</small></InfoMsg>} */}
                <Form onSubmit={handleEdit} >
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
                            value={ description} onChange={(e)=>setDescription(e.target.value)}
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
                        <Label>Due date {'->'} {data?.data.expiry_date}</Label>
                        <InputTag
                            type="date"
                            // value={data?.data.expiry_date}
                            value={expiry_date}
                            onChange={(e)=>seteExpiryDate(e.target.value)}  />
                    </InputWrapper>
                    <Btn type="submit">Submit</Btn>
                </Form>
            </FormWrapper>

        </DashBody>
        </div>
    )


    }
